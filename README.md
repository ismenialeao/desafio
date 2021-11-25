
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


         📁 CALCULADORA
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
            |         |- 📄 index.pug
            |         |- 📄 layout.pug
            |
            |
            |- 📄 .gitignore
            |- 📄 app.js
            |- 📄 calculadora.js
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

* Os arquivos estão na pasta raiz CALCULADORA

* A CALCULADORA para executar devera ter instalado em sua maquina o [node](https://nodejs.org/en/) 

* Ultilizei ainda o _Docker_ com dois containers um para rodar o _Mongo_ (banco uasado para pessistir os dados) e o segundo para rodar o _node_.

* Para executar o sistema use apenas o comando abaixo que monta as imagens e roda os containers em background. 

 `docker-compose up -d --build`
 
* localhost:8080 porta de acesso


 


[![Linkedin Badge](https://img.shields.io/badge/-Ismenia%20Leao-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ism%C3%AAnia-le%C3%A3o-a39942198/)](https://www.linkedin.com/in/ism%C3%AAnia-le%C3%A3o-a39942198/)  [![Gmail Badge](https://img.shields.io/badge/-ismenialeao@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ismenialeao@gmail.com)](mailto:ismenialeao@gmail.com)

