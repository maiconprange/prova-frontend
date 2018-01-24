# HiPlatform

Teste HiPlatform

Este projeto utiliza as seguintes tecnologias:

	Babel
	Gulp
	webpack
	Ecmascript 6
	Sass
	
### Pré-requisitos

Antes de iniciar a instalação do front-end e poder rodar o servidor de desenvolvimento instale o NodeJs

```
https://nodejs.org/en/download/
```
Baixe sempre a ultima versão estável

### Iniciando o projeto:

Vá até a raiz do projeto e siga os passos

```
npm install -g gulp
```

Este comando vai instalar o gulp de forma Global em seu computador.

Em seguida instale

```
npm install -g webpack
```

Este comando vai instalar o webpack de forma global na sua máquina.

Agora instale as dependências do projeto com o comando:

```
npm install
```

Aguarde a instalação terminar e se tudo der certo siga o próximo passo

```
gulp serve
```

Comando que vai subir o servidor de desenvolvimento no endereço http://127.0.0.1:9001

## Build

Para fechar um projeto e "Compilar" rodamos o seguinte comando:

```
gulp build
```

Este comando irá gerar os arquivos minificados na pasta dist