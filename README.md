# Vite React Starter

## Table of Contents

- [Getting Started](#getting-started)
- [VS Code Plugins](#vs-code-plugins)
- [File Structure](#file-structure)
- [Guidelines & Conventions](#conventions)

&nbsp;
<a name="getting-started"></a>

## 🚀 Getting Started

&nbsp;

### Prerequisites

- NodeJS 16
- NPM

&nbsp;

### First Run

### `1. npm install`

Install all the dependencies.

&nbsp;


### `2. npm run build:<environment>`

Build the app using the env file for the environment. eg: `npm run build:local`.\
Available environments: 'local', 'dev', 'staging'.\
Use `npm run build` only for prod.

&nbsp;

### `3. npm run start:<environment>`

Start the app using the env file for the environment. eg: `npm run start:dev`.\
Available environments: 'local', 'dev', 'staging'.\
Use `npm run start` only for prod.

&nbsp;

### `4. npm run test`

Will run the tests

> `On every commit` the linting process will be executed. \
> `On every push` tests will be executed.

&nbsp;

## Stack

### Main

- ViteJS
- ReactJS
- Typescript
  - react-error-boundary

#### Styling

- Tailwind CSS v3.

> Could be styled-components, emotions, etc

#### UI Components

Could be any of the following:

- Ant Design.
- Material UI.
- Bulma.

#### Date manipulation

- Date-fns

#### Testing

- Jest + React Testing Library (plus some plugins).

#### HTTP Client

- React Query
- Axios

#### Git Hooks

- Husky & Lint staged
- Runs prettier and eslint on @pre-commit & jest/tests on @pre-push

#### Routing

- React Router 6.

#### Lint & Formatting

- ESlint & Prettier Configured
- Lints
  - airbnb
  - react
  - react hooks
  - typescript
  - jsx-a11y
  - jest
  - testing library

### Editor Config

- vscode settings & extension recommendations
- `.editorconfig` file

&nbsp;
<a name="vs-code-plugins"></a>

## 👨🏼‍💻 VS Code Plugins

&nbsp;

### Must

- ES7 React/Redux
- ESLint
- Prettier
- EditorConfig for VS Code
- DotENV
- Tailwind CSS IntelliSense

&nbsp;

### Optionals

- Auto Close Tag
- Auto Rename Tag
- Auto import - ES6
- Path Intellisense
- TODO Highlight

&nbsp;
<a name="file-structure"></a>

## File Structure

Folder structure is based on productivity and some best practices (NextJS, public recommendations, etc):

```text
src
├── App.css                       * Main styles to load or overwrite for any UI components library .
├── App.tsx                       * Main app component.
├── index.css                     * Main app styles and import tailwind base styles.
├── main.tsx                      * Entry point of the application (any initial configuration or plugins).
├── assets                        * Assets that are imported into your components(images, custom svg, etc).
│   └── ...
├── components                    * Components of the projects that are not the main views.
│   ├── ui                        * Generic and reusable across the whole app. Presentational components eg. Buttons, Inputs, Checkboxes.
│   ├── layout                    * Unique and one time use components that will help with app structure (guards, navigation, etc).
│   ├── shared                    * Reusable components across different domains or features.
│   ├── <domain component>        * Belong to a specific domain. Reusable in different Pages.
│   └── ...
├── plugins                       * Init and config plugins(axios, react-query, react-feature-flags, etc).
│   └── ...
├── services                      * All the common services. e.g. Api, hubs, store (redux/context API/ Mobx), etc.
│   ├── api                       * Abstractions for making API requests
│   │    └── base                 * Abstract classes for all the API's.
│   │    └── authentication.ts    * Authentication API for login, reset password, etc.
│   │    └── ...
│   └── context                   * All the Contexts use din the app for Auth, alerts, etc
│        └── ...
├── theme                         * Global/Common styles configuration (variables, main theme, mixins, etc) on Sass/Less.
├── test                          * Utilities, mocks and config files for tests.
├── hooks                         * Custom hooks to isolate reusable logic.
├── models                        * Constructors that will mold incoming and outgoing server data into repeatable and scalable objects.
├── constants                     * Anything referenced globally and no Dynamic information.
├── utils                         * Functions and utilities (for env variables, for tests, for regex value testing, filters, etc.)
├── routes                        * All the possible routes/navigation of the app.
├── pages                         * Presentational components that represents pages/views.
│   ├── private                   * Private views (authenticated user)
│   │    └── ...
│   ├── public                    * Public views (guest user)
│   │    └── ...
│   └── ...                       * Shared views
└── .vscode                       * VS Code workspace settings to work with ESLint rules and formatting
                                    (you can also lint or fix on save 😉).
```

**Some important root/config files**

```text
.
├── src
│   └── jest.setup.ts       * Jest extra configuration.
├── .editorconfig           * Coding styles (also by programming language).
├── .env                    * Environment variables (env.production, env.dev, env.development, env.staging, etc).
├── .eslintrc.json          * ESLint configuration and rules.
├── .prettierrc             * Formatting Prettier options.
├── tsconfig.js             * Typescript configuration.
├── postcss.config.js       * POST CSS configuration.
├── tailwind.config.js      * Tailwind CSS configuration.
├── vite.config.ts          * ViteJS configuration.
└── jest.config.js          * Jest configuration for tests.
```

&nbsp;
<a name="conventions"></a>

## 📚 Guidelines & Conventions

Here are a few important conventions:

### JSX vs JS

Since JSX is not standard JS it should go into it's own extension ie. `.ts` for TypeScript, `.jsx` for JSX.
Now days, most of the IDE's support both extensions for ReactJs, so more important reason today is that helps to indicate what it is: a component or plain js?.

### Naming

- **Component names** should always be **multi-word**, except for root `App` components. Use `UserCard` or `ProfileCard` instead of `Card` for example.
  Each component should be in its own file.

  ```text
  Gives more meaning and context of what the component does.
  ```

- **Components files** should be always **PascalCase**/**kebab-case** except for HOC's. Use `UserCard.jsx` or `user-card.jsx`.

  ```text
  PascalCase works best with autocompletion in code editors, as it’s consistent with how we reference
  components in JS(X) and templates, wherever possible.

  However, mixed case filenames can sometimes create issues on case-insensitive file systems, which
  is why kebab-case is also perfectly acceptable.
  ```

- **Components are named accordingly to it's relative path to components or src**. Given that, a component located at `src/components/User/List.jsx` would be named as `UserList`. A component located at `src/screens/User/List` would be named as `ScreensUserList`.
- **Components that are in a folder with same name, don’t repeat the name in the component**. Considering that, a component located at `src/components/User/List/List.jsx` would be named as `UserList` and **NOT** as `UserListList`.

  ```text
  The name we give to the components, should be clear and unique in the application, in order to
  make them being easier to find and to avoid possible confusions.

  Easy search inside the project.
  ```

- Components that are only **used once per page should begin with the prefix “The”**, to denote that there can be only one. For example for a navbar or a footer you should use `TheNavbar.jsx` or `TheFooter.jsx`.

  ```text
  This does not mean the component is only used in a single page,
  but it will only be used once per page.

  These components never accept any props, since they are specific to your app, not their context
  within your app.

  If you find the need to add props, it’s a good indication that this is actually a reusable
  component that is only used once per page for now.
  ```

- **High Order Components** (HOC) file and folder name in **lowerCamelCase** and use the prefix `with`.

  ```text
  Generic convention
  ```

- **Always use full name** instead of abbreviation in the name of your components. For example don’t use `UDSettings`, use instead `UserDashboardSettings`.

  ```text
  Keep things clear
  ```

- **Each page is a react class component** having some state. A **page component** uses other components to assemble the page like lego blocks.

  ```text
  Single entry point by feature or page.

  Keep the pages in a separated folder in the root of src, because they will be
  grouped accordingly to the route definition and not by modules.
  ```

- **Keep components shallow**. If a components has a lot of nested markup then the chances of reusing it decreases. Instead we should take advantage of composition. It saves us from prop drilling or having to reach out to context api.

  ```text
  Reusable and Readable code.

  Passing down props to multiple child components is what they call a code smell.
  ```

- **Presentational components** are those who **don’t have internal state**. Their role is to show certain pieces of UI or Layout. They are provided data via props or context api or state management.
- **Container components** are those which **deals with business logic**. They usually have some state and only render presentational components based on the logic.

  ```text
  This way Presentational and Container components complete the puzzle together.

  By dividing the responsibilities, code becomes easier to maintain and debug.
  ```

### Organization / Best practices

- Use a **central export file** (Barrel export -> `index.ts`) in the components directory. With this file we can just import all of our components into it and export them. This will allow us to import components into any file from the same place.
- **Group components** by `module/feature` inside `components folder`.
- Keep **generic components** by context inside `src/components/ui` or `src/components/layout`.
- **Keep pages simple**, with minimum structure and code.
- Group pages accordingly to route definition. For a route `/user/list` we would have a page located at `/src/pages/User/List.jsx`.
