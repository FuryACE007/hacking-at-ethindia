/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MyWalletDeployer,
  MyWalletDeployerInterface,
} from "../../contracts/MyWalletDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "deployWallet",
    outputs: [
      {
        internalType: "contract MyWallet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getDeploymentAddress",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506125e6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634861f39d1461003b578063ffb5b6af1461006b575b600080fd5b61005560048036038101906100509190610278565b61009b565b60405161006291906102da565b60405180910390f35b61008560048036038101906100809190610278565b61014b565b6040516100929190610354565b60405180910390f35b60008060ff60f81b3084604051806020016100b590610194565b6020820181038252601f19601f8201166040525088886040516020016100dc9291906103a2565b6040516020818303038152906040526040516020016100fc92919061043c565b604051602081830303815290604052805190602001206040516020016101259493929190610541565b6040516020818303038152906040528051906020012060001c9050809150509392505050565b60008160001b848460405161015f90610194565b61016a9291906103a2565b8190604051809103906000f590508015801561018a573d6000803e3d6000fd5b5090509392505050565b6120218061059083390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d1826101a6565b9050919050565b60006101e3826101c6565b9050919050565b6101f3816101d8565b81146101fe57600080fd5b50565b600081359050610210816101ea565b92915050565b61021f816101c6565b811461022a57600080fd5b50565b60008135905061023c81610216565b92915050565b6000819050919050565b61025581610242565b811461026057600080fd5b50565b6000813590506102728161024c565b92915050565b600080600060608486031215610291576102906101a1565b5b600061029f86828701610201565b93505060206102b08682870161022d565b92505060406102c186828701610263565b9150509250925092565b6102d4816101c6565b82525050565b60006020820190506102ef60008301846102cb565b92915050565b6000819050919050565b600061031a610315610310846101a6565b6102f5565b6101a6565b9050919050565b600061032c826102ff565b9050919050565b600061033e82610321565b9050919050565b61034e81610333565b82525050565b60006020820190506103696000830184610345565b92915050565b600061037a826102ff565b9050919050565b600061038c8261036f565b9050919050565b61039c81610381565b82525050565b60006040820190506103b76000830185610393565b6103c460208301846102cb565b9392505050565b600081519050919050565b600081905092915050565b60005b838110156103ff5780820151818401526020810190506103e4565b60008484015250505050565b6000610416826103cb565b61042081856103d6565b93506104308185602086016103e1565b80840191505092915050565b6000610448828561040b565b9150610454828461040b565b91508190509392505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6104a76104a282610460565b61048c565b82525050565b60008160601b9050919050565b60006104c5826104ad565b9050919050565b60006104d7826104ba565b9050919050565b6104ef6104ea826101c6565b6104cc565b82525050565b6000819050919050565b61051061050b82610242565b6104f5565b82525050565b6000819050919050565b6000819050919050565b61053b61053682610516565b610520565b82525050565b600061054d8287610496565b60018201915061055d82866104de565b60148201915061056d82856104ff565b60208201915061057d828461052a565b6020820191508190509594505050505056fe608060405260006003553480156200001657600080fd5b50604051620020213803806200202183398181016040528101906200003c919062000175565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620001bc565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f882620000cb565b9050919050565b60006200010c82620000eb565b9050919050565b6200011e81620000ff565b81146200012a57600080fd5b50565b6000815190506200013e8162000113565b92915050565b6200014f81620000eb565b81146200015b57600080fd5b50565b6000815190506200016f8162000144565b92915050565b600080604083850312156200018f576200018e620000c6565b5b60006200019f858286016200012d565b9250506020620001b2858286016200015e565b9150509250929050565b611e5580620001cc6000396000f3fe6080604052600436106100f75760003560e01c8063a9059cbb1161008a578063c399ec8811610059578063c399ec88146102da578063d0cb75fa14610305578063eaaa734c1461032e578063ebf0c71714610357576100fe565b8063a9059cbb14610230578063affed0e014610259578063b0d691fe14610284578063bf98a6e4146102af576100fe565b80634d44560d116100c65780634d44560d14610188578063663ea2e2146101b157806380c5c7d0146101dc5780638da5cb5b14610205576100fe565b80630565bb67146101035780630825d1fc1461012c5780631b71bb6e146101555780634a58db191461017e576100fe565b366100fe57005b600080fd5b34801561010f57600080fd5b5061012a600480360381019061012591906111e0565b610382565b005b34801561013857600080fd5b50610153600480360381019061014e91906112af565b6103df565b005b34801561016157600080fd5b5061017c60048036038101906101779190611332565b610424565b005b610186610438565b005b34801561019457600080fd5b506101af60048036038101906101aa919061139d565b6104b8565b005b3480156101bd57600080fd5b506101c6610538565b6040516101d391906113ec565b60405180910390f35b3480156101e857600080fd5b5061020360048036038101906101fe91906111e0565b61055e565b005b34801561021157600080fd5b5061021a6105bb565b60405161022791906113ec565b60405180910390f35b34801561023c57600080fd5b506102576004803603810190610252919061139d565b6105e1565b005b34801561026557600080fd5b5061026e610634565b60405161027b9190611416565b60405180910390f35b34801561029057600080fd5b50610299610663565b6040516102a69190611490565b60405180910390f35b3480156102bb57600080fd5b506102c461068d565b6040516102d19190611416565b60405180910390f35b3480156102e657600080fd5b506102ef610693565b6040516102fc9190611416565b60405180910390f35b34801561031157600080fd5b5061032c60048036038101906103279190611557565b61071b565b005b34801561033a57600080fd5b50610355600480360381019061035091906115d8565b61082d565b005b34801561036357600080fd5b5061036c610879565b6040516103799190611416565b60405180910390f35b61038a61087f565b6103d9848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610947565b50505050565b6103e76109cb565b6103f2848484610a42565b60008480604001906104049190611627565b9050036104155761041484610b4a565b5b61041e81610bf7565b50505050565b61042c610c93565b61043581610c9d565b50565b6000610442610663565b73ffffffffffffffffffffffffffffffffffffffff1634604051610465906116bb565b60006040518083038185875af1925050503d80600081146104a2576040519150601f19603f3d011682016040523d82523d6000602084013e6104a7565b606091505b50509050806104b557600080fd5b50565b6104c061087f565b6104c8610663565b73ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b81526004016105029291906116df565b600060405180830381600087803b15801561051c57600080fd5b505af1158015610530573d6000803e3d6000fd5b505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105666109cb565b6105b5848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610947565b50505050565b6000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105e961087f565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561062f573d6000803e3d6000fd5b505050565b60008060009054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff16905090565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b600061069d610663565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106d591906113ec565b602060405180830381865afa1580156106f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610716919061171d565b905090565b61072361087f565b81819050848490501461076b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610762906117a7565b60405180910390fd5b60005b848490508110156108265761081385858381811061078f5761078e6117c7565b5b90506020020160208101906107a49190611332565b60008585858181106107b9576107b86117c7565b5b90506020028101906107cb9190611627565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610947565b808061081e90611825565b91505061076e565b5050505050565b8160028190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60025481565b6000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061090657503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610945576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093c906118b9565b60405180910390fd5b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610970919061193f565b60006040518083038185875af1925050503d80600081146109ad576040519150601f19603f3d011682016040523d82523d6000602084013e6109b2565b606091505b5091509150816109c457805160208201fd5b5050505050565b6109d3610663565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a37906119a2565b60405180910390fd5b565b6000610a4d83610d5d565b9050610ab584806101400190610a639190611627565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505082610d8d90919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff166000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3b90611a0e565b60405180910390fd5b50505050565b806020013560008081819054906101000a90046bffffffffffffffffffffffff1680929190610b7890611a46565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610bf4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610beb90611ac6565b60405180910390fd5b50565b60008114610c905760003373ffffffffffffffffffffffffffffffffffffffff16827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90604051610c47906116bb565b600060405180830381858888f193505050503d8060008114610c85576040519150601f19603f3d011682016040523d82523d6000602084013e610c8a565b606091505b50509050505b50565b610c9b61087f565b565b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a60405160405180910390a380600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081604051602001610d709190611b5e565b604051602081830303815290604052805190602001209050919050565b6000806000610d9c8585610db4565b91509150610da981610e05565b819250505092915050565b6000806041835103610df55760008060006020860151925060408601519150606086015160001a9050610de987828585610fd1565b94509450505050610dfe565b60006002915091505b9250929050565b60006004811115610e1957610e18611b84565b5b816004811115610e2c57610e2b611b84565b5b0315610fce5760016004811115610e4657610e45611b84565b5b816004811115610e5957610e58611b84565b5b03610e99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9090611bff565b60405180910390fd5b60026004811115610ead57610eac611b84565b5b816004811115610ec057610ebf611b84565b5b03610f00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef790611c6b565b60405180910390fd5b60036004811115610f1457610f13611b84565b5b816004811115610f2757610f26611b84565b5b03610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90611cfd565b60405180910390fd5b600480811115610f7a57610f79611b84565b5b816004811115610f8d57610f8c611b84565b5b03610fcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc490611d8f565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561100c5760006003915091506110d4565b601b8560ff16141580156110245750601c8560ff1614155b156110365760006004915091506110d4565b60006001878787876040516000815260200160405260405161105b9493929190611dda565b6020604051602081039080840390855afa15801561107d573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110cb576000600192509250506110d4565b80600092509250505b94509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611112826110e7565b9050919050565b61112281611107565b811461112d57600080fd5b50565b60008135905061113f81611119565b92915050565b6000819050919050565b61115881611145565b811461116357600080fd5b50565b6000813590506111758161114f565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126111a05761119f61117b565b5b8235905067ffffffffffffffff8111156111bd576111bc611180565b5b6020830191508360018202830111156111d9576111d8611185565b5b9250929050565b600080600080606085870312156111fa576111f96110dd565b5b600061120887828801611130565b945050602061121987828801611166565b935050604085013567ffffffffffffffff81111561123a576112396110e2565b5b6112468782880161118a565b925092505092959194509250565b600080fd5b600061016082840312156112705761126f611254565b5b81905092915050565b6000819050919050565b61128c81611279565b811461129757600080fd5b50565b6000813590506112a981611283565b92915050565b600080600080608085870312156112c9576112c86110dd565b5b600085013567ffffffffffffffff8111156112e7576112e66110e2565b5b6112f387828801611259565b94505060206113048782880161129a565b935050604061131587828801611130565b925050606061132687828801611166565b91505092959194509250565b600060208284031215611348576113476110dd565b5b600061135684828501611130565b91505092915050565b600061136a826110e7565b9050919050565b61137a8161135f565b811461138557600080fd5b50565b60008135905061139781611371565b92915050565b600080604083850312156113b4576113b36110dd565b5b60006113c285828601611388565b92505060206113d385828601611166565b9150509250929050565b6113e681611107565b82525050565b600060208201905061140160008301846113dd565b92915050565b61141081611145565b82525050565b600060208201905061142b6000830184611407565b92915050565b6000819050919050565b600061145661145161144c846110e7565b611431565b6110e7565b9050919050565b60006114688261143b565b9050919050565b600061147a8261145d565b9050919050565b61148a8161146f565b82525050565b60006020820190506114a56000830184611481565b92915050565b60008083601f8401126114c1576114c061117b565b5b8235905067ffffffffffffffff8111156114de576114dd611180565b5b6020830191508360208202830111156114fa576114f9611185565b5b9250929050565b60008083601f8401126115175761151661117b565b5b8235905067ffffffffffffffff81111561153457611533611180565b5b6020830191508360208202830111156115505761154f611185565b5b9250929050565b60008060008060408587031215611571576115706110dd565b5b600085013567ffffffffffffffff81111561158f5761158e6110e2565b5b61159b878288016114ab565b9450945050602085013567ffffffffffffffff8111156115be576115bd6110e2565b5b6115ca87828801611501565b925092505092959194509250565b600080604083850312156115ef576115ee6110dd565b5b60006115fd85828601611166565b925050602061160e85828601611130565b9150509250929050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261164457611643611618565b5b80840192508235915067ffffffffffffffff8211156116665761166561161d565b5b60208301925060018202360383131561168257611681611622565b5b509250929050565b600081905092915050565b50565b60006116a560008361168a565b91506116b082611695565b600082019050919050565b60006116c682611698565b9150819050919050565b6116d98161135f565b82525050565b60006040820190506116f460008301856116d0565b6117016020830184611407565b9392505050565b6000815190506117178161114f565b92915050565b600060208284031215611733576117326110dd565b5b600061174184828501611708565b91505092915050565b600082825260208201905092915050565b7f77726f6e67206172726179206c656e6774687300000000000000000000000000600082015250565b600061179160138361174a565b915061179c8261175b565b602082019050919050565b600060208201905081810360008301526117c081611784565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061183082611145565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611862576118616117f6565b5b600182019050919050565b7f6f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b60006118a3600a8361174a565b91506118ae8261186d565b602082019050919050565b600060208201905081810360008301526118d281611896565b9050919050565b600081519050919050565b60005b838110156119025780820151818401526020810190506118e7565b60008484015250505050565b6000611919826118d9565b611923818561168a565b93506119338185602086016118e4565b80840191505092915050565b600061194b828461190e565b915081905092915050565b7f77616c6c65743a206e6f742066726f6d20456e747279506f696e740000000000600082015250565b600061198c601b8361174a565b915061199782611956565b602082019050919050565b600060208201905081810360008301526119bb8161197f565b9050919050565b7f77616c6c65743a2077726f6e67207369676e6174757265000000000000000000600082015250565b60006119f860178361174a565b9150611a03826119c2565b602082019050919050565b60006020820190508181036000830152611a27816119eb565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b6000611a5182611a2e565b91506bffffffffffffffffffffffff8203611a6f57611a6e6117f6565b5b600182019050919050565b7f77616c6c65743a20696e76616c6964206e6f6e63650000000000000000000000600082015250565b6000611ab060158361174a565b9150611abb82611a7a565b602082019050919050565b60006020820190508181036000830152611adf81611aa3565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000611b27601c83611ae6565b9150611b3282611af1565b601c82019050919050565b6000819050919050565b611b58611b5382611279565b611b3d565b82525050565b6000611b6982611b1a565b9150611b758284611b47565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611be960188361174a565b9150611bf482611bb3565b602082019050919050565b60006020820190508181036000830152611c1881611bdc565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611c55601f8361174a565b9150611c6082611c1f565b602082019050919050565b60006020820190508181036000830152611c8481611c48565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ce760228361174a565b9150611cf282611c8b565b604082019050919050565b60006020820190508181036000830152611d1681611cda565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d7960228361174a565b9150611d8482611d1d565b604082019050919050565b60006020820190508181036000830152611da881611d6c565b9050919050565b611db881611279565b82525050565b600060ff82169050919050565b611dd481611dbe565b82525050565b6000608082019050611def6000830187611daf565b611dfc6020830186611dcb565b611e096040830185611daf565b611e166060830184611daf565b9594505050505056fea2646970667358221220bd1ce8bef2e25b2ffb9f51725fa350625448e5c6e600f401c8dc4d439aae35be64736f6c63430008110033a26469706673582212202e61b45a5060ec07d797b6178a3214270f642611ef45d1d3fd9c42d202575f3c64736f6c63430008110033";

type MyWalletDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyWalletDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyWalletDeployer__factory extends ContractFactory {
  constructor(...args: MyWalletDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyWalletDeployer> {
    return super.deploy(overrides || {}) as Promise<MyWalletDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyWalletDeployer {
    return super.attach(address) as MyWalletDeployer;
  }
  override connect(signer: Signer): MyWalletDeployer__factory {
    return super.connect(signer) as MyWalletDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyWalletDeployerInterface {
    return new utils.Interface(_abi) as MyWalletDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyWalletDeployer {
    return new Contract(address, _abi, signerOrProvider) as MyWalletDeployer;
  }
}