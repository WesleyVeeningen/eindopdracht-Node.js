# Eindopdracht Node.js

My final assignment for the Node.js module: a small Express website with a home page, an about page and a contact form. Submissions are validated, saved to a text file and answered with a personalised thank-you page rendered with EJS.

## Features

- Static home and about pages
- Contact form that asks for a name and email, with an error message when a field is empty
- Submissions are appended to `formdata.txt`
- Thank-you page that greets the visitor by name

## Stack

Node.js, Express, EJS and body-parser.

## Running it

```bash
npm install
node app.js
```

Open http://localhost:3000.

## Routes

| Route | Method | What it does |
| --- | --- | --- |
| `/` | GET | Home page (`public/index.html`) |
| `/about` | GET | About page (`public/about.html`) |
| `/form` | GET | Contact form (`views/form.ejs`) |
| `/submit` | POST | Saves name and email to `formdata.txt`, then redirects to the thank-you page |
| `/thankyou` | GET | Thank-you page (`views/thankyou.ejs`) |

## Project layout

```
app.js        Express server and all routes
public/       static HTML pages
views/        EJS templates for the form and thank-you page
formdata.txt  saved form submissions
```
