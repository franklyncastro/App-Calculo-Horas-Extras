//  Funcion para el calculo de las horas
function calcular() {
  // input salario y horas
  let salario = document.getElementById("salario").value;

  let cantHoras = document.getElementById("cantHoras").value;

  // valores del select
  let select = document.getElementById("select").value;

  // Formula
  const mediaDia = 21.67;

  const horasXdia = 8;

  let calc1 = salario / mediaDia / horasXdia;
  let calc2 = calc1 * select;

  document.getElementById("result").innerHTML =
    Math.round(calc1 + calc2) * cantHoras;
}

// Actualizacion de Fecha automatica.
let link = document.getElementById("copyright");
let year = new Date();

link.innerHTML = `
${year.getFullYear()} 
-Trilogy Dominicana By: Franklyn Castro`;
