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



let quantity = 0;
let cartObj = '';

function add(cartPerOne){
  if(cartPerOne === 'One'){
    let cartValu = parseFloat(document.getElementById('valu').value);

    quantity = quantity + cartValu;

  
  } else if(cartPerOne === 'Two'){
    let cartValu = parseFloat(document.getElementById('valu2').value);

    quantity += cartValu;
    
  } else if(cartPerOne === 'Three'){
    let cartValu = parseFloat(document.getElementById('valu3').value);


    quantity += cartValu;

  } else if(cartPerOne === 'Four'){
    let cartValu = parseFloat(document.getElementById('valu4').value);

    quantity += cartValu;

  } else if(cartPerOne === 'Five'){
    let cartValu = parseFloat(document.getElementById('valu5').value);

    quantity += cartValu;

  } else if(cartPerOne === 'Six'){
    let cartValu = parseFloat(document.getElementById('valu6').value);

    quantity += cartValu;

  }

  document.getElementById('showValue').innerText = quantity;
}


// cart page

  

