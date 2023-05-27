require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		sepolia: {
			url: "https://eth-sepolia.g.alchemy.com/v2/zn_Tfq9611EHfvDX9c3RMxHqQBAibgpZ",
			accounts: [
				"20b0632aec5c73b0226ef67391a2b7173e7151c9233ed3c1e7e84bca5f236249",
			],
		},
	},
};
