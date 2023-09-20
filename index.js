class Usuario {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getNombre() {
    return this.nombre;
  }
}


const veces = Number(prompt('¿Cuántos créditos quieres simular?'));
const usuarios = [];
const creditos = [];


function calcularTasaInteres(plazo) {
  let tasaInteres;
  if (plazo >= 12 && plazo <= 24) {
    tasaInteres = 0.2;
  } else if (plazo >= 25 && plazo <= 36) {
    tasaInteres = 0.15;
  } else {
    tasaInteres = 0.10;
  }
  return tasaInteres;
}


for (let i = 0; i < veces; i++) {
  const nombre = prompt('Ingrese el nombre del usuario ' + (i + 1));
  const apellido = prompt('Ingrese el apellido del usuario ' + (i + 1));
  const edad = parseInt(prompt('Ingrese la edad del usuario ' + (i + 1)));
  const usuario = new Usuario(nombre, apellido, edad);
  usuarios.push(usuario);

  let monto, plazo;

  while (true) {
    monto = parseInt(prompt('Ingrese el monto de crédito que desea solicitar (debe ser mayor o igual a $50,000): '));
    if (!isNaN(monto) && monto >= 50000) {
      break;
    } else {
      alert('Por favor, ingrese un monto válido (mayor o igual a $50,000).');
    }
  }

  while (true) {
    plazo = parseInt(prompt('Ingrese el plazo en meses que desea pagar (plazo mínimo 12 meses): '));
    if (!isNaN(plazo) && plazo >= 12) {
      break;
    } else {
      alert('Por favor, ingrese un plazo válido (mínimo 12 meses).');
    }
  }

  creditos.push({ monto, plazo });
}


usuarios.forEach((usuario, index) => {
  console.log('Información del usuario ' + (index + 1) + ':');
  console.log('Nombre: ' + usuario.nombre);
  console.log('Apellido: ' + usuario.apellido);
  console.log('Edad: ' + usuario.edad);
  console.log('\n');

  console.log('Información del crédito ' + (index + 1) + ':');
  const tasaInteres = calcularTasaInteres(creditos[index].plazo);
  const montoCredito = parseInt(creditos[index].monto);
  const plazoMeses = creditos[index].plazo;
  const cuotaMensual = ((montoCredito * tasaInteres) + montoCredito) / plazoMeses;
  console.log('Monto del crédito: $' + montoCredito);
  console.log('Tasa de interés: ' + (tasaInteres * 100) + '%');
  console.log('Monto total a pagar: $' + ((montoCredito * tasaInteres) + montoCredito));
  console.log('Plazo en meses: ' + plazoMeses);
  console.log('Cuota mensual: $' + cuotaMensual.toFixed(2));
  console.log('\n');
});



