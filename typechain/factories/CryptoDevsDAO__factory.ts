/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CryptoDevsDAO, CryptoDevsDAOInterface } from "../CryptoDevsDAO";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "marketplaceContract",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_forTokenId",
        type: "uint256",
      },
      {
        internalType: "enum CryptoDevsDAO.ProposalType",
        name: "_proposalType",
        type: "uint8",
      },
    ],
    name: "createProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "members",
    outputs: [
      {
        internalType: "uint256",
        name: "joinedAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numProposals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "nftTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "yayVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nayVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "enum CryptoDevsDAO.ProposalType",
        name: "proposalType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenLockedUp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalVotingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "enum CryptoDevsDAO.VoteType",
        name: "_vote",
        type: "uint8",
      },
    ],
    name: "voteOnProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162002276380380620022768339818101604052810190620000299190620000c9565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000158565b600081519050620000c3816200013e565b92915050565b60008060408385031215620000dd57600080fd5b6000620000ed85828601620000b2565b92505060206200010085828601620000b2565b9150509250929050565b600062000117826200011e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b62000149816200010a565b81146200015557600080fd5b50565b61210e80620001686000396000f3fe6080604052600436106100955760003560e01c8063400e394911610059578063400e3949146101c0578063671b3793146101eb578063ba2e28b114610216578063efafb22e14610253578063fc2b8cc31461027c5761009c565b8063013cf08b1461009e57806308ae4b0c146100e05780630d61b5191461011d578063150b7a021461014657806332c378ea146101835761009c565b3661009c57005b005b3480156100aa57600080fd5b506100c560048036038101906100c091906115fa565b610293565b6040516100d796959493929190611abc565b60405180910390f35b3480156100ec57600080fd5b5061010760048036038101906101029190611504565b6102e9565b6040516101149190611aa1565b60405180910390f35b34801561012957600080fd5b50610144600480360381019061013f91906115fa565b610307565b005b34801561015257600080fd5b5061016d60048036038101906101689190611556565b61070d565b60405161017a9190611926565b60405180910390f35b34801561018f57600080fd5b506101aa60048036038101906101a5919061164c565b6109ab565b6040516101b79190611aa1565b60405180910390f35b3480156101cc57600080fd5b506101d5610d6a565b6040516101e29190611aa1565b60405180910390f35b3480156101f757600080fd5b50610200610d70565b60405161020d9190611aa1565b60405180910390f35b34801561022257600080fd5b5061023d600480360381019061023891906115fa565b610d76565b60405161024a919061190b565b60405180910390f35b34801561025f57600080fd5b5061027a60048036038101906102759190611688565b610d96565b005b34801561028857600080fd5b5061029161106f565b005b60026020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900460ff16908060040160019054906101000a900460ff16905086565b60036020528060005260406000206000915090508060000154905081565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805490501161038f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038690611a01565b60405180910390fd5b600060026000838152602001908152602001600020905042816001015411156103ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e490611961565b60405180910390fd5b600015158160040160009054906101000a900460ff16151514610445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043c90611a41565b60405180910390fd5b60018160040160006101000a81548160ff02191690831515021790555080600301548160020154111561070957600060018111156104ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160040160019054906101000a900460ff1660018111156104f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156106785760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ede287446040518163ffffffff1660e01b815260040160206040518083038186803b15801561056557600080fd5b505afa158015610579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059d9190611623565b9050804710156105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990611a81565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663efef39a18284600001546040518363ffffffff1660e01b81526004016106409190611aa1565b6000604051808303818588803b15801561065957600080fd5b505af115801561066d573d6000803e3d6000fd5b505050505050610708565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4849b3282600001546040518263ffffffff1660e01b81526004016106d59190611aa1565b600060405180830381600087803b1580156106ef57600080fd5b505af1158015610703573d6000803e3d6000fd5b505050505b5b5050565b60003073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016107819190611aa1565b60206040518083038186803b15801561079957600080fd5b505afa1580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d1919061152d565b73ffffffffffffffffffffffffffffffffffffffff1614610827576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081e90611a61565b60405180910390fd5b600015156004600085815260200190815260200160002060009054906101000a900460ff1615151461088e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610885906119a1565b60405180910390fd5b60016004600085815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600101805490501415610917574281600001819055505b6006600081548092919061092a90611d83565b9190505550600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184908060018154018082558091505060019003906000526020600020016000909190919091505563150b7a0260e01b915050949350505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054905011610a34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2b90611a01565b60405180910390fd5b60006001811115610a6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b826001811115610aa7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610b9a5760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166396e494e8846040518263ffffffff1660e01b8152600401610b069190611aa1565b60206040518083038186803b158015610b1e57600080fd5b505afa158015610b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5691906115d1565b610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c906119c1565b60405180910390fd5b610cb1565b3073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610c0a9190611aa1565b60206040518083038186803b158015610c2257600080fd5b505afa158015610c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5a919061152d565b73ffffffffffffffffffffffffffffffffffffffff1614610cb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca790611981565b60405180910390fd5b5b60006002600060055481526020019081526020016000209050838160000181905550607842610ce09190611b95565b8160010181905550828160040160016101000a81548160ff02191690836001811115610d35577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060056000815480929190610d4d90611d83565b91905055506001600554610d619190611c76565b91505092915050565b60055481565b60065481565b60046020528060005260406000206000915054906101000a900460ff1681565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054905011610e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1590611a01565b60405180910390fd5b600060026000848152602001908152602001600020905042816001015411610e7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7290611a21565b60405180910390fd5b600015158160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610f10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f07906119e1565b60405180910390fd5b60018160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180549050905060006001811115610fee577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b836001811115611027577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561104d57808260020160008282546110419190611b95565b92505081905550611069565b808260030160008282546110619190611b95565b925050819055505b50505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180549050116110f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ee90611a01565b60405180910390fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061012c81600001544261114d9190611c76565b1161118d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118490611941565b60405180910390fd5b60006006548260010180549050476111a59190611c1c565b6111af9190611beb565b90508160010180549050600660008282546111ca9190611c76565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611217573d6000803e3d6000fd5b5060005b826001018054905081101561135c57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30338660010185815481106112a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001548760020186815481106112ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001546040518563ffffffff1660e01b815260040161131794939291906118b3565b600060405180830381600087803b15801561133157600080fd5b505af1158015611345573d6000803e3d6000fd5b50505050808061135490611d83565b91505061121b565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160006113b591906113cb565b6002820160006113c591906113cb565b50505050565b50805460008255906000526020600020908101906113e991906113ec565b50565b5b808211156114055760008160009055506001016113ed565b5090565b600061141c61141784611b42565b611b1d565b90508281526020810184848401111561143457600080fd5b61143f848285611d43565b509392505050565b60008135905061145681612073565b92915050565b60008151905061146b81612073565b92915050565b6000815190506114808161208a565b92915050565b600082601f83011261149757600080fd5b81356114a7848260208601611409565b91505092915050565b6000813590506114bf816120a1565b92915050565b6000813590506114d4816120b1565b92915050565b6000813590506114e9816120c1565b92915050565b6000815190506114fe816120c1565b92915050565b60006020828403121561151657600080fd5b600061152484828501611447565b91505092915050565b60006020828403121561153f57600080fd5b600061154d8482850161145c565b91505092915050565b6000806000806080858703121561156c57600080fd5b600061157a87828801611447565b945050602061158b87828801611447565b935050604061159c878288016114da565b925050606085013567ffffffffffffffff8111156115b957600080fd5b6115c587828801611486565b91505092959194509250565b6000602082840312156115e357600080fd5b60006115f184828501611471565b91505092915050565b60006020828403121561160c57600080fd5b600061161a848285016114da565b91505092915050565b60006020828403121561163557600080fd5b6000611643848285016114ef565b91505092915050565b6000806040838503121561165f57600080fd5b600061166d858286016114da565b925050602061167e858286016114b0565b9150509250929050565b6000806040838503121561169b57600080fd5b60006116a9858286016114da565b92505060206116ba858286016114c5565b9150509250929050565b6116cd81611caa565b82525050565b6116dc81611cbc565b82525050565b6116eb81611cc8565b82525050565b6116fa81611d31565b82525050565b600061170d601583611b84565b915061171882611e99565b602082019050919050565b6000611730600f83611b84565b915061173b82611ec2565b602082019050919050565b6000611753600983611b84565b915061175e82611eeb565b602082019050919050565b6000611776600c83611b84565b915061178182611f14565b602082019050919050565b6000611799601083611b84565b91506117a482611f3d565b602082019050919050565b60006117bc600d83611b84565b91506117c782611f66565b602082019050919050565b60006117df600c83611b84565b91506117ea82611f8f565b602082019050919050565b6000611802600083611b73565b915061180d82611fb8565b600082019050919050565b6000611825601183611b84565b915061183082611fbb565b602082019050919050565b6000611848601083611b84565b915061185382611fe4565b602082019050919050565b600061186b600983611b84565b91506118768261200d565b602082019050919050565b600061188e601083611b84565b915061189982612036565b602082019050919050565b6118ad81611d27565b82525050565b600060a0820190506118c860008301876116c4565b6118d560208301866116c4565b6118e260408301856118a4565b6118ef60608301846118a4565b8181036080830152611900816117f5565b905095945050505050565b600060208201905061192060008301846116d3565b92915050565b600060208201905061193b60008301846116e2565b92915050565b6000602082019050818103600083015261195a81611700565b9050919050565b6000602082019050818103600083015261197a81611723565b9050919050565b6000602082019050818103600083015261199a81611746565b9050919050565b600060208201905081810360008301526119ba81611769565b9050919050565b600060208201905081810360008301526119da8161178c565b9050919050565b600060208201905081810360008301526119fa816117af565b9050919050565b60006020820190508181036000830152611a1a816117d2565b9050919050565b60006020820190508181036000830152611a3a81611818565b9050919050565b60006020820190508181036000830152611a5a8161183b565b9050919050565b60006020820190508181036000830152611a7a8161185e565b9050919050565b60006020820190508181036000830152611a9a81611881565b9050919050565b6000602082019050611ab660008301846118a4565b92915050565b600060c082019050611ad160008301896118a4565b611ade60208301886118a4565b611aeb60408301876118a4565b611af860608301866118a4565b611b0560808301856116d3565b611b1260a08301846116f1565b979650505050505050565b6000611b27611b38565b9050611b338282611d52565b919050565b6000604051905090565b600067ffffffffffffffff821115611b5d57611b5c611e59565b5b611b6682611e88565b9050602081019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611ba082611d27565b9150611bab83611d27565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611be057611bdf611dcc565b5b828201905092915050565b6000611bf682611d27565b9150611c0183611d27565b925082611c1157611c10611dfb565b5b828204905092915050565b6000611c2782611d27565b9150611c3283611d27565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c6b57611c6a611dcc565b5b828202905092915050565b6000611c8182611d27565b9150611c8c83611d27565b925082821015611c9f57611c9e611dcc565b5b828203905092915050565b6000611cb582611d07565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050611d028261205f565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611d3c82611cf4565b9050919050565b82818337600083830152505050565b611d5b82611e88565b810181811067ffffffffffffffff82111715611d7a57611d79611e59565b5b80604052505050565b6000611d8e82611d27565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611dc157611dc0611dcc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4d494e5f4d454d424552534849505f504552494f440000000000000000000000600082015250565b7f4143544956455f50524f504f53414c0000000000000000000000000000000000600082015250565b7f4e4f545f4f574e45440000000000000000000000000000000000000000000000600082015250565b7f414c52454144595f555345440000000000000000000000000000000000000000600082015250565b7f4e46545f4e4f545f464f525f53414c4500000000000000000000000000000000600082015250565b7f414c52454144595f564f54454400000000000000000000000000000000000000600082015250565b7f4e4f545f415f4d454d4245520000000000000000000000000000000000000000600082015250565b50565b7f494e4143544956455f50524f504f53414c000000000000000000000000000000600082015250565b7f414c52454144595f455845435554454400000000000000000000000000000000600082015250565b7f4d414c4943494f55530000000000000000000000000000000000000000000000600082015250565b7f4e4f545f454e4f5547485f46554e445300000000000000000000000000000000600082015250565b600281106120705761206f611e2a565b5b50565b61207c81611caa565b811461208757600080fd5b50565b61209381611cbc565b811461209e57600080fd5b50565b600281106120ae57600080fd5b50565b600281106120be57600080fd5b50565b6120ca81611d27565b81146120d557600080fd5b5056fea2646970667358221220e044d8d0e3ef0ec0a21ef76a0d5a1a28a8a9ffe1a6d1388bf8564775fac2f45964736f6c63430008040033";

export class CryptoDevsDAO__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    nftContract: string,
    marketplaceContract: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<CryptoDevsDAO> {
    return super.deploy(
      nftContract,
      marketplaceContract,
      overrides || {}
    ) as Promise<CryptoDevsDAO>;
  }
  getDeployTransaction(
    nftContract: string,
    marketplaceContract: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      nftContract,
      marketplaceContract,
      overrides || {}
    );
  }
  attach(address: string): CryptoDevsDAO {
    return super.attach(address) as CryptoDevsDAO;
  }
  connect(signer: Signer): CryptoDevsDAO__factory {
    return super.connect(signer) as CryptoDevsDAO__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoDevsDAOInterface {
    return new utils.Interface(_abi) as CryptoDevsDAOInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CryptoDevsDAO {
    return new Contract(address, _abi, signerOrProvider) as CryptoDevsDAO;
  }
}
