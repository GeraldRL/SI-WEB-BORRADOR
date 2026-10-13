import { useState } from "react";

const formularioInicial = {
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
};

function ProductoForm({ onAgregar }) {
    const [formulario, setFormulario] = useState(formularioInicial);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAgregar({
            nombre: formulario.nombre.trim(),
            categoria: formulario.categoria.trim(),
            precio: Number(formulario.precio),
            stock: Number(formulario.stock),
        });

        setFormulario(formularioInicial);
    };

    const inputClase = 'w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-blue-500';

    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6"
        >
            <h2 className="text-kg font-semibold text-slate-800 mb-4">Nuevo producto</h2>

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
                        step="1"
                        value={formulario.stock}
                        onChange={handleChange}
                        required
                        className={inputClase}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors"
            >
                Agregar producto
            </button>
        </form>
    );
}

export default ProductoForm;