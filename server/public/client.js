let operator = '';

$(document).ready(onReady);

function onReady() {
    $('.operator').on('click', operate);
    $('#equals').on('click', doMath);
}

function operate() {
    operator = $(this).text();
}

function doMath() {
    let mathEquation = {
        firstNumber: $('#firstNumber').val(),
        operator: operator,
        secondNumber: $('#secondNumber').val()
    }
    $.ajax({
        method: 'POST',
        url: '/unifiedMath',
        data: mathEquation
    }).then(function (response){
        console.log(response);
    })
    // Becase "readMath". Get it? 😅
    languageOfTheUniverse();
}

function languageOfTheUniverse(){
    $.ajax({
      method: 'GET',
      url: '/unifiedMath'
    }).then(function(response){
      console.log('the server sent me something');
      console.log(response);
      $('#screen').empty();
      $('#equations').empty();
      $('#screen').append(`${response[response.length-1].solution}`);
      for (let thisMath of response) {
        $('#equations').append(`<li>
        ${thisMath.firstNumber} ${thisMath.operator} ${thisMath.secondNumber} = ${thisMath.solution}
        <li>`);
      }
    })
  }