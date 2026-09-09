
console.log("Hola mundo con javascript enviado desde el servidor!");

// Esperamos a que el HTML cargue completamente antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    const btnLog = document.getElementById('btn-log');
    const routeList = document.getElementById('route-list');

    // Datos simulados
    const rutas = [
        "Ruta de tierra hacia La Palma",
        "Senderos del Boquerón",
        "Ruta de las Flores (Desvío Off-Road)",
        "Carretera Los Chorros - Mirador",
        "Caminos montañosos de Chalatenango"
    ];

    // Escuchar el clic en el botón
    btnLog.addEventListener('click', () => {
        // Elegir una ruta aleatoria del arreglo
        const rutaAleatoria = rutas[Math.floor(Math.random() * rutas.length)];
        
        // Obtener hora actual
        const hora = new Date().toLocaleTimeString('es-ES');

        // Crear un nuevo elemento de lista (li)
        const li = document.createElement('li');
        
        // Asignarle la clase CSS que definimos
        li.className = 'route-item';
        
        // Insertar el contenido
        li.innerHTML = `<strong>${hora}</strong>: ${rutaAleatoria}`;

        // Agregar el nuevo elemento al inicio de la lista en el HTML
        routeList.prepend(li);
    });
});
