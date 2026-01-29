## Front end masters -- Complete Intro to React, v9 Course

Brushing up on React for interview prep.

This is a companion repository for the [Complete Intro to React, v9][fem] course on Frontend Masters.
[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)][fem]

## About this Repository

Every step of the project built throughout the course will have a folder that will be a snapshot of the current state of the project. The naming format will be `XX-<name of the lesson>` so you can get a rough idea of order and which lesson the step is coming from. In each snapshot you'll have to run `npm install` again since they are another whole copy of the project.

## Setup Instructions

We recommend using `Node.js version 20` with this course. The project will be built from scratch so most of the folders in this repo are just for reference. Later in the course, the `api` directory will be used to simulate an API server. To get set up, clone the repository:

```bash
git clone https://github.com/btholt/citr-v9-project.git
```

To use the version of node this course was built with:

- with [fnm](https://github.com/Schniz/fnm), `fnm use --install-if-missing`
- with [nvm](https://github.com/nvm-sh/nvm), `nvm install`

## Issues and Pull Requests

Please file issues and open pull requests on [the course website repo][repo]. Feel free to open pull requests here, but the issues should go in the other repo.

## Course Overview Notes

Course guide: https://react-v9.holt.courses

    - 01 - Setting up react without a build pipeline.
        - Setup script tags to import React and ReactDOM packages from unpkg.com
        - Then go over the basics of grabbing an element from the dom and providing it ReactDOM to handle rendering.
    - 02 - Overivew of some useful JS/React tools
        - npm init - discussing setting up and using npm.
        - Prettier - formats code for you so you don't have to worry about it.
            - create a .prettier.rc to create a prettier config.
            - He uses an empty object in his config which means use the defaults.
            - VS Code Setup
                - Install prettier VS Code extension.
                - In settigs check 'format on save'
            - Project setup
                - This allows for devs without VS Code to run prettier easily.
                - Install with: `npm i prettier --save-dev`
                - In the package.json's scripts section add `"format": "prettier --write \"src/**/*.{js,jsx,css,html}\""`
                - Then to run: `npm run format`
        - ESLint
            - His philosophy is to only setup linting for really bad bugs.
            - Linting is more of enforcing opinions ( i.e. alphabetical imports  )
        - git
        - vite
            - Pronounced veet. French for quick.
            - Bundling tool created by the Vue team that is a Wrapper around Rollup.
    - 03 - JSX
        - It's a syntax extension for JS that lets you write html like code in your JS files.
        - It gets converted to the React.createElement function calls

## License

The content of this workshop is licensed under CC-BY-NC-4.0. Feel free to share freely but do not resell my content.

The code, including the code of the site itself and the code in the exercises, are licensed under Apache 2.0.

[fem]: https://frontendmasters.com/courses/complete-react-v9/
[repo]: https://github.com/btholt/complete-intro-to-react-v9

[React icons created by Pixel perfect - Flaticon](https://www.flaticon.com/free-icons/react)
