# Air Guard landing page (gaisasargs.lv)

Page is based on [Github Pages](https://pages.github.com/) hosting and deployment and is built
using [Jekyll](https://jekyllrb.com/) static site generator

## Quickstart running locally with Docker Compose

+ Install [Docker Compose](https://docs.docker.com/compose/install/)
+ Run `docker-compose up` from project root
+ Open http://localhost:4000

## Without Docker

+ Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
+ Install [NodeJS](https://nodejs.org/en/download/)
    + Install [Yarn package manager](https://classic.yarnpkg.com/lang/en/docs/install/):
    ```shell
    # npm install --global yarn
    ```

### Running Jekyll webserver

+ Open terminal and go to `/docs` folder and install required gems:
    ```shell
    $ cd ./docs
    $ bundle install
    ```


+ Run server:
    ```shell
    $ cd ./docs
    $ bundle exec jekyll serve
    ```

### Running SASS and JS source compiler

+ Open terminal and go to `/ui` folder and install required packages
    ```shell
    $ cd ./ui
    $ yarn install
    ```

+ Compile UI sources and watch for changes:
    ```shell
    $ cd ./ui
    $ yarn run watch
    ```

+ Compile UI sources:
    ```shell
    $ cd ./ui
    $ yarn run build
    ```
