/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CryptoDevsDAOInterface extends ethers.utils.Interface {
  functions: {
    "createProposal(uint256,uint8)": FunctionFragment;
    "executeProposal(uint256)": FunctionFragment;
    "members(address)": FunctionFragment;
    "numProposals()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "quit()": FunctionFragment;
    "tokenLockedUp(uint256)": FunctionFragment;
    "totalVotingPower()": FunctionFragment;
    "voteOnProposal(uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createProposal",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "members", values: [string]): string;
  encodeFunctionData(
    functionFragment: "numProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "quit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenLockedUp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalVotingPower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "voteOnProposal",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "members", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenLockedUp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalVotingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteOnProposal",
    data: BytesLike
  ): Result;

  events: {};
}

export class CryptoDevsDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CryptoDevsDAOInterface;

  functions: {
    createProposal(
      _forTokenId: BigNumberish,
      _proposalType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeProposal(
      _proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    members(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { joinedAt: BigNumber }>;

    numProposals(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, boolean, number] & {
        nftTokenId: BigNumber;
        deadline: BigNumber;
        yayVotes: BigNumber;
        nayVotes: BigNumber;
        executed: boolean;
        proposalType: number;
      }
    >;

    quit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenLockedUp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalVotingPower(overrides?: CallOverrides): Promise<[BigNumber]>;

    voteOnProposal(
      _proposalId: BigNumberish,
      _vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createProposal(
    _forTokenId: BigNumberish,
    _proposalType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeProposal(
    _proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  members(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  numProposals(overrides?: CallOverrides): Promise<BigNumber>;

  onERC721Received(
    arg0: string,
    from: string,
    tokenId: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, boolean, number] & {
      nftTokenId: BigNumber;
      deadline: BigNumber;
      yayVotes: BigNumber;
      nayVotes: BigNumber;
      executed: boolean;
      proposalType: number;
    }
  >;

  quit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenLockedUp(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalVotingPower(overrides?: CallOverrides): Promise<BigNumber>;

  voteOnProposal(
    _proposalId: BigNumberish,
    _vote: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProposal(
      _forTokenId: BigNumberish,
      _proposalType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeProposal(
      _proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    members(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    numProposals(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, boolean, number] & {
        nftTokenId: BigNumber;
        deadline: BigNumber;
        yayVotes: BigNumber;
        nayVotes: BigNumber;
        executed: boolean;
        proposalType: number;
      }
    >;

    quit(overrides?: CallOverrides): Promise<void>;

    tokenLockedUp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalVotingPower(overrides?: CallOverrides): Promise<BigNumber>;

    voteOnProposal(
      _proposalId: BigNumberish,
      _vote: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createProposal(
      _forTokenId: BigNumberish,
      _proposalType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeProposal(
      _proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    members(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    numProposals(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenLockedUp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalVotingPower(overrides?: CallOverrides): Promise<BigNumber>;

    voteOnProposal(
      _proposalId: BigNumberish,
      _vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProposal(
      _forTokenId: BigNumberish,
      _proposalType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeProposal(
      _proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    members(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenLockedUp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalVotingPower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    voteOnProposal(
      _proposalId: BigNumberish,
      _vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
