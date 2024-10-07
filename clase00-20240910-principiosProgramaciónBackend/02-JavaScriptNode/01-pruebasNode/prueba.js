// Imprime un mensaje en la consola
console.log("hola...!!!");

// Define un array llamado 'usuarios' que contiene objetos representando usuarios
let usuarios = [
    { id: 1, nombre: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
    { id: 2, nombre: "Juan", email: "juan@test.com", password: "123", rol: "user" },
    { id: 3, nombre: "Romina", email: "romina@test.com", password: "123", rol: "admin" }
];

// Utiliza el método forEach para iterar sobre el array 'usuarios'
// Para cada usuario 'u', imprime el objeto en la consola
usuarios.forEach(u => console.log(u));