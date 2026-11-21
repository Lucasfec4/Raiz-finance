import React, { useState } from 'react';
import { Leaf, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError('');

    setTimeout(() => {
      setBusy(false);
      if (signup && !confirmation) {
        setConfirmation(true);
        return;
      }
      navigate('/dashboard');
    }, 600);
  }

  return (
    <main className="min-h-screen text-[#2c352d] flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#4a6b51] selection:text-white">

      {/* Foto da planta original com preenchimento perfeito nas laterais (sem barras vazias) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#141b16]">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-60 scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop"
            alt="Background Plant"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
        </div>
      </div>

      {/* Camada sutil de escurecimento para leitura perfeita do card */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] pointer-events-none z-0"></div>

      {/* Card de Login com fundo bege/creme aconchegante */}
      <Card className="w-full max-w-lg bg-[#fbf9f4]/95 backdrop-blur-md border-[#dfcfb9] text-[#2c352d] shadow-2xl relative z-10 p-8 md:p-10 rounded-xl">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 rounded-xl bg-gradient-to-br from-[#4a6b51] to-[#c8963e] flex items-center justify-center border border-[#dfcfb9] shadow-lg mb-2">
            <Leaf className="w-8 h-8 text-[#fbf9f4]" />
          </div>
          <CardTitle className="text-3xl font-extrabold tracking-tight text-[#1c241e] flex items-center justify-center gap-2">
            Raiz<span className="text-[#9e734c]">Finance</span>
          </CardTitle>

          {confirmation ? (
            <div className="space-y-3 pt-3">
              <ShieldCheck className="mx-auto text-[#4a6b51] mb-2" size={42} />
              <h2 className="text-2xl font-bold text-[#1c241e]">Confira seu e-mail</h2>
              <CardDescription className="text-sm text-[#74695d]">
                Enviamos um link de confirmação para o seu e-mail. Confirme sua conta para começar.
              </CardDescription>
            </div>
          ) : (
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold text-[#1c241e]">
                {signup ? 'Crie suas raízes.' : '"Lá vem a força, lá vem a magia..."'}
              </h2>
              <CardDescription className="text-sm text-[#74695d]">
                {signup ? 'Um novo começo para sua vida financeira.' : 'Entre na sua conta e cultive seu equilíbrio com alegria.'}
              </CardDescription>
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-6 pt-0">
          {confirmation ? (
            <div className="space-y-6">
              <Button
                className="w-full bg-[#4a6b51] hover:bg-[#3b5541] text-white font-bold py-4 h-12 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 text-base shadow-lg"
                onClick={() => { setConfirmation(false); setSignup(false); }}
              >
                Voltar para entrar <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <>
              <form className="space-y-5" onSubmit={submit}>
                {signup && (
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-[#74695d]">Seu nome</span>
                    <Input
                      className="bg-[#f0ece1] border-[#dfcfb9] text-[#2c352d] placeholder-[#9e8f7e] h-12 text-base px-4 focus-visible:ring-[#4a6b51]"
                      placeholder="Como podemos chamar você?"
                      autoComplete="name"
                      value={name}
                      onChange={event => setName(event.target.value)}
                      required
                      maxLength={80}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <span className="text-sm font-medium text-[#74695d]">E-mail</span>
                  <Input
                    className="bg-[#f0ece1] border-[#dfcfb9] text-[#2c352d] placeholder-[#9e8f7e] h-12 text-base px-4 focus-visible:ring-[#4a6b51]"
                    type="email"
                    placeholder="voce@exemplo.com"
                    autoComplete="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium text-[#74695d]">Senha</span>
                  <Input
                    className="box-border bg-[#f0ece1] border-[#dfcfb9] text-[#2c352d] placeholder-[#9e8f7e] h-12 text-base px-4 focus-visible:ring-[#4a6b51]"
                    type="password"
                    placeholder={signup ? 'Pelo menos 8 caracteres' : 'Sua senha'}
                    minLength={signup ? 8 : 1}
                    autoComplete={signup ? 'new-password' : 'current-password'}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                  />
                </div>

                {error && <p className="text-sm text-rose-600 font-medium text-center" role="alert">{error}</p>}

                <Button
                  type="submit"
                  className="w-full mt-4 bg-[#4a6b51] hover:bg-[#3b5541] text-white font-bold py-4 h-12 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 text-base shadow-lg"
                  disabled={busy}
                >
                  {busy ? 'Aguarde…' : signup ? 'Criar minha conta' : 'Entrar na minha conta'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>

              <div className="text-center pt-4 border-t border-[#dfcfb9] text-sm text-[#74695d] flex items-center justify-center gap-2">
                <span>{signup ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'}</span>
                <button
                  type="button"
                  className="text-[#9e734c] font-semibold underline hover:text-[#4a6b51] transition cursor-pointer"
                  onClick={() => { setSignup(!signup); setError(''); }}
                >
                  {signup ? 'Entrar' : 'Criar conta'}
                </button>
              </div>
            </>
          )}

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="text-sm text-[#74695d] hover:text-[#4a6b51] transition cursor-pointer inline-flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft size={15} className="mr-1" /> Pular para o Dashboard (Demonstração)
            </button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
