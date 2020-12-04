var listaUsuariosCadastrados = [
    {
        "id" : 1,
        "nomeCompleto" : "Cleiton Migliorini",
        "cpf" : "XXX.XXX.XXX-XX",
        "rg" : "XX.XXX.XXX-X",
        "cidade" : "Francisco Beltrão",
        "uf" : "PR",
        "renda" : 1000,
        "banco" : "Banco do Brasil",
        "conta" : "23900-9",
        "agencia" : "1489",
        "foto" : "sem_foto.png"
    }

];

var input_nomeCompleto = document.querySelector("#nomeCompleto");
var input_cpf = document.querySelector("#cpf");
var input_rg = document.querySelector("#rg");
var input_cidade = document.querySelector("#cidade");
var input_uf = document.querySelector("#uf");
var input_renda = document.querySelector("#renda");
var input_banco = document.querySelector("#banco");
var input_conta = document.querySelector("#conta");
var input_agencia = document.querySelector("#agencia");

const cardList = document.querySelector("[cardList]");


const atualizarLabel = () => {
    input_nomeCompleto = document.querySelector("#nomeCompleto");

    document.querySelector("#nomeLabel").innerHTML = input_nomeCompleto.value;

}

const cadastrarDadosUsuario = () =>{

    let usuario = new Object();
    usuario.id = listaUsuariosCadastrados.length + 1;
    usuario.nomeCompleto = input_nomeCompleto.value; 
    usuario.cpf = input_cpf.value; 
    usuario.rg = input_rg.value; 
    usuario.cidade = input_cidade.value; 
    usuario.uf = input_uf.value; 
    usuario.renda = input_renda.value; 
    usuario.banco = input_banco.value; 
    usuario.conta = input_conta.value; 
    usuario.agencia = input_agencia.value; 
    usuario.foto = "sem_foto.png";

    listaUsuariosCadastrados.push(usuario);
    limparDadosUsuario();
    cardList.innerHTML = criarComponentListaUsuarios(listaUsuariosCadastrados);

}

const criarComponentListaUsuarios = (listaUsuarios) => {

    return listaUsuarios.map( (usuario) => {

        return (
            `
                <main class="card">
                    <section class="card_img">
                        <img src="fotosUsuario/${usuario.foto}">
                    </section>
                    <section class="card_info">
                         <h1>${usuario.nomeCompleto}</h1>
                         <hr>
                         <p>${usuario.cidade} - ${usuario.uf} </p> 
                         <p class="coluna_50"> CPF ${usuario.cpf} </p>   
                         <p class="coluna_50"> RG ${usuario.rg} </p> 
                         <p> RENDA R$ ${usuario.renda} </p> 
                         <p>${usuario.banco} </p> 
                         <p class="coluna_50"> C/C ${usuario.conta} </p>   
                         <p class="coluna_50"> Ag. ${usuario.agencia} </p> 

                    </section>
                </main>
            
            `
        )

    }).join('');

}

const limparDadosUsuario = () =>{
    
    input_nomeCompleto.value = ''; 
    input_cpf.value= ''; 
    input_rg.value= ''; 
    input_cidade.value= ''; 
    input_uf.value= ''; 
    input_renda.value= ''; 
    input_banco.value= ''; 
    input_conta.value= ''; 
    input_agencia.value= ''; 

}