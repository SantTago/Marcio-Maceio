import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md">
            <h2 className="text-3xl font-serif font-bold mb-4">Márcio Mota <span className="text-sunset-500">Aluguéis</span></h2>
            <p className="text-gray-400">
                Experiências únicas de hospedagem no coração da Praia do Rosa. Conecte-se com a natureza sem abrir mão do conforto.
            </p>
        </div>

        <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contato</h4>
            <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><i className="fa-brands fa-whatsapp"></i> +55 48 99999-9999</li>
                <li className="flex items-center gap-2"><i className="fa-regular fa-envelope"></i> contato@marciomota.com.br</li>
                <li className="flex items-center gap-2"><i className="fa-brands fa-instagram"></i> @marciomota.alugueis</li>
            </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Márcio Mota Aluguéis. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;