# Usa a imagem do Node.js para rodar o build
FROM node:18-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Roda o build da aplicação
RUN npm run build --prod

# Serve a aplicação Angular
FROM nginx:alpine

# Copia o build para o NGINX
COPY --from=build /app/dist/cadastramento-operacoes/browser /usr/share/nginx/html

# Expõe a porta para o NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
