/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Voter, VoterInterface } from "../../../contracts/ve/Voter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_votingEscrow",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    name: "Abstained",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "model",
        type: "bytes32",
      },
    ],
    name: "GaugeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "model",
        type: "bytes32",
      },
    ],
    name: "GaugeKilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "model",
        type: "bytes32",
      },
    ],
    name: "GaugeRevived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "model",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "whitelister",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "model",
        type: "bytes32",
      },
    ],
    name: "Whitelisted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_model",
        type: "bytes32",
      },
    ],
    name: "createGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epochVoteEnd",
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
        internalType: "bytes32",
        name: "_model",
        type: "bytes32",
      },
    ],
    name: "getGaugeMultiplier",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isAlive",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isGauge",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isWhitelisted",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_model",
        type: "bytes32",
      },
    ],
    name: "killGauge",
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
    name: "lastVoted",
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
    name: "length",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "modelVote",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "models",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "poke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_model",
        type: "bytes32",
      },
    ],
    name: "reviveGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWeight",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
    name: "usedWeights",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_modelVote",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "_weights",
        type: "uint256[]",
      },
    ],
    name: "vote",
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
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "votes",
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
    name: "votingEscrow",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "weights",
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
        internalType: "bytes32",
        name: "_model",
        type: "bytes32",
      },
    ],
    name: "whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0346100d157601f61156238819003918201601f19168301916001600160401b038311848410176100d6578084926020946040528339810103126100d157516001600160a01b039081811681036100d1576000543360018060a01b0319821617600055604051923391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360805261147590816100ed823960805181818161083e015281816109c501528181610b4601528181610ee101528181610f5e01528181610fa9015261127b0152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816301a5e3fe14610cab575080630c29575514610aa25780631b8dd06014610a755780631f7b6d3214610a57578063310bd74b1461094e57806332145f901461086d5780634f2bfe5b1461082a578063591e5582146107405780635a1fdbc0146106fa5780635b0c8a63146106c95780636a030ca91461067b578063715018a61461062157806379e93824146105f95780637addf675146105d15780637eca406f146105a757806382fe6eae146105035780638da5cb5b146104dc57806396c82e57146104be578063afb40c8e1461041e578063b65a78b5146103f2578063ecc44a381461038e578063f2fde38b146102c3578063f3594be01461029b5763f93151571461012d57600080fd5b34610297576020806003193601126102935783359182845284825260ff81852054166102675783546001600160a01b03163303610223575b828452600a825280842060ff1990600182825416179055858352600182862091825416179055600354600160401b8110156102105760018101806003558110156101fd5790837f77876d089a7d38cac3b6e288e4ca85feb58464def721da44f6a7c2a00583f3d09392600387527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b015551338152a280f35b634e487b7160e01b855260328652602485fd5b634e487b7160e01b855260418652602485fd5b8284526009825260ff8185205416610165575162461bcd60e51b815280850191909152600c60248201526b085dda1a5d195b1a5cdd195960a21b6044820152606490fd5b5162461bcd60e51b815280850191909152600660248201526565786973747360d01b6044820152606490fd5b8280fd5b5080fd5b5082346102935760203660031901126102935760209282913581526008845220549051908152f35b50829034610293576020366003190112610293576001600160a01b0382358181169391929084900361038a576102f7610d3a565b831561033857505082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8480fd5b503461029757816003193601126102975762093a809182420492808402938085048214901517156103df5783018093116103cc576020838351908152f35b634e487b7160e01b815260118452602490fd5b634e487b7160e01b825260118552602482fd5b50823461029357602036600319011261029357816020938260ff93358252855220541690519015158152f35b508290346102935760203660031901126102935781359161043d610d3a565b828452600960205260ff828520541661048e575081835260096020528220805460ff19166001179055337fc27d38ad1bdb4164d72e05492b5ce6099b4169e9f20b41d3c7cf35c114a64d5b8380a380f35b6020606492519162461bcd60e51b8352820152600b60248201526a1dda1a5d195b1a5cdd195960aa1b6044820152fd5b50346102975781600319360112610297576020906001549051908152f35b5034610297578160031936011261029757905490516001600160a01b039091168152602090f35b5082903461029357602036600319011261029357813591610522610d3a565b828452600a60205260ff8285205416156105705750818352600a6020528220805460ff191690557fd74a749bb4df681cf3299934daed7f425a12566ad01c4cba314166599b3632e58280a280f35b6020606492519162461bcd60e51b8352820152601260248201527119d85d59d948185b1c9958591e481919585960721b6044820152fd5b5090346105ce5760203660031901126105ce57506105c7602092356113f2565b9051908152f35b80fd5b5082346102935760203660031901126102935760209282913581526002845220549051908152f35b5082346102935760203660031901126102935760209282913581526007845220549051908152f35b82346105ce57806003193601126105ce5761063a610d3a565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5082346102935760203660031901126102935735600354811015610293576003602093527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01549051908152f35b5082346102935781600319360112610293576020928291358152600584528181206024358252845220549051908152f35b5090346105ce57816003193601126105ce576024359235815260066020528181209081548410156105ce575060209261073291610d0c565b91905490519160031b1c8152f35b508290346102935760208060031936011261082657823592610760610d3a565b83855280825260ff8386205416156107f757838552600a825260ff83862054166107c05750828452600a90528220805460ff191660011790557fdc036edc2c876189d8f78d214d657d28a486b78851be01e52717181f351b08338280a280f35b915162461bcd60e51b8152918201526013602482015272676175676520616c726561647920616c69766560681b6044820152606490fd5b915162461bcd60e51b815291820152600b60248201526a6e6f74206120676175676560a81b6044820152606490fd5b8380fd5b5034610297578160031936011261029757517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b509134610297576020908160031936011261029357359283835260068252808320908051808385829554938481520190875285872092875b87828210610938575050506108bc92500383610dbc565b8151906108c882610dde565b936108d582519586610dbc565b828552601f196108e484610dde565b013682870137855b83811061090257866108ff87878b610eb1565b80f35b610933908888526005835283882061091a8288610e1b565b51895283528388205461092d8289610e1b565b52610df6565b6108ec565b85548452600195860195889550930192016108a5565b508290346102935760203660031901126102935781359162093a80804204818102918183041490151715610a4457836109c192610998602093838952600885528689205410610e4f565b845163430c208160e01b8152339181019182526020820192909252909283918291604090910190565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa918215610a3b57508391610a0d575b5015610297576108ff90611259565b610a2e915060203d8111610a34575b610a268183610dbc565b810190610e8c565b836109fe565b503d610a1c565b513d85823e3d90fd5b634e487b7160e01b855260118252602485fd5b50346102975781600319360112610297576020906003549051908152f35b508234610293576020366003190112610293578160209360ff92358152600a855220541690519015158152f35b50346102975760603660031901126102975767ffffffffffffffff833560243582811161038a57610ad69036908701610cd6565b92604435908111610ca757610aee9036908801610cd6565b909162093a809788420489810299818b041490151715610c9457848852610b1f60209960088b52888a205410610e4f565b865163430c208160e01b815233828201908152602081018790528a908290819060400103817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610c8a578991610c6d575b5015610c6957828603610c345750838752600888524286882055610ba185610dde565b94610bae87519687610dbc565b8086528886019060051b820191368311610c305789915b838210610c215750505050610be5610bdc82610dde565b95519586610dbc565b8085528685019060051b820191368311610c1d57905b828210610c0e57866108ff878787610eb1565b81358152908701908701610bfb565b8680fd5b81358152908201908201610bc5565b8880fd5b865162461bcd60e51b8152908101899052600f60248201526e0d8cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b8780fd5b610c8491508a3d8c11610a3457610a268183610dbc565b38610b7e565b88513d8b823e3d90fd5b634e487b7160e01b885260119052602487fd5b8580fd5b9293905034610826576020366003190112610826573583526009602090815292205460ff1615158152f35b9181601f84011215610d075782359167ffffffffffffffff8311610d07576020808501948460051b010111610d0757565b600080fd5b8054821015610d245760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b6000546001600160a01b03163303610d4e57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b67ffffffffffffffff8111610da657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610da657604052565b67ffffffffffffffff8111610da65760051b60200190565b6000198114610e055760010190565b634e487b7160e01b600052601160045260246000fd5b8051821015610d245760209160051b010190565b8115610e39570490565b634e487b7160e01b600052601260045260246000fd5b15610e5657565b60405162461bcd60e51b815260206004820152600e60248201526d0dedcd8f240dccaee40cae0dec6d60931b6044820152606490fd5b90816020910312610d0757518015158103610d075790565b91908201809211610e0557565b9291610ebc84611259565b81516040516339f890b560e21b815260048101869052946000929091906020876024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa96871561124157849761120d575b508384978596865b8581106111e95750865b85811061100e5750505050505082610f5c575b610f4e6040939495600154610ea4565b600155815260076020522055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163b156102975760405163fd4a77f160e01b815260048101829052948286602481837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af1958615611003576040949596610fee575b5094939250610f3e565b92610ffc610f4e9294610d92565b9290610fe4565b6040513d85823e3d90fd5b6110188183610e1b565b51808952600a60205260ff60408a20541661103d575b5061103890610df6565b610f2b565b61104a82879d9b9d610e1b565b5180858102048514811517156111d55785856110669202610e2f565b9b888a52600560205260408a20828b5260205260408a20546111a0578c1561116d57888a52600660205260408a20805490600160401b821015611159576111158f61103896959460408f8f6110c5888698600161111b9b018155610d0c565b81549060031b908b821b91600019901b191617905588825260026020528282206110f0868254610ea4565b9055815260056020528181208882526020522061110e838254610ea4565b9055610ea4565b9c610ea4565b9c604051918a8352602083015260408201527f51d9b06f0a770c3d095eae34a710cd6cd036a1dde5859060f74e233d3d7f2dfc60603392a29061102e565b634e487b7160e01b8c52604160045260248cfd5b60405162461bcd60e51b815260206004820152600b60248201526a1e995c9bc81dd95a59da1d60aa1b6044820152606490fd5b60405162461bcd60e51b815260206004820152600d60248201526c6e6f6e7a65726f20766f74657360981b6044820152606490fd5b634e487b7160e01b8a52601160045260248afd5b92611202611208916111fb8688610e1b565b5190610ea4565b93610df6565b610f21565b9096506020813d602011611239575b8161122960209383610dbc565b8101031261082657519538610f19565b3d915061121c565b6040513d86823e3d90fd5b91908203918211610e0557565b600081815260206006815260408083209384548495855b8281106113475750507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169050803b1561038a57848091602485518094819363c1f0fb9f60e01b83528760048401525af1801561133d5761132a575b506112e2600195865461124c565b855583526007825282818120556006825282209182549281815583611309575b5050505050565b815220908101905b81811061131f578080611302565b600081558201611311565b61133690949194610d92565b92386112d4565b83513d87823e3d90fd5b6113518183610d0c565b90549060031b1c848852600590818852868920818a528852868920549182611385575b50505061138090610df6565b611270565b6113de8361138095949c8c7fa9f3ca5f8a9e1580edb2741e0ba560084ec72e0067ba3423f9e9327a176882db958c958e600281528784206113c787825461124c565b90558d84525285822091528c528c84812055610ea4565b9a8151908882528a820152a1903880611374565b60015490811561143157600052600260205260406000205490670de0b6b3a764000091828102928184041490151715610e055761142e91610e2f565b90565b5050670de0b6b3a76400009056fea26469706673582212201e71fbe9330e001746a3f5dbfd4b7e825c2173e92b2a04767a647caa1884cf4c64736f6c63430008130033";

type VoterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VoterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Voter__factory extends ContractFactory {
  constructor(...args: VoterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _votingEscrow: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Voter> {
    return super.deploy(_votingEscrow, overrides || {}) as Promise<Voter>;
  }
  override getDeployTransaction(
    _votingEscrow: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_votingEscrow, overrides || {});
  }
  override attach(address: string): Voter {
    return super.attach(address) as Voter;
  }
  override connect(signer: Signer): Voter__factory {
    return super.connect(signer) as Voter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VoterInterface {
    return new utils.Interface(_abi) as VoterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Voter {
    return new Contract(address, _abi, signerOrProvider) as Voter;
  }
}
