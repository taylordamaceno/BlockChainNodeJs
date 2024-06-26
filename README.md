# Taylao Blockchain

## Overview
This repository contains a simple implementation of a blockchain called Taylao Blockchain. The code is written in JavaScript and utilizes the `crypto-js` library to handle SHA-256 hashing. The blockchain has basic functionalities such as adding blocks and verifying the integrity of the chain.

## Features

- **Block Creation**: Each block contains data, a timestamp, an index, and a reference to the previous block's hash.
- **Hash Calculation**: Blocks use SHA-256 hashing to ensure integrity. The hash is calculated based on the block's properties, including a nonce value that is used in the proof of work.
- **Proof of Work**: Implements a simple proof of work algorithm (evidence of job) that requires a block's hash to start with a certain number of zeros.
- **Chain Integrity**: The blockchain can validate itself to ensure that blocks have not been tampered with and that hashes are correct.

## Installation

To run this project, you need Node.js installed on your machine as it uses the `crypto-js` library to handle SHA-256 hashing. 

```bash
npm install crypto-js
