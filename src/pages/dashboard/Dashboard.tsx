import React, { useState } from 'react';
import { TrendingUp, PlusCircle, Trash2, ArrowUpRight, DollarSign, Leaf } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, title: 'Supermercado Orgânico', amount: 340.50, category: 'Alimentação', date: '2026-11-18' },
    { id: 2, title: 'Manutenção da Bicicleta', amount: 120.00, category: 'Transporte', date: '2026-11-19' },
    { id: 3, title: 'Cafeteria Local', amount: 28.90, category: 'Lazer', date: '2026-11-20' },
  ]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Alimentação');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newTx: Transaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0],
    };

    setTransactions([newTx, ...transactions]);
    setTitle('');
    setAmount('');
  };

  const removeTx = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="min-h-screen bg-[#f9f6f0] text-[#2c3521] flex flex-col md:flex-row font-sans selection:bg-[#3f5231] selection:text-white">
      <Sidebar />
      <main className="flex-1 px-4 sm:px-8 md:px-12 py-8 overflow-y-auto bg-gradient-to-br from-[#f9f6f0] via-[#f2ece1] to-[#e8efe4]">

        {/* Conteúdo com margens mais amplas nas laterais, sem card unificado e bem próximo às bordas com respiro */}
        <div className="max-w-none space-y-8">

          {/* Header */}
          <header className="border-b border-[#dfcfb9]/60 pb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1c241e]">
                Dashboard <span className="text-[#9e734c]">Financeiro</span>
              </h1>
              <p className="text-sm text-[#74695d] mt-1">
                Monitore seus ciclos semanais, mensais e anuais com clareza e equilíbrio.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e5ebd9] border border-[#cbd7b6] text-[#3f4d2a] font-medium text-xs shadow-xs">
              <Leaf className="w-4 h-4 text-[#3f5231]" />
              <span>Cultivando crescimento & sustentabilidade</span>
            </div>
          </header>

          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 rounded-xl shadow-xs relative overflow-hidden group hover:border-[#cbd7b6] transition">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-[#74695d] uppercase tracking-wider">Gastos da Semana</span>
                <span className="p-2.5 bg-[#e5ebd9] rounded-lg text-[#3f5231] border border-[#cbd7b6]">
                  <TrendingUp className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-black text-[#1c241e]">R$ 489,40</span>
              </div>
              <p className="text-xs text-[#9e734c] mt-2 flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3f5231]" /> +12% em relação à semana passada
              </p>
            </div>

            <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 rounded-xl shadow-xs relative overflow-hidden group hover:border-[#cbd7b6] transition">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-[#74695d] uppercase tracking-wider">Gastos do Mês</span>
                <span className="p-2.5 bg-[#e5ebd9] rounded-lg text-[#9e734c] border border-[#cbd7b6]">
                  <DollarSign className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-black text-[#9e734c]">R$ {total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#74695d] mt-2">Total acumulado em novembro</p>
            </div>

            <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 rounded-xl shadow-xs relative overflow-hidden group hover:border-[#cbd7b6] transition">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-[#74695d] uppercase tracking-wider">Acumulado Anual</span>
                <span className="p-2.5 bg-[#e5ebd9] rounded-lg text-[#3f5231] border border-[#cbd7b6]">
                  <Leaf className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-black text-[#1c241e]">R$ 14.850,00</span>
              </div>
              <p className="text-xs text-[#74695d] mt-2">Média estável de investimentos</p>
            </div>
          </div>

          {/* Formulário Rápido */}
          <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 md:p-8 rounded-xl shadow-xs">
            <h2 className="text-base font-bold text-[#1c241e] mb-5 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-[#3f5231]" /> Registrar Novo Gasto
            </h2>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Ex: Supermercado"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="bg-[#f0ece1] border border-[#dfcfb9] rounded-lg px-4 py-3 text-sm text-[#2c352d] placeholder-[#9e8f7e] focus:outline-none focus:border-[#3f5231] transition"
              />
              <input
                type="number"
                step="0.01"
                placeholder="Valor (R$)"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="bg-[#f0ece1] border border-[#dfcfb9] rounded-lg px-4 py-3 text-sm text-[#2c352d] placeholder-[#9e8f7e] focus:outline-none focus:border-[#3f5231] transition"
              />
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="bg-[#f0ece1] border border-[#dfcfb9] rounded-lg px-4 py-3 text-sm text-[#2c352d] focus:outline-none focus:border-[#3f5231] transition"
              >
                <option value="Alimentação">Alimentação</option>
                <option value="Transporte">Transporte</option>
                <option value="Moradia">Moradia</option>
                <option value="Lazer">Lazer</option>
              </select>
              <button
                type="submit"
                className="bg-[#3f5231] hover:bg-[#2e3d23] text-white font-bold py-3 px-6 rounded-lg transition text-sm shadow-xs active:scale-95 cursor-pointer flex items-center justify-center"
              >
                Adicionar Gasto
              </button>
            </form>
          </div>

          {/* Tabela de Transações */}
          <div className="bg-[#fbf9f4] border border-[#dfcfb9] rounded-xl overflow-hidden shadow-xs">
            <div className="p-6 border-b border-[#dfcfb9] flex justify-between items-center">
              <h3 className="text-base font-bold text-[#1c241e]">Lançamentos Recentes</h3>
              <span className="text-xs text-[#74695d] bg-[#f0ece1] px-3.5 py-1 rounded-full border border-[#dfcfb9] font-medium">{transactions.length} registros</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f0ece1] text-[#74695d] text-xs uppercase tracking-wider border-b border-[#dfcfb9]">
                    <th className="p-4">Data</th>
                    <th className="p-4">Descrição</th>
                    <th className="p-4">Categoria</th>
                    <th className="p-4 text-right">Valor</th>
                    <th className="p-4 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dfcfb9]/40 text-sm">
                  {transactions.map(t => (
                    <tr key={t.id} className="hover:bg-[#f0ece1]/50 transition">
                      <td className="p-4 text-[#74695d] text-xs">{t.date}</td>
                      <td className="p-4 font-semibold text-[#1c241e]">{t.title}</td>
                      <td className="p-4">
                        <span className="bg-[#f0ece1] text-[#9e734c] text-xs px-3 py-1 rounded-full border border-[#dfcfb9] font-medium">
                          {t.category}
                        </span>
                      </td>
                      <td className="p-4 text-right font-bold text-[#9e734c]">
                        - R$ {t.amount.toFixed(2)}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => removeTx(t.id)}
                          className="p-2 hover:bg-rose-50 text-gray-400 hover:text-rose-500 rounded-lg transition cursor-pointer"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
