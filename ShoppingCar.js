import { setShoppingCar } from "../../ProductList/Product.service";
import './carPage.css';


export const ShoppingCar = ({itensShoppingCar, addItemToCar, subtractQuantityToCar, removeItemCar}) => {
  
    
    
    /* const handleUpDateItem = (item, action) => {
    //altere quantidade

        let newQuantity = item.quantity;
        if(action === 'increase'){
            if(newQuantity === 1){
                return;
            }
            newQuantity -= 1;
        }
        if(action === 'decrease'){
            newQuantity +=1;
        }
        
        const lista = {...itensShoppingCar, quantity: newQuantity}
        lista.splice(3, 1, newQuantity);
        console.log(lista)
        setShoppingCar(lista);
        setItensShoppingCar(lista);
    }
 */

    return (
        <div>
            {itensShoppingCar?.map((item, index) => {
                let totalproduct = item.price * item.quantity;
                return(
                    <div className="ShoppingCar_produtcts" key={index}>
                        <img src={item.image} style={{width: '8rem'}}/>
                        <h3>{item.name}</h3>
                        <div className="pl-md-0 pl-1"><b>R${item.price.toFixed(2)}</b></div>
                        <div className="qty">
                            <button type="button" className="btn" onClick={() => subtractQuantityToCar(item)}>
                                <i className="bi bi-dash-circle-fill"></i>
                            </button>
                            <span>{item.quantity}</span>
                            <button type="button"className="btn" onClick={() => addItemToCar(item)}>
                                <i className="bi bi-plus-circle-fill"></i>
                            </button>
                        </div>
                        <div className="pl-md-0 pl-1"><b>R$ {totalproduct.toFixed(2)}</b></div>
                        <div className="close">
                            {<button className="buttonRemove" type="button" onClick={() => removeItemCar(item, index)}>&times;</button>}
                        </div>
                    </div>
                    )
                }
            )
            }
            {itensShoppingCar.length === 0 && (
                <div colSpan='5' style={{padding: "5rem"}}>
                    <b>Carrinho de compras vazio</b>
                </div>
                )}
        </div>
        
    )
}