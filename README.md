# # Blockchain Demonstration in Node.js

## Overview

This project provides a simple yet illustrative implementation of blockchain technology using Node.js. It demonstrates the creation of blocks, cryptographic hashing (SHA-256), proof-of-work mechanism (mining), and now includes digital signatures to authenticate blocks. The application is designed to help understand the fundamental concepts of blockchain and how digital signatures can be used to secure transactions.

## Features

- **Block Creation**: Blocks contain data, the hash of the previous block, and their own unique hash.
- **Blockchain Integrity**: Maintains integrity by linking each block's hash to the previous block.
- **Proof-of-Work (Mining)**: Simulates the mining process through a basic proof-of-work system.
- **Digital Signatures**: Adds digital signatures to blocks for authentication and verification, ensuring the validity and integrity of the data.
- **Chain Validation**: Ensures the blockchain's integrity by validating each block and the entire chain.

## Getting Started

### Prerequisites

- Node.js (Tested on version 16.x) - Download from [Node.js official site](https://nodejs.org/).

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone git@github.com:taylordamaceno/BlockChainNodeJs.git
   cd BlockChainNodeJs
1. Clone the repository:
   ```bash
   git clone git@github.com:taylordamaceno/BlockChainNodeJs.git
   cd BlockChainNodeJs
2. Running the Application
npm start

Running Unit Tests
npm test


Using Docker
To build and run the application using Docker Compose, ensure you have Docker and Docker Compose installed, then run:

   ```bash
docker-compose up --build

Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

