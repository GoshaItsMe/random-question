let amount = +prompt('Введите кол-во примеров');

function random (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

for(let i = 0; i < amount;i++) {
    let number1 = random(1,10);
    let number2 = random(1,10);
    let sign = random(1,4);
    let question = 0;
    
    if(sign == 1) {
        question = number1 + number2;
        sign = '+';
    }else if(sign == 2) {
        question = number1 - number2;
        sign = '-';
    }else if(sign == 3) {
        question = number1 * number2;
        sign = '*';
    }else if(sign == 4) {
        question = number1 / number2;
        sign = '/'
    }

    let primer = prompt(number1  + ' ' + sign + ' ' + number2);
    if(primer == question) {
        alert('Ваш ответ верный !');
    }else {
        alert('Ваш ответ не верый жаль');
    }
}