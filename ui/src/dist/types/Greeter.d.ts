import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface GreeterInterface extends utils.Interface {
    functions: {
        "addGreet()": FunctionFragment;
        "getGreetCount(address)": FunctionFragment;
        "getGreets(address)": FunctionFragment;
        "withdrawGreet(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addGreet" | "getGreetCount" | "getGreets" | "withdrawGreet"): FunctionFragment;
    encodeFunctionData(functionFragment: "addGreet", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGreetCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getGreets", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawGreet", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addGreet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGreetCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGreets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawGreet", data: BytesLike): Result;
    events: {};
}
export interface Greeter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GreeterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addGreet(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGreetCount(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGreets(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawGreet(amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addGreet(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGreetCount(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getGreets(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    withdrawGreet(amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGreet(overrides?: CallOverrides): Promise<void>;
        getGreetCount(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getGreets(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawGreet(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addGreet(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGreetCount(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getGreets(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawGreet(amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGreet(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGreetCount(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGreets(person: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawGreet(amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
