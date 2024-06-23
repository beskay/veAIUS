/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IVeNFTRenderInterface extends utils.Interface {
  functions: {
    "_tokenURI(uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_tokenURI",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "_tokenURI", data: BytesLike): Result;

  events: {};
}

export interface IVeNFTRender extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVeNFTRenderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _tokenURI(
      _tokenId: BigNumberish,
      _balanceOf: BigNumberish,
      _locked_end: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { output: string }>;
  };

  _tokenURI(
    _tokenId: BigNumberish,
    _balanceOf: BigNumberish,
    _locked_end: BigNumberish,
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    _tokenURI(
      _tokenId: BigNumberish,
      _balanceOf: BigNumberish,
      _locked_end: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _tokenURI(
      _tokenId: BigNumberish,
      _balanceOf: BigNumberish,
      _locked_end: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _tokenURI(
      _tokenId: BigNumberish,
      _balanceOf: BigNumberish,
      _locked_end: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
