# Microservices Project

This project contains five microservices, each with its own Dockerfile, source code, dependencies, and documentation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker installed on your machine. You can download Docker from [here](https://www.docker.com/products/docker-desktop).

### Installing

To install the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/microservices-project.git
```

2. Navigate to each microservice directory and build the Docker image:

```bash
cd microservice-1
docker build -t microservice-1 .
```

Repeat the above steps for `microservice-2`, `microservice-3`, `microservice-4`, and `microservice-5`.

### Running the Microservices

To run a microservice, use the following command:

```bash
docker run -p 8080:8080 microservice-1
```

Replace `microservice-1` with the name of the microservice you want to run. The microservice will be accessible at `http://localhost:8080`.

## Built With

* [Node.js](https://nodejs.org/) - The runtime used
* [Docker](https://www.docker.com/) - Used for containerization

## Authors

* **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc