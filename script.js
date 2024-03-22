let txtArea = document.getElementById('textarea');

function dislpay() {
    localStorage.setItem('txt', txtArea.value);
}

if (localStorage.getItem("txt")) {
    txtArea.textContent = localStorage.getItem('txt');
}


txtArea.addEventListener('click', dislpay);