// Encontre a tabela e o botão de adicionar

// Crie uma função para atualizar a tabela com base na variável produtosCadastrados
function updateTable() {
  // Limpe as linhas existentes da tabela
    let table = document.getElementById("livro-table");
    let rows = table.getElementsByTagName("tr");
    while (rows.length > 1) {
        table.deleteRow(1);
    }

    // Adicione as linhas da tabela com base nos produtos
    for (let i = 0; i < livrosEscolhidos.length; i++) {
        let livro = livrosEscolhidos[i];

        // Crie as células da linha
        let linha = table.insertRow(i + 1); //<tr>
        let idCell = linha.insertCell(0); //<td>
        let tituloCell = linha.insertCell(1);//<td>
        let categoriaCell = linha.insertCell(2);//<td>

        // Preencha as células com os dados do produto
        idCell.textContent = livro.id;
        tituloCell.textContent = livro.titulo
        categoriaCell.textContent = livro.categoria;
    }
}