/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SubmitTask, SubmitTaskInterface } from "../SubmitTask";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IArbius",
        name: "_arbius",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_arbiusToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_model",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "submitTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523461023c576104ff8038038061001981610241565b928339810160808282031261023c5781516001600160a01b0392908381169081900361023c576020938483015190811680910361023c57604083015193606084015160018060401b039485821161023c570194601f9282848801121561023c5786519686881161021357601f19976100968682018a168b01610241565b948186528a828401011161023c57899160005b828110610229575050906000918501015260018060a01b03199485600054161760005560019485541617845560025580519384116102135760039586548481811c91168015610209575b828210146101f3578381116101ad575b508092851160011461014a57508394509083929160009461013f575b50501b9160001990841b1c19161790555b60405161029890816102678239f35b01519250388061011f565b9294849081168760005284600020946000905b88838310610193575050501061017b575b505050811b019055610130565b015160001983861b60f8161c1916905538808061016e565b85870151885590960195948501948793509081019061015d565b87600052816000208480880160051c8201928489106101ea575b0160051c019085905b8281106101de575050610103565b600081550185906101d0565b925081926101c7565b634e487b7160e01b600052602260045260246000fd5b90607f16906100f3565b634e487b7160e01b600052604160045260246000fd5b81810184015187820185015283016100a9565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176102135760405256fe608080604052600436101561001357600080fd5b600090813560e01c634abbef9b1461002a57600080fd5b81903461022757816003193601126102275760018060a01b03600191818354168285541663095ea7b360e01b8352600483015260001960248301528160448160209788945af1801561021c576101e1575b5083541660025491604051926308745dd160e01b8452856004850152306024850152604484015267016345785d8a0000606484015260a0608484015284906003549081811c9181811680156101d7575b87841081146101c357928892879592868a98968460a483015291826000146101a0575050600114610145575b50509083809203925af1801561013a5761010f578280f35b813d8311610133575b610122818361022a565b810103126101305738808280f35b80fd5b503d610118565b6040513d85823e3d90fd5b600384528392507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b82841061018457505050830160c40183806100f7565b805460c4858b01015289978997508b955090930192810161016e565b9095945060c492508593915060ff191682840152151560051b82010191926100f7565b634e487b7160e01b89526022600452602489fd5b92607f16926100cb565b8381813d8311610215575b6101f6818361022a565b8101031261021157518015150361020d573861007b565b8380fd5b8480fd5b503d6101ec565b6040513d87823e3d90fd5b50fd5b90601f8019910116810190811067ffffffffffffffff82111761024c57604052565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ba8e7b0b15b0849edde8148d6ccb3d07f4a0d2bd52ec13c1778c4b1eb872477064736f6c63430008130033";

type SubmitTaskConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubmitTaskConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubmitTask__factory extends ContractFactory {
  constructor(...args: SubmitTaskConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _arbius: string,
    _arbiusToken: string,
    _model: BytesLike,
    _input: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SubmitTask> {
    return super.deploy(
      _arbius,
      _arbiusToken,
      _model,
      _input,
      overrides || {}
    ) as Promise<SubmitTask>;
  }
  getDeployTransaction(
    _arbius: string,
    _arbiusToken: string,
    _model: BytesLike,
    _input: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _arbius,
      _arbiusToken,
      _model,
      _input,
      overrides || {}
    );
  }
  attach(address: string): SubmitTask {
    return super.attach(address) as SubmitTask;
  }
  connect(signer: Signer): SubmitTask__factory {
    return super.connect(signer) as SubmitTask__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubmitTaskInterface {
    return new utils.Interface(_abi) as SubmitTaskInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubmitTask {
    return new Contract(address, _abi, signerOrProvider) as SubmitTask;
  }
}
