module.exports = {
    environments: {
      test: 'test',
      ropsten: 'ropsten',
      mainnet: 'mainnet'
    },
    rpc_endpoint: {
      test: 'http://localhost:8545',
      ropsten: process.env.RPC_ENDPOINT || 'https://ropsten.infura.io/v3/18dfe3cb327e49aab39aa7fe0550337e',
      mainnet: process.env.RPC_ENDPOINT || 'https://web3.gastracker.io'//'https://ethereumclassic.network'
    },
    contract_included_block: 6496623,
    parsing_active: true,
    db_connection: {
      test: 'mongodb://localhost:27017/etccoinflipdb',
      ropsten: process.env.DB_CONNECTION || 'mongodb://localhost:27017/etccoinflipdb_ropsten',
      mainnet: process.env.DB_CONNECTION || 'mongodb://localhost:27017/etccoinflipdb'
    },
    app_contract_address: process.env.CONTRACT || '0xb11a6cec3d040e964ecd2c23180b271091f72bca',
    domain: process.env.API_DOMAIN || 'http://localhost:3030',
    last_endpoint_version: '0.0.1',
    version: 'v1',
    port: process.env.PORT || 3030
  }
  