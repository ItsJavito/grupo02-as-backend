# Microservice 1

This is the first microservice of our application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Docker installed on your machine.

### Installing

To install the microservice, you need to build the Docker image. Navigate to the `microservice-1` directory and run the following command:

```
docker build -t microservice-1 .
```

This will create a Docker image named `microservice-1`.

### Running the microservice

To run the microservice, use the following command:

```
docker run -p 8080:8080 microservice-1
```

This will start the microservice and expose it on port 8080 of your machine.

## Built With

* [Node.js](https://nodejs.org/) - The runtime used
* [Express.js](https://expressjs.com/) - The web framework used

## Authors

* **Your Name** - *Initial work* - [YourGithubUsername](https://github.com/YourGithubUsername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc.