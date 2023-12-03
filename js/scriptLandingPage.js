function newsletter(event) {
    // Previne que a função padrão do botão seja executada, nesse caso, recarregar a página.
    // (Não deixa recarregar a página)
    event?.preventDefault();

    // Resgata a tag do HTML5 onde o usuário vai inserir o e-mail.
    const inputEmail = document.getElementById('form_newsletter_inputEmail');

    // Resgata a tag do HTML5 da mensagem de feedback, por padrão, está com a classe 'hidden'
    // configurado no CSS para 'display: none;'
    const feedback = document.getElementById('form_newsletter_feedback');

    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* 
    
    ^           Indica o início da string.
    [^\s@]+     Diz que pode ser um ou mais caracteres que não são espaços em branco ou '@'.
    @           O caractere '@'.
    [^\s@]+     Um ou mais caracteres que não são espaços em branco ou '@'.
    \.          O caractere '.' (ponto), que deve ser escapado com uma barra invertida.
    [^\s@]+$    Um ou mais caracteres que não são espaços em branco ou '@' até o final da string $.

    */


    // Verifica se o valor da variável 'inputEmail' declarada acima é 'null' (nulo, vazia) OU
    // se aplica no RegEx (expressão regular), onde o método 'test' retorna um valor lógico (verdadeiro ou falso)
    if (inputEmail.value === null || !regex.test(inputEmail.value)) {
        // Define o conteúdo do texto da variável 'feedback' declarada àcima
        feedback.textContent = `Insira um e-mail válido.`

        // Define a cor do texto
        feedback.style.color = 'red';

        // Define a cor da borda da variável 'inputEmail' declarada àcima
        inputEmail.style.borderColor = 'red';

        // Remove a classe 'hidden' da tag 'feedback' declarada àcima, fazendo com que ela seja mostrada.
        feedback.classList.remove("hidden");
    } else if (regex.test(inputEmail.value)) {
        feedback.textContent = `Inscrito com sucesso!`
        feedback.style.color = 'green';
        inputEmail.style.borderColor = 'green';

        // Define o valor da variável 'inputEmail' como 'null' (nulo), basicamente limpa o campo.
        inputEmail.value = "";

        feedback.classList.remove("hidden");

        // Define um limite de tempo, para executar um bloco de comando depois de determinado milisegundos
        setTimeout(() => {
            inputEmail.style.borderColor = '#866DA0';
            feedback.textContent = "";

            // Adiciona a classe 'hidden' na tag 'feedback' para não ser mais exibida
            feedback.classList.add("hidden");
        }, 7 * 1000); // Essa parte '7 * 1000' diz que o bloco acima será executado depois de 7 segundos (1000 milisegundos = 1 segundo)
    }
}

function openMenu(event) {
    // Previne que a função padrão do botão seja executada, nesse caso, recarregar a página.
    // (Não deixa recarregar a página)
    event?.preventDefault();
}