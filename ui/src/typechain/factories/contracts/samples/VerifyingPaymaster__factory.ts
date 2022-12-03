/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../../../contracts/samples/VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
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
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
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
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
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
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200154f3803806200154f833981016040819052620000349162000155565b8162000040336200005f565b6200004b81620000af565b506001600160a01b03166080525062000194565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000b9620000db565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146200013a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200015257600080fd5b50565b600080604083850312156200016957600080fd5b825162000176816200013c565b602084015190925062000189816200013c565b809150509250929050565b608051611398620001b760003960008181610134015261098001526113986000f3fe6080604052600436106100e85760003560e01c8063b0d691fe1161008a578063c399ec8811610059578063c399ec8814610290578063d0e30db0146102a5578063f2fde38b146102ad578063f465c77e146102cd57600080fd5b8063b0d691fe14610200578063bb9fe6bf1461022d578063c23a5cea14610242578063c266f2921461026257600080fd5b8063584465f2116100c6578063584465f214610180578063715018a6146101a05780638da5cb5b146101b5578063a9a23409146101e057600080fd5b80630396cb60146100ed578063205c28781461010257806323d9ac9b14610122575b600080fd5b6101006100fb366004610ff7565b6102fb565b005b34801561010e57600080fd5b5061010061011d366004611046565b610391565b34801561012e57600080fd5b506101567f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018c57600080fd5b5061010061019b366004611072565b61040d565b3480156101ac57600080fd5b5061010061045c565b3480156101c157600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610156565b3480156101ec57600080fd5b506101006101fb36600461108f565b610470565b34801561020c57600080fd5b506001546101569073ffffffffffffffffffffffffffffffffffffffff1681565b34801561023957600080fd5b5061010061048a565b34801561024e57600080fd5b5061010061025d366004611072565b610510565b34801561026e57600080fd5b5061028261027d366004611137565b6105a0565b604051908152602001610177565b34801561029c57600080fd5b50610282610680565b610100610718565b3480156102b957600080fd5b506101006102c8366004611072565b610784565b3480156102d957600080fd5b506102ed6102e8366004611174565b610840565b6040516101779291906111c2565b610303610a6b565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff90911690630396cb609034906024016000604051808303818588803b15801561037557600080fd5b505af1158015610389573d6000803e3d6000fd5b505050505050565b610399610a6b565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b15801561037557600080fd5b610415610a6b565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610464610a6b565b61046e6000610aec565b565b610478610b61565b61048484848484610b85565b50505050565b610492610a6b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104fc57600080fd5b505af1158015610484573d6000803e3d6000fd5b610518610a6b565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561058557600080fd5b505af1158015610599573d6000803e3d6000fd5b5050505050565b6000813560208301356105b6604085018561123d565b6040516105c49291906112a2565b6040519081900390206105da606086018661123d565b6040516105e89291906112a2565b6040805191829003822073ffffffffffffffffffffffffffffffffffffffff909516602083015281019290925260608201526080808201929092529083013560a08083019190915283013560c08083019190915283013560e08083019190915283013561010080830191909152830135610120820152610140015b604051602081830303815290604052805190602001209050919050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071391906112b2565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b15801561058557600080fd5b61078c610a6b565b73ffffffffffffffffffffffffffffffffffffffff8116610834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61083d81610aec565b50565b606060008061084e866105a0565b905036600061086161012089018961123d565b909250905060006108736014836112cb565b905080604014806108845750806041145b61091257604080517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482015260248101919091527f566572696679696e675061796d61737465723a20696e76616c6964207369676e60448201527f6174757265206c656e67746820696e207061796d6173746572416e6444617461606482015260840161082b565b6109686109228360148187611309565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109629250889150610be79050565b90610c22565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614806109bf575032155b610a4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566572696679696e675061796d61737465723a2077726f6e67207369676e617460448201527f7572650000000000000000000000000000000000000000000000000000000000606482015260840161082b565b505060408051602081019091526000808252909890975095505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461046e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161082b565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461046e57600080fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6d757374206f7665727269646500000000000000000000000000000000000000604482015260640161082b565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01610663565b6000806000610c318585610c46565b91509150610c3e81610c8b565b509392505050565b6000808251604103610c7c5760208301516040840151606085015160001a610c7087828585610edf565b94509450505050610c84565b506000905060025b9250929050565b6000816004811115610c9f57610c9f611333565b03610ca75750565b6001816004811115610cbb57610cbb611333565b03610d22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161082b565b6002816004811115610d3657610d36611333565b03610d9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161082b565b6003816004811115610db157610db1611333565b03610e3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161082b565b6004816004811115610e5257610e52611333565b0361083d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161082b565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610f165750600090506003610fee565b8460ff16601b14158015610f2e57508460ff16601c14155b15610f3f5750600090506004610fee565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610f93573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116610fe757600060019250925050610fee565b9150600090505b94509492505050565b60006020828403121561100957600080fd5b813563ffffffff8116811461101d57600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461083d57600080fd5b6000806040838503121561105957600080fd5b823561106481611024565b946020939093013593505050565b60006020828403121561108457600080fd5b813561101d81611024565b600080600080606085870312156110a557600080fd5b8435600381106110b457600080fd5b9350602085013567ffffffffffffffff808211156110d157600080fd5b818701915087601f8301126110e557600080fd5b8135818111156110f457600080fd5b88602082850101111561110657600080fd5b95986020929092019750949560400135945092505050565b6000610160828403121561113157600080fd5b50919050565b60006020828403121561114957600080fd5b813567ffffffffffffffff81111561116057600080fd5b61116c8482850161111e565b949350505050565b60008060006060848603121561118957600080fd5b833567ffffffffffffffff8111156111a057600080fd5b6111ac8682870161111e565b9660208601359650604090950135949350505050565b604081526000835180604084015260005b818110156111f057602081870181015160608684010152016111d3565b81811115611202576000606083860101525b50602083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01601606001919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261127257600080fd5b83018035915067ffffffffffffffff82111561128d57600080fd5b602001915036819003821315610c8457600080fd5b8183823760009101908152919050565b6000602082840312156112c457600080fd5b5051919050565b600082821015611304577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b6000808585111561131957600080fd5b8386111561132657600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220b5c8299342e8e44a899e66719cbd84eadb94bfa26b1e41fd009bea7ca4fb679a64736f6c634300080f0033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifyingPaymaster> {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override attach(address: string): VerifyingPaymaster {
    return super.attach(address) as VerifyingPaymaster;
  }
  override connect(signer: Signer): VerifyingPaymaster__factory {
    return super.connect(signer) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingPaymaster {
    return new Contract(address, _abi, signerOrProvider) as VerifyingPaymaster;
  }
}
