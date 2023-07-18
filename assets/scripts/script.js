function borde(){
    let foto = document.querySelector('#img-req1')
    foto.style.border != '2px solid red' ? foto.style.border = '2px solid red' : foto.style.border = 'none'
}

function verificar(){
    let sticker1 = document.querySelector('#sticker1').value
    let sticker2 = document.querySelector('#sticker2').value
    let sticker3 = document.querySelector('#sticker3').value
    let result = document.querySelector('#hidden-result')
    let total = Number(sticker1) + Number(sticker2) + Number(sticker3)
    let resto = 10 - total
    if( total < 10 ){
        result.innerHTML = 'Llevas ' + total + ' stickers. Te queda espacio para ' + resto + ' sticker más!'
    }
    else if ( total == 10 ) {
        result.innerHTML = 'Llevas seleccionados 10 stickers!'
    }
    else{
        result.innerHTML = 'Llevas demasiados stickers! Quita ' + (resto * -1) + ' sticker del carro.'
    }
}

function password(){
    let firstField = document.querySelector('#first').value
    let secondField = document.querySelector('#second').value
    let thirdField = document.querySelector('#third').value
    let verifyResult = document.querySelector('#verify-result')
    if ( firstField == '9' && secondField == '1' && thirdField == '1' ){
        verifyResult.innerHTML = 'Password 1 correcto'
    }
    else if ( firstField == '7' && secondField == '1' && thirdField == '4' ){
        verifyResult.innerHTML = 'Password 2 correcto'
    }
    else{
        verifyResult.innerHTML = 'Password incorrecto'
    }
}