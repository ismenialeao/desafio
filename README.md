
## Desafio Desenvolvimento Tradicional

Foi requisitada a equipe de soluções e inovações digitais uma plataforma para cadastro de dados de pontos de
coleta. Esta plataforma irá auxiliar a equipes de Soluções para Áreas Contaminadas a fazer um melhor
gerenciamento dos dados coletados.

* O sistema deve possuir um menu contendo as seguintes opções:

- [x] Cadastro de Pontos
- [x] Cadastro de Parâmetros
- [x] Pesquisar Pontos
- [x] Pesquisar Pontos
- [x] Pesquisar Pontos
- [x] Pesquisar Pontos

* A aplicação deve permitir que o usuário cadastre um ponto informando o nome e as coordenadas (X,Y),
imputados manualmente

* A aplicação deve permitir que o usuário cadastre um parâmetro informando o nome do parâmetro, o valor do
parâmetro e data de coleta, sendo este relacionado com o ponto cadastrado

* Um ponto só pode ser cadastrado uma vez

* Um ponto pode ter vários parâmetros cadastrados

* A função “Listar todos” deve exibir para o usuário todos os pontos cadastrados e seus respectivos
parâmetros vinculados.

* Para saber os parâmetros que violaram a legislação pode ser consultada a tabela abaixo, sendo que a
legislação mostra o limite que o parâmetro deve ser encontrado


### **Arquitetura MVC**


         📁 DESAFIO
            |
            |
            |    
            |-📁 models
            |         |- 📄 points.js  
            |           
            |         
            |-📁 routes
            |        |- 📄 index.js
            |
            |
            |-📁 views
            |         |- 📄 abc.pug
            |         |- 📄 form.pug
            |         |- 📄 form-parameters.pug
            |         |- 📄 index.pug
            |         |- 📄 layout.pug
            |
            |
            |- 📄 .gitignore
            |- 📄 app.js
            |- 📄 db.js
            |- 📄 docker-compose.yml
            |- 📄 Dockerfile
            |- 📄 npm
            |- 📄 package-lock.json
            |- 📄 package.jason
            |- 📄 README.me
            |- 📄 start.js



### Como compilar e executar o programa

* Para a criar o codigo ultilizei a linguagem de programação _Javascript_ 

* Os arquivos estão na pasta raiz Desafio

* O desafio roda em ambiente docker para instalar siga a instrução no link [como instalar](https://docs.docker.com/desktop/windows/install/).

* Para executar o sistema use apenas o comando abaixo que monta as imagens e roda os containers em background. 

 `docker-compose up -d --build`
* O node vai levantar na porta 8080, para acessa use o endereço abaixo: 

localhost:8080 porta de acesso

### Previa do projeto

![subir](https://user-images.githubusercontent.com/63822305/143522679-bc4eff1f-16f0-4ab0-b6ae-ede4079e0c3f.gif)

 
 

[![Linkedin Badge](https://img.shields.io/badge/-Ismenia%20Leao-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ism%C3%AAnia-le%C3%A3o-a39942198/)](https://www.linkedin.com/in/ism%C3%AAnia-le%C3%A3o-a39942198/)  [![Gmail Badge](https://img.shields.io/badge/-ismenialeao@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ismenialeao@gmail.com)](mailto:ismenialeao@gmail.com)

