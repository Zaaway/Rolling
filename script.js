const button1 = document.getElementById('b');
button1.addEventListener("click", printValue);


function printValue(){
    let x = roll();
    let y = roll();
    let z = x+y;
    document.getElementById('p').textContent = `Dice1 rolled a ${x}`;
    document.getElementById('z').textContent = `Dice2 rolled a ${y}`;
    document.getElementById('s').textContent = `The combined total is ${z}`
}


function roll(){
    let value = Math.floor((Math.random()*6)+1);
    return value;
}
