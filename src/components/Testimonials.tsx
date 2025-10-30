import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Antônio José',
      position: 'Dono',
      company: 'Pizzaria Tomzé',
      rating: 5,
      message: 'Além da implantação inicial, a A&M continua nos atendendo com suporte remoto e acompanhamento proativo. Sempre identificam e resolvem problemas antes que afetem nossa operação',
      avatar: 'AJ',
    },
    {
      name: 'Jonatan Dantas',
      position: 'Engenheiro Elétrico',
      rating: 5,
      message: 'O PC do meu home office estava muito lento. A equipe da A&M fez uma limpeza completa, instalou um SSD e atualizou o Windows. Parece outro computador!',
      avatar: 'JS',
    },
    {
      name: 'Rebeca Fernandes',
      position: 'Professora',
      rating: 5,
      message: 'Fui muito bem atendida! Resolveram um problema de inicialização que outros técnicos não conseguiram. Além disso, deixaram o sistema mais leve e seguro.',
      avatar: 'RE',
    },
    {
      name: 'Camila Ribeiro',
      position: 'Diretora Executiva',
      company: 'Prime Consultoria Empresarial',
      rating: 5,
      message: 'Contratamos a A&M para montar toda a infraestrutura do novo escritório: rede, micros, impressoras e firewall. Tudo foi entregue no prazo, funcionando perfeitamente e com ótimo acabamento.',
      avatar: 'CR',
    },
    {
      name: 'Beatriz Nunes',
      position: 'Fotógrafa',
      rating: 5,
      message: 'Levei meu computador para manutenção e fiquei impressionada com o profissionalismo. Fizeram backup dos meus arquivos, formataram e devolveram tudo funcionando perfeitamente',
      avatar: 'FS',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400 text-sm font-semibold">DEPOIMENTOS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Confiança e resultados comprovados por empresas líderes em diversos setores
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
            <Quote className="text-cyan-400 mb-6" size={48} />

            <div className="mb-6">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                "{currentTestimonial.message}"
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{currentTestimonial.avatar}</span>
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                     {currentTestimonial.company 
                      ? `${currentTestimonial.position} • ${currentTestimonial.company}`
                      : currentTestimonial.position
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
