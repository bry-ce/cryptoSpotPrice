function ConnectButton(){
    return(
        <button className="connectButton" onClick={getAccount}>Connect Wallet</button>
    );
}

async function getAccount(){
    const accounts = await window.ethereum
    .request(
        {method: "eth_requestAccounts"}
    )
    .catch(err)
}
export default ConnectButton;