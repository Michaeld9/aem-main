import { Target, Shield, Zap, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="text-cyan-400" size={32} />,
      title: 'Clareza',
      description: 'Comunicação transparente e objetivos bem definidos',
    },
    {
      icon: <Shield className="text-cyan-400" size={32} />,
      title: 'Segurança',
      description: 'Proteção de dados e compliance em primeiro lugar',
    },
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: 'Inovação',
      description: 'Tecnologias de ponta para soluções modernas',
    },
    {
      icon: <TrendingUp className="text-cyan-400" size={32} />,
      title: 'Performance',
      description: 'Resultados mensuráveis e crescimento sustentável',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-cyan-400 text-sm font-semibold">SOBRE NÓS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Excelência em Consultoria Tecnológica
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              A <span className="text-cyan-400 font-semibold">A&M IT Consulting</span> é uma empresa líder em consultoria tecnológica,
              especializada em transformar desafios complexos em soluções inovadoras e eficientes.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Com mais de N anos de experiência, nossa equipe de especialistas trabalha lado a lado com organizações
              de todos os portes, desde startups disruptivas até grandes corporações, entregando resultados
              que impulsionam o crescimento e a competitividade no mercado digital.
            </p>

            <div className="flex items-center space-x-4">
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
              <span className="text-gray-400 italic">Confiança • Inovação • Resultados</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
