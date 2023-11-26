# Microservice 3

This is the third microservice of our project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker installed on your machine to build and run the Docker image.

### Installing

To install the dependencies, navigate to the `microservice-3` directory and run:

```
npm install
```

### Running the service

To run the service, you can use Docker. Build the Docker image by running:

```
docker build -t microservice-3 .
```

Then, run the Docker image by running:

```
docker run -p 3000:3000 microservice-3
```

The service will be available at `http://localhost:3000`.

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
* etc