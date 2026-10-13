function StatCard({ titulo, valor, descripcion }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <p className="text-sm font-medium text-slate-599">{titulo}</p>
            <p className="text-3xl font-bold text-slate-800 mt-2">{valor}</p>
            {descripcion && (
                <p className="text-xs text-slate-400 mt-1">{descripcion}</p>
            )}
        </div>
    );
}

export default StatCard;