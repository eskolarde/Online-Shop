function show(){
    document.getElementById('box').classList.toggle('active');
    document.getElementById('box1').classList.toggle('active');
    document.getElementById('checkout').classList.toggle('active');
}

function buy(){
    element = document.getElementById('amount')
    value = element.innerHTML;
    ++value;
    document.getElementById('amount').innerHTML = value;
}

function buy1(){
    element = document.getElementById('amount1')
    value = element.innerHTML;
    ++value;
    document.getElementById('amount1').innerHTML = value;
}

function remove(sum, value){
    element = document.getElementById('amount')
    value = element.innerHTML;
    --value;
    if (value < 0){
        value = 0;
    }
    document.getElementById('amount').innerHTML = value;
}
function remove1(sum, value){
    element = document.getElementById('amount1')
    value = element.innerHTML;
    --value;
    if (value < 0){
        value = 0;
    }
    document.getElementById('amount1').innerHTML = value;
}

