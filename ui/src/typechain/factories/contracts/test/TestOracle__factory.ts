/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestOracle,
  TestOracleInterface,
} from "../../../contracts/test/TestOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ethOutput",
        type: "uint256",
      },
    ],
    name: "getTokenValueOfEth",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenInput",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610110806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d1eca9cf14602d575b600080fd5b603c6038366004605f565b604e565b60405190815260200160405180910390f35b600060598260026077565b92915050565b600060208284031215607057600080fd5b5035919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161560d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50029056fea26469706673582212207947d176fb8e2b2e7f0afe41e525980f396ed3a8965040b679c120ed06c051f464736f6c634300080f0033";

type TestOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestOracle__factory extends ContractFactory {
  constructor(...args: TestOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestOracle> {
    return super.deploy(overrides || {}) as Promise<TestOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestOracle {
    return super.attach(address) as TestOracle;
  }
  override connect(signer: Signer): TestOracle__factory {
    return super.connect(signer) as TestOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestOracleInterface {
    return new utils.Interface(_abi) as TestOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestOracle {
    return new Contract(address, _abi, signerOrProvider) as TestOracle;
  }
}
