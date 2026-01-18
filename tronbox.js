const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      privateKey: '6b20b0d4bdc95b9ea4f8296c8376133c7d658fedea19c5f3d9655f631c5ff074',
      userFeePercentage: 0,
      feeLimit: 1e9,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: '6b20b0d4bdc95b9ea4f8296c8376133c7d658fedea19c5f3d9655f631c5ff074',
      userFeePercentage: 50,
      feeLimit: 1e9,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: '46f7693480b8edbb9d45d6657ef98cd6f3232d0f0199ac53a351e1b685b4d0c3',
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'http://127.0.0.1:9090/jsonrpc',
      network_id: '*'
    },
    compilers: {
      solc: {
        version: '0.8.0'
      }
    }
  }
}
