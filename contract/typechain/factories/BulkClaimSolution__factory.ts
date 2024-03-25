/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BulkClaimSolution,
  BulkClaimSolutionInterface,
} from "../BulkClaimSolution";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "engine_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "taskids_",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "gas_",
        type: "uint256",
      },
    ],
    name: "claimSolutionBulk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "engine",
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
  "0x608060405234801561001057600080fd5b5060405161031038038061031083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61027d806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806304c5783a1461003b578063c9d4623f14610050575b600080fd5b61004e610049366004610160565b61007f565b005b600054610063906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b60005b8281101561015a57600084848381811061009e5761009e6101db565b905060200201356040516024016100b791815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166377286d1760e01b17905260005490519192506001600160a01b03169084906101009084906101f1565b60006040518083038160008787f1925050503d806000811461013e576040519150601f19603f3d011682016040523d82523d6000602084013e610143565b606091505b50505050808061015290610220565b915050610082565b50505050565b60008060006040848603121561017557600080fd5b833567ffffffffffffffff8082111561018d57600080fd5b818601915086601f8301126101a157600080fd5b8135818111156101b057600080fd5b8760208260051b85010111156101c557600080fd5b6020928301989097509590910135949350505050565b634e487b7160e01b600052603260045260246000fd5b6000825160005b8181101561021257602081860181015185830152016101f8565b506000920191825250919050565b60006001820161024057634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212203432bcf3118b4773f82e568d8f33c0b568629aa6c6e37bb10c06d502157e993664736f6c63430008130033";

type BulkClaimSolutionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BulkClaimSolutionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BulkClaimSolution__factory extends ContractFactory {
  constructor(...args: BulkClaimSolutionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    engine_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BulkClaimSolution> {
    return super.deploy(engine_, overrides || {}) as Promise<BulkClaimSolution>;
  }
  getDeployTransaction(
    engine_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(engine_, overrides || {});
  }
  attach(address: string): BulkClaimSolution {
    return super.attach(address) as BulkClaimSolution;
  }
  connect(signer: Signer): BulkClaimSolution__factory {
    return super.connect(signer) as BulkClaimSolution__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BulkClaimSolutionInterface {
    return new utils.Interface(_abi) as BulkClaimSolutionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BulkClaimSolution {
    return new Contract(address, _abi, signerOrProvider) as BulkClaimSolution;
  }
}
