export function formatearPrecio(valor) {
    // Convierte el valor a un número flotante y lo formatea como moneda en español (MXN)
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
    }).format(valor);
}