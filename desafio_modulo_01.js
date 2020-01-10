/*var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
    };

    console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" nº ${endereco.numero}.`);


function par(x,y){
    for(var i = x; i<= y; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}

par(0, 100);

function temHabilidade(skills) {
    var retorno = skills.includes("Javascript")
        console.log(retorno);
    }
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false


function experiencia(anos) {
    if(anos <= 1){
        return "Iniciante"
    } else if(anos <= 3){
        return "Intermediário"
    } else if(anos <= 6){
        return "Avançado"
    } else if( anos >= 7){
        return "Jedi Master"
    }
}
    var anosEstudo = 2;
    console.log(experiencia(anosEstudo));

    //0-1 ano: Iniciante
    //1-3 anos: Intermediário
    //3-6 anos: Avançado
    //7 acima: Jedi Master

*/
var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];

function raiz(lista){
    for(var i = 0; i < lista.length; i++){
        console.log(`O ${lista[i].nome} possui as habilidades: ${lista[i].habilidades.join(", ")}`)
        //O Diego possui as habilidades: Javascript, ReactJS, Redux
        //O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
    }
}

raiz(usuarios)