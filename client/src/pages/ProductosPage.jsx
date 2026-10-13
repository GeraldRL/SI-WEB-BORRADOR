import { useState } from "react";
import ProductosTableHeader from "../components/ProductosTableHeader";
import ProductoRow from "../components/ProductoRow";
import ProductoForm from "../components/ProductoForm";

const productosIniciales = [
    { id: 1, nombre: 'Teclado mecánico', categoria: 'Periféricos', precio: 189.9, stock: 25 }, 
    { id: 2, nombre: 'Mouse inalámbrico', categoria: 'Periféricos', precio: 69.5, stock: 8 }, 
    { id: 3, nombre: 'Monitor 24', categoria: 'Pantallas', precio: 549, stock: 14 }, 
    { id: 4, nombre: 'Laptop 15', categoria: 'Computadoras', precio: 2899, stock: 5 }, 
    { id: 5, nombre: 'Cable HDMI 2m', categoria: 'Accesorios', precio: 24.9, stock: 60 }, 
    { id: 6, nombre: 'Disco SSD 1TB', categoria: 'Almacenamiento', precio: 319, stock: 3 }, 
]

function ProductosPage() {
    const [productos, setProductos] = useState(productosIniciales);
    const [productoEditando, setProductoEditando] = useState(null);

    const guardarProducto = (datos) => {
        if (productoEditando) {
            setProductos(
                productos.map((p) =>
                    p.id === productoEditando.id ? { ...p, ...datos } : p
                )
            );
            setProductoEditando(null);
        } else {
            setProductos([...productos, { ...datos, id: Date.now() }]);
        }
    };
    
    const eliminarProducto = (id) => {
        if (!window.confirm('¿Eliminar este producto?')) return;
        setProductos(productos.filter((p) => p.id !== id));
        if (productoEditando?.id === id) setProductoEditando(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Productos</h1>

            <ProductoForm 
                onGuardar={guardarProducto}
                productoEditando={productoEditando}
                onCancelar={() => setProductoEditando(null)}
            />
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <ProductosTableHeader />
                    <tbody>
                        {productos.map((producto) => (
                            <ProductoRow 
                                key={producto.id}
                                producto={producto}
                                onEditar={setProductoEditando}
                                onEliminar={eliminarProducto}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductosPage;