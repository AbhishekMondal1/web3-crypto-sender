// https://eth-ropsten.alchemyapi.io/v2/jKzzaJ-KeHPTbP4dmHZusFpK-LSThBvo

require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/jKzzaJ-KeHPTbP4dmHZusFpK-LSThBvo',
            accounts: ['299c14aa31d015f48ad5876b955001619af86dbe3597d382b30212d40c7e8b7a']
        }
    }
}