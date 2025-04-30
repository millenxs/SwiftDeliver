# Usa imagem oficial do Node.js
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json (se houver)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para dentro do container
COPY . .

# Expõe a porta da aplicação (mesma do server.js)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
