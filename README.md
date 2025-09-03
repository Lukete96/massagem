# 🧘‍♀️ Landing Page - Curso de Massagem Profissional

Uma landing page moderna e responsiva para um curso online de massagem profissional, desenvolvida com React, TypeScript e CSS Modules.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações suaves
- **Totalmente Responsiva**: Adaptada para desktop, tablet e mobile
- **Performance Otimizada**: Construída com Vite para carregamento rápido
- **Acessibilidade**: Navegação por teclado e estrutura semântica
- **CSS Modules**: Estilos encapsulados e organizados
- **TypeScript**: Tipagem estática para maior confiabilidade

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interface de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápida e moderna
- **CSS Modules** - Estilos modulares e encapsulados
- **Lucide React** - Ícones modernos e leves
- **ESLint** - Linter para qualidade de código

## 📁 Estrutura do Projeto

```
massagem/
├── src/
│   ├── App.tsx                    # Componente principal
│   ├── LandingPage.module.css     # Estilos da landing page
│   ├── index.css                  # Estilos globais
│   ├── main.tsx                   # Ponto de entrada
│   └── vite-env.d.ts              # Tipos do Vite
├── public/                        # Arquivos estáticos
├── package.json                   # Dependências e scripts
├── vite.config.ts                # Configuração do Vite
├── tsconfig.json                  # Configuração do TypeScript
└── README.md                      # Este arquivo
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd massagem
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🎨 Seções da Landing Page

1. **Header** - Navegação e logo
2. **Hero** - Título principal e call-to-action
3. **Sobre** - Informações sobre a instrutora
4. **Conteúdo** - O que o curso oferece
5. **Benefícios** - Vantagens do curso
6. **FAQ** - Perguntas frequentes
7. **Footer** - Informações de contato

## 🔧 Personalização

### Cores
As cores principais estão definidas no CSS Module:
- Azul primário: `#2563eb`
- Roxo secundário: `#7c3aed`
- Azul claro: `#dbeafe`
- Roxo claro: `#e9d5ff`

### Conteúdo
Para personalizar o conteúdo, edite o arquivo `src/App.tsx`:
- Dados da instrutora
- Links de pagamento
- Informações de contato
- Perguntas do FAQ

### Estilos
Os estilos estão organizados em `src/LandingPage.module.css` com classes modulares:
- `.landingPage` - Container principal
- `.hero` - Seção hero
- `.section` - Seções gerais
- `.ctaSection` - Seções de call-to-action

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Deploy no Vercel
1. Conecte seu repositório ao Vercel
2. Configure o comando de build: `npm run build`
3. Configure o diretório de saída: `dist`

### Deploy no Netlify
1. Conecte seu repositório ao Netlify
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `dist`

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Instrutora**: Jéssica Monique
- **Email**: contato@seudominio.com
- **WhatsApp**: (99) 99999-9999

---

Desenvolvido com ❤️ para transformar vidas através da massagem profissional.
