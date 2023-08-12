# Finance Logger

Welcome to Financial Management System, Finance Logger – a revolutionary solution developed using Vite and Vanilla TypeScript. This system represents the convergence of advanced technology and financial expertise, tailored to meet the precise needs of modern finance organizations.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Technologies

A list of technologies used within the project:

- [Node](https://nodejs.org/en): Version 14.18+, 16+
- [Vite](https://vitejs.dev/guide/): Version 4.4.5
- [Typescript](https://www.typescriptlang.org/): Version 5.0.2
- [Commitizen](https://github.com/commitizen/cz-cli): Version 4.3.0
- [Husky](https://typicode.github.io/husky/): Version 8.0.3

## Getting Started

To experience the future of financial management, follow these simple steps:

install the project finance-logger with npm

1. Clone the repository.

```
$ git clone https://github.com/lunpessoa/finance-logger.git
$ cd ../path/to/the/finance-logger
```

2. Install dependencies using `npm install` or `yarn install`.

```
$ npm install
or
$ yarn install
```

3. Configure security settings in `tsconfig.json`.

4. Launch the application with `npm run dev` or `yarn dev`.

```
$ npm run dev
or
$ yarn dev
```

5. Access the system through your preferred web browser.

```
> http://localhost:5173/
```

## Commitizen and Husky configuration

#### Prepare Commitizen

[Commitizen](https://github.com/commitizen/cz-cli) is a command-line tool that helps teams and developers follow a consistent and standardized format when creating commit messages in version control repositories.

1. Install commitizen

```bash
  $ npm install commitizen -D
```

2. Init commitizen and choose an [adapter](https://github.com/commitizen/cz-cli#adapters) (cz-conventional-changelog)

```bash
  $ commitizen init cz-conventional-changelog --save-dev --save-exact
```

#### Prepare Husky

[Husky](https://typicode.github.io/husky/) is a popular tool used in software development to enforce specific actions or scripts before certain Git-related events occur.

1. Install husky

```bash
  $ npm install husky --save-dev
```

2. Enable Git hooks

```bash
  $ npx husky install
```

3. Create a hook

```bash
  $ npx husky add .husky/prepare-commit-msg
```

4. go to the .husky/prepare-commit-msg folder and add the following code

```prepare-commit-msg
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  exec < /dev/tty && npx cz --hook || true
```

## Features

- **Speed and Efficiency**: Built on the Vite framework, our system ensures rapid development and runtime performance, enabling real-time adaptation to market changes.
- **Reliable and Maintainable**: Leveraging the power of Vanilla TypeScript, the codebase remains clean and easily maintainable, reducing the risk of financial errors through early issue detection.
- **Comprehensive Functionality**: Enjoy real-time portfolio tracking, automated transaction reconciliations, and interactive financial reports designed exclusively for financial organizations.
- **Security First**: With robust data encryption, multi-factor authentication, and continuous security updates, your financial data remains secure and compliant.
- **User-Centric Design**: A sleek and intuitive interface simplifies complex financial operations, catering to both novice users and seasoned financial professionals.

## License

[MIT](https://choosealicense.com/licenses/mit/)
