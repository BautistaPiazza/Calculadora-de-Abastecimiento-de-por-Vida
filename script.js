// Ejercicio 1: El cálculo de los snacks
const edadActual = 25;
const edadMaxima = 85;
const snackFavorito = "papas fritas";
const snacksPorDia = 2;
const precioPorSnack = 500;

const snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;
const gastoTotalSnacks = snacksRestantes * precioPorSnack;

document.querySelector("#calculate-snacks").addEventListener("click", () => {
  const mensajeSnacks = `Necesitarás ${snacksRestantes} de ${snackFavorito} para que te alcancen hasta los ${edadMaxima} años.`;
  const mensajeGasto = `Gastarás $${gastoTotalSnacks} en ${snackFavorito} durante el resto de tu vida.`;

  alert(mensajeSnacks);
  alert(mensajeGasto);
  document.querySelector("#snacks-result").textContent =
    `${mensajeSnacks} ${mensajeGasto}`;
});

// Ejercicio 2: Presupuesto de viaje
const diasDeViaje = 7;
const presupuestoMaximo = 210000;
const comidasPorDia = 3;
const comidasTotales = diasDeViaje * comidasPorDia;
const dineroPorComida = presupuestoMaximo / comidasTotales;

document.querySelector("#calculate-travel").addEventListener("click", () => {
  const mensajeViaje = `Podés gastar $${dineroPorComida} en cada comida para que te alcance la plata durante los ${diasDeViaje} días de viaje.`;

  alert(mensajeViaje);
  document.querySelector("#travel-result").textContent = mensajeViaje;
});
