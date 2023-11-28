#!/bin/sh

# Espera a que Kong esté listo
while ! nc -z kong 8001; do   
  sleep 1
done

# configuracion del juez
# load - balancer 
curl -i -X POST \
  --url http://kong:8001/upstreams/ \
  --data 'name=juez-upstream'

curl -i -X POST \
  --url http://kong:8001/upstreams/juez-upstream/targets \
  --data 'target=microservice-juez:8083' \
  --data 'weight=50'

curl -i -X POST \
  --url http://kong:8001/upstreams/juez-upstream/targets \
  --data 'target=microservice-juez2:8084' \
  --data 'weight=50'

curl -i -X POST \
  --url http://kong:8001/services/ \
  --data 'name=microservice-juez' \
  --data 'url=http://juez-upstream'

curl -i -X POST \
  --url http://kong:8001/services/microservice-juez/routes \
  --data 'paths[]=/juez'


# Configura los microservicios
curl -i -X POST \
  --url http://kong:8001/services/ \
  --data 'name=microservice-usuarios' \
  --data 'url=http://microservice-usuarios:8080'

curl -i -X POST \
  --url http://kong:8001/services/ \
  --data 'name=microservice-problemas' \
  --data 'url=http://microservice-problemas:8081'

curl -i -X POST \
  --url http://kong:8001/services/ \
  --data 'name=microservice-concurso' \
  --data 'url=http://microservice-concurso:8082'

# Configura la ruta para los microservicios
curl -i -X POST \
  --url http://kong:8001/services/microservice-usuarios/routes \
  --data 'paths[]=/usuarios'

curl -i -X POST \
  --url http://kong:8001/services/microservice-problemas/routes \
  --data 'paths[]=/problemas'

curl -i -X POST \
  --url http://kong:8001/services/microservice-concurso/routes \
  --data 'paths[]=/concurso'

curl -i -X POST \
  --url http://kong:8001/services/microservice-juez/routes \
  --data 'paths[]=/juez'


# Add rate limiting for microservice-usuarios
curl -i -X POST \
  --url http://kong:8001/services/microservice-usuarios/plugins \
  --data 'name=rate-limiting' \
  --data 'config.minute=100' \
  --data 'config.policy=local'

# Add rate limiting for microservice-problemas
curl -i -X POST \
  --url http://kong:8001/services/microservice-problemas/plugins \
  --data 'name=rate-limiting' \
  --data 'config.minute=100' \
  --data 'config.policy=local'

# Add rate limiting for microservice-concurso
curl -i -X POST \
  --url http://kong:8001/services/microservice-concurso/plugins \
  --data 'name=rate-limiting' \
  --data 'config.minute=100' \
  --data 'config.policy=local'

# Add rate limiting for microservice-juez
curl -i -X POST \
  --url http://kong:8001/services/microservice-juez/plugins \
  --data 'name=rate-limiting' \
  --data 'config.minute=100' \
  --data 'config.policy=local'

################################## load balancer

