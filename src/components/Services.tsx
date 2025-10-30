import { Cctv, Server, Wrench, MonitorCog} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cctv size={40} />,
      title: 'Instalação e Manutenção de Centrais de Câmeras CFTV e IP',
      description: 'Instalação, configuração e manutenção de sistemas de câmeras CFTV e IP, garantindo monitoramento contínuo, acesso remoto e suporte técnico especializado.',
      features: ['Instalação de Câmeras', 'Manutenção Preventiva e Corretiva', 'Monitoramento IP e Acesso Remoto', 'Segurança de Rede e Gravação', 'Integração com Alarmes e Automação'],
    },
    {
      icon: <Server size={40} />,
      title: 'Instalação e Configuração de Servidores',
      description: 'Implantação e configuração de servidores físicos e virtuais, com gerenciamento de rede, usuários e monitoramento ativo de desempenho e disponibilidade.',
      features: ['Active Directory (AD)', 'DHCP e DNS', 'File Server e Compartilhamento de Rede', 'Monitoramento com Zabbix e Nagios','Políticas de Segurança e Permissões','Virtualização e Backup de Servidores'],
    },
    {
      icon: <Wrench size={40} />,
      title: 'Manutenção de Hardware e Software',
      description: 'Serviço completo de diagnóstico, reparo e otimização de computadores, garantindo desempenho, estabilidade e segurança dos sistemas.',
      features: ['Reparo de Equipamentos', 'Formatação e Otimização', 'Remoção de Vírus e Backup', 'Atualização de Drivers e Sistemas','Suporte Técnico Presencial e Remoto'],
    },
    {
      icon: <MonitorCog size={40} />,
      title: 'Montagem de Escritórios e Clínicas',
      description: 'Planejamento e implantação completa da infraestrutura tecnológica, garantindo redes seguras, estações configuradas e operação eficiente desde o primeiro dia.',
      features: ['Projeto de Infraestrutura de TI', 'Montagem e Configuração de Computadores', 'Rede Estruturada e Firewall', 'Instalação de Impressoras e Periféricos','Configuração Segura e Suporte Técnico'],
    },
    
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400 text-sm font-semibold">NOSSOS SERVIÇOS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções Completas em Tecnologia
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Oferecemos um portfólio abrangente de serviços de consultoria tecnológica para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{service.icon}</div>
              </div>

              <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-800/50 border border-slate-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
