function menu_acomodar(principal,formulario){
    const contenedor = document.querySelector('.container');
    const botones = document.querySelector('.botones-principal');
    const imagen = document.querySelector('#imagen-principal');
    const titulo = document.querySelector('h1');

    botones.style.flexDirection = 'column';

    titulo.innerText='Tipo de mascotita';

    contenedor.style.width = '60%';
    imagen.style.display = "none";
    principal.style.width = '30%';
    formulario.style.display = 'block';
}

function perro() {
    const formulario = document.querySelector('.formulario');
    const perro = document.querySelector('.perro');
    const gato = document.querySelector('.gato');
    const principal = document.querySelector('.principal');
    const imagen = document.querySelector('.imagen-formulario-canino');
    const parte_superior = document.querySelector('.parte-superior');

    menu_acomodar(principal,formulario);
    perro.style.display = 'flex';
    imagen.style.display = 'flex';
    parte_superior.style.display = 'flex';
    gato.style.display = 'none';
}

function gato() {
    const formulario = document.querySelector('.formulario');
    const gato = document.querySelector('.gato');
    const perro = document.querySelector('.perro');
    const principal = document.querySelector('.principal');
    const imagen = document.querySelector('.imagen-formulario-gatuno');
    const parte_superior = document.querySelector('.parte-superior-gato');

    menu_acomodar(principal, formulario);

    gato.style.display = 'flex';
    parte_superior.style.display = 'flex';
    imagen.style.display = 'flex';
    perro.style.display = 'none';

}
function verificar(meses, years) {
    if ((isNaN(years) || years === 0) && (meses > 0 && meses < 12)) {
        return true;
    } else if ((years >= 0 && years <= 24) && (isNaN(meses) || meses === 0)) {
        return true;
    } else if (years < 0 || years > 20 || meses < 1 || meses > 11) {
        alert("Escapa de ahí, esponja. Lo que tienes es un alien.");
        return false;
    } else {
        return true;
    }
}

function edad_perro(añosHumanos, mesesHumanos, tamañoPerro) {
    const mesesTotales = añosHumanos * 12 + mesesHumanos;
    let factorConversion;

    switch (tamañoPerro) {
        case 'toy':
        case 'pequeño':
            factorConversion = 5; // Toy y pequeño: 5 años humanos por año de perro
            break;
        case 'mediano':
            factorConversion = 6; // Mediano: 6 años humanos por año de perro
            break;
        case 'grande':
            factorConversion = 7; // Grande: 7 años humanos por año de perro
            break;
        default: // Por defecto, usar el factor de conversión para tamaño mediano
            factorConversion = 6; // Suponiendo tamaño mediano en caso de valor desconocido
            break;
    }

    return mesesTotales / factorConversion;
}

function calcular_perro() {
    let yearsInput = document.getElementById('years-canino').value;
    let mesesInput = document.getElementById('meses-canino').value;
    let tamaño = document.getElementById('tamano-perro').value;

    // Convertir a números o asignar cero si están vacíos o no son números válidos
    let years = !isNaN(parseInt(yearsInput)) ? parseInt(yearsInput) : 0;
    let meses = !isNaN(parseInt(mesesInput)) ? parseInt(mesesInput) : 0;

    if (verificar(meses, years)) {
        let resultado = document.getElementById('circulo');
        let edad = edad_perro(years, meses, tamaño);
        let añosPerro = Math.floor(edad);

        let mesesPerroDecimal = (edad - añosPerro) * 12;
        let mesesPerro = Math.round(mesesPerroDecimal); // Redondear a entero más cercano

        resultado.innerText = `${añosPerro} años y ${mesesPerro} meses`;
    }
}

function calcular_gato() {
    let yearsInput = document.getElementById('years-gato').value;
    let mesesInput = document.getElementById('meses-gato').value;

    // Convertir a números o asignar cero si están vacíos o no son números válidos
    let years = !isNaN(parseInt(yearsInput)) ? parseInt(yearsInput) : 0;
    let meses = !isNaN(parseInt(mesesInput)) ? parseInt(mesesInput) : 0;

    if (verificar(meses, years)) {
        let resultado = document.getElementById('circulo-gato');
        let edad = edad_perro(years, meses, 'pequeño'); // Los gatos generalmente se consideran de tamaño pequeño
        let añosGato = Math.floor(edad);
        console.log(edad);
        let mesesGatoDecimal = (edad - añosGato) * 12;
        let mesesGato = Math.round(mesesGatoDecimal); // Redondear a entero más cercano

        resultado.innerText = `${añosGato} años y ${mesesGato} meses`;
    }
}
