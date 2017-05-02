const Aresta =
 function(origem, destino, valor) {
    this.origem = origem;
    this.destino = destino;
    this.valor = valor;

    function comValor(valor) {
        this.valor = valor;
        return this;
    }
}

const No = function(nome) {
    this.nome = nome;
}

const Grafo = {
    nos: [],
    arestas: {},
    adicionaAresta: function(origem, destino, valor) {
        this.arestas[origem].push(new Aresta(origem, destino, valor));
        this.arestas[destino].push(new Aresta(destino, origem, valor));
    },
    adicionaNo: function(no) {
        this.nos.push(no);
        this.arestas[no] = [];
    },

    gerarNos: function(range) {
        for (let i = 0; i < range; i++) {
            const novoNo = letraAleatoria(range);
            if (this.nos.indexOf(novoNo) < 0)
                this.adicionaNo(letraAleatoria(range));
        }
    },

    gerarArestas: function() {

    }

};

function gerarValor() {
    return Math.round(Math.random() * 10);
}

function letraAleatoria(range) {
    const letras = 'abcdefghiklmnopqrstuvwxyz';
    const indice = Math.floor(Math.random() * range);
    return letras[range];
}
