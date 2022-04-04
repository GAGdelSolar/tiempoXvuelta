let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let dato4 = <HTMLInputElement>document.getElementById("dato4");

let T1: number;
let T2: number;
let T3: number;
let T4: number;
let TotalTime: number;
let Promedio: number;

btnEnviar.addEventListener("click", () => {
  T1 = Number(dato1.value);
  T2 = Number(dato2.value);
  T3 = Number(dato3.value);
  T4 = Number(dato4.value);
  TotalTime = T1 + T2 + T3 + T4;
  Promedio = (T1 + T2 + T3 + T4) / 4;

  console.log("Tiempo total 4 vueltas:", TotalTime, "segundos");
  console.log("Promedio por vuelta:", Promedio, "segundos");
});
