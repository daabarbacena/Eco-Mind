import { useEffect, useState } from 'react';
import { Leaf, Zap } from 'lucide-react';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simula o carregamento do app
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full max-w-md mx-auto bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 flex items-center justify-center overflow-hidden relative">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="text-center space-y-12 px-8 animate-fade-in z-10">
          {/* Logo Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 bg-white/20 rounded-full animate-ping"></div>
            <div className="relative bg-white rounded-full p-8 shadow-2xl">
              <div className="relative">
                <Leaf className="w-20 h-20 text-emerald-600" strokeWidth={2.5} />
                <Zap className="w-10 h-10 text-yellow-500 absolute -bottom-2 -right-2" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* App Name */}
          <div className="space-y-3">
            <h1 className="text-7xl text-white tracking-tight">
              Eco<span className="font-bold">Mind</span>
            </h1>
            <p className="text-white/90 text-xl tracking-wide px-4">
              Economia de Energia Inteligente
            </p>
          </div>

          {/* Loading Indicator */}
          <div className="flex justify-center pt-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Se está logado, mostra o Dashboard
  if (isLoggedIn) {
    return <Dashboard />;
  }

  // Tela de Login
  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white flex flex-col justify-between p-8">
      {/* Logo e Header */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-6 shadow-lg">
              <div className="relative">
                <Leaf className="w-14 h-14 text-white" strokeWidth={2.5} />
                <Zap className="w-7 h-7 text-yellow-300 absolute -bottom-1 -right-1" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Nome da Marca */}
          <div>
            <h1 className="text-5xl text-gray-800 tracking-tight">
              Eco<span className="font-bold">Mind</span>
            </h1>
            <p className="text-gray-600 mt-2">Bem-vindo de volta!</p>
          </div>
        </div>

        {/* Formulário de Login */}
        <div className="w-full space-y-4 mt-8">
          {/* Campo Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700 text-sm pl-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
            />
          </div>

          {/* Campo Senha */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-700 text-sm pl-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
            />
          </div>

          {/* Link Esqueceu a Senha */}
          <div className="text-right">
            <button className="text-emerald-600 text-sm hover:text-emerald-700 transition-colors">
              Esqueceu a senha?
            </button>
          </div>

          {/* Botão Entrar */}
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg mt-6"
          >
            Entrar
          </button>

          {/* Link Criar Conta */}
          <div className="text-center pt-4">
            <p className="text-gray-600 text-sm">
              Não tem uma conta?{' '}
              <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                Criar conta
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-xs pb-4">
        Economia de Energia Inteligente
      </div>
    </div>
  );
}