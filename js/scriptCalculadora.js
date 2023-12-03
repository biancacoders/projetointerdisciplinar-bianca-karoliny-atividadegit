function calcular(event) {
    // Previne que a função padrão do botão seja executada, nesse caso, recarregar a página.
    // (Não deixa recarregar a página)
    event?.preventDefault();

    // Define as variáveis correspondentes onde o usuário vai digitar os valores (.value no final).
    // Observe que a variável já está sendo passada como 'parseFloat' com o intúito 
    // do programa identificar que é para tratar como um número real
    var a = parseFloat(document.getElementById('idtextA').value);
    var b = parseFloat(document.getElementById('idtextB').value);
    var c = parseFloat(document.getElementById('idtextC').value);

    // Faz uma verificação se algum dos números (ou um ou outro) não é um número, caso possa vir a ser
    // uma letra, ou que não esteja preenchido
    // O 'return' serve para parar a execução do código naquela linha, caso não tenha um número válido
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return alert("Insira números válido nos valores.");
    }

    const bhaskaraRes = document.getElementById('bhaskaraRes');

    // Caso o valor de A seja 0, então se trata de uma equação de primeiro grau
    if (a === 0 || a === null) {
        document.getElementById('x1').innerHTML = '';
        document.getElementById('x2').innerHTML = '';
        return deltaRes.textContent = "A equação inserida trata-se de uma equação de primeiro grau.";
    }

    // Caso os números sejam válidos, o processamento de dados irá calcular o valor de delta
    // É definido uma variável recebendo o valor aritmético da fórmula do delta;
    var delta = b * b - 4 * a * c;

    // 'deltaRes' é o ID de uma tag do HTML5. Está sendo definido de forma direta o conteúdo do texto.
    // Utilizando a crase ( ` ) como delimitação de texto, serve para criar uma 'string de modelo' onde
    // permite interpolação de expressões dentro do texto, usando ${<expressão>} como podemos ver abaixo.
    deltaRes.textContent = `Δ = ${delta}`;

    const x1 = document.getElementById('x1');
    const x2 = document.getElementById('x2');

    // Aqui verificamos se o valor do resultado aritmético calculado acima é menor ou igual a 0
    if (delta <= 0) {
        // Caso seja menor ou igual a zero, seguindo a fórmula de Bhaskara, não tem como tirar a raiz de
        // um número negativo, por isso o processo termina por aqui.
        // Sendo uma função, é necessário retornar um valor, porém, nesse caso não há necessidade do prefixo
        // 'return' pois é uma definição final, tornando, nesse caso a função em um processamento.
        bhaskaraRes.textContent = "Não há valor real para essa equação.";
        document.getElementById('x1').innerHTML = '';
        document.getElementById('x2').innerHTML = '';
    } else {
        // Caso o valor de delta seja maior que 0 (se não for maior ou igual a 0) é calculado os resultados
        // possíveis da fórmula, sendo x1 e x2 (mais ou menos, respectivamente, nesse caso)
        var x1res = (-b + Math.sqrt(delta)) / (2 * a);
        var x2res = (-b - Math.sqrt(delta)) / (2 * a);

        // Por fim, é exibido o resultado utilizando 'string de modelo', onde x1 e x2 são IDs de tags do HTML5
        x1.innerHTML = `x1 = ${x1res.toFixed(2)}`;
        x2.innerHTML = `x2 = ${x2res.toFixed(2)}`;
    }
}

function limpar(event) {
    event?.preventDefault();

    document.getElementById('idtextA').value = '';
    document.getElementById('idtextB').value = '';
    document.getElementById('idtextC').value = '';

    document.getElementById('deltaRes').innerHTML = '';
    document.getElementById('x1').innerHTML = '';
    document.getElementById('x2').innerHTML = '';
}

// As linhas de código abaixo servem para aplicar a funcionalidade de apertar a tecla ENTER para executar a função 'calcular'
document.getElementById('idtextA').addEventListener('keydown', function (event) {
    if (event.key === "Enter") calcular();
})

document.getElementById('idtextB').addEventListener('keydown', function (event) {
    if (event.key === "Enter") calcular();
})

document.getElementById('idtextC').addEventListener('keydown', function (event) {
    if (event.key === "Enter") calcular();
})

// Essa função serve para mudar o 'placeholder' dos 'inputs' se a largura da tela for menor que 400 pixels
function handleResize() {
    var larguraDaJanela = window.innerWidth;

    if (larguraDaJanela < 400) {
        const a = document.getElementById('idtextA');
        const b = document.getElementById('idtextB');
        const c = document.getElementById('idtextC');

        a.placeholder = `A`;
        b.placeholder = `B`;
        c.placeholder = `C`;
    }
}

// Adicionar um evento na janela para aplicar a função anterior
window.addEventListener('resize', handleResize);

// Chamada da função assim que a página for carregada
handleResize();