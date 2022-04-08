const PunkNFT = artifacts.require("PunkNFT");

module.exports = function (deployer) {
  deployer.deploy(PunkNFT);
};
