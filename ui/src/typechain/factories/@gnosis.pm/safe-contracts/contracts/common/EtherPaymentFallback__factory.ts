/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  EtherPaymentFallback,
  EtherPaymentFallbackInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/common/EtherPaymentFallback";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeReceived",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607a8061001e6000396000f3fe608060405236603f5760405134815233907f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d9060200160405180910390a2005b600080fdfea26469706673582212205140b6787d8e4f04d54253c00019b5a4f09054ecb2ac908b523f87f2f55226f264736f6c634300080f0033";

type EtherPaymentFallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EtherPaymentFallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EtherPaymentFallback__factory extends ContractFactory {
  constructor(...args: EtherPaymentFallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EtherPaymentFallback> {
    return super.deploy(overrides || {}) as Promise<EtherPaymentFallback>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EtherPaymentFallback {
    return super.attach(address) as EtherPaymentFallback;
  }
  override connect(signer: Signer): EtherPaymentFallback__factory {
    return super.connect(signer) as EtherPaymentFallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EtherPaymentFallbackInterface {
    return new utils.Interface(_abi) as EtherPaymentFallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EtherPaymentFallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EtherPaymentFallback;
  }
}
