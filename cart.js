document.addEventListener("DOMContentLoad",()=>{

    LoadCart()
});

let cartItems=[]

//loadding the items from local storage

function LoadCart(){
    let cartvalues=localStorage.getItem("cart")
    if(cartvalues){
        cartItems=JSON.parse(cartvalues)
        UpdatecartUI
    }
}


//adding functionalities for increemnt and decrement and remove

let incrementBtn=cartprod.querySelector(".increment")
let decre