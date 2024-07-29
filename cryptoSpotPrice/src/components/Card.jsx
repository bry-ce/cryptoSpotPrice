function Card(){
    return(
        <>
            <div className="price-container">
                <div className="card-container">
                    <div className="card-header">
                        <h1>Position Price Checker</h1>
                    </div>
                    <div className="balance-container">
                        <p className="balance">0.00000</p>
                    </div>
                    <div className="input-eth-container">
                        <input type="text" />
                        <button>Max</button>
                    </div>
                </div>
            </div>
                
        </>
    );
}
export default Card