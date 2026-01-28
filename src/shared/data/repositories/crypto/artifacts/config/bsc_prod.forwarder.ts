// Auto-generated on deployment

export const BSC_PROD_FORWARD_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_merchant",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_developer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_feePercentage",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "InsufficientAmount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidFeePercentage",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTokenAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoActiveTransaction",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoBNBToRescue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensToForward",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensToRescue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyDeveloper",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransactionExpired",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BNBRescued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "merchant",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "merchantAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "developer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "developerAmount",
        "type": "uint256"
      }
    ],
    "name": "Forwarded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensRescued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      }
    ],
    "name": "PaymentCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "payer",
        "type": "address"
      }
    ],
    "name": "PaymentReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TransactionCompleted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "developer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feePercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "forward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "merchant",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "merchantAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "developerAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "rescueBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "rescueTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transactionCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentActiveTransactionId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_timeout",
        "type": "uint256"
      }
    ],
    "name": "createPayment",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "processPayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "verifyTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isExpired",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canProcessPayment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "canProcess",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "currentBalance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumRequired",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isExpired",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getActiveTransaction",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

export const BSC_PROD_FORWARD_CONTRACT_BYTE_CODE = "0x6101006040523480156200001257600080fd5b50604051620013e5380380620013e58339818101604052810190620000389190620002ec565b6001600081905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620000a85750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80620000e05750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b1562000118576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606481111562000154576040517f721dbfea00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508060e08181525050505050506200035e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002348262000207565b9050919050565b6000620002488262000227565b9050919050565b6200025a816200023b565b81146200026657600080fd5b50565b6000815190506200027a816200024f565b92915050565b6200028b8162000227565b81146200029757600080fd5b50565b600081519050620002ab8162000280565b92915050565b6000819050919050565b620002c681620002b1565b8114620002d257600080fd5b50565b600081519050620002e681620002bb565b92915050565b6000806000806080858703121562000309576200030862000202565b5b6000620003198782880162000269565b94505060206200032c878288016200029a565b93505060406200033f878288016200029a565b92505060606200035287828801620002d5565b91505092959194509250565b60805160a05160c05160e051610ff2620003f36000396000818161061d01528181610668015261083d0152600081816101d6015281816103b8015281816106b0015281816106dc015281816108f3015261095b01526000818161068c01528181610888015261099201526000818161057f01528181610763015281816108aa015281816109150152610a0f0152610ff26000f3fe60806040526004361061007f5760003560e01c8063a5ff76511161004e578063a5ff765114610134578063ca4b208b1461015f578063d264e05e1461018a578063fc0c546a146101a157610086565b80635431c94e1461008b5780635e64f769146100b45780637c6bc9be146100dd578063a001ecdd1461010957610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610c43565b6101cc565b005b3480156100c057600080fd5b506100db60048036038101906100d69190610cc1565b6103ae565b005b3480156100e957600080fd5b506100f2610578565b604051610100929190610d07565b60405180910390f35b34801561011557600080fd5b5061011e610666565b60405161012b9190610d30565b60405180910390f35b34801561014057600080fd5b5061014961068a565b6040516101569190610d5a565b60405180910390f35b34801561016b57600080fd5b506101746106ae565b6040516101819190610d5a565b60405180910390f35b34801561019657600080fd5b5061019f6106d2565b005b3480156101ad57600080fd5b506101b6610a0d565b6040516101c39190610dd4565b60405180910390f35b6101d4610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610259576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102949190610d5a565b602060405180830381865afa1580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d59190610e1b565b905060008103610311576040517f62f3ba9700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033c82828573ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f77023e19c7343ad491fd706c36335ca0e738340a91f29b1fd81e2673d44896c4836040516103999190610d30565b60405180910390a3506103aa610af6565b5050565b6103b6610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043b576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60004790506000810361047a576040517fbd473a6100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516104a090610e79565b60006040518083038185875af1925050503d80600081146104dd576040519150601f19603f3d011682016040523d82523d6000602084013e6104e2565b606091505b505090508061051d576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167fc07fe7feb7058dad0753db9932151a3c26ff6cbe43e064107778cf55fc21c66c836040516105639190610d30565b60405180910390a25050610575610af6565b50565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105d69190610d5a565b602060405180830381865afa1580156105f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106179190610e1b565b905060647f0000000000000000000000000000000000000000000000000000000000000000826106479190610ebd565b6106519190610f2e565b9150818161065f9190610f5f565b9250509091565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6106da610a31565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461075f576040517f03809fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107ba9190610d5a565b602060405180830381865afa1580156107d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fb9190610e1b565b905060008103610837576040517f6ca733da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060647f0000000000000000000000000000000000000000000000000000000000000000836108679190610ebd565b6108719190610f2e565b9050600081836108819190610f5f565b90506108ee7f0000000000000000000000000000000000000000000000000000000000000000827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b6109597f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a779092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f35a94547fa72a5dad027c1dd9c2684df19216418908bd0cb2826d81f1de0548f83856040516109f8929190610d07565b60405180910390a3505050610a0b610af6565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600260005403610a6d576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b610af1838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401610aaa929190610f93565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b00565b505050565b6001600081905550565b600080602060008451602086016000885af180610b23576040513d6000823e3d81fd5b3d925060005191505060008214610b3e576001811415610b5a565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b15610b9c57836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401610b939190610d5a565b60405180910390fd5b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bd282610ba7565b9050919050565b6000610be482610bc7565b9050919050565b610bf481610bd9565b8114610bff57600080fd5b50565b600081359050610c1181610beb565b92915050565b610c2081610bc7565b8114610c2b57600080fd5b50565b600081359050610c3d81610c17565b92915050565b60008060408385031215610c5a57610c59610ba2565b5b6000610c6885828601610c02565b9250506020610c7985828601610c2e565b9150509250929050565b6000610c8e82610ba7565b9050919050565b610c9e81610c83565b8114610ca957600080fd5b50565b600081359050610cbb81610c95565b92915050565b600060208284031215610cd757610cd6610ba2565b5b6000610ce584828501610cac565b91505092915050565b6000819050919050565b610d0181610cee565b82525050565b6000604082019050610d1c6000830185610cf8565b610d296020830184610cf8565b9392505050565b6000602082019050610d456000830184610cf8565b92915050565b610d5481610bc7565b82525050565b6000602082019050610d6f6000830184610d4b565b92915050565b6000819050919050565b6000610d9a610d95610d9084610ba7565b610d75565b610ba7565b9050919050565b6000610dac82610d7f565b9050919050565b6000610dbe82610da1565b9050919050565b610dce81610db3565b82525050565b6000602082019050610de96000830184610dc5565b92915050565b610df881610cee565b8114610e0357600080fd5b50565b600081519050610e1581610def565b92915050565b600060208284031215610e3157610e30610ba2565b5b6000610e3f84828501610e06565b91505092915050565b600081905092915050565b50565b6000610e63600083610e48565b9150610e6e82610e53565b600082019050919050565b6000610e8482610e56565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ec882610cee565b9150610ed383610cee565b9250828202610ee181610cee565b91508282048414831517610ef857610ef7610e8e565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f3982610cee565b9150610f4483610cee565b925082610f5457610f53610eff565b5b828204905092915050565b6000610f6a82610cee565b9150610f7583610cee565b9250828203905081811115610f8d57610f8c610e8e565b5b92915050565b6000604082019050610fa86000830185610d4b565b610fb56020830184610cf8565b939250505056fea2646970667358221220c7b5a4bcde69a1a812ba33d106351535170badfa16bb72ca33dd484e05047c4864736f6c63430008140033";
