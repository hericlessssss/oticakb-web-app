# Ótica KB - Landing Page

Landing page moderna e responsiva para a Ótica KB, desenvolvida com React e Tailwind CSS.

## Descrição do Projeto

Este projeto é uma landing page profissional para a Ótica KB, focada em proporcionar uma experiência premium aos usuários e otimizada para conversões. A página apresenta diversos recursos como slider de produtos, formulário de contato, seção de depoimentos e integração com WhatsApp.

### Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Swiper.js para sliders
- React Scroll para navegação suave
- Lucide React para ícones

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a passo

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Navegue até a pasta do projeto:
```bash
cd otica-kb-landing
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse o projeto em seu navegador:
```
http://localhost:5173
```

## Estrutura dos Arquivos

```
src/
├── components/         # Componentes React
│   ├── Header.tsx     # Cabeçalho com navegação
│   ├── Hero.tsx       # Seção principal com slider
│   ├── Products.tsx   # Exibição de produtos
│   ├── Benefits.tsx   # Vantagens da ótica
│   ├── Testimonials.tsx # Depoimentos de clientes
│   ├── InstagramFeed.tsx # Feed do Instagram
│   ├── ContactForm.tsx  # Formulário de contato
│   ├── Footer.tsx      # Rodapé
│   └── WhatsAppButton.tsx # Botão flutuante do WhatsApp
├── App.tsx            # Componente principal
├── main.tsx          # Ponto de entrada
└── index.css         # Estilos globais
```

## Customizações

### Alterando Imagens e Textos

Para alterar imagens e textos do site:

1. Imagens:
   - Navegue até o componente desejado
   - Localize as URLs das imagens (geralmente em arrays ou props)
   - Substitua com novas URLs de imagens

2. Textos:
   - Os textos estão organizados em componentes específicos
   - Altere diretamente as strings nos componentes
   - Para textos dinâmicos, modifique os arrays de dados

3. Informações de Contato:
   - Atualize o número do WhatsApp em `WhatsAppButton.tsx`
   - Modifique endereço e redes sociais em `Footer.tsx`

## Integração com Instagram

### Método Estático (Atual)
O projeto atualmente utiliza uma abordagem estática para exibir o feed do Instagram. Para atualizar:

1. Navegue até `src/components/InstagramFeed.tsx`
2. Localize o array `instagramPosts`
3. Atualize as propriedades de cada post:
   ```typescript
   {
     image: 'URL_DA_IMAGEM',
     likes: NUMERO_DE_LIKES,
     caption: 'LEGENDA_DO_POST'
   }
   ```

### Integração Dinâmica (Instagram Basic Display API)

Para implementar uma integração dinâmica com o Instagram:

1. Crie uma conta de desenvolvedor Meta:
   - Acesse [Meta for Developers](https://developers.facebook.com)
   - Crie um novo aplicativo
   - Selecione "Instagram Basic Display"

2. Configure o aplicativo:
   ```bash
   npm install instagram-basic-display
   ```

3. Crie um arquivo de configuração `.env`:
   ```
   INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
   ```

4. Implemente o cliente Instagram:
   ```typescript
   // src/utils/instagram.ts
   import { InstagramBasicDisplay } from 'instagram-basic-display';

   const instagram = new InstagramBasicDisplay({
     access_token: process.env.INSTAGRAM_ACCESS_TOKEN
   });

   export const getFeed = async () => {
     const media = await instagram.getUserMedia();
     return media.data;
   };
   ```

5. Atualize o componente InstagramFeed:
   ```typescript
   // src/components/InstagramFeed.tsx
   import { useEffect, useState } from 'react';
   import { getFeed } from '../utils/instagram';

   const InstagramFeed = () => {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
       getFeed().then(setPosts);
     }, []);

     // Resto do componente
   };
   ```

### Considerações de Segurança

1. Nunca exponha tokens de acesso no código-fonte
2. Implemente rate limiting para chamadas à API
3. Mantenha tokens atualizados e revogue acesso quando necessário
4. Considere implementar cache para reduzir chamadas à API

## Deploy

### Netlify (Recomendado)

1. Crie uma conta no Netlify
2. Conecte seu repositório
3. Configure as seguintes opções:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `16` ou superior

### Vercel (Alternativa)

1. Crie uma conta na Vercel
2. Importe o repositório
3. As configurações serão detectadas automaticamente

## SEO e Performance

A landing page foi otimizada para SEO com:
- Meta tags apropriadas
- Estrutura semântica HTML
- Imagens otimizadas
- Performance otimizada
- URLs amigáveis

## Suporte

Para suporte ou dúvidas, entre em contato através do WhatsApp: (61) 99407-0676

## Licença

Este projeto está sob a licença MIT.