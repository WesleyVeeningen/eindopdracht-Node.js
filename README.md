# Express Web Application Documentation

*## Introduction

This document serves as documentation for the Express web application implemented in `app.js`. The application is designed to showcase basic routing, form handling, and dynamic rendering using EJS templates.

## Dependencies

- **Express**: [Express](https://www.npmjs.com/package/express) is a fast, unopinionated, minimalist web framework for Node.js.
  
- **Body Parser**: [Body Parser](https://www.npmjs.com/package/body-parser) is middleware for handling HTTP POST requests in Express.js.

- **EJS**: [EJS](https://www.npmjs.com/package/ejs) is a simple templating language that lets you generate HTML markup with plain JavaScript.

## Project Structure

/public
index.html
about.html
form.html
thankyou.html
/views
thankyou.ejs
app.js
formdata.txt
package.json
markdown
Copy code

## Getting Started

1. Install Node.js and npm (Node Package Manager) if not already installed.
2. Run `npm install` to install the project dependencies specified in `package.json`.
3. Start the application with `node app.js`.

## Routes

### Home Page (`/`)

- **Path:** `/`
- **Method:** GET
- **Description:** Renders the home page (`index.html`).

### About Page (`/about`)

- **Path:** `/about`
- **Method:** GET
- **Description:** Renders the about page (`about.html`).

### Form Page (`/form`)

- **Path:** `/form`
- **Method:** GET
- **Description:** Renders the form page (`form.html`).

### Thank You Page (`/thankyou`)

- **Path:** `/thankyou`
- **Method:** GET
- **Description:** Renders the thank you page (`thankyou.ejs`) with the provided name and email query parameters.

### Form Submission (`/submit`)

- **Path:** `/submit`
- **Method:** POST
- **Description:** Processes form data, saves it to `formdata.txt`, and redirects to the thank you page with the provided name and email.

## File Storage

- `formdata.txt`: Text file for storing form data.

## Acknowledgments

- This project uses the Express framework to create a simple web application.
- EJS is used for rendering dynamic content in views.
- Form data is processed and saved to a text file using the `fs` module.

## Author

Wesley Veeningen*