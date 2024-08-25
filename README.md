# Cryptocurrency Wallet API

This repository contains the implementation and automated tests for the Cryptocurrency Wallet API. The API is designed to manage user wallets, facilitate transactions, and provide essential cryptocurrency-related functionalities. The tests are crafted using Postman and executed with Newman, ensuring comprehensive coverage and reliability of the API endpoints.

## Table of Contents
- [Overview](#overview)
- [API Endpoints Covered](#api-endpoints-covered)
- [Tools Used](#tools-used)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Cryptocurrency Wallet API offers a range of endpoints for managing cryptocurrency transactions, including user registration, wallet balance retrieval, transaction processing, and exchange rate queries. This project automates the testing of these endpoints to ensure the API's functionality, reliability, and consistency.

## API Endpoints Covered

The following API endpoints are covered in the automation:

 ### User Management
 - `200 POST /api/v1/register`: Register a user, and create their wallet.
 - `200 POST /api/v1/login`: Login the user and generate a session token.

 ### Wallet Operations
 - `200 GET /api/v1/balance`: Retrieve the wallet balance.

 ### Transactions
 - `200 GET /api/v1/transactions`: List all the transactions done by the user.
 - `200 POST /api/v1/transactions`: Transfer 5 ETH to a recipient.
 - `200 POST /api/v1/transaction_fee`: Calculate transaction fees and return estimated cost.

 ### Exchange Rates
 - `200 GET /api/v1/exchange_rates`: Get an object with all available currency exchange rates.

## Tools Used

- **Postman**: Used for creating, organizing, and running the API test cases.
- **Newman**: A command-line tool used to run Postman collections in various environments and integrate them into CI/CD pipelines.

## Setup Instructions

### Prerequisites
- **Node.js** installed on your machine.
- **Newman** installed globally:
  ```bash
  npm install -g newman
### Cloning the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/sadmanpieal/Cryptocurrecy-Wallet-API.git
cd Cryptocurrecy-Wallet-API
```
## Running the Tests

To run the tests using Newman, use the following command:

```bash
newman run Cryptocurrency Wallet API.postman_collection.json
```

This command will execute the entire suite of tests against the API.
### Running with HTML Report

If you wish to generate an HTML report after running the tests, use:

```bash
newman run Cryptocurrency Wallet API.postman_collection.json -r html --reporter-html-export newman-report.html
```

The report will be saved as `newman-report.html`.
![screencapture-file-D-Crypto-Reports-report-html-2024-08-25-12_25_04](https://github.com/user-attachments/assets/a56eeb44-e555-4456-b89b-bad8aa1d6301)
![screencapture-file-D-Crypto-Reports-report-html-2024-08-25-12_25_48](https://github.com/user-attachments/assets/616e43d2-58bd-4d45-a202-cd5558452e11)
![screencapture-file-D-Crypto-Reports-report-html-2024-08-25-12_28_14](https://github.com/user-attachments/assets/fc9e3517-ab01-49ee-8313-69f2ef951077)
![screencapture-file-D-Crypto-Reports-report-html-2024-08-25-12_26_18](https://github.com/user-attachments/assets/23e2c5a8-9a93-4d32-b50c-6403ba769e00)


## Project Structure

The repository is structured as follows:

```

Cryptocurrency-Wallet-API/
│
├── Cryptocurrency-Wallet-API.postman_collection.json   # Postman collection file containing all API requests and tests.
├── newman/                                             # Folder containing Newman reports and other artifacts (if applicable).
└── README.md                                           # Project documentation (this file).
```
## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
