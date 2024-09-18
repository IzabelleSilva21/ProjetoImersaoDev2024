function pesquisar(){
    let exibirResultado = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    const regex = /[^a-zA-Z0-9\s-#-$-=-+]/g;
    campoPesquisa = campoPesquisa.replace(regex, '').toLowerCase().trim();
    console.log(campoPesquisa)
    
    if (!campoPesquisa){
        exibirResultado.innerHTML = "<p> Nenhum resultado correspondente. Nada foi digitado! </p>";
        return;
    }
    
    let resultados = "";
    let nome = "";
    let descricao = "";
    let areaConhecimento = "";
    let tags = "";

    for (let dado of baseDados){
        
        nome = dado.nomeCurso.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        areaConhecimento = dado.areaConhecimento.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || areaConhecimento.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class= "item-resultado">

                <h2>
                    <a href="#" target="_blank">${dado.nomeCurso}</a>
                </h2>
                <section class= "item-descricao">
                    <p> ${dado.descricao} <br> Área de conhecimento: ${dado.areaConhecimento} <br> Duração média: ${dado.duracao} <br> Média salarial: ${dado.salarioMedio}</p>
                </section>
                
                <a href=${dado.link} target="_blank">Mais informações</a> 
            </div>
            `;
        }
    }
    if(!resultados){
        resultados = "<p> Nenhum resultado correspondente!</p>";
    }

    exibirResultado.innerHTML = resultados;
}