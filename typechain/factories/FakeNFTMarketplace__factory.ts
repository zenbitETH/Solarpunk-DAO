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
import type {
  FakeNFTMarketplace,
  FakeNFTMarketplaceInterface,
} from "../FakeNFTMarketplace";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "available",
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
    name: "nftPurchasePrice",
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
    inputs: [],
    name: "nftSalePrice",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "sell",
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
    name: "tokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526108a4806100136000396000f3fe6080604052600436106100705760003560e01c806396e494e81161004e57806396e494e81461011a578063e4849b3214610157578063ede2874414610180578063efef39a1146101ab57610070565b80634f64b2be146100755780636352211e146100b25780638cc6b383146100ef575b600080fd5b34801561008157600080fd5b5061009c600480360381019061009791906105a7565b6101c7565b6040516100a99190610689565b60405180910390f35b3480156100be57600080fd5b506100d960048036038101906100d491906105a7565b6101fa565b6040516100e69190610689565b60405180910390f35b3480156100fb57600080fd5b50610104610236565b604051610111919061073f565b60405180910390f35b34801561012657600080fd5b50610141600480360381019061013c91906105a7565b610241565b60405161014e91906106a4565b60405180910390f35b34801561016357600080fd5b5061017e600480360381019061017991906105a7565b6102bc565b005b34801561018c57600080fd5b50610195610449565b6040516101a2919061073f565b60405180910390f35b6101c560048036038101906101c091906105a7565b610454565b005b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b66071afd498d000081565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156102b257600190506102b7565b600090505b919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461035c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103539061071f565b60405180910390fd5b66071afd498d00004710156103a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039d906106ff565b60405180910390fd5b600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff166108fc66071afd498d00009081150290604051600060405180830381858888f19350505050158015610445573d6000803e3d6000fd5b5050565b66038d7ea4c6800081565b66038d7ea4c68000341461049d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610494906106df565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461053e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610535906106bf565b60405180910390fd5b3360008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506105a181610857565b92915050565b6000602082840312156105b957600080fd5b60006105c784828501610592565b91505092915050565b6105d98161076b565b82525050565b6105e88161077d565b82525050565b60006105fb600f8361075a565b9150610606826107b3565b602082019050919050565b600061061e601a8361075a565b9150610629826107dc565b602082019050919050565b600061064160138361075a565b915061064c82610805565b602082019050919050565b600061066460108361075a565b915061066f8261082e565b602082019050919050565b610683816107a9565b82525050565b600060208201905061069e60008301846105d0565b92915050565b60006020820190506106b960008301846105df565b92915050565b600060208201905081810360008301526106d8816105ee565b9050919050565b600060208201905081810360008301526106f881610611565b9050919050565b6000602082019050818103600083015261071881610634565b9050919050565b6000602082019050818103600083015261073881610657565b9050919050565b6000602082019050610754600083018461067a565b92915050565b600082825260208201905092915050565b600061077682610789565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4d4b5f4e4f545f464f525f53414c450000000000000000000000000000000000600082015250565b7f4d4b5f4e4f545f454e4f5547485f4554485f535550504c494544000000000000600082015250565b7f4d4b5f4e4f545f454e4f5547485f46554e445300000000000000000000000000600082015250565b7f4d4b5f494e56414c49445f4f574e455200000000000000000000000000000000600082015250565b610860816107a9565b811461086b57600080fd5b5056fea264697066735822122041fbcfc36d3e48d6d77fd63a9766f49517f5f3eebffae75dc3fd27157c7a30de64736f6c63430008040033";

export class FakeNFTMarketplace__factory extends ContractFactory {
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
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<FakeNFTMarketplace> {
    return super.deploy(overrides || {}) as Promise<FakeNFTMarketplace>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FakeNFTMarketplace {
    return super.attach(address) as FakeNFTMarketplace;
  }
  connect(signer: Signer): FakeNFTMarketplace__factory {
    return super.connect(signer) as FakeNFTMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeNFTMarketplaceInterface {
    return new utils.Interface(_abi) as FakeNFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeNFTMarketplace {
    return new Contract(address, _abi, signerOrProvider) as FakeNFTMarketplace;
  }
}
