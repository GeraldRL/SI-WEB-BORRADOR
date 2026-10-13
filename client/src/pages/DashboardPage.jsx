// Página completa para la sección de dashboard de la aplicación. Esta página se muestra cuando el usuario ha iniciado sesión y tiene acceso a las funcionalidades protegidas de la aplicación.

import StatCard from "../components/StatCard";

const resumen = [
    { id: 1, titulo: 'Total de productos', valor: 128, descripcion: 'Registrados en el invetario' },
    { id: 2, titulo: 'Stock bajo', valor: 7, descripcion: 'Menos de 10 unidades' },
    { id: 3, titulo: 'Valor del inventario', valor: '$ 15,430', descripcion: 'Estimado total' },
];

function DashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6"> Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumen.map((item) => (
                    <StatCard
                        key={item.id}
                        titulo={item.titulo}
                        valor={item.valor}
                        descripcion={item.descripcion}
                    />
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;