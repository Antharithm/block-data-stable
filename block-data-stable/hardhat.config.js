require("@nomicfoundation/hardhat-toolbox");
// require("hardhat-gas-reporter");
require("./tasks/block-number"); // check the 'tasks' folder OR make it a script file
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {},
      goerli: {
          url: process.env.GOERLI_RPC_URL,
          accounts: [process.env.PRIVATE_KEY],
          chainId: 5,
      },
      mumbai: {
        url: process.env.MUMBAI_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
        chainId: 80001,
      },
      localhost: {
          url: "http://127.0.0.1:8545/",
          chainId: 31337,
      },
  },
  etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // gasReporter: {
  //     enabled: true,
  //     currency: "USD",
  //     outputFile: "gas-report.txt",
  //     noColors: true,
  //     coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  // },
}