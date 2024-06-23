# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


This system is designed to help streamline our invoicing process by automating past-due invoice reminders and providing an easy-to-use interface for managing invoice details.

Key Features:
User Authentication with Google OAuth:

Securely log in using your Google account. No need to remember another set of credentials!
View Due Invoices:

Quickly access a list of your due invoices, including important details such as invoice amount, due date, and recipient information.
Automated Past-Due Reminders:

Our backend service automatically sends reminders for past-due invoices, helping to ensure timely payments and improving our cash flow.
How to Access:
Login:

Visit your-domain.com and click on "Login with Google" to securely log in using your Google account.
View Invoices:

After logging in, navigate to the "Invoices" section to view a list of your due invoices. Each entry will include the recipient's name, the amount due, and the due date.
Setup Instructions:
Backend Setup:

Ensure you have Node.js installed.
Clone the repository and navigate to the invoice-reminder-system/backend directory.
Create a .env file with your MongoDB URI, Google Client ID, Google Client Secret, and a random cookie key.
Run npm install to install the required packages.
Start the server using node server.js.
Frontend Setup:

Navigate to the invoice-reminder-system/frontend directory.
Run npm install to install the required packages.
Start the development server using npm start.
Important Notes:
Ensure your Google OAuth credentials are correctly set up in the .env file.
The system requires a MongoDB instance to store user and invoice data.
For detailed instructions and code, refer to the documentation in the repository.
