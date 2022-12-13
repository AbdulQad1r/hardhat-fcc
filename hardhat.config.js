require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  // defaultNetwork: "hardhat",
  // networks: {
  //   hardhat: {},
  //   goerli: {
  //     url: GOERLI_RPC_URL,
  //     accounts: [PRIVATE_KEY],
  //     chainId: 5,
  //   },
  //   localhost: {
  //     url: "http://localhost:8545",
  //     chainId: 31337,
  //   },
  //},
  solidity: "0.8.8",
};
