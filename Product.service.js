export const getListProducts = () => {
    //pegar a chave de produtos que guardei no localStorage com o nome products
    const chave = 'products';

    //Aqui está pegando a lista de produtos de acordo com a chave
    const listProducts = localStorage.getItem(chave);

    return JSON.parse(listProducts);
}

export const setListProducts = (lista) => {
    const chave = 'products';

    const listaJSON = JSON.stringify(lista);

    localStorage.setItem(chave, listaJSON);
}

export const getShoppingCar = () => {
    //chave de produtos no localStorage
    const chave = 'shoppingCar';

    //Aqui está pegando a lista de produtos de acordo com a chave
    const listShoppingCar = localStorage.getItem(chave);

    return JSON.parse(listShoppingCar);

}

export const setShoppingCar = (lista) => {
    const chave = 'shoppingCar';

    const listaJSON = JSON.stringify(lista);

    localStorage.setItem(chave, listaJSON);

}