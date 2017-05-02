const Prim = {

    grafo: {},
    resultado: [],
    nosUsados: {},

    gerarArestas: function(range) {
        return {
            origem: letraAleatoria(range),
            destino: letraAleatoria(range),
            valor: gerarValor()
        }
    },
    gerarGrafoAleatorio: function() {

    },
    criaGrafo: function() {
        const grafo = Grafo;

        grafo.adicionaNo('a');
        grafo.adicionaNo('b');
        grafo.adicionaNo('c');
        grafo.adicionaNo('d');
        grafo.adicionaNo('e');
        grafo.adicionaNo('f');
        grafo.adicionaNo('g');
        grafo.adicionaNo('h');

        grafo.adicionaAresta('a', 'b', gerarValor());
        grafo.adicionaAresta('b', 'c', gerarValor());
        grafo.adicionaAresta('c', 'd', gerarValor());
        grafo.adicionaAresta('d', 'h', gerarValor());
        grafo.adicionaAresta('h', 'g', gerarValor());
        grafo.adicionaAresta('g', 'f', gerarValor());
        grafo.adicionaAresta('f', 'e', gerarValor());
        grafo.adicionaAresta('e', 'a', gerarValor());
        grafo.adicionaAresta('a', 'f', gerarValor());
        grafo.adicionaAresta('b', 'f', gerarValor());
        grafo.adicionaAresta('b', 'g', gerarValor());
        grafo.adicionaAresta('c', 'g', gerarValor());
        grafo.adicionaAresta('d', 'g', gerarValor());

        return grafo;

    },
    clear: function() {
        this.grafo = {};
        this.resultado = [];
        this.nosUsados = {};
    },

    proximoNo: function() {

        let menorAresta = null;

        this.resultado.forEach(
            no => {
                const arestasConectadas = this.grafo.arestas[no];
                arestasConectadas.forEach(
                arestaConectado => {
                    const proximaAresta = arestaConectado;
                    const jaVisitado = this.nosUsados[proximaAresta.destino] !== undefined;
                    if ((!menorAresta || proximaAresta.valor < menorAresta.valor) && !jaVisitado) {
                        menorAresta = proximaAresta;
                    }
                });
            });
        return menorAresta ? menorAresta.destino : null;
    },

    proximoNoFunc: function() {
        const menores = this.resultado.map(
            no => {
                const arestasConectadas = this.grafo.arestas[no];
                return arestasConectadas.reduce(
                    (menor, proximaAresta) => {
                        const jaVisitado = this.nosUsados[proximaAresta.destino] !== undefined;
                        if ((menor || proximaAresta.valor < menor.valor) && !jaVisitado)
                            return proximaAresta;
                        else
                            return menor;
                });
        });
        const menorDosMenores = menores.reduce(
            (menor, proximaAresta) => {
                return proximaAresta.valor < menor.valor;
            }
        );
        return menorDosMenores ? menorDosMenores.destino : null;
    },

    execute: function() {
        this.clear();
        this.grafo = this.criaGrafo();

        const tamanhoGrafo = this.grafo.nos.length - 1;
        const indiceInicial = Math.round(Math.random() * tamanhoGrafo);
        const no = this.grafo.nos[indiceInicial];
        this.resultado.push(no);
        this.nosUsados[no] = true;

        var proximo = this.proximoNoFunc();

        while(proximo != null) {
            this.resultado.push(proximo);
            this.nosUsados[proximo] = true;
            proximo = this.proximoNo();
        }

        return this.resultado;
    }
}

function menorCaminho(arestasConectadas) {
    for (let n = 0; n < arestasConectadas.length; n++) {
        const proximaAresta = arestasConectadas[n];
        const jaVisitado = this.nosUsados[proximaAresta.destino] !== undefined;
        if (proximaAresta.valor < minimo.valor && !jaVisitado) {
            return proximaAresta;
        }
    }
}

function gerarValor() {
    return Math.round(Math.random() * 10);
}

function letraAleatoria() {
    const letras = 'abcdefghiklmnopqrstuvwxyz';
    const indice = Math.floor(Math.random() * range);
    return letras[range];
}
