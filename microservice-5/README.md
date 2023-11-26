# Microservice 5

This is the fifth microservice of our project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker installed on your machine to build and run the Docker image.

### Installing

To install the dependencies, navigate to the `microservice-5` directory and run:

```
npm install
```

### Building the Docker Image

To build the Docker image, navigate to the `microservice-5` directory and run:

```
docker build -t microservice-5 .
```

### Running the Microservice

To run the microservice, run:

```
docker run -p 5005:5005 microservice-5
```

The microservice will be available at `http://localhost:5005`.

## Running the Tests

To run the tests, navigate to the `microservice-5` directory and run:

```
npm test
```

## Built With

* [Node.js](https://nodejs.org/) - The runtime used
* [Express](https://expressjs.com/) - The web framework used
* [Docker](https://www.docker.com/) - Used for containerization

## Authors

* **Your Name** - *Initial work* - [YourGithubUsername](https://github.com/YourGithubUsername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc.