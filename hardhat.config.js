require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL ||
  "https://eth-goerli.g.alchemy.com/v2/yNa717og6hMFm0l1vB8grzPxOcyICuWv";
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "e1c45d4e7f2bf445e087ccb4c28c3cbb3084fe2e128da926fb2119c40bdad865";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  solidity: "0.8.8",
};
