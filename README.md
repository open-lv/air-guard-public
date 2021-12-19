# Air Guard Website

[![Build and Deploy Github Pages](https://github.com/open-lv/air-guard-public/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/open-lv/air-guard-public/actions/workflows/gh-pages.yml)

Source of the [gaisasargs.lv](https://gaisasargs.lv) website hosted on [Github Pages](https://pages.github.com/) and built using the [Jekyll](https://jekyllrb.com/) static site generator.

For the hardware and software, checkout the [github.com/open-lv/air-guard](https://github.com/open-lv/air-guard) repository.

## Contribute

Please [open an issue](https://github.com/open-lv/air-guard-public/issues/new) to report a problem with the website or suggest an addition. Alternatively, [open a pull request](https://github.com/open-lv/air-guard-public/pulls) with the suggested changes. 

## Development Environment

The repository includes a Docker environment that includes all the necessary tooling. Alternatively, you can install and run the tooling locally.

### Using Docker Compose

+ Install [Docker Compose](https://docs.docker.com/compose/install/).
+ Run `docker-compose up` from project root directory to start the development environment in the "watch" mode that automatically detects all the changes to the source files and builds the site.
+ Open http://localhost:4000 to access the local development site.

### Using Local Tooling

This should be used only if you're not able to run the Docker environment locally.

+ Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
+ Install [NodeJS](https://nodejs.org/en/download/)
+ Install [Yarn package manager](https://classic.yarnpkg.com/lang/en/docs/install/):
    ```shell
    npm install --global yarn
    ```

#### Start the Jekyll webserver

+ Open terminal and go to `/docs` folder and install required gems:

    ```shell
    cd ./docs
    bundle install
    ```

+ Run server:

    ```shell
    cd ./docs
    bundle exec jekyll serve
    ```

#### Run the CSS and JS build tools

+ Open terminal and go to `/ui` folder and install required packages

    ```shell
    cd ./ui
    yarn install
    ```

+ Compile UI sources and watch for changes:

    ```shell
    cd ./ui
    yarn run watch
    ```

+ Compile UI sources:

    ```shell
    cd ./ui
    yarn run build
    ```

## Credits

See [the contributors](https://github.com/open-lv/air-guard-public/graphs/contributors).
