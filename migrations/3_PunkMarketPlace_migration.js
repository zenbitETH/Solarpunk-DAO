const PunkMarketPlace = artifacts.require("PunkMarketPlace");

module.exports = function (deployer) {
  deployer.deploy(PunkMarketPlace);
};
