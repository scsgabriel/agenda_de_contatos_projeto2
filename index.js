const form = document.getElementById('lista-contatos');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');            //valor do input contatos
    const inputNumeroContato = document.getElementById('numero-contato');        //valor do input telefone

    let linha = '<tr>'                                  //abertura da tag de linha no HTML
    linha += `<td> ${inputNomeContato.value} </td>`     //concatenando a linha com a tabela usando o value pra atualizar o valor da célula td do HTML
    linha += `<td> ${inputNumeroContato.value} </td>`   // ...
    linha += `</tr>`;                                   //fechamento da tag de linha

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})

