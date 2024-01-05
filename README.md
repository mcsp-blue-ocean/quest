# Unlock the Code: Transform Your Future with Quest!

Visit out site here: https://quest-81n8.onrender.com/
or here: https://victorious-plant-0d9bddc10.4.azurestaticapps.net/

## Contributors

- [Scott Shannon](https://github.com/orgs/shannonscotta) [Project Manager]
- [Greg Pappas](https://github.com/gnprwx) [UI/UX Designer]
- [Blaise Pascual](https://github.com/AGI-CEO) [Architecture Owner]
- [John Gordinier](https://github.com/JohnGordinier) [Software Engineer]
- [Mitchell Keo](https://github.com/mitchellnkeo) [Software Engineer]
- [Mark Northup](https://github.com/mnorthup28) [Software Engineer]
- [Quinn Kajiwara](https://github.com/kajiwara12) [Software Engineer]
- [Ethan Berkebile](https://github.com/ethanberke) [Software Engineer]

## Project Overview

Welcome to our culminating project for Operation Level Up by Galvanize! This project embodies the collective effort of our eight-member team, showcasing the joint effort of our learning journey through the Galvanize curriculum.

### Collaborating for Real-Life Impact

In this endeavor, we've embraced a real-world scenario. We engaged with a nontechnical stakeholder who shared their vision for the appearance and functionality of an application/website. By leveraging our acquired skills in various languages and libraries from the Operation Level Up Curriculum, supplemental materials, and more, we've woven together a comprehensive solution that breathes life into this vision.

### A Fusion of Learning and Application

Our project is a testament to the fusion of theoretical knowledge and practical application. It's a full-stack embodiment of our expertise in different technologies, demonstrating the depth of our learning journey at Galvanize.

### Tech Stack

![JavaScript](https://img.icons8.com/color/48/000000/javascript.png) JavaScript ES6
![HTML](https://img.icons8.com/color/48/000000/html-5.png) HTML
![CSS](https://img.icons8.com/color/48/000000/css3.png) CSS
![React](https://img.icons8.com/color/48/000000/react-native.png) React
![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) Node.js
![Express](https://img.icons8.com/color/48/000000/nodejs.png) Express
![Tailwind CSS](https://img.icons8.com/color/48/000000/tailwind-css.png) Tailwind CSS

## Problem Statement

As newcomers to Full Stack Development, students are inundated with a wealth of information encompassing various languages, concepts, vocabulary, data structures, and algorithms. This extensive array of knowledge often leads to the challenge of navigating through numerous articles and videos to find solutions to seemingly simple questions.

## Our Solution

### Searchable AI Chatbox

Empowered by AI, our platform incorporates a searchable chatbox. This functionality enables users to ask specific questions and receive concise answers directly, eliminating the need to comb through extensive content. It streamlines learning by delivering targeted responses efficiently.

### Cheat Sheet Feature

Our platform offers a categorized cheat sheet encompassing multiple topics. This feature serves as a quick reference, providing students with easy access to commands in Command Line Interface (CLI), Postgresql, Node.js, and Git. It streamlines the search process for crucial commands and concepts.

## Anticipated Technical Challenges

As we embark on this project, we anticipate several technical challenges that demand thoughtful consideration and strategic solutions. Here are the specific challenges we foresee:

### Learning and Implementing Single-Factor Authentication

Integrating a secure single-factor authentication system introduces challenges related to both learning and implementation. We'll need to delve into authentication mechanisms, decide on an appropriate approach, and ensure its effective integration into our application. Crafting a secure and user-friendly authentication process is paramount, requiring a thorough understanding of authentication protocols and best practices.

### Tailoring the AI Chatbox for Full Stack Development

While leveraging AI for the chatbox feature, a key challenge is tailoring its responses specifically to the needs of Full Stack Development. We aim to go beyond a generic chatbot by fine-tuning the AI model to understand and respond to queries related to languages, frameworks, and development processes. This challenge involves customizing the underlying model to provide contextually relevant information for our target audience.

## Unforeseen Technical Challenges

## Lessons Learned from Agile, CI/CD, Testing

- Deploying the application early in the development process enables continuous monitoring of bugs, allowing for proactive issue identification and resolution.

- Regularly integrating changes into the shared repository helps mitigate potential code conflicts among team members working on the same ticket. This practice encourages frequent pulls from commits, promoting a collaborative and conflict-free development environment.

- The choice of deployment platform plays a crucial role in project success. While Microsoft Azure was initially selected, cost considerations led to a reassessment. Opting for platforms like Render, especially for smaller projects with less demanding specs, can be more cost-effective and efficient.

- Recognize external constraints, like paywalls, and be prepared to adapt. Choosing deployment solutions that align with project requirements and budget constraints is essential for successful production deployment.

<h2 align="center">
  Video Demo
  </h2>

<p align="center">
  <video src="images/demo.mp4" width="640" height="480" controls />
</p>

## Required Research

## Future Features

## Building The Application

The following steps will ensure the proper setup and execution of the application in your local development environment.

- Clone the repository to your local machine using the following command:
  - git clone <repository-url>
- Navigate to the project directory and launch the application in a development environment on your local machine.
- Install the required dependencies by running the following command in the terminal:
  - npm install
- Create a .env file in the root of the project and fill out the provided .env template with the necessary configuration settings.
- Use the migration.sql file to create the necessary database schema by running the following command in the terminal:
  - psql -U <your-username> -d <your-database-name> -a -f migration.sql
- Populate the database with sample data using the seed.sql file:
  - psql -U <your-username> -d <your-database-name> -a -f seed.sql
- Initiate the development environment by running the following command in the terminal:
  - npm run dev
