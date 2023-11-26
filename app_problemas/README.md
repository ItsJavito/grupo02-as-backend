# Microservice 4

This is the fourth microservice in our project. It is a standalone service that performs a specific function in our application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker installed on your machine to build and run the Docker image.

### Installing

To install the dependencies, navigate to the `microservice-4` directory and run:

```
npm install
```

### Building the Docker Image

To build the Docker image, navigate to the `microservice-4` directory and run:

```
docker build -t microservice-4 .
```

### Running the Microservice

To run the microservice, you can start the Docker container with:

```
docker run -p 4000:4000 microservice-4
```

The microservice will be available at `http://localhost:4000`.

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