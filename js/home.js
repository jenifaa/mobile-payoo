document.getElementById('btn-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money').value;
    const pinNumberInput  = document.getElementById('pin-number-input').value;
    console.log(addMoneyInput , pinNumberInput);

    
  if(pinNumberInput === '1234'){
    console.log('Add money to account');
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance; 
}


})