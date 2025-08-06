let librosCasiOrdenados = [
    { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
    { codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 },
    { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
    { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
    { codigo: "L004", titulo: "Bases de Datos", anio: 2018 }, // fuera de lugar
    { codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 }
  ];
  
  // Algoritmo de burbuja para ordenar por año (anio)
  function ordenarPorAnio(libros) {
    let n = libros.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (libros[j].anio > libros[j + 1].anio) {
          // Intercambiar elementos
          let temp = libros[j];
          libros[j] = libros[j + 1];
          libros[j + 1] = temp;
        }
      }
    }
  }
  
  // Ejecutar el algoritmo
  ordenarPorAnio(librosCasiOrdenados);
  
  // Mostrar el resultado
  console.log("Libros ordenados por año:");
  librosCasiOrdenados.forEach(libro => {
    console.log(`${libro.anio} - ${libro.titulo}`);
  });