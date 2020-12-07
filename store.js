
let removeCartItemButton = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButton.length; i++){
    let button = removeCartItemButton[i]
    button.addEventListener('click', function(event){
       let buttonClicked = event.target
       buttonClicked.parentElement.parentElement.remove()
    })
}
function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat( priceElement.innerText.replace('$', ''))
        let quantity =  quantityElement.value
        console.log(price * quantity)
    }
document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total
}
