let connected = false;
let account, accounts;

function ConnectButton(){
    if( connected ){
        return <button className="connectButton" onClick={disconnectAccount}>Disconnect Account</button>
    } else {
        return(
            <button className="connectButton" onClick={getAccount}>Connect Account</button>
        );
    }
    
}
export default ConnectButton;

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

