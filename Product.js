import './producStyle.css';
import { useEffect, useState } from "react";
import { getListProducts, setListProducts } from "./Product.service";
import CardBS from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import roupafit15 from "../Components/CardProdutos/Imagens/roupafit15.jpg";
import roupafit3 from "../Components/CardProdutos/Imagens/roupafit3.jpg";
import roupafit4 from "../Components/CardProdutos/Imagens/roupafit4.jpg";
import roupafit17 from "../Components/CardProdutos/Imagens/roupafit17.jpg";


const productsMock = [
  {name: "Best-Age", price: 99.99, image: roupafit15, quantity: 1},
  {name: "Conjuntx", price: 120.00, image: roupafit3, quantity: 1},
  {name: "Leggin-B", price: 69.99, image: roupafit4, quantity: 1},
  {name: "Camisa-X", price: 49.99, image: roupafit17, quantity: 1},
  ]

export const Product = ({addItemToCar}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      //setListProducts(productsMock);
      const productsResponse = getListProducts();
      setProducts(productsResponse);
    }, []);

    return (
        <div className="Product">
          {products?.map((product, key) => {
            return(
              <CardBS style={{ width: '18rem' }} key={key}>
                <CardBS.Img variant="top" src={product.image} />
                <CardBS.Body>
                  <CardBS.Title>{product.name}</CardBS.Title>
                  <CardBS.Text>
                    {`R$ ${product.price}`}
                  </CardBS.Text>
                  <Button variant="primary" onClick={() => addItemToCar(product)}>Adicionar ao</Button>
                </CardBS.Body>
              </CardBS>
 
            )  
          })}
          
        </div>
    )
}
