# Cle.js React Mashup Example - Clever Js Framework

This project was generated with cle apps template, it's a template for Cle.js - React Mashup.
Preconfigured to work with PrimeReact and Storybook.

Read more on [Cle.js Readme](https://github.com/vcamelblue2/Cle.js#readme).

Install the project:
```sh
npm install
```

Run the project in development on port 4200:
```sh
npm start
```

Build the project:
```sh
npm build
```

Test locally the production build on port 4200:
```sh
npm run test-build
```

# Run storybook
Run storybook in development on port 6006:
```sh
npm run storybook
```

# Code Structure
This is an example project organized as follow:

```
├── package.json
├── ...
└── src
    ├── main.js                     (app entrypoint, routing, etc)
    ├── style.css                   (global style)
    ├── index.html                  (entrypoint)
    ├── ...
    ├── stories                     (pre-configured storybook)
    ├── mashup                      (react-cle mashup init and utils)
    ├── utils                       (css in js & cle smart alias)
    ├── ...
    └── modules                     (app should be divided into modules)
        ├── primereact.all.jsx      (single import point for all PrimeReact used components)
        ├── ...
        └── example-module          (main module )
            ├── ...
            ├── components          (module components)
                ├── cle             (pure cle components)
                ├── react           (pure react components)
                └── react-to-cle    (manual cle wrapper for react components)
            ├── ...
            ├── global-di           (global dependency injection components, also in html. Auto import via use-..)
                ├── components
                ├── models
                ├── services
                └── alias.js        (simple cle alias)
            ├── ...
            ├── html-components     (cle html components)
            ├── pages               (module pages)
            ├── models              (cle data models & objects)
            ├── services            (cle services & api)
            ├── module.routes.js    (module page routing)
            └── module.style.css    (module global style)
        |
        └── create-your-module-here (generate here your app files)
            └── ...
```


## Notes
- The .terserrc is required in production, shuld not be changed / removed to work properly. It prevent the "$" mangling during minifaction

- Static file location and handling should be manually configured
