// Importa el módulo 'colors' para añadir colores a los textos en la consola
require('colors');

// Importa funciones para guardar y leer la base de datos desde un archivo
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

// Importa funciones para manejar la interfaz de usuario con Inquirer
const { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');

// Importa la clase Tareas desde el modelo de tareas
const Tareas = require('./models/tareas');

// Función principal asincrónica que controla el flujo de la aplicación
const main = async() => {
    let opt = ''; // Variable para almacenar la opción seleccionada por el usuario
    const tareas = new Tareas(); // Crea una nueva instancia de la clase Tareas

    // Lee las tareas almacenadas en la base de datos
    const tareasDB = leerDB();

    // Si hay tareas en la base de datos, las carga en la instancia de tareas
    if (tareasDB) { 
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        // Muestra el menú y espera la opción seleccionada por el usuario
        opt = await inquirerMenu();

        // Controla la opción seleccionada usando un switch
        switch (opt) {
            case '1':
                // Opción para crear una nueva tarea
                const desc = await leerInput('Descripción:'); // Solicita al usuario que ingrese una descripción
                tareas.crearTarea(desc); // Crea una nueva tarea con la descripción proporcionada
                break;

            case '2':
                // Opción para listar todas las tareas
                tareas.listadoCompleto(); // Muestra todas las tareas en consola
                break;
            
            case '3': 
                // Opción para listar las tareas completadas
                tareas.listarPendientesCompletadas(true); // Muestra solo las tareas completadas
                break;

            case '4': 
                // Opción para listar las tareas pendientes
                tareas.listarPendientesCompletadas(false); // Muestra solo las tareas pendientes
                break;

            case '5': 
                // Opción para marcar tareas como completadas o pendientes
                const ids = await mostrarListadoChecklist(tareas.listadoArr); // Muestra un checklist y obtiene los IDs seleccionados
                tareas.toggleCompletadas(ids); // Cambia el estado de las tareas según los IDs seleccionados
                break;
                       
            case '6': 
                // Opción para borrar una tarea
                const id = await listadoTareasBorrar(tareas.listadoArr); // Muestra una lista de tareas y obtiene el ID a borrar
                if (id !== '0') { // Verifica que no se haya seleccionado la opción "0" (cancelar)
                    const ok = await confirmar('¿Está seguro?'); // Confirma si el usuario realmente quiere borrar la tarea
                    if (ok) {
                        tareas.borrarTarea(id); // Borra la tarea con el ID seleccionado
                        console.log('Tarea borrada'); // Mensaje de confirmación en consola
                    }
                }
                break;
        
        }

        // Guarda el estado actual de las tareas en la base de datos después de cada operación
        guardarDB(tareas.listadoArr);

        await pausa(); // Espera a que el usuario presione una tecla antes de continuar

    } while (opt !== '0'); // Continúa mostrando el menú hasta que se seleccione "0"

}

// Llama a la función principal para iniciar la aplicación
main();