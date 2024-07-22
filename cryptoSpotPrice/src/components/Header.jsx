import ConnectButton from "./ConnectButton";
function Header(){
    return(
        <div className="header-container header">
            <div className="logo-container">
                <img className="header-logo"></img>
                <p>Liquid Scout</p>
            </div>
            <div className="balance-container">
                <p>ETH</p>
            </div>
            <div className="connect-container">
                <ConnectButton/>
            </div>
        </div>
    );
}

export default Header