const listaDadosCovid = [
    {
       "description" : "COVID - DIA 19",
       "date" : '19/11/2020',
       'case' : 180,
       'confirm' : 10,
       'negative': 170
    },
    {
        "description" : "COVID - DIA 18",
        "date" : '18/11/2020',
        'case' : 100,
        'confirm' : 20,
        'negative': 80
     },
]

const listaCovid_ul = document.querySelector('[listaCovid]');

const listaComponentCovid_li = (listaDadosCovid_params) => {

    let total = document.querySelector('#total');
    total.value = listaDadosCovid_params.length;

    return listaDadosCovid_params.map((itemCovid) => {
        return (
            `
                <li>    
                    <span> ${itemCovid.description} </span>    
                    <span> ${itemCovid.date} </span>
                </li>
            `

            /*
            
            " <li> " +
            " <span> " +  itemCovid.description + " </span> "+ 
            " <span> " +  itemCovid.date + " </span> "+ 
            " </li> "
            */

        )
    })

  
}



listaCovid_ul.innerHTML = listaComponentCovid_li(listaDadosCovid);

const addDadosCovid = () => {

    //Pega dados da tela
    let description = document.querySelector('#description');
    let caseCovid = document.querySelector('#caseCovid');
    let confirm = document.querySelector('#confirm');

    //Cria objeto e seja atributos
    let dadoCovid = new Object();
    dadoCovid.description = description.value;
    dadoCovid.date =  '19/11/2020';
    dadoCovid.case = parseInt(caseCovid.value);
    dadoCovid.confirm = parseInt(confirm.value);
    dadoCovid.negative = parseInt(caseCovid.value) - parseInt(confirm.value);

    //Adiciona os novos dados na lista
    listaDadosCovid.push(dadoCovid);

    //atualiza o TODO
    listaCovid_ul.innerHTML = listaComponentCovid_li(listaDadosCovid);

}
