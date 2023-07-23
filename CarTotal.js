import './carPage.css'



export const CarTotal = ({total}) => {   

    return (

                <div className="container bg-light rounded-bottom py-4" id="zero-pad">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button className="btn btn-sm bg-light border border-dark">GO BACK</button>
                                </div>
                                <div className="px-md-0 px-1" id="footer-font">
                                    <b className="pl-md-4">SUBTOTAL<span className="pl-md-4">: R$ {total.toFixed(2)}</span></b>
                                </div>
                                <div>
                                    <button className="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        
        
    )
}