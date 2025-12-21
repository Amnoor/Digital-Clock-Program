# Digital Clock

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Pulls](https://img.shields.io/docker/pulls/amnoorbrar/digital-clock)](https://hub.docker.com/r/amnoorbrar/digital-clock)
[![GitHub last commit](https://img.shields.io/github/last-commit/Amnoor/Digital-Clock-Program.svg?style=flat)](https://github.com/Amnoor/Digital-Clock-Program/commits/main)

A simple and elegant digital clock web application, containerized with Docker and ready for deployment. It displays the current time, updated every second, against a visually appealing blurred background.

<br>
<p align="center">
  <img src="assets/clock-icon.svg" alt="Digital Clock Icon" width="500"/>
</p>
<br>

## **Table Of Contents**

- [Digital Clock](#digital-clock)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Running Locally](#running-locally)
  - [Contribution](#contribution)
  - [Acknowledgement](#acknowledgement)
  - [License](#license)

## About The Project

This project is a minimalist digital clock built with fundamental web technologies. It is designed to be lightweight and easily portable, thanks to its Docker containerization and an automated CI/CD pipeline for efficient releases.

### Built With

*   HTML5
*   CSS3
*   JavaScript (ES6)
*   Docker
*   Nginx
*   DockerSlim
*   GitHub Actions

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Docker installed on your machine.
*   [Docker](https://www.docker.com/get-started)

### Running Locally

You can run this application in two ways:

**Option 1: Using the Pre-built Docker Image**

1.  **Pull the Docker image from Docker Hub:**
    ```sh
    docker pull amnoorbrar/digital-clock
    ```
2.  **Run the Docker container:**
    ```sh
    docker run --rm -itd -p 8080:80 amnoorbrar/digital-clock
    ```
3.  **Access the application:**\
    Open your browser and navigate to `http://localhost:8080`.

**Option 2: Building from Source**

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Amnoor/Digital-Clock-Program.git
    cd Digital-Clock-Program
    ```
2.  **Build the Docker image:**
    ```sh
    docker build -t digital-clock .
    ```
3.  **Run the container:**
    ```sh
    docker run --rm -p 8080:80 digital-clock
    ```
4.  **Access the application:**\
    Open your browser and navigate to `http://localhost:8080`.

## Contributing

Contributions are welcome! Please follow this workflow to ensure a smooth process.

1.  **Fork the Repository:** Start by forking the project to your own GitHub account.

2.  **Branching Strategy:**
    *   Create a `develop` branch from `main` if it doesn't already exist in your fork.
    *   Create a new branch for your changes *from the `develop` branch*. Please name it according to its purpose (e.g., `feature/your-feature`).

3.  **Commit and Merge to `develop`:** After making your changes, commit them and merge your feature branch into your fork's `develop` branch.

4.  **Update Acknowledgement:** To get credit for your work, create another branch from `develop` named `docs/acknowledgement`. Add your name and a link to your GitHub profile under the **Acknowledgement** section. Merge this branch into your `develop` branch as well.

5.  **Create a Release Branch:** Once all your changes are in your `develop` branch, create a new branch from it. Name this branch following the pattern `release/v*` (for example, `release/v1.2.3`).

6.  **Submit the Final Pull Request:** Create the final pull request to merge your new `release/v*` branch into the original repository's `main` branch.

7.  **Wait for Review:** The project owner will review your changes, provide feedback, and merge your contribution.

## Acknowledgement

A big thank you to everyone who has contributed to this project.

*   **Project Owner:** [Amnoor Brar](https://github.com/Amnoor)
*   **Contributors:**
    <!-- Add your name here when you contribute! -->
    <!-- In this format -->
    <!-- "- [GitHub Name](GitHub Profile Link)" -->

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.
