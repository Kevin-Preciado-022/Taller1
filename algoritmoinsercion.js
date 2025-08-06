// Arreglo original con libros casi ordenados por año
let librosCasiOrdenados = [
    { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
    { codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 },
    { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
    { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
    { codigo: "L004", titulo: "Bases de Datos", anio: 2018 },
    { codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 }
  ];
  
  // Función que aplica el algoritmo de inserción para ordenar por año
  function ordenarPorInsercion(libros) {
    let n = libros.length; // Guardamos la cantidad total de libros
  
    // Empezamos desde el segundo libro (índice 1)
    for (let i = 1; i < n; i++) {
      let actual = libros[i]; // Guardamos el libro actual que vamos a insertar
      let j = i - 1; // Comenzamos comparando con el elemento anterior
  
      // Mientras no hayamos llegado al inicio del arreglo
      // y el año del libro anterior sea mayor que el actual...
      while (j >= 0 && libros[j].anio > actual.anio) {
        libros[j + 1] = libros[j]; // Desplazamos el libro hacia la derecha
        j--; // Avanzamos hacia la izquierda
      }
  
      // Insertamos el libro actual en la posición correcta
      libros[j + 1] = actual;
    }
  }
  
  // Llamamos a la función para ordenar el arreglo
  ordenarPorInsercion(librosCasiOrdenados);
  
  // Mostramos el resultado ordenado en la consola
  console.log("Libros ordenados por año (inserción):");
  librosCasiOrdenados.forEach(libro => {
    console.log(`${libro.anio} - ${libro.titulo}`);
  });
  