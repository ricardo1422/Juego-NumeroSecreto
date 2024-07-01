//let titulo= document.querySelector('h1');
//titulo.innerHTML="Número secreto";

//let inst= document.querySelector('p');
//inst.innerHTML="Ingresa un número del 1 al 10";

let numeroSecreto;
let intentos;
let numerosSorteados=[];
let numeroMaximo=1000;
let limiteJuegos=0;
console.log(numeroSecreto);

function asignarTexto(elemento,texto)
{
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

}

function validaNumero()
{
    let numeroUsuario=parseInt(document.getElementById("numeroUsuario").value);
    if(numeroUsuario===numeroSecreto)
    {
        asignarTexto('p',`Acertaste >_< en ${intentos} ${(intentos==1)? 'intento':'intentos'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else
    {
        if(numeroSecreto>numeroUsuario)
        {
            asignarTexto('p',"El número secreto es mayor -_-");
        }else{
            asignarTexto('p',"El número secreto es menor -_-");
        }
        intentos++;
        limpiarCampo();
    }


}

function limpiarCampo()
{
    document.querySelector("#numeroUsuario").value='';
}
function generarNumeroSecreto()
{
    if(limiteJuegos==10)
    {
        numerosSorteados=[];
        limiteJuegos=0;
    }
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados);
    console.log(numeroGenerado);
    if(numerosSorteados.length==numeroMaximo)
    {
        asignarTexto('p','Juego terminado');
    }else{
        if(numerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
            
        }else{
            numerosSorteados.push(numeroGenerado);
            limiteJuegos++;
            return numeroGenerado;
        }
    }
    
    
    
}

function iniciarJuego()
{
    asignarTexto('h1','Número secreto');
    asignarTexto('p',`Ingresa un número de 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego()
{
    iniciarJuego();
    limpiarCampo();
    document.getElementById("reiniciar").setAttribute('disabled',true);
}

iniciarJuego();