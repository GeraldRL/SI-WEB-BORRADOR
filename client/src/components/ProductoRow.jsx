import { formatearPrecio } from '../utils/formatearPrecio';

function ProductoRow({ producto }) {
    const { nombre, categoria, precio, stock } = producto;;
    
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
        </tr>
    );
}

export default ProductoRow;