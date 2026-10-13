function ProdcutosTableHeader() {
    return (
        <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Categoría</th>
                <th className="px-4 py-3 font-medium text-right">Precio</th>
                <th className="px-4 py-3 font-medium text-right">Stock</th>
                <th className="px-4 py-3 font-medium text-right">Acciones</th>
            </tr>
        </thead>
    );
}

export default ProdcutosTableHeader;