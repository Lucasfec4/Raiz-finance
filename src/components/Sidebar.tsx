import React from 'react';
import { Leaf, TrendingUp, FileText, Users, LogOut, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-full md:w-72 h-screen sticky top-0 bg-gradient-to-b from-[#162618] via-[#1e3321] to-[#121c13] border-r border-[#2d4231] p-6 flex flex-col justify-between shrink-0 shadow-sm text-[#f9f6f0]">
      <div className="space-y-8">
        {/* Logo / Marca com referência ao estilo "Viva Milton" */}
        <div className="flex items-center gap-3 px-2">
          <div className="w-12 h-12 rounded-xl bg-[#283d2c] flex items-center justify-center border border-[#3b5440]">
            <Leaf className="w-6 h-6 text-[#dfcca3]" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#f9f6f0] flex items-center gap-1">
              Raiz<span className="text-[#dfcca3]">Finance</span>
            </h1>
            <p className="text-xs text-[#a8b3a9]">Equilíbrio & Alegria</p>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="space-y-2">
          <button
            onClick={() => navigate('/dashboard')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
              currentPath === '/dashboard'
                ? 'bg-[#354f3a] text-white shadow-sm border border-[#486d54]'
                : 'text-[#a8b3a9] hover:bg-[#223026] hover:text-white'
            }`}
          >
            <TrendingUp className={`w-5 h-5 ${currentPath === '/dashboard' ? 'text-white' : 'text-[#a8b3a9]'}`} />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => navigate('/receipts')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
              currentPath === '/receipts'
                ? 'bg-[#354f3a] text-white shadow-sm border border-[#486d54]'
                : 'text-[#a8b3a9] hover:bg-[#223026] hover:text-white'
            }`}
          >
            <FileText className={`w-5 h-5 ${currentPath === '/receipts' ? 'text-white' : 'text-[#a8b3a9]'}`} />
            <span>Comprovantes</span>
          </button>

          <button
            onClick={() => navigate('/debts')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
              currentPath === '/debts'
                ? 'bg-[#354f3a] text-white shadow-sm border border-[#486d54]'
                : 'text-[#a8b3a9] hover:bg-[#223026] hover:text-white'
            }`}
          >
            <Users className={`w-5 h-5 ${currentPath === '/debts' ? 'text-white' : 'text-[#a8b3a9]'}`} />
            <span>Dívidas</span>
          </button>
        </nav>
      </div>

      {/* Rodapé da Sidebar */}
      <div className="pt-6 border-t border-[#2d4231] space-y-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111813] border border-[#2d4231] text-xs text-[#dfcca3]">
          <Calendar className="w-4 h-4 text-[#8fb996]" />
          <div>
            <p className="text-[10px] text-[#a8b3a9] uppercase font-bold tracking-wider">Ciclo Fiscal</p>
            <p className="font-bold text-[#f9f6f0]">Novembro 2026</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-200 hover:bg-rose-950/40 transition cursor-pointer border border-rose-900/40"
        >
          <LogOut className="w-4 h-4 text-rose-300" />
          <span>Sair da Conta</span>
        </button>
      </div>
    </aside>
  );
}
