import { useState } from 'react';
import { Home, BookOpen, Calculator, User, LogOut, TrendingDown, Lightbulb, Zap, Droplets, Leaf, Award, Clock, ChevronRight } from 'lucide-react';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gray-50 flex flex-col">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'cursos' && <CursosTab />}
        {activeTab === 'simulador' && <SimuladorTab />}
        {activeTab === 'perfil' && <PerfilTab />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
              activeTab === 'home' ? 'text-emerald-600' : 'text-gray-500'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Início</span>
          </button>

          <button
            onClick={() => setActiveTab('cursos')}
            className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
              activeTab === 'cursos' ? 'text-emerald-600' : 'text-gray-500'
            }`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs mt-1">Cursos</span>
          </button>

          <button
            onClick={() => setActiveTab('simulador')}
            className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
              activeTab === 'simulador' ? 'text-emerald-600' : 'text-gray-500'
            }`}
          >
            <Calculator className="w-6 h-6" />
            <span className="text-xs mt-1">Simulador</span>
          </button>

          <button
            onClick={() => setActiveTab('perfil')}
            className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
              activeTab === 'perfil' ? 'text-emerald-600' : 'text-gray-500'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeTab() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl text-gray-800">Olá, João!</h1>
        <p className="text-gray-600">Confira seu progresso de economia</p>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/90">Economia do Mês</span>
          <TrendingDown className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h2 className="text-4xl">R$ 127,50</h2>
          <p className="text-white/90">23% menos que o mês anterior</p>
        </div>
      </div>

      {/* Consumption Overview */}
      <div className="space-y-3">
        <h3 className="text-gray-800">Consumo por Categoria</h3>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-800">Iluminação</p>
                <p className="text-sm text-gray-500">145 kWh</p>
              </div>
            </div>
            <span className="text-emerald-600">-15%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-800">Eletrodomésticos</p>
                <p className="text-sm text-gray-500">320 kWh</p>
              </div>
            </div>
            <span className="text-emerald-600">-8%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 p-2 rounded-lg">
                <Droplets className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-gray-800">Chuveiro</p>
                <p className="text-sm text-gray-500">180 kWh</p>
              </div>
            </div>
            <span className="text-red-500">+5%</span>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <div className="flex items-start gap-3">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Leaf className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h4 className="text-gray-800 mb-1">Dica do dia</h4>
            <p className="text-sm text-gray-600">Desligue aparelhos da tomada quando não estiver usando. Mesmo em stand-by, eles consomem energia!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CursosTab() {
  const cursos = [
    {
      id: 1,
      titulo: 'Fundamentos de Economia de Energia',
      duracao: '2h 30min',
      progresso: 65,
      nivel: 'Iniciante'
    },
    {
      id: 2,
      titulo: 'Energia Solar Residencial',
      duracao: '3h 15min',
      progresso: 30,
      nivel: 'Intermediário'
    },
    {
      id: 3,
      titulo: 'Eficiência Energética Avançada',
      duracao: '4h 00min',
      progresso: 0,
      nivel: 'Avançado'
    },
    {
      id: 4,
      titulo: 'Iluminação LED e Sustentabilidade',
      duracao: '1h 45min',
      progresso: 100,
      nivel: 'Iniciante'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl text-gray-800">Cursos</h1>
        <p className="text-gray-600">Aprenda sobre economia de energia</p>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/90">Seu Progresso</span>
          <Award className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h2 className="text-4xl">2/4 Cursos</h2>
          <p className="text-white/90">Continue aprendendo!</p>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-3">
        {cursos.map((curso) => (
          <div key={curso.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-gray-800 mb-1">{curso.titulo}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{curso.duracao}</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs">
                      {curso.nivel}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progresso</span>
                  <span className="text-emerald-600">{curso.progresso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all"
                    style={{ width: `${curso.progresso}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimuladorTab() {
  const [watts, setWatts] = useState('');
  const [horas, setHoras] = useState('');
  const [dias, setDias] = useState('30');
  const [tarifa, setTarifa] = useState('0.75');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularConsumo = () => {
    const consumoKwh = (Number(watts) * Number(horas) * Number(dias)) / 1000;
    const custo = consumoKwh * Number(tarifa);
    setResultado(custo);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl text-gray-800">Simulador</h1>
        <p className="text-gray-600">Calcule o consumo de energia</p>
      </div>

      {/* Calculator Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <div className="space-y-2">
          <label className="text-gray-700 text-sm">
            Potência do aparelho (Watts)
          </label>
          <input
            type="number"
            value={watts}
            onChange={(e) => setWatts(e.target.value)}
            placeholder="Ex: 100"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 text-sm">
            Horas de uso por dia
          </label>
          <input
            type="number"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
            placeholder="Ex: 5"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 text-sm">
            Dias no mês
          </label>
          <input
            type="number"
            value={dias}
            onChange={(e) => setDias(e.target.value)}
            placeholder="Ex: 30"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 text-sm">
            Tarifa (R$/kWh)
          </label>
          <input
            type="number"
            step="0.01"
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            placeholder="Ex: 0.75"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
          />
        </div>

        <button
          onClick={calcularConsumo}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
        >
          Calcular Consumo
        </button>
      </div>

      {/* Result */}
      {resultado !== null && (
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-center space-y-2">
            <p className="text-white/90">Custo estimado no mês</p>
            <h2 className="text-5xl">R$ {resultado.toFixed(2)}</h2>
            <p className="text-white/90 text-sm">
              {((Number(watts) * Number(horas) * Number(dias)) / 1000).toFixed(2)} kWh
            </p>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <h4 className="text-gray-800 mb-2">💡 Dica</h4>
        <p className="text-sm text-gray-600">
          Use este simulador para comparar o consumo de diferentes aparelhos e identificar quais mais impactam sua conta de luz.
        </p>
      </div>
    </div>
  );
}

function PerfilTab() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl text-gray-800">Perfil</h1>
        <p className="text-gray-600">Gerencie sua conta</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-6 shadow-lg">
            <User className="w-16 h-16 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-gray-800">João Silva</h2>
          <p className="text-gray-600">joao.silva@email.com</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <div className="text-3xl text-emerald-600 mb-1">23%</div>
          <p className="text-sm text-gray-600">Economia Total</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <div className="text-3xl text-emerald-600 mb-1">2</div>
          <p className="text-sm text-gray-600">Cursos Completos</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-3">
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-gray-800">Editar Perfil</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-gray-800">Metas de Economia</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Lightbulb className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-gray-800">Preferências</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Logout Button */}
      <button className="w-full bg-red-50 text-red-600 rounded-xl p-4 shadow-sm flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Sair da Conta</span>
      </button>
    </div>
  );
}
