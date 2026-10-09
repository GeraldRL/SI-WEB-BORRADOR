import { formatearPrecio } from "../utils/formatearPrecio";

const productos = [
    { id: 1, nombre: 'Teclado mecánico', categoria: 'Periféricos', precio: 189.9, stock: 25 }, 
    { id: 2, nombre: 'Mouse inalámbrico', categoria: 'Periféricos', precio: 69.5, stock: 8 }, 
    { id: 3, nombre: 'Monitor 24', categoria: 'Pantallas', precio: 549, stock: 14 }, 
    { id: 4, nombre: 'Laptop 15', categoria: 'Computadoras', precio: 2899, stock: 5 }, 
    { id: 5, nombre: 'Cable HDMI 2m', categoria: 'Accesorios', precio: 24.9, stock: 60 }, 
    { id: 6, nombre: 'Disco SSD 1TB', categoria: 'Almacenamiento', precio: 319, stock: 3 }, 
]

function ProductosPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Productos</h1>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                        <tr>
                            <th className="px-4 py-3 font-medium">Nombre</th>
                            <th className="px-4 py-3 font-medium">Categoría</th>
                            <th className="px-4 py-3 font-medium text-right">Precio</th>
                            <th className="px-4 py-3 font-medium text-right">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-59">
                                <td className="px-4 py-3 text-slate-800">{producto.nombre}</td>
                                <td className="px-4 py-3 text-slate-600">{producto.categoria}</td>
                                <td className="px-4 py-3 text-right text-slate-800">{formatearPrecio(producto.precio)}</td>
                                <td className="px-4 py-3 text-right">
                                    <span className={
                                        producto.stock < 10
                                            ? 'px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium'
                                            : 'text-slate-800'

                                    }
                                >
                                    {producto.stock}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default ProductosPage;