const contas = []
function criarConta(){
    const nomeCampo = document.getElementById("nome").value
    const emailCampo = document.getElementById("email").value
    const senhaCampo = document.getElementById("senha").value
    contas.push({nome: nomeCampo, email: emailCampo, senha: senhaCampo})
    document.getElementById('table-users').innerHTML = `
    <tr>
        <th>Nome</th>
        <th>Email</th>
    </tr>
    ${contas.map((value) => {
        return `
        <tr>
            <th>${value.nome}</th>
            <th>${value.email}</th>
        </tr>
        `
    })}
    `
}