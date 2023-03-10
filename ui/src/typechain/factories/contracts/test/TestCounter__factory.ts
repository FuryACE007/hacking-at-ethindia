/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestCounter,
  TestCounterInterface,
} from "../../../contracts/test/TestCounter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CalledFrom",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
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
    name: "counters",
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
        name: "repeat",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "gasWaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "justemit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "offset",
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
    ],
    name: "xxx",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061032b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063a5e9585f11610050578063a5e9585f1461009c578063be65ab8c146100ce578063d5556544146100ee57600080fd5b806306661abd14610077578063278ddd3c14610081578063a1b4689014610089575b600080fd5b61007f6100f7565b005b61007f610124565b61007f6100973660046101a4565b610159565b6100bc6100aa366004610220565b60016020526000908152604090205481565b60405190815260200160405180910390f35b6100bc6100dc366004610239565b60006020819052908152604090205481565b6100bc60025481565b336000908152602081905260409020546101129060016102a5565b33600090815260208190526040902055565b6040513381527ffb3b4d6258432a9a3d78dd9bffbcb6cfb1bd94f58da35fd530d08da7d1d058329060200160405180910390a1565b60015b83811161019e5760028054906000610173836102bd565b9091555050600254600090815260016020526040902081905580610196816102bd565b91505061015c565b50505050565b6000806000604084860312156101b957600080fd5b83359250602084013567ffffffffffffffff808211156101d857600080fd5b818601915086601f8301126101ec57600080fd5b8135818111156101fb57600080fd5b87602082850101111561020d57600080fd5b6020830194508093505050509250925092565b60006020828403121561023257600080fd5b5035919050565b60006020828403121561024b57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461026f57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156102b8576102b8610276565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036102ee576102ee610276565b506001019056fea2646970667358221220740769c168bce7961b27aed1cde9db04e1944ca1ed2f14d3aa763891bfd7944564736f6c634300080f0033";

type TestCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCounter__factory extends ContractFactory {
  constructor(...args: TestCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestCounter> {
    return super.deploy(overrides || {}) as Promise<TestCounter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestCounter {
    return super.attach(address) as TestCounter;
  }
  override connect(signer: Signer): TestCounter__factory {
    return super.connect(signer) as TestCounter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCounterInterface {
    return new utils.Interface(_abi) as TestCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCounter {
    return new Contract(address, _abi, signerOrProvider) as TestCounter;
  }
}
