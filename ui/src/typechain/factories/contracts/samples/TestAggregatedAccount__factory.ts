/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestAggregatedAccount,
  TestAggregatedAccountInterface,
} from "../../../contracts/samples/TestAggregatedAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
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
        name: "oldEntryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "EntryPointChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
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
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "execBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execFromEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAggregator",
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
    inputs: [],
    name: "nonce",
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
        internalType: "address payable",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "updateEntryPoint",
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
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
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
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610ff9380380610ff983398101604081905261002f9161007b565b600180546001600160a01b0319166001600160a01b03938416179055600080546001600160601b03169055166080526100b5565b6001600160a01b038116811461007857600080fd5b50565b6000806040838503121561008e57600080fd5b825161009981610063565b60208401519092506100aa81610063565b809150509250929050565b608051610f1b6100de60003960008181610174015281816101ca01526108cb0152610f1b6000f3fe6080604052600436106100e15760003560e01c806380c5c7d01161007f578063affed0e011610059578063affed0e014610293578063b0d691fe146102b6578063c399ec88146102e1578063d0cb75fa146102f657600080fd5b806380c5c7d0146102165780638da5cb5b14610236578063a9059cbb1461027357600080fd5b8063245a7bfc116100bb578063245a7bfc146101625780633ad59dbc146101bb5780634a58db19146101ee5780634d44560d146101f657600080fd5b80630565bb67146100ed5780630825d1fc1461010f5780631b71bb6e1461014257600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d610108366004610b73565b610316565b005b34801561011b57600080fd5b5061012f61012a366004610bfc565b610365565b6040519081526020015b60405180910390f35b34801561014e57600080fd5b5061010d61015d366004610c63565b6103ac565b34801561016e57600080fd5b506101967f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610139565b3480156101c757600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610196565b61010d6103c0565b34801561020257600080fd5b5061010d610211366004610c87565b61044b565b34801561022257600080fd5b5061010d610231366004610b73565b6104fa565b34801561024257600080fd5b50600054610196906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b34801561027f57600080fd5b5061010d61028e366004610c87565b610502565b34801561029f57600080fd5b506000546bffffffffffffffffffffffff1661012f565b3480156102c257600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff16610196565b3480156102ed57600080fd5b5061012f610552565b34801561030257600080fd5b5061010d610311366004610cff565b610608565b61031e61072c565b61035f848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506107c992505050565b50505050565b600061036f610846565b61037a8585856108c7565b90506103896040860186610d6b565b905060000361039b5761039b85610988565b6103a482610a50565b949350505050565b6103b4610abb565b6103bd81610ac3565b50565b60006103e160015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d8060008114610438576040519150601f19603f3d011682016040523d82523d6000602084013e61043d565b606091505b50509050806103bd57600080fd5b61045361072c565b60015473ffffffffffffffffffffffffffffffffffffffff166040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156104de57600080fd5b505af11580156104f2573d6000803e3d6000fd5b505050505050565b61031e610846565b61050a61072c565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f1935050505015801561054d573d6000803e3d6000fd5b505050565b600061057360015473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa1580156105df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106039190610dd0565b905090565b61061061072c565b82811461067e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156107255761071385858381811061069e5761069e610de9565b90506020020160208101906106b39190610c63565b60008585858181106106c7576106c7610de9565b90506020028101906106d99190610d6b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506107c992505050565b8061071d81610e47565b915050610681565b5050505050565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061076157503330145b6107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610675565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516107f29190610e7f565b60006040518083038185875af1925050503d806000811461082f576040519150601f19603f3d011682016040523d82523d6000602084013e610834565b606091505b50915091508161072557805160208201fd5b60015473ffffffffffffffffffffffffffffffffffffffff1633146107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610675565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461097e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f77726f6e672061676772656761746f72000000000000000000000000000000006044820152606401610675565b5060009392505050565b600080546020830135916bffffffffffffffffffffffff90911690806109ad83610eba565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff16146103bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e6365000000000000000000006044820152606401610675565b80156103bd5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610725576040519150601f19603f3d011682016040523d82523d6000602084013e610725565b6107c761072c565b60015460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811681146103bd57600080fd5b60008060008060608587031215610b8957600080fd5b8435610b9481610b51565b935060208501359250604085013567ffffffffffffffff80821115610bb857600080fd5b818701915087601f830112610bcc57600080fd5b813581811115610bdb57600080fd5b886020828501011115610bed57600080fd5b95989497505060200194505050565b60008060008060808587031215610c1257600080fd5b843567ffffffffffffffff811115610c2957600080fd5b85016101608188031215610c3c57600080fd5b9350602085013592506040850135610c5381610b51565b9396929550929360600135925050565b600060208284031215610c7557600080fd5b8135610c8081610b51565b9392505050565b60008060408385031215610c9a57600080fd5b8235610ca581610b51565b946020939093013593505050565b60008083601f840112610cc557600080fd5b50813567ffffffffffffffff811115610cdd57600080fd5b6020830191508360208260051b8501011115610cf857600080fd5b9250929050565b60008060008060408587031215610d1557600080fd5b843567ffffffffffffffff80821115610d2d57600080fd5b610d3988838901610cb3565b90965094506020870135915080821115610d5257600080fd5b50610d5f87828801610cb3565b95989497509550505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610da057600080fd5b83018035915067ffffffffffffffff821115610dbb57600080fd5b602001915036819003821315610cf857600080fd5b600060208284031215610de257600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e7857610e78610e18565b5060010190565b6000825160005b81811015610ea05760208186018101518583015201610e86565b81811115610eaf576000828501525b509190910192915050565b60006bffffffffffffffffffffffff808316818103610edb57610edb610e18565b600101939250505056fea2646970667358221220b60c92ec0360f84b4456a380dd095db0d1f84dc18ed3de446f0a9d23e5a090ec64736f6c634300080f0033";

type TestAggregatedAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAggregatedAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAggregatedAccount__factory extends ContractFactory {
  constructor(...args: TestAggregatedAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAggregatedAccount> {
    return super.deploy(
      anEntryPoint,
      anAggregator,
      overrides || {}
    ) as Promise<TestAggregatedAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override attach(address: string): TestAggregatedAccount {
    return super.attach(address) as TestAggregatedAccount;
  }
  override connect(signer: Signer): TestAggregatedAccount__factory {
    return super.connect(signer) as TestAggregatedAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAggregatedAccountInterface {
    return new utils.Interface(_abi) as TestAggregatedAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAggregatedAccount {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestAggregatedAccount;
  }
}