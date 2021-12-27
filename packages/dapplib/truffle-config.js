require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember common gesture slice suit gesture'; 
let testAccounts = [
"0xcd21d927bae46c8cecb131587c8d8a312477700fab5b3166cb6e0bf04bf427d1",
"0xbadf094d154eea28ca37d6cc7cb06978f3c6d92b744f188faf1e6fe6ff78789c",
"0x7896a5d0db48da49fe0c7da04a76bfb8bea54408ff5bf9a50835ba4fae07c316",
"0xc653dee9ce656c88948780d30d2a71408d7a83f8688c13f6599140038ecfabd0",
"0xdc9e4a63eb45db4db3d0562c503a4ed0bb8a3e484410833c6d2ebd44c6211575",
"0x4d08697ed1cd0b4452a45dd48b7d58033be03e2fd3ec34b765d569479a9a35be",
"0xc2480402d7fe61f203ec26e3426a2c370ba3bbbc4b8ba768c53ada955ea234a6",
"0xd7775a85232755afa6bd4c71ad8f34f6d6634c712f6f5883515584578172b8bf",
"0xcd1e95a92fc9d1e8ccd741f00129cfe5a0421346d0460f108048b840b783252b",
"0x94e0981226e3a6a72a58bfd47df75cfce151eaa628d02e38379e43ba72e63096"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


