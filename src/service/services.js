import * as R from 'ramda';
import Web3 from 'web3';

//web3.js init;
//console.log(process.env.WEB3_ADDRESS);
let eventProvider = new Web3.providers.HttpProvider(process.env.WEB3_ADDRESS);
//console.log(eventProvider);
let web3d = new Web3();
web3d.setProvider(eventProvider);

const versionProps = {
    "2":[
        "version",
        "turn",
        "currentAP",
        "currentMaxAp",
        "ourArmyNum",
        "ourAdvArmyNum",
        "enemyArmyNum",
        "enemyAdvArmyNum",
        "resources",
        "isActivated",
        "ourHp",
        "enemyHp"
    ]
};
const contractAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user",
				"type": "address"
			},
			{
				"name": "_arr",
				"type": "bytes32"
			},
			{
				"name": "_isActivated",
				"type": "uint16"
			},
			{
				"name": "_ourHp",
				"type": "uint24"
			},
			{
				"name": "_enemyHp",
				"type": "uint24"
			}
		],
		"name": "saveData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_user",
				"type": "address"
			}
		],
		"name": "loadData",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint16"
			},
			{
				"name": "",
				"type": "uint24"
			},
			{
				"name": "",
				"type": "uint24"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "saveMap",
		"outputs": [
			{
				"name": "arr",
				"type": "bytes32"
			},
			{
				"name": "isActivated",
				"type": "uint16"
			},
			{
				"name": "ourHp",
				"type": "uint24"
			},
			{
				"name": "enemyHp",
				"type": "uint24"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "version",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = "0x335c86e1ea86e4a3a0c0190fcb6c1893d32945f5";
let MasterMindDataContract = web3d.eth.contract(contractAbi).at(contractAddress);

export const saveDataToPravateBc = (req, res, next) =>{
    /*
        version.ToString(),
        turn.ToString(),
        warMachine.GetAP().GetCurrentAp().ToString(),
        warMachine.GetAP().GetCurrentMaxAp().ToString(),
        warMachine.GetArmy().GetArmyNum().ToString(),
        warMachine.GetArmy().GetAdvArmyNum().ToString(),
        masterMind.GetArmy().GetArmyNum().ToString(),
        masterMind.GetArmy().GetAdvArmyNum().ToString(),
        warMachine.GetResourceManager().ToString(),
        String.Join("",warMachine.GetFaclilties().Select( x => x.CheckIsActivated()?"1":"0" ).ToArray()),
        warMachine.GetHp().ToString(),
        masterMind.GetHp().ToString(),
    */
    let baseStr = req.body.fieldData;
    let fieldValStr = R.split(baseStr,":");
    let obj = R.zipObj(versionProps[fieldValStr[0]], fieldValStr);
    let params = {
        _user : "0x0b40447d29d1637e8deb40bd6301c3646509dda8",
        _arr : [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
        _isActivated: 2340,
        _ourHp:0,
        _enemyHp:0
    };
    /*
    MasterMindDataContract.saveData.sendTransaction('0x0b40447d29d1637e8deb40bd6301c3646509dda8',
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
    2340,10,11,{from:"0x0b40447d29d1637e8deb40bd6301c3646509dda8"} ,(error,d) =>{
        console.error(error);
        console.log(d);
    }); */
}

export const getDataFromPravateBc = (req, res, next) =>{

}
