# Test Scheduling UI

## About

This is the front end user interface that goes along with the test scheduling API. It is designed so that you only need to make minor changes for it to work appropriately with the API.

# List of Frameworks Used
* Angular
  - Used to build the front end. Documentation can be found [here](https://angular.io/docs).
* ng2-charts
  - Wrapper around Chart.js that is used producing graphs. Documentation can be found [here](https://valor-software.com/ng2-charts/).
* chartjs-plugin-streaming
  - Plugin for Chart.js used to display real time graphs. Documentation can be found [here](https://nagix.github.io/chartjs-plugin-streaming/).
* fullcalendar
  - Open source software used to produce the calendar. Documenatation can be found [here](https://nagix.github.io/chartjs-plugin-streaming/).
* angular2-notifications
  - Open source npm package used to produce the notifications displayed when a task is approved/denied. Documentation can be found (here)[https://www.npmjs.com/package/angular2-notifications].

# Configuration

The config file for the front end can be found in `src/app/config.ts`. This file will hold any variables that you will need to use repeatedly throughout the project. It holds the `hostname` for example so that you only need change it once if the hostname is ever changed. By default it is set to `http://localhost:3030` but you may change it to any other hostname of your choosing.

If you wish to host this front end and deliver the content via HTTPS then you must modify the current Dockerfile to copy over a custom `nginx.conf` file as well as the appropriate certificate and private key files.

# Running and Building the UI

## Package Install

Install npm packages using `npm install` command.

## Building Docker Image

Run `ng build && docker build -t tag_name .` to build the Docker image. This will build a lightweight image that is by default ~38 MB in size.

## Running Docker Image

Run `docker --rm -d -p 8080:80 tag_name`

## Using Angular CLI
* Development server
  - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Code scaffolding
  - Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

* Build
  - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Running unit tests
  - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* Running end-to-end tests
  - Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Bugs
- The notifications drop down currently does not retrieve the newest notifications from the backend.
- The websocket is currently listening for a test event and will display twice. Refinement of this feature is required so that it only listens for specific notifications.
- The file upload and download component is currently non functional. It needs to be refactored to use the proper API endpoint.