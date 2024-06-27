# LCAO (Lista de Compromissos e Atividades Online)

O LCAO foi um projeto realizado para as matérias de Projeto Integrado Web e Mobile que consiste em um site de gerenciamento de tarefas para que so usuário possa se organizar melhor e seja lembrado de suas tarefas com o uso do sistema, entre outros.

As tecnologias deste projeto são: 

Para o Front-end com **Angular** na versão 16.2:

- **HTML**;
- **SCSS** (antigamente foi **CSS**);
- **Typescript**;
- **Node.js** (NPM/ Dependências);

Para o Back-End com **Spring Boot** e Banco de Dados:

- **Java 17**;
- **Spring Security e Web**;
- **MySQL**;
- **Maven** (Dependências);

Menções também para a IDE **IntelliJ** para executar o Back-End e o editor de texto **Visual Studio Code** (VsCode), além do **XAMPP** como servidor local para executar e criar as portas do MySQL e do Tomcat.

# Download e Instalação

1. Baixe o repositório:
   
  * Linha de comando HTTPS:
    ```bash
    git clone https://github.com/RafaelAguiarRodrigues/LCAO.git
    ```
    
  * Linha de comando SSH:
    ```bash
    git clone git@github.com:RafaelAguiarRodrigues/LCAO.git
    ```

2. Instale as dependências do Front e Back:

Front:
   
  * Primeiramente verifique se você possui o **Node.Js** instalado em sua máquina para utilizar o Node Package Manager (NPM) nas versões 15 ou superior (até a 20).
    
  * Em seguida baixe o **CLI do Angular** (Command Line Interface), tomando cuidado com permissões do seu terminal (caso utilize PowerShell ou tenha restrições de admnistrador no sistema, recomendável utilizar outro terminal ou Bash do Git):
   
    ```bash
    npm install -g @angular/cli@16.2.12
    ```

  * Por fim, instale as dependências do Front-end com o node via comando:

     ```bash
    npm install
    ```

Back:
  * Confira se você possui uma JDK e JVM na versão 17 do Java, caso não, o IntelliJ oferece algumas opções localmente.
  * Confira as dependências do projeto com o Maven e as baixe, você pode abrir elas no pom.xml.
  * Configure o application.properties com seu usuário e senha do MySQL. Caso não tenha MySQL siga os próximos passos e baixe antes de configurar.

Banco de Dados:
  * Tenha o MySQL instalado em sua máquina (recomendável usar o Workbench).
  * Caso o sistema não crie uma porta de conexão para o banco, você pode baixar o Xampp e inicializar a porta do MySQL.
  * Use o script do banco no Back-end em src > main > resources > db/migration.

# Uso

  1. Utilize o Maven ou sua própia IDE para executar o back-end (de preferencia a partir do LcaoApplication).
  2. Abra o terminal e utilize o comando para executar o front-end no seu Editor de código:
  ``` bash
  ng serve --o
  ```
  
    
  
