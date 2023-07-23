import './carPage.css';

export const CarHeader = () => {
    return (
        <>
            <div className="container bg-white rounded-top mt-5" id="zero-pad">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-12 pt-3">
                        
                        <div className="d-flex flex-column pt-4">
                            <div><h5 className="text-uppercase font-weight-normal">carrinho de compras</h5></div>
                        </div>
                        <div className="cabeca" id="heading">
                            <div className="px-lg-5 mr-lg-5" id="produc">PRODUTOS</div>
                            <div className="px-lg-5 ml-lg-5" id="prc">PREÇO</div>
                            <div className="px-lg-5 ml-lg-1" id="quantity">QUANTIDADE</div>
                            <div className="px-lg-5 ml-lg-3" id="total">TOTAL</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};