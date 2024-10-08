
function mascaraTelefoneFixo(elemento) {
    let valor = elemento.value;

  
    valor = valor.replace(/\D/g, "");


    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");


    valor = valor.substring(0, 14);

    
    elemento.value = valor;
}

function sexo() {
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!peso || !altura) {
        alert('Por favor, preencha os campos de peso e altura corretamente.');
        return;
    }

    if (sexo === 'feminino') {
        return calculoIMCF(peso, altura);
    } else if (sexo === 'masculino') {
        return calculoIMCM(peso, altura);
    }
}


function calculoIMCF(peso, altura) {
    const imcf = peso / (altura * altura);

    if (imcf < 19.1) {
        alert('Amigaaaaa, você está abaixo do peso!');
    } else if (imcf <= 25.8) {
        alert('Amigaaaaa, Você está no peso normal.');
    } else if (imcf <= 27.3) {
        alert('Amigaaaaa, Você está marginalmente acima do peso.');
    } else if (imcf <= 32.3) {
        alert('Falsiane, além de kenga, tu está acima do peso!');
    } else {
        alert('Miga, você está precisando de uma bariátrica.');
    }
    return imcf;
}


function calculoIMCM(peso, altura) {
    const imcm = peso / (altura * altura);

    if (imcm < 20.7) {
        alert('Você está abaixo do peso.');
    } else if (imcm <= 26.4) {
        alert('Você está no peso normal.');
    } else if (imcm <= 27.8) {
        alert('Você está marginalmente acima do peso.');
    } else if (imcm <= 31.1) {
        alert('Você está acima do peso ideal.');
    } else {
        alert('Você está obeso.');
    }
    return imcm;
}


function exibirDados() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const dataNascimento = document.getElementById('data').value;
    const celular = document.getElementById('celular').value;
    const sexo = document.querySelector('input[name="sexo"]:checked');

    if (!nome || !peso || !altura || !dataNascimento || !celular || !sexo) {
        alert('Por favor, preencha todos os campos antes de concluir.');
        return;
    }

   
    const imc = sexo.value === 'feminino' ? calculoIMCF(peso, altura) : calculoIMCM(peso, altura);

    alert(
        `Nome Completo: ${nome}\n` +
        `Peso: ${peso}\n` +
        `Altura: ${altura}\n` +
        `Data de Nascimento: ${dataNascimento}\n` +
        `Celular: ${celular}\n` +
        `Sexo: ${sexo.value}\n` +
        `Cálculo do IMC: ${imc.toFixed(2)}`
    );
}


function openImage() {
    window.open('images/837.jpg', '_blank');
}


document.getElementById('celular').addEventListener('input', function () {
    mascaraTelefoneFixo(this);
});
