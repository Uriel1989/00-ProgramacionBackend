// Imprime un mensaje en la consola
console.log("hola...!!!");

// Definimos un array llamado 'usuarios' que contiene objetos
let usuarios = [
    {
        id: 1, // Identificador único del usuario
        nombre: "Luciana", // Nombre del usuario
        email: "luciana@test.com", // Correo electrónico del usuario
        password: "123", // Contraseña del usuario (no recomendable almacenar así)
        rol: "user" // Rol del usuario en el sistema
    },
    {
        id: 2, // Identificador único del segundo usuario
        nombre: "Juan", // Nombre del segundo usuario
        email: "juan@test.com", // Correo electrónico del segundo usuario
        password: "123", // Contraseña del segundo usuario (no recomendable almacenar así)
        rol: "user" // Rol del segundo usuario en el sistema
    },
    {
        id: 3, // Identificador único del tercer usuario
        nombre: "Romina", // Nombre del tercer usuario
        email: "romina@test.com", // Correo electrónico del tercer usuario
        password: "123", // Contraseña del tercer usuario (no recomendable almacenar así)
        rol: "admin" // Rol del tercer usuario en el sistema (administrador)
    }
];

// Usamos el método forEach para iterar sobre el array 'usuarios'
// Por cada usuario en el array, se ejecuta la función que imprime el objeto completo en la consola
usuarios.forEach(u => console.log(u));