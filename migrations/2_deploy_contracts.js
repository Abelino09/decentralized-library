var LibraryContract = artifacts.require("./Library.sol");
var FlashTokenContract = artifacts.require("./FlashToken.sol");

module.exports = function(deployer) {
   deployer.deploy(LibraryContract);
   deployer.deploy(FlashTokenContract, "TLg9PV2heaX27S9BWVm45tQXzau1NGMZYD");
};
