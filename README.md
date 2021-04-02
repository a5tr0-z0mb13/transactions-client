# TransactionsClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

# Background

Technical test, set as part of the application process for a Fintech. An [Angular](https://angular.io/) application with a fake REST API. The test was timeboxed to four hours.

## Requirements

The goal of this project is to display a list of transactions in a portfolio which is fetched from a RESTful API.

The table of transactions should render all available properties of the transactions in the order returned by the API and allow the user to edit and delete a row as well as add new transactions to the list (which should be persisted in the API).

Additionally, the page should display the cumulative cashflow for the portfolio below the table (see below for calculation).

Aim to spend enough time to complete this task to a level you're happy with - everything does not need to be 100% polished, but the code should demonstrate your thought-processes and meet the requirements. Please make notes on any outstanding points or issues and how you would address them given more time.

Please include some tests for components or services you might introduce. These do not have to be comprehensive, but we would like to see your approach to automated testing for Angular projects. Feel free to use any testing framework that you see fit (Karma, Jest, etc.).

## Data model

There are 4 types of transactions:

* Buy
* Sell
* Deposit
* Withdrawal

All transactions have a set of common fields:

* id `integer`
* type `enumeration` ('buy', 'sell', 'deposit', 'withdrawal')
* date `string` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date string)
* value `integer` (a Sterling **pence** value)
* cashflow `integer` (a Sterling **pence** cashflow change)

Buy and sell transactions have the additional properties:

* security `string` (the name of the traded share)
* shares `integer` (the number of the shares transacted)

## Formatting requirements

* Dates should be formatted in a human-readable manner
* Transaction values and cashflow changes and  should be formatted in  **pounds Sterling**, i.e. `£${value/100}`
* The sign of the change should be prefixed (i.e. `+` for a positive change and `-` for a negative change)
* Positive changes should be formatted in _green_ and negative changes in _red_. 
* When editing the value on the form, it should also be in **pounds sterling** but stored as the pence value.

## Cumulative cashflow

The cumulative cashflow is calculated by summing all the individual cashflows across the transactions, for example. For the following transactions:

| type       | value  | cashflow |
|------------|--------|----------|
| deposit    | 500000 | 500000   |
| buy        | 120000 | -120000  |
| sell       | 72000  | 72000    |
| withdrawal | 100000 | -100000  |

The cumulative cashflow would be given by `500000 - 120000 + 72000 - 100000 = 352000` and should be displayed below the table.

## Development server

Run `npm run api` for a fake REST API, based on [JSON Server](https://github.com/typicode/json-server).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
