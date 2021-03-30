# Primeiro vamos escolher uma image base
# Você pode escolher uma de qualquer distribuição Linux ou escolher uma 
# Da liguagem de programação você usa
FROM node:alpine

#Você pode criar um diretório para copiar o seu arquivos de programa,
# Este passo é opcional, mas é bom para organização
WORKDIR /app

# Vou copiar todos os arquivos  para dentro do container
# Você pode escolher copiar só algumas coisas e pode escrever uma por um aaqui
# EU gosto de utilizar o .dockerignore para os que eu não quero copiar para dentro
# Por exemplo as nossas credenciais
COPY . .

# Finalmente você pode executar os comando de instalação da sua lingaguem
# E qualquer outra coisa que precisa fazer, como executar os scrips de build
# Para quem trabalha com Python aqui seria o pip
# Para quem trabalha com Rust aqui é chama o cargo
# Para quem trabalha com PHP aqui é chamar o Compose
# Para quem trabalha com Ruby aqui é chamar o RubyGem
# 
# Para quem é mais acostumado com linux pensa que isto é tipo um script
RUN npm ci


# 
ENTRYPOINT [ "node" ]
CMD [ "app.js" ]