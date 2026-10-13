import { useState, useEffect } from "react";

const formularioInicial = {
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
};

function ProductoForm({ onGuardar, productoEditando, onCancelar }) {
    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        if (productoEditando) {
            setFormulario({
                nombre: productoEditando.nombre ?? '',
                categoria: productoEditando.categoria ?? '',
                precio: String(productoEditando.precio ?? ''),
                stock: String(productoEditando.stock ?? ''),
            });
        } else {
            setFormulario(formularioInicial);
        }
    }, [productoEditando]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onGuardar({
            nombre: formulario.nombre.trim(),
            categoria: formulario.categoria.trim(),
            precio: Number(formulario.precio),
            stock: Number(formulario.stock),
        });

        setFormulario(formularioInicial);
    };

    const inputClase = 'w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';

    console.log('formulario:', formulario);

    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6"
        >
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
                {productoEditando ? 'Editar producto' : 'Nuevo producto'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
                        Nombre
                    </label>
                    <input 
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={formulario.nombre}
                        onChange={handleChange}
                        required
                        className={inputClase}
                    />
                </div>

                <div>
                    <label htmlFor="categoria" className="block text-sm font-medium text-slate-700 mb-1">
                        Categoria
                    </label>
                    <input
                        id="categoria"
                        name="categoria"
                        type="text"
                        value={formulario.categoria}
                        onChange={handleChange}
                        required
                        className={inputClase}
                    />
                </div>

                <div>
                    <label htmlFor="precio" className="block text-sm font-medium text-slate-700 mb-1">
                        Precio
                    </label>
                    <input
                        id="precio"
                        name="precio"
                        type="number"
                        value={formulario.precio}
                        onChange={handleChange}
                        required
                        className={inputClase}
                    />
                </div>

                <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-slate-700 mb-1">
                        Stock
                    </label>
                    <input
                        id="stock"
                        name="stock"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formulario.stock}
                        onChange={handleChange}
                        required
                        className={inputClase}
                    />
                </div>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors"
                >
                    {productoEditando ? 'Guardar cambios' : 'Agregar producto'}
                </button>
                {productoEditando && (
                    <button
                        type="button"
                        onClick={onCancelar}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-4 py-2 rounded-md text-sm transition-colors"
                    >
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
}

export default ProductoForm;