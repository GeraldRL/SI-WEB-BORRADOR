// Página completa para la sección de página no encontrada de la aplicación. Esta página se muestra cuando el usuario intenta acceder a una ruta que no existe en la aplicación.

function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold text-red-600">
                404: Page Not Found
            </h1>
        </div>
    );
}

export default NotFoundPage;