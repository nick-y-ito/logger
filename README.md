# Simple Logger

A lightweight and easy-to-use logging utility for Node.js applications, designed to provide a straightforward way to log messages at different levels: `Log`, `Info`, `Warn`, and `Error`.

- [Simple Logger](#simple-logger)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Reference](#api-reference)
  - [Contributing](#contributing)
  - [License](#license)

## Features

Simple API to log messages at four different levels: `Log`, `Info`, `Warn`, and `Error`.
- Easy integration with any Node.js application.
- Customizable log message format with level prefixes.

## Installation

Use npm to install Simple Logger:

```bash
npm install @nick-y-ito/logger
```

## Usage
First, import the Logger class from the package:

```ts
import { Logger } from '@nick-y-ito/logger';
```
Then, create an instance of Logger and use it to log messages:
```ts
const logger = new Logger();

// Log a simple message
logger.log('This is a log message.');

// Log an information message
logger.info('This is an info message.');

// Log a warning message
logger.warn('This is a warning message.');

// Log an error message
logger.error('This is an error message.');
```

## API Reference
- `log(...message: any[]): void` - Logs a message at the "Log" level.
- `info(...message: any[]): void` - Logs a message at the "Info" level.
- `warn(...message: any[]): void` - Logs a message at the "Warn" level.
- `error(...message: any[]): void` - Logs a message at the "Error" level.

Each method accepts any number of arguments, which are concatenated into a single log message.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs, feature requests, or improvements.

## License

This project is licensed under the ISC License.


