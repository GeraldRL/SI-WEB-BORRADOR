import { NavLink } from "react-router-dom";

const links = [
    { to: '/dashboard', label: 'Dashboard'},
    { to: '/productos', label: 'Productos'},
];

function Sidebar() {
    return (
        <aside className="w-56 bg-slate-800 text-slate-200 p-4">
            <nav className="flex flex-col gap-1">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive}) =>
                            `px-3 py-2 rounded-md text-sm transition-colors ${
                                isActive
                                    ? 'bg-slate-700 text-white font-medium'
                                    : 'hover:bg-slate-700/60'
                            }`                    
                        } 
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;