const form = document.querySelector('.container-form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const peso = Number(inputPeso.value);

    const inputAltura = e.target.querySelector('#altura')
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido',false);
        return;
    }

    if(!altura){
        setResultado('Altura inválido',false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    console.log(imc,nivelImc);

    setResultado(msg, true);

});


function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg,isvalid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';

    const p = criaP();
    
    if(isvalid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-resultado-bad');
    }
    
    p.innerHTML= msg
    resultado.appendChild(p);

    
}

function getImc (peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc){
    const nivel = ['Abaixo do peso','Peso Normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4]; 
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];  
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}