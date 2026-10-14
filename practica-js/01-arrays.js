const productos = [
    { id: 1, nombre: 'Teclado', categoria: 'Periféricos', precio: 190, stock: 25 },
    { id: 2, nombre: 'Mouse', categoria: 'Periféricos', precio: 70, stock: 8 },
    { id: 3, nombre: 'Monitor', categoria: 'Pantallas', precio: 550, stock: 14 },
    { id: 4, nombre: 'Laptop', categoria: 'Computadoras', precio: 2900, stock: 5 },
    { id: 5, nombre: 'Cable HDMI', categoria: 'Accesorios', precio: 25, stock: 60 },
];

// 1. Obtén un arreglo solo conlos nombres (map)

console.log("\n");
console.log("Ejercicio 01: Arreglo con solo los nombres (map)");
console.log("El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.");
console.log("\n");

const nombres = productos.map((n) => {
    return n.nombre;
})

console.log(nombres);
console.log("\n");

// 2. Obtén los productos con stock menor a 10 (filter)

console.log("Ejercicio 02: Productos con stock menor a 10 (filter)");
console.log("El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.");
console.log("\n");

const menores = productos.filter((producto) => {
    return producto.stock < 10;
})

console.log(menores);
console.log("\n");

// 3. Calcula el valor total del inventario: suma de precio * stock (reduce)

console.log("Ejercicio 03: Valor total del inventario (reduce)");
console.log("El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.");
console.log("\n");

const valor_inventario = productos.reduce((acc, curr) => acc + curr.stock * curr.precio, 0);

console.log(valor_inventario);

console.log("\n");

// 4. Encuentra el producto con id 3 (find)

console.log("Ejercicio 04: Encontrar el producto con id 3 (find)");
console.log("El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.");
console.log("\n");

const id_3 = productos.find((element) => element.id == 3);

console.log(id_3);

console.log("\n");

// 5. Comprueba si algún producto cuesta más de 2000 (some)

console.log("Ejercicio 05: Comprobar si un producto cuesta más de 2000 (some)");
console.log("El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.");
console.log("\n");

const mas_2000 = productos.some((element) => element.precio > 2000);

console.log(mas_2000);

console.log("\n");

// 6. Agrupa: cuenta cuántos productos hay por categoría (reduce)

console.log("Ejercicio 06: Contar cuántos productos hay por categoría (reduce)");
console.log("El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.");
console.log("\n");

const conteo = productos.reduce(
    (acc, curr) => {
        acc[curr.categoria] = (acc[curr.categoria] ?? 0) + 1;
        return acc;
    }, {});

console.log(conteo);

console.log("\n");

// 7. Ordena de mayor a menor precio SIN modificar el arreglo original (spread + sort)

console.log("Ejercicio 07: Ordenar de mayor a menor precio SIN modificar el arreglo original (spread + sort)");
console.log("El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.");
console.log("\n");

const ordenados = [...productos].sort((a, b) => b.precio - a.precio);

console.log(ordenados);
console.log(productos);

console.log("\n");
