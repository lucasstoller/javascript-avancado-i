class Negociacao {

    constructor(data = new Date(), quantidade = 1, valor = 0.00) {
        
        // Se a property for imutavel, por convenção começe seu nome por '_' (underline)
        this._data = new Date(data.getTime());
            // Em vez de armazenar um ponteiro para 'data'
            // É armazenado um novo objeto Date com o valor de 'data'
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this) // Congela o objeto instanciado.
    }

    get data() {
        return new Date(this._data.getTime()); 
        // Em vez de enviar uma referencia para data ( ponteiro )
        // Retorna um novo objeto com as mesmas propiedades
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    // A sintaxe get no javascript permite criar um getter para uma variavel;
}