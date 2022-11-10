// migrations/3_prepare_upgrade_boxv2.js
const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box');
const BoxV2 = artifacts.require('BoxV2');

module.exports = async function (deployer) {
    const instance = await deployProxy(Box, { deployer });
    const upgraded = await upgradeProxy(instance.address, BoxV2, { deployer });
}
