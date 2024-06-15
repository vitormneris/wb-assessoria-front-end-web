const translations = {
  en: {
    about: "About",
    services: "Services",
    process: "Process",
    contact_nav: "Contact",
    welcome: "Welcome to",
    wb_migration: "WB MIGRATION CONSULTANCY",
    description: "Have questions about the Naturalization Process? Want to turn the dream of having a Brazilian passport into reality? At Welcome2Brazil, we offer confident guidance and proven experience to help you on this journey.",
    contact: "Contact us",
    services_title: "Services",
    services_desc: "If you are looking for the naturalization process, Welcome2Brazil is the right choice! Focused on providing the best service with professional expertise.",
    naturalization: "BR Naturalization",
    rnm: "RNM",
    visa: "UMCAPT Visa",
    passport: "Brazilian Passport",
    who_we_are: "Who are we?",
    about_us: "Welcome to Brasil is more than a migration advisory office, it is your trusted partner on the journey to becoming Brazilian. With a humanized and specialized approach, they facilitate the process of obtaining the RNM and guide their clients at every step until their documents are carefully reviewed by the Federal Police. WB values humanization, respecting, caring, and providing personalized attention, ensuring a smooth and transparent experience in your transition to Brazilian citizenship.",
    learn_more: "Learn more",
    client_title: "WHAT OUR CLIENTS SAY",
    contact_us: "Contact us",
    full_name: "Full Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    send: "Send",
    address: "Av. Amador Bueno da Veiga, 1970 - Penha de França, São Paulo - SP, 03636-100",
    satisfied_customers: "Satisfied Customers",
    years_of_business: "Years of Business",
    projects_delivered: "Projects Delivered",
    infos: "Informations",
    social_media: "Social Media",
    news: "To receive news",
    cups_of_coffee: "Cups of Coffee",
    consulta_processual: "Process Query",
    consulta_desc: "Check processes by number with one click",
    num_processo: "Enter the process number",
    btn_consultar: "Check",
    login_user: "Enter email or CPF",
    login_senha: "Enter password"
  },
  pt: {
    about: "Sobre",
    services: "Serviços",
    process: "Processos",
    contact_nav: "Contato",
    welcome: "Bem vindo à",
    wb_migration: "WB ASSESSORIA MIGRATÓRIA",
    description: "Está com dúvidas sobre o Processo de Naturalização? Quer transformar o sonho de ter um passaporte Brasileiro em realidade? Na Welcome2Brazil, oferecemos orientações confiantes e experiência comprovada para te ajudar nessa jornada.",
    contact: "Entre em contato",
    services_title: "Serviços",
    services_desc: "Se você busca o processo de naturalização, a Welcome2Brazil é a escolha certa! Focados em prestar o melhor serviço com expertise profissional.",
    naturalization: "Naturalização BR",
    rnm: "RNM",
    visa: "Vistos UMCAPT",
    passport: "Passaporte Brasileiro",
    who_we_are: "Quem somos nós?",
    about_us: "Welcome to Brasil é mais que um escritório de assessoria migratória, é o seu parceiro confiável na jornada para se tornar brasileiro. Com uma abordagem humanizada e especializada, eles facilitam o processo de obtenção do RNM e guia seus clientes em cada passo até que seus documentos sejam cuidadosamente analisados pela Polícia Federal. WB Preza pela a humanização, respeitando, cuidando e dando uma atenção personalizada, garantindo uma experiência tranquila e transparente em sua transição para a cidadania brasileira.",
    learn_more: "Saiba mais",
    client_title: "O QUE OS NOSSOS CLIENTES DIZEM",
    contact_us: "Entre em contato conosco",
    full_name: "Nome completo",
    phone: "Telefone",
    email: "Email",
    message: "Mensagem",
    send: "Enviar",
    address: "Av. Amador Bueno da Veiga, 1970 - Penha de França, São Paulo - SP, 03636-100",
    satisfied_customers: "Clientes Satisfeitos",
    years_of_business: "Anos de Negócio",
    projects_delivered: "Projetos Entregues",
    infos: "Informação",
    social_media: "Redes sociais",
    news: "Para receber novidades",
    cups_of_coffee: "Xícaras de Café",
    consulta_processual: "Consulta Processual",
    consulta_desc: "Consultar processos pelo número em um clique",
    num_processo: "Insira o número do processo",
    btn_consultar: "Consultar",
    login_user: "Insira o email ou CPF",
    login_senha: "Insira a senha"
  }
};

function translatePage() {
  const selectedLang = document.getElementById("language-select").value;
  applyTranslation(selectedLang);
  localStorage.setItem("language", selectedLang);
}

function applyTranslation(language) {
  const elements = document.querySelectorAll("[data-translate-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-translate-key");
    if (el.hasAttribute('placeholder')) {
      el.placeholder = translations[language][key];
    } else if (el.value !== undefined && (el.type === 'submit' || el.type === 'button')) {
      el.value = translations[language][key];
    } else if (el.tagName.toLowerCase() === 'button') {
      el.textContent = translations[language][key];
    } else {
      el.textContent = translations[language][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "pt";
  document.getElementById("language-select").value = savedLanguage;
  applyTranslation(savedLanguage);
});