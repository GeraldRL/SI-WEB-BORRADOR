import { formatearPrecio } from '../utils/formatearPrecio';

function ProductoRow({ producto, onEditar, onEliminar }) {
    const { id, nombre, categoria, precio, stock } = producto;;
    
    return (
        <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
            <td className="px-4 py-3 text-slate-800">{nombre}</td>
            <td className="px-4 py-3 text-slate-600">{categoria}</td>
            <td className="px-4 py-3 text-right text-slate-800">{formatearPrecio(precio)}</td>
            <td className="px-4 py-3 text-right">
                <span
                    className={
                        stock < 10
                            ? 'px-2 py-0.5 rounded-dull bg-red-100 text-red-700 font-medium'
                            : 'text-slate-800'
                    }
                >
                    {stock}
                </span>
            </td>
            <td className='px-4 py-3 text-right'>
                <div className='flex justify-end gap-3'>
                    <button
                        onClick={() => onEditar(producto)}
                        className='text-blue-600 hover:text-blue-800 text-sm font-medium'
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => onEliminar(id)}
                        className='text-red-600 hover:text-red-800 text-sm font-medium'
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default ProductoRow;