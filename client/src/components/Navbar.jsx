function Navbar() {
    return (
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
            <span className="font-semibold text-slate-800">Inventario Práctica</span>
            <span className="hidden sm:inline text-sm text-slate-500">Usuario demo</span>
        </header>
    );
}

export default Navbar;