let imie=prompt("Jak masz na imie?");
console.log("Witaj"+ imie);
alert("Witaj " + imie);
let haslo;
while(haslo!="1234"){
    haslo=prompt("Podaj haslo " + imie);
}
alert("Prawidlowe haslo");



function Kalkulator(operator) 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;  
 
    switch(operator) 
    {
        case '+':
            var result = parseFloat(a) + parseFloat(b);         
        break;
        case '-':
            var result = parseFloat(a) - parseFloat(b);         
        break;  
        case 'x':
            var result = parseFloat(a) * parseFloat(b);         
        break;  
        case '/':
            var result = parseFloat(a) / parseFloat(b);         
        break;    
    }
 
    document.getElementById('result').value = '= ' + result;
}