window.onload=function() {

    const btn_buscar = document.querySelector("#botaoBuscar");
    const caixa_cep = document.querySelector("#cep");

    btn_buscar.addEventListener('click', function() {
        dados_cep(caixa_cep.value);


    })


    let dados_cep = async function(cep) {

        let url =  `https://viacep.com.br/ws/${cep}/json/`;
        
        try {
        let dados_fetch = await fetch(url);
        let dados_json = await dados_fetch.json();
        dados_site(dados_json);
        } catch (error) {
            alert (error);
        }    
    }


    
    function dados_site(dados_cep) {

        for (let campos_site in dados_cep) {
            if (document.querySelector(`#${campos_site}`)) {
                document.querySelector(`#${campos_site}`).value = dados_cep[campos_site]; 
            }
        }

    }






}