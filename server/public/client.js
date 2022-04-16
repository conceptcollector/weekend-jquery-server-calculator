$(document).ready(onReady);

function onReady() {
    $('#equals').on('click', doMath);
}

function doMath(numberOne, numberTwo) {
    let mathEquation = {
        firstNumber: numberOne,
        math: $('.operator').val(),
        secondNumber: numberTwo
    }
    
    $.ajax({
        method: 'POST',
        url: '/',
        data: mathEquation
    }).then(function (response){
        console.log(response);
    })
    languageOfTheUniverse();
}

