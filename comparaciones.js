// Arreglo de objetos con libros "casi" ordenados por año
let librosCasiOrdenados = [
    { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
    { codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 },
    { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
    { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
    { codigo: "L004", titulo: "Bases de Datos", anio: 2018 }, 
    { codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 }
  ];
  function burbuja(libros) {
    let comparaciones = 0;   // Contador de comparaciones
    let intercambios = 0;    // Contador de intercambios
    let n = libros.length;
    let arr = [...libros];   // Copiamos el arreglo original para no modificarlo
  
    // Bucle externo recorre el arreglo varias veces
    for (let i = 0; i < n - 1; i++) {
      // Bucle interno compara elementos adyacentes
      for (let j = 0; j < n - i - 1; j++) {
        comparaciones++;  //  Aquí cuenta una comparación
  
        // Si el libro actual tiene un año mayor que el siguiente, se intercambian
        if (arr[j].anio > arr[j + 1].anio) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Intercambio
          intercambios++;
        }
      }
    }
  
    // Mostrar resultados en forma de tabla
    console.log("Ordenado con Burbuja:");
    console.table(arr);  // Aquí se imprime la tabla ordenada en consola
    console.log("Comparaciones (Burbuja):", comparaciones);  //  Cantidad total de comparaciones
    console.log("Intercambios (Burbuja):", intercambios);    // Cantidad total de intercambios
  }
  function insercion(libros) {
    let comparaciones = 0;   // Contador de comparaciones
    let intercambios = 0;    // Contador de movimientos/intercambios
    let arr = [...libros];   // Copia del arreglo original
  
    // Recorremos desde el segundo elemento hasta el final
    for (let i = 1; i < arr.length; i++) {
      let actual = arr[i];  // Libro actual a insertar en su posición correcta
      let j = i - 1;
  
      // Comparar hacia atrás mientras el libro anterior tenga mayor año
      while (j >= 0) {
        comparaciones++;  //Cada vez que entra al while, es una comparación
  
        if (arr[j].anio > actual.anio) {
          arr[j + 1] = arr[j];  // Mover libro a la derecha
          intercambios++;       // Conteo de movimiento/intercambio
          j--;
        } else {
          break; // Ya está en la posición correcta
        }
      }
  
      arr[j + 1] = actual;  // Insertar el libro actual
      intercambios++;       // Cuenta como inserción final
    }
  
    // Mostrar resultados en forma de tabla
    console.log("Ordenado con Inserción:");
    console.table(arr);  //Aquí se imprime la tabla ordenada en consola
    console.log("Comparaciones (Inserción):", comparaciones);  // Total de comparaciones
    console.log("Intercambios (Inserción):", intercambios);    // Total de movimientos
  }
  burbuja(librosCasiOrdenados);
insercion(librosCasiOrdenados);