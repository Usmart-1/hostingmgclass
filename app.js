function expand(){
  document.getElementById('menu').style.display = 'block';
  document.getElementById('opn').style.display = 'none';
  document.getElementById('cls').style.display = 'inline';
}


function collapse(){
  document.getElementById('menu').style.display = 'none';
  document.getElementById('opn').style.display = 'inline';
  document.getElementById('cls').style.display = 'none'
}


// Add to cart

let cart = 0;

function add(changeObject){
  if(changeObject === 'One'){
    let quantity = parseFloat(document.getElementById('value').value);

  cart = cart + quantity;

  document.getElementById('cartDisplay').innerText = cart;
    
  } else if(changeObject === 'Two'){
    let quantity = parseFloat(document.getElementById('value2').value);

    cart += quantity;

    document.getElementById('cartDisplay').innerText = cart;

  }
}
document.addEventListener("DOMContentLoaded", function () {
  let cartQuantityElement = document.getElementById("valu"); // Target cart element
  let storedQuantity = localStorage.getItem("cartQuantityElement"); // Get stored quantity

  if (storedQuantity) {
cartQuantityElement.textContent = storedQuantity; // Set quantity from storage
  }
});








// function chart(parameter){
//   if(parameter === 'One'){
//     console.log('parameter Is One')
//   } 
  
//   else if (parameter === 'Two'){
//     console.log('The parameter Change to Two')
//   }
// }

// let One;

// One = 2;  