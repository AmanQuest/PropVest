const contract_address = '0xD924dC79E21a56E5691145f36420bd212bEEf8E0';

const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            }
        ],
        "name": "balanceOfBatch",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "createSell",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newuri",
                "type": "string"
            }
        ],
        "name": "setURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]


async function BuyNFT() {
        // Get a Web3 instance for the wallet
        const web3 = new Web3(provider);

        console.log("Web3 instance is", web3);

        // Get connected chain id from Ethereum node
        const chainId = await web3.eth.getChainId();
        // Load chain information over an HTTP API
        //   const chainData = await EvmChains.getChain(chainId);
        //   document.querySelector("#network-name").textContent = chainData.name;

        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();

        // MetaMask does not give you all accounts, only the selected account
        // console.log("Got accounts", accounts);
        selectedAccount = accounts[0];
        console.log(selectedAccount)
        // Purge UI elements any previously loaded accounts
        
        // Go through all accounts and get their ETH balance
        const rowResolvers = accounts.map(async (address) => {
            const balance = await web3.eth.getBalance(address);
            // ethBalance is a BigNumber instance
            // https://github.com/indutny/bn.js/
            // const ethBalance = web3.utils.fromWei(balance, "ether");
            // const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
            // Fill in the templated row and put in the document
        });

        // Because rendering account does its own RPC commucation
        // with Ethereum node, we do not want to display any results
        // until data for all accounts is loaded
        await Promise.all(rowResolvers);

        const address = '0xD924dC79E21a56E5691145f36420bd212bEEf8E0';

        const abi = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "values",
                        "type": "uint256[]"
                    }
                ],
                "name": "TransferBatch",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "TransferSingle",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "URI",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "accounts",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    }
                ],
                "name": "balanceOfBatch",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "buy",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "createSell",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "amounts",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeBatchTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "newuri",
                        "type": "string"
                    }
                ],
                "name": "setURI",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "uri",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]


        const caddress = web3.utils.toChecksumAddress(address);

        const nftcontract= new web3.eth.Contract(abi ,caddress);
        let wallet_balance= await getBalance(selectedAccount);
        // console.log(wallet_balance);
        // // const web3 = new Web3(provider);
        // var finalprice =getBasicPrice();
        // var content_id = getContentId(); //document.getElementById('content_id').value;

        let amount= '0x' + ((0.01*1000000000000000000).toString(16))
         if(amount>wallet_balance){
            alert("Insufficient Fund");

            location.reload();
         }
         if(chainId!=97){
            alert("Please switch to BSC test net");

            location.reload();
         }
        // const nonce = await web3.eth.getTransactionCount(selectedAccount, 'latest'); //get latest nonce
        // const from_account = web3.utils.toChecksumAddress(selectedAccount);
        // const to_account=web3.utils.toChecksumAddress("0xc0f3dA344cB1416aaE027A0b0B45DeAFC17B2bc3");

        // tx = {
        //     'from':from_account,
        //     'to':caddress,
        //     'nonce': nonce,
        //     'gas': 5000000,
        //     'maxPriorityFeePerGas': 1999999987,
        //     'data': nftcontract.methods.transfer(to_account,amount).encodeABI()
        //   };

        //   web3.eth.sendTransaction(tx, function(err, hash) {
        //     if (!err) 
        //      {  
        //          console.log(hash);

        //          $.ajax({
        //             dataType: "json",
        //             type: 'post',
        //             url: '/users/save-order',
        //              data: {
        //                    tx_id:hash,
        //                    content_id:content_id,
        //                    address:selectedAccount,
        //                   // qty: document.getElementById("copies").value,
        //                      amount: finalprice,
        //         //         currency: currency,
        //         //         currencyRate: currencyRate
        //                   },
        //              success: function(data) {
        //                  swal({
        //                       type: 'success',
        //                        text: 'Transaction completed successfully.',
        //                        timer: 3000,
        //                        onOpen: function() {
        //                          swal.showLoading()
        //                      }
        //                  }).then(function() {
        //                      location.reload();
        //                 });
        //                            location.reload();
        //             }
        //          });
        //      }
        //      else{
        //          console.log(err);
        //      }
        //   } );
           

  }

 
  async function getBalance(wallet_address){
    const web3 = new Web3(provider);

    //console.log("Web3 instance is", web3);
    
    const nftcontract= new web3.eth.Contract(abi,contract_address);
    console.log('contract_address===================',contract_address);
    // try{
    //     const balance = await nftcontract.methods.owner().call({
    //         from :contract_address,
    //         gas:5000000
    //       });
    //       console.log('balance  is',balance);
    
    //       return balance;
    
    // }catch(err){
    //    console.log(err)
    // }
   // console.log(Math.floor(100000 + Math.random() * 900000));
   const nonce = await web3.eth.getTransactionCount(wallet_address, 'latest'); //get latest nonce
   let amount= '0x' + ((0.01*1000000000000000000).toString(16))
   var id = Math.floor(100000 + Math.random() * 900000)
   console.log('wallet_address',wallet_address,'amount',amount,'nonce',nonce,'id',id)
    tx = {
        'from':wallet_address,
        'to':contract_address,
        'value':amount,
        'nonce': nonce,
        'gas': 500000,
       // 'maxPriorityFeePerGas': 1999999987,
        'data': nftcontract.methods.buy(wallet_address,id,100).encodeABI()
      };

      web3.eth.sendTransaction(tx, function(err, hash) {
        if (!err) 
         {  
             console.log(hash);

             let order={
                tokenId : id,
                address : wallet_address,
                amount : "0.1",
                hash : hash
            };

             $.ajax({  type:"POST",
             dataType: "json",
             url:"/sale-nft",
             data:order,
             success:function(res){
                swal({
                                type: 'success',
                                text: 'Transaction completed successfully.',
                                timer: 3000,
                                onOpen: function() {
                                    swal.showLoading()
                                }
                            }).then(function() {
                                //window.open('https://testnet.bscscan.com/tx/'+hash,target="_blank")
                                // location.reload();
                                window.location.href="/transactions";

                            });

                }
            });
            //  $.ajax({
            //     dataType: "json",
            //     type: 'post',
            //     url: '/users/save-order',
            //      data: {
            //            tx_id:hash,
            //            //content_id:content_id,
            //            address:wallet_address,
            //           // qty: document.getElementById("copies").value,
            //              amount: 0.01,
            // //         currency: currency,
            // //         currencyRate: currencyRate
            //           },
            //      success: function(data) {
            //          swal({
            //               type: 'success',
            //                text: 'Transaction completed successfully.',
            //                timer: 3000,
            //                onOpen: function() {
            //                  swal.showLoading()
            //              }
            //          }).then(function() {
            //              location.reload();
            //         });
            //                    location.reload();
            //     }
            //  });
         }
         else{
             console.log(err);
         }
      } );
}





    async function BuyContent() {
        // Get a Web3 instance for the wallet
        const web3 = new Web3(provider);

        console.log("Web3 instance is", web3);

        // Get connected chain id from Ethereum node
        const chainId = await web3.eth.getChainId();
        // Load chain information over an HTTP API
        //   const chainData = await EvmChains.getChain(chainId);
        //   document.querySelector("#network-name").textContent = chainData.name;

        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();

        // MetaMask does not give you all accounts, only the selected account
        // console.log("Got accounts", accounts);
        selectedAccount = accounts[0];

        // Purge UI elements any previously loaded accounts
        
        // Go through all accounts and get their ETH balance
        const rowResolvers = accounts.map(async (address) => {
            const balance = await web3.eth.getBalance(address);
            // ethBalance is a BigNumber instance
            // https://github.com/indutny/bn.js/
            // const ethBalance = web3.utils.fromWei(balance, "ether");
            // const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
            // Fill in the templated row and put in the document
        });

        // Because rendering account does its own RPC commucation
        // with Ethereum node, we do not want to display any results
        // until data for all accounts is loaded
        await Promise.all(rowResolvers);

        //var code = "92655f7237f805673a2a810ed0badd228445bf8fe38a43c0f65fd2616fff25b7";

        // const web3 = new Web3(provider);
        var finalprice =getBasicPrice();
        await web3.eth.sendTransaction({
            from: selectedAccount,
           // data: code,
            to: "0x6cDDe6477FCBC301a11ECD8Dc41307A5470DF7F1", 
            value:'0x' + ((finalprice* 1000000000000000000).toString(16)),
        }, function(err, transactionHash) {
            if (err) { 
                console.log(err); 
            } else {
                console.log(transactionHash);
                var content_id = getContentId(); //document.getElementById('content_id').value;
                console.log(content_id);
                
                // // obj.value = txHash;
                $.ajax({
                   dataType: "json",
                   type: 'post',
                   url: '/users/save-order',
                    data: {
                          tx_id:transactionHash,
                          content_id:content_id,
                          address:selectedAccount,
                         // qty: document.getElementById("copies").value,
                            amount: finalprice,
               //         currency: currency,
               //         currencyRate: currencyRate
                         },
                    success: function(data) {
                        swal({
                             type: 'success',
                              text: 'Transaction completed successfully.',
                              timer: 3000,
                              onOpen: function() {
                                swal.showLoading()
                            }
                        }).then(function() {
                            location.reload();
                       });
                                  location.reload();
                   }
                });
           
            }
        });
    }   

async function resetAccountData() {        
    await BuyNFT(provider);        
}

/**
* Connect wallet button pressed.
*/
async function onBuyNFT() {

    console.log("Opening a dialog", web3Modal);
    try {
          provider = await web3Modal.connect();
       }catch(e) {
        console.log("Could not get a wallet connection", e);
    return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        BuyNFT();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        //BuyContent();
        BuyNFT();
    });

    await resetAccountData();
}




// Script connect wallet


