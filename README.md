# A library of ENS utilities

A set of utility methods for working with ens that I didn't see in any other library

### Overview

A work in progress for improving the ens research workflow. This package currently uses the Moralis API for calls to the ethereum blockchain.

### Getting Started

Install the package using your preferred package manager

```tsx
yarn add ens-utils
// or
npm i ens-utils
```

[setup your Moralis server](https://docs.moralis.io/moralis-dapp/getting-started/create-a-moralis-dapp) by creating an account. If using node, you can use the `[dotenv` package](https://www.npmjs.com/package/dotenv) to not expose environment variables to your public files. Below is an example setup configuration.

```tsx
import "dotenv/config"

/* Moralis init code */
const serverUrl = process.env.MORALIS_SERVER_URL
const appId = process.env.MORALIS_APP_ID
const masterKey = process.env.MORALIS_MASTER_KEY

/* Configuration Object */
const config: MorlisAPIOptions = {
    serverUrl,
    appId,
    masterKey,
}

/* The in your async function, put this code at the top */
async function main() {
    await initializeServer(config)
    // ... other things with the library
}
```

a list of functions

-   [getEnsBalance](https://www.notion.so/ENS-utils-3a8791c7777e4272a01197c864f0620c)

### Functions

getEnsBalance: returns the ENS balance of the user

```tsx
getEns("0x20a6F27E11EdC08D32C21454b4625EECfB22Bb21").then((e) => console.log(e))
```

## Author: [qazalin](https://github.com/qazalin)
