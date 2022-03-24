// Metodos de instancia e estaticos

// Funcoes normais que estao dentro da classe

class Controle{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    // Método de Estância
    aumentarVolume(){
        this.volume += 2
    }
    diminuirVolume(){
        this.volume -= 2
    }

    // Método Estático
    static trocaPilha(){
        console.log('oi')
    }
}

const controle1 = new Controle('LG')
Controle.trocaPilha()