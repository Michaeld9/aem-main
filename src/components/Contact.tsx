import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Formulário enviado:', formData);

    setIsSubmitted(true);
    setIsSubmitting(false);

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400 text-sm font-semibold">ENTRE EM CONTATO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Transformar Seu Negócio Juntos
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border ${
                    errors.phone ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="(00) 00000-0000"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mensagem / Descrição do Projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-slate-800/50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Solicitar Orçamento</span>
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <div>
                    <p className="text-green-400 font-semibold">Mensagem enviada com sucesso!</p>
                    <p className="text-gray-300 text-sm">Entraremos em contato em breve.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-white font-bold text-2xl mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">E-mail</p>
                    <a
                      href="mailto:contato@amitconsulting.com"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      contato@amitconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telefone</p>
                    <a
                      href="tel:+5511999999999"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      +55 (11) 9 9999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Endereço</p>
                    <p className="text-white">
                      Av. blabla, 1000 - Sala 2000
                      <br />
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p className="text-cyan-400 font-semibold mt-4">Suporte 24/7 para clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
