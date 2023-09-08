export const cart = [];


// function for adding items to the cart
export function addToCart(productId){

    let matchingItem;
              
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    // if it is in the cart,increase the quantity by 1
    if(matchingItem){
        matchingItem.quantity = matchingItem.quantity+1;
    }

    // if it is not in the cart,add it to the cart
    // to get product and quantity
    else{
        cart.push({
            productId : productId,
            quantity :1
        });
    }

}