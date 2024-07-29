
import {getAccount, account, accounts, connected, disconnectAccount} from '../ConnectDisconnectAccount.js'
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



