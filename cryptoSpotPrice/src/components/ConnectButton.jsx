let connected = false;
let accounts;
function ConnectButton(){
    if( connected ){
        return <button className="connectButton" onClick={disconnectAccount}>Account</button>
    } else {
        return(
            <button className="connectButton" onClick={getAccount}>Account</button>
        );
    }
    
}
export default ConnectButton;

async function getAccount(){
    accounts = await window.ethereum.request(
        {method: "eth_requestAccounts"},
        connected = true
    )
    .catch(error => console.error('Error Connecting:', error))

}

async function disconnectAccount(){
    window.ethereum.request({ method: 'eth_accounts' })
  .then(accounts => {
    if (accounts && accounts.length > 0) {
      // Clear stored account information and update the UI
      localStorage.removeItem(accounts),
      connected = false
    }
  })
  .catch(error => console.error('Error logging out:', error));

}

