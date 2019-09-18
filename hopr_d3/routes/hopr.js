const express = require("express");
const router = express.Router();
const Web3 = require('web3');
//const web3 = new Web3("https://ropsten.infura.io/v3/c6c54c398d6b463f8dc809e94656a6e8");
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'));
const fs = require("fs");


const abi = [{
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "partyB",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "open",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalAmount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"internalType": "bytes32",
		"name": "channelId",
		"type": "bytes32"
	}],
	"name": "close",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "numChannels",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
	}],
	"name": "Channels",
	"outputs": [{
		"internalType": "address",
		"name": "partyA",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "partyB",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"internalType": "bool",
		"name": "isOpen",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "bytes32",
		"name": "channelId",
		"type": "bytes32"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "time",
		"type": "uint256"
	}],
	"name": "openedChannel",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "bytes32",
		"name": "channelId",
		"type": "bytes32"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "time",
		"type": "uint256"
	}],
	"name": "closedChannel",
	"type": "event"
}]

const contract = new web3.eth.Contract(abi)

const open_csv = {}
const close_csv = {}

const csv_json = {"date":{} };


const data = ""

contract.options.address = "0x9c9583FDD67648d539dA325B3C9d8087D0B6bDa2"

contract.methods.totalAmount().call().then(function (amount) {
	console.log(amount);
});


contract.methods.numChannels().call().then(function (numChannels) {
	console.log(numChannels);
});


function convertTime(unix_timestamp) {
	const date = new Date(unix_timestamp * 1000);
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = monthNames[date.getMonth()];
	const day = date.getDate();
	const year = String(date.getFullYear()).substring(2,4);
	const time = day +"-"+ month + "-" + year ;
	return time
}


contract.events.openedChannel({
	fromBlock: 0
},
function (error, event) {
		if (error) {
			console.log(error);
		} else {
			time_data = convertTime(event.returnValues.time);
			amount_data = event.returnValues.amount;
			if(close_csv.hasOwnProperty(time_data)){
				close_csv[time_data] += amount_data;
			}else {
				close_csv[time_data] = amount_data;
				open_csv[time_data] = amount_data;
			}
			
		}
});

contract.events.closedChannel({
	fromBlock: 0
},
function (error, event) {
	if (error) {
		console.log(error);
	} else {
		time_data = convertTime(event.returnValues.time);
		amount_data = event.returnValues.amount;
		if(close_csv.hasOwnProperty(time_data)){
			close_csv[time_data] -= amount_data;
		}else {
			close_csv[time_data] = amount_data;
		}
		
	}
})

router.get("/",function(req,res){
	res.render("chart.html");
});


module.exports = router;
