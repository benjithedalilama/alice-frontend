# alice-frontend

First run `yarn` to install dependencies.

Install nvm, then run `nvm install 10.11`
Having installed node v10.11, run `nvm use 10.11` to use it.

To run tests run `yarn test`. You may run into issues with the amount of files being watched. If this happens install brew (if you don't already have it), then run `brew install watchman`.

For development run `docker-compose up`.

Visit `localhost:3000` to use the application.

If production deployment is set up, run `yarn deploy` to deploy the application.
