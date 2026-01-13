# Contributing to Digital Clock

Thank you for your interest in contributing to the Digital Clock project! We welcome contributions from the community and appreciate your time and effort in helping improve this project.

## Table Of Contents

- [Contributing to Digital Clock](#contributing-to-digital-clock)
  - [Getting Started](#getting-started)
  - [Branching Strategy](#branching-strategy)
    - [Branch Types](#branch-types)
    - [Branch Naming Conventions](#branch-naming-conventions)
  - [Contribution Workflow](#contribution-workflow)
  - [Commit Message Guidelines](#commit-message-guidelines)
    - [Format](#format)
    - [Types](#types)
    - [Examples](#examples)
  - [Pull Request Process](#pull-request-process)
    - [PR Description Template](#pr-description-template)
    - [Review Process](#review-process)
  - [Code of Conduct](#code-of-conduct)
  - [Questions?](#questions)

## Getting Started

Before you begin contributing, please ensure you have:

- A GitHub account
- Git installed on your local machine
- Docker installed (for testing containerized builds)
- Familiarity with HTML5, CSS3, and JavaScript (ES6)

## Branching Strategy

We follow a structured branching strategy to maintain code quality and organization:

### Branch Types

- `main`: Production branch containing stable releases only
- `develop`: Development branch for integrating features before release
- `feature/*`: New features (e.g., `feature/new-time-format`)
- `bugfix/*`: Bug fixes (e.g., `bugfix/fix-timezone-issue`)
- `refactor/*`: Code improvements (e.g., `refactor/optimize-update-logic`)
- `docs/*`: Documentation updates (e.g., `docs/update-readme`)
- `release/*`: Release preparation (e.g., `release/v1.2.0`)

### Branch Naming Conventions

Use descriptive, kebab-case names that clearly indicate the purpose. examples:

- `feature/add-24-hour-format`
- `bugfix/fix-mobile-display`
- `refactor/improve-logging`
- `docs/update-installation-guide`

## Contribution Workflow

1. **Fork the Repository**\
    Start by forking the Digital Clock repository to your own GitHub account.
2. **Clone Your Fork**
    ```bash
    git clone https://github.com/YOUR_USERNAME/Digital-Clock-Program.git
    cd Digital-Clock-Program
    ```
3. **Create the Develop Branch**\
    If it doesn't already exist in your fork:
    ```bash
    git checkout -b develop main
    ```
4. **Create Your Feature Branch**\
    Create a new branch from `develop`:
    ```bash
    git checkout develop
    git pull origin develop
    git checkout -b feature/your-feature-name
    ```
5. **Make Your Changes**\
    Implement your feature or fix following the project's coding    standards:
    - Write clean, readable code with appropriate comments
    - Follow existing code formatting and structure
    - Test your changes thoroughly
    - Ensure the application works as expected
6. **Test Your Changes**\
    Build and test the Docker container locally:
    ```bash
    docker build -t digital-clock-test .
    docker run --rm -p 8080:80 digital-clock-test
    ```
    Access `http://localhost:8080` to verify your changes.
7. **Commit Your Changes**\
    Use clear, descriptive commit messages:
    ```bash
    git add .
    git commit -m "feat: add 24-hour time format option"
    ```
8. **Merge to Your Develop Branch**
    ```bash
    git checkout develop
    git merge feature/your-feature-name
    ```
9. **Add Acknowledgement**\
    To receive credit for your contribution:
    ```bash
    git checkout develop
    git checkout -b docs/acknowledgement
    ```
    Edit the `README.md` file and add your information under the Acknowledgement section:
    ```markdown
    *   **Contributors:**
        - [Your Name](https://github.com/your-username)
    ```
    Commit and merge:
    ```bash
    git add README.md
    git commit -m "docs: add contributor acknowledgement"
    git checkout develop
    git merge docs/acknowledgement
    ```
10. **Create a Release Branch**\
    Once all changes are ready in `develop`:
    ```bash
    git checkout -b release/v1.2.3 develop
    ```
    The version number should follow Semantic Versioning:
    - MAJOR: Breaking changes
    - MINOR: New features (backward compatible)
    - PATCH: Bug fixes (backward compatible)
11. **Push to Your Fork**
    ```bash
    git push origin release/v1.2.3
    ```
12. **Create a Pull Request**\
    1. Go to the original Digital Clock repository on GitHub
    2. Click "New Pull Request"
    3. Select your fork's `release/v1.2.3` branch to merge into the original repository's `main` branch
    4. Fill out the pull request template with:
        - **Summary:** Brief description of your changes
        - **Files Changed:** List of modified files
        - **Key Changes:** Detailed explanation of what changed
        - **What To Verify:** Testing instructions for reviewers
13. **Wait for Review**\
    The project owner will:
    - Review your code
    - Provide feedback or request changes
    - Merge your contribution once approved

## Commit Message Guidelines

Use conventional commit messages for clarity:

### Format

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring without feature changes
- `docs`: Documentation updates
- `style`: Code formatting (no functional changes)
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
feat: add dark mode toggle
fix: correct AM/PM display for midnight
refactor: extract logging into separate module
docs: update installation instructions
```

## Pull Request Process

### PR Description Template

Your pull request should include these four sections:

- **Summary**\
    Provide a concise overview of what your PR accomplishes and why it's needed.
- **Files Changed**\
    List all files that were modified, added, or removed.
- **Key Changes**\
    Detail the specific changes made in each file and explain the reasoning behind them.
- **What To Verify**\
    Provide clear testing instructions for reviewers to validate your changes.

### Review Process

1. All PRs require review by the project owner
2. Address any feedback or requested changes promptly
3. Keep discussions professional and constructive
4. Once approved, your PR will be merged into `main`

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. By participating in this project, you agree to:

- Be respectful and considerate in all interactions
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what is best for the community and project
- Show empathy towards other community members

Unacceptable behavior includes harassment, discriminatory language, or any form of disrespectful conduct. If you experience or witness such behavior, please report it to the project maintainer.

## Questions?

If you have any questions about contributing, feel free to:

- Open an issue with the `question` label
- Reach out to the project maintainer: [Amnoor Brar](https://github.com/Amnoor/)

Thank you for contributing to Digital Clock!