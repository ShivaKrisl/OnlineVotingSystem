var vote = artifacts.require("Voting.sol");

module.exports = function (deployer) {
    deployer.deploy(vote);
};
