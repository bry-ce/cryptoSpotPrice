let connected = false;
let account, accounts;

async function getAccount(){
    accounts = await ethereum.request(
        {method: "eth_requestAccounts"},
    ).then(accounts =>{
        account = accounts[0];
        console.log(account)
        connected = true;
    })
    .catch(error => console.error('Error Connecting:', error))

}

async function disconnectAccount(){
    ethereum.request({ method: 'eth_accounts' })
    .then(accounts => {
    if (accounts && accounts.length > 0) {
      localStorage.removeItem(accounts),
      connected = false
    }
  })
  .catch(error => console.error('Error logging out:', error));

}
export default {account, accounts, connected, getAccount, disconnectAccount};