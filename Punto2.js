function buscarLibroOrdenado(criterio, valorBuscado, listaDesordenada) {
  // ⚠️ Esta función asume que la lista está ordenada, pero tú le pasarás una lista desordenada

  let inicio = 0;
  let fin = listaDesordenada.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    const valorMedio = listaDesordenada[medio][criterio];

    if (valorMedio === valorBuscado) {
      return listaDesordenada[medio];
    } else if (valorBuscado < valorMedio) {
      fin = medio - 1;
    } else {
      inicio = medio + 1;
    }
  }

  return null; // No encontrado
}

// 🧪 Lista sin ordenar
const librosOrdenadosPorCodigo = [
   { codigo: "L008", titulo: "Ingeniería de Software", anio: 2021 },
  { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
  { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
  { codigo: "L010", titulo: "Análisis Numérico", anio: 2020 },
  { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
  { codigo: "L004", titulo: "Bases de Datos", anio: 2018 }
];

// 🔎 Usar la función binaria "normal"
console.log(buscarLibroOrdenado("codigo", "L001", librosOrdenadosPorCodigo));
console.log(buscarLibroOrdenado("codigo", "L003", librosOrdenadosPorCodigo));
console.log(buscarLibroOrdenado("codigo", "L004", librosOrdenadosPorCodigo));
console.log(buscarLibroOrdenado("codigo", "L007", librosOrdenadosPorCodigo));

