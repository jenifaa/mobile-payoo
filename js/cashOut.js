document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = document.getElementById('cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinCashOut  = document.getElementById('pin-number-cash-out').value;
    console.log(cashOut , pinCashOut);

    
  if(pinCashOut === '1234'){
    console.log('Cash out from your account');
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - cashOutNumber;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance; 
}
else{
    alert('Wrong way.Try again.');
}


})