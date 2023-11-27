
function calculate(){
    const number = document.getElementById("number").value;
    let sum = 0;

    for (let i = 1; i < number; i++){
        if(i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }

    return window.alert(`O Somatório dos números divisíveis por 3 e 5 de ${number} é : ${sum}`);
}