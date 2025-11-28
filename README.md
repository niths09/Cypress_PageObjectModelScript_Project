# Cypress POM – Parabank Automation Project

## Overview

This project automates the **Registration** and **Login** flows of the **Parabank Web Application** using **Cypress** and the **Page Object Model (POM)** design pattern.

Key features include:

* Reusable page classes for **Registration** and **Login** pages
* XPath-based selectors for reliable element targeting
* Clean separation of **page actions** and **test scripts**
* Positive and negative test flows
* Advanced UI validation using Cypress assertions

The project includes the following test cases:

1. **User Registration - Full form submission & success verification**
2. **Login with Invalid Credentials - Error message validation**

---

## Test Scenarios Covered

### 1️⃣ User Registration Flow

* Navigate to the Parabank home page
* Click on the **Register** button
* Fill in all required registration fields:

  * First Name, Last Name
  * Address, City, State, Zip Code
  * Phone, SSN
  * Username, Password, Confirm Password
* Submit the registration form
* Assert success message:

  * “Your account was created successfully. You are now logged in”

---

### 2️⃣ Login Flow with Invalid Credentials

* Navigate to the Parabank home page
* Enter invalid **Username** and **Password**
* Click the **Login** button
* Validate error message:

  * “The username and password could not be verified”

---

## **Tech Stack**

| Component     | Description                      |
| ------------- | -------------------------------- |
| **Framework** | Cypress                          |
| **Language**  | JavaScript (ES6)                 |
| **Design**    | Page Object Model (POM)          |
| **Selectors** | XPath using `cypress-xpath`      |
| **Browser**   | Chrome (default)                 |
| **Approach**  | POM + Cypress Assertions         |

---

## Step-by-Step Setup

### 1️⃣ Create Project Folder

```bash
mkdir Cypress_Parabank_POM
cd Cypress_Parabank_POM
```

### 2️⃣ Initialize Node Project

```bash
npm init -y
```

### 3️⃣ Install Cypress & Dependencies

```bash
npm install cypress cypress-xpath --save-dev
```

### 4️⃣ Open Cypress

```bash
npx cypress open
```

This generates the Cypress folder structure.

---

## **Folder Structure**

```
Cypress_Parabank_POM/
│
├── cypress/
│   ├── e2e/
│   │   ├── registerTest.cy.js            # Registration test
│   │   └── loginTest.cy.js               # Login test
│   ├── pages/
│   │   ├── parabankRegisterPage.js       # Registration page object
│   │   └── parabankLoginPage.js          # Login page object
│   ├── support/
│   │   ├── commands.js                  
│   │   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Key Features

* **Page Object Model (POM)** design for clean separation of tests and page actions
* Reusable **methods** for interacting with UI fields and buttons
* XPath locators for precise element targeting
* Supports **positive** (registration success) and **negative** (invalid login) flows
* Cypress assertions for:

  * Visibility
  * Text content
  * Form validation

---

## Running the Tests*

### Run using Cypress GUI

```bash
npx cypress open
```

Select the test file:

* `registerTest.cy.js`
* `loginTest.cy.js`

### Run in Headless Mode

```bash
npx cypress run
```

---
