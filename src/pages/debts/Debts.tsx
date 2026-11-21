import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Users, PlusCircle, CheckCircle2, Clock } from 'lucide-react';

interface Debt {
  id: number;
  person: string;
  description: string;
  amount: number;
  type: 'lent' | 'borrowed';
  status: 'pending' | 'paid';
}

export function Debts() {
  const [debts, setDebts] = useState<Debt[]>([
    { id: 1, person: 'Carlos Silva', description: 'Empréstimo de ferramentas', amount: 150.00, type: 'lent', status: 'pending' },
    { id: 2, person: 'Ana Paula', description: 'Almoço de domingo', amount: 45.00, type: 'borrowed', status: 'paid' },
  ]);

  const [person, setPerson] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'lent' | 'borrowed'>('lent');

  const handleAddDebt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!person || !amount) return;

    const newDebt: Debt = {
      id: Date.now(),
      person,
      description: description || 'Empréstimo / Dívida',
      amount: parseFloat(amount),
      type,
      status: 'pending',
    };

    setDebts([newDebt, ...debts]);
    setPerson('');
    setDescription('');
    setAmount('');
  };

  const toggleStatus = (id: number) => {
    setDebts(debts.map(d => d.id === id ? { ...d, status: d.status === 'pending' ? 'paid' : 'pending' } : d));
  };

  return (
    <div className="min-h-screen bg-[#f9f6f0] text-[#2c3521] flex flex-col md:flex-row font-sans selection:bg-[#3f5231] selection:text-white">
      <Sidebar />
      <main className="flex-1 px-4 sm:px-8 md:px-12 py-8 overflow-y-auto bg-gradient-to-br from-[#f9f6f0] via-[#f2ece1] to-[#e8efe4]">
        <div className="max-w-none space-y-8">

          <header className="border-b border-[#dfcfb9]/60 pb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1c241e]">
              Gestão de <span className="text-[#9e734c]">Dívidas</span>
            </h1>
            <p className="text-sm text-[#74695d] mt-1">
              Acompanhe empréstimos, quem te deve e o que você deve a terceiros.
            </p>
          </header>

          <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 md:p-8 rounded-xl shadow-xs">
            <h2 className="text-base font-bold text-[#1c241e] mb-5 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-[#3f5231]" /> Registrar Nova Dívida / Empréstimo
            </h2>
            <form onSubmit={handleAddDebt} className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Nome da Pessoa"
                value={person}
                onChange={e => setPerson(e.target.value)}
                className="bg-[#f0ece1] border border-[#dfcfb9] rounded-lg px-4 py-3 text-sm text-[#2c352d] placeholder-[#9e8f7e] focus:outline-none focus:border-[#3f5231] transition"
              />
              <input
                type="text"
                placeholder="Descrição (ex: Almoço)"
                value={description}
                onChange={e => setDescription(e.target.value)}
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
                value={type}
                onChange={e => setType(e.target.value as 'lent' | 'borrowed')}
                className="bg-[#f0ece1] border border-[#dfcfb9] rounded-lg px-4 py-3 text-sm text-[#2c352d] focus:outline-none focus:border-[#3f5231] transition"
              >
                <option value="lent">Me deve (Emprestado)</option>
                <option value="borrowed">I owe them (Devendo)</option>
              </select>
              <button
                type="submit"
                className="bg-[#3f5231] hover:bg-[#2e3d23] text-white font-bold py-3 px-6 rounded-lg transition text-sm shadow-xs active:scale-95 cursor-pointer flex items-center justify-center"
              >
                Adicionar Registro
              </button>
            </form>
          </div>

          <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 md:p-8 rounded-xl shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-[#1c241e] flex items-center gap-2.5 border-b border-[#dfcfb9] pb-5">
              <Users className="w-6 h-6 text-[#3f5231]" /> Registros Ativos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {debts.map(d => (
                <div key={d.id} className="bg-[#f0ece1] border border-[#dfcfb9] p-6 rounded-xl space-y-4 group hover:border-[#cbd7b6] transition">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#74695d] uppercase tracking-wider font-semibold">
                      {d.type === 'lent' ? '🟢 Ela te deve' : '🟠 Você deve'}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium flex items-center gap-1 ${
                      d.status === 'paid'
                        ? 'bg-[#e5ebd9] text-[#3f5231] border-[#cbd7b6]'
                        : 'bg-[#f9f6f0] text-[#9e734c] border-[#dfcfb9]'
                    }`}>
                      {d.status === 'paid' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                      {d.status === 'paid' ? 'Quitado' : 'Pendente'}
                    </span>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg font-bold text-[#1c241e]">{d.person}</h3>
                      <p className="text-xs text-[#74695d] mt-0.5">{d.description}</p>
                      <p className="text-base font-black text-[#9e734c] mt-2">R$ {d.amount.toFixed(2)}</p>
                    </div>

                    <button
                      onClick={() => toggleStatus(d.id)}
                      className="px-3.5 py-2 bg-[#f9f6f0] hover:bg-[#e5ebd9] text-[#3f5231] rounded-lg border border-[#dfcfb9] text-xs font-semibold transition cursor-pointer shadow-xs"
                    >
                      {d.status === 'paid' ? 'Marcar Pendente' : 'Marcar como Pago'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
