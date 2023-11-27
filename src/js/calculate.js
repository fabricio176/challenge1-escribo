
function calculate() {
    const number = document.getElementById("number").value;
    const output = document.getElementById("output");
    let sum = 0;
    let resultingNumbers = [];

    if(isNaN(number)){
        output.innerText = `Texto inválido, por favor digite um número`;
        return alert(`Texto inválido, por favor digite um número`);
    }else if(number < 0) {
        output.innerText = `Por favor, digite um número positivo`;
        return alert(`Por favor, digite um número positivo`)
    } else {
        for (let i = 1; i < parseInt(number); i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
                resultingNumbers.push(i);
            }
        }
    }

    output.innerText = `O Somatório dos números divisíveis por 3 e 5 de ${number} é : ${sum}
                       Números resultantes: ${resultingNumbers}`;
    return alert(`O Somatório dos números divisíveis por 3 e 5 de ${number} é : ${sum} \nNúmeros resultantes: ${resultingNumbers}`);
}


