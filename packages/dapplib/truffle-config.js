require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy regret office puppy hockey enroll flat gentle'; 
let testAccounts = [
"0x81557f6665b260b4837a89b963fbba7501f657b9ffd0f6bf551ff03bb1738d36",
"0xbf09291b017f0ef474ce3f3e0be8254058d0c270c1b9ea696677d9246b2561fa",
"0xf976f9fede400a650b7f402511a9fd7b1b54ad4c21d705172aebf8e8b061ee97",
"0xee7f8d09b1a40438e32a426a7bbd05e127dc76c6e14b246e49fae7d6791cc34a",
"0x3f4c2410c3c5c3a624fb5621b7a9180443bd941415383bb0b60bae2b7d147de3",
"0x8b6fd6eb81d0e12bb18c049ef3d84d93ea1e40fafa8a7ad63c585f258d58f748",
"0xdc9f946157c94cf4f23823eae6d54d14cc3a9a27b57751778b684e46b0ed76ce",
"0x7cafccf6c4b81b92356b2601d7ba9f9738113bcc2e1fe732a712584975416a56",
"0x109c3a69d44f8b79ae46ff409e0a31f89f7425d0e3537a6e43f8f4de8466dbab",
"0x6963a14cf8dff68f8221fdcff74ec8af8b1fc269d91893779030279da465fb5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

