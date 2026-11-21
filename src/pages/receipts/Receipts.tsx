import React from 'react';
import Sidebar from '../../components/Sidebar';
import { FileText, Upload, Download } from 'lucide-react';

export function Receipts() {
  return (
    <div className="min-h-screen bg-[#f9f6f0] text-[#2c3521] flex flex-col md:flex-row font-sans selection:bg-[#3f5231] selection:text-white">
      <Sidebar />
      <main className="flex-1 px-4 sm:px-8 md:px-12 py-8 overflow-y-auto bg-gradient-to-br from-[#f9f6f0] via-[#f2ece1] to-[#e8efe4]">
        <div className="max-w-none space-y-8">

          <header className="border-b border-[#dfcfb9]/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1c241e]">
                Central de <span className="text-[#9e734c]">Comprovantes</span>
              </h1>
              <p className="text-sm text-[#74695d] mt-1">
                Armazene, organize e acompanhe todos os comprovantes financeiros enviados e recebidos.
              </p>
            </div>
            <button className="bg-[#3f5231] hover:bg-[#2e3d23] text-white font-bold py-3 px-6 rounded-xl transition text-sm shadow-xs cursor-pointer flex items-center gap-2">
              <Upload className="w-4 h-4" /> Enviar Comprovante
            </button>
          </header>

          <div className="bg-[#fbf9f4] border border-[#dfcfb9] p-6 md:p-8 rounded-xl shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#dfcfb9] pb-5">
              <div>
                <h2 className="text-lg font-bold text-[#1c241e] flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#3f5231]" /> Comprovantes Recentes
                </h2>
                <p className="text-xs text-[#74695d] mt-1">Lista completa de transações com documentos anexados.</p>
              </div>
              <div className="bg-[#f0ece1] border border-[#dfcfb9] px-4 py-2.5 rounded-xl text-xs text-[#3f5231] flex items-center gap-2">
                <span>⚡ Sincronização via E-mail (PIX):</span>
                <span className="text-[#9e734c] font-semibold">Em breve</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f0ece1] border border-[#dfcfb9] p-6 rounded-xl space-y-3 group hover:border-[#cbd7b6] transition">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#74695d] uppercase tracking-wider font-semibold">Comprovante #01</span>
                  <span className="text-xs bg-[#e5ebd9] text-[#3f5231] px-3 py-1 rounded-full border border-[#cbd7b6] font-medium">Enviado</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <h3 className="font-semibold text-base text-[#1c241e]">Supermercado Orgânico (PIX)</h3>
                    <p className="text-xs text-[#74695d] mt-1">Data: 18 de Nov, 2026 • R$ 340,50</p>
                  </div>
                  <button className="p-2.5 bg-[#fbf9f4] hover:bg-[#e5ebd9] text-[#3f5231] rounded-lg border border-[#dfcfb9] transition cursor-pointer" title="Baixar">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#f0ece1] border border-[#dfcfb9] p-6 rounded-xl space-y-3 group hover:border-[#cbd7b6] transition">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#74695d] uppercase tracking-wider font-semibold">Comprovante #02</span>
                  <span className="text-xs bg-[#e5ebd9] text-[#3f5231] px-3 py-1 rounded-full border border-[#cbd7b6] font-medium">Recebido</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <h3 className="font-semibold text-base text-[#1c241e]">Design Freelance (PIX)</h3>
                    <p className="text-xs text-[#74695d] mt-1">Data: 15 de Nov, 2026 • R$ 1.200,00</p>
                  </div>
                  <button className="p-2.5 bg-[#fbf9f4] hover:bg-[#e5ebd9] text-[#3f5231] rounded-lg border border-[#dfcfb9] transition cursor-pointer" title="Baixar">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
