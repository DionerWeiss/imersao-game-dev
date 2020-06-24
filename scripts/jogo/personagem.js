class Personagem {
    constructor (imagem) {
        this.imagem = imagem;
        this.matriz = [
            [0, 0],  [220, 0],  [440, 0],  [660, 0],
            [0, 270],[220, 270],[440, 270],[660, 270],
            [0, 540],[220, 540],[440, 540],[660, 540],
            [0, 810],[220, 810],[440, 810],[660, 810],
        ];
        this.frameAtual = 0;
    }

    exibe() {  
        const larguraPersonagem = 110;
        const alturaPersonagem = 135;
        const eixoX = 0;
        const eixoY = height - alturaPersonagem;
        const comecoImagemX = this.matriz[this.frameAtual][0];
        const comecoImagemY = this.matriz[this.frameAtual][1];
        const alturaImagemPersonagem = 270;
        const largutaImagemPersonagem = 220;
      
        image(this.imagem, eixoX, eixoY, larguraPersonagem, alturaPersonagem, comecoImagemX, comecoImagemY, largutaImagemPersonagem, alturaImagemPersonagem);
        this.anima();
    }

    anima() {
        this.frameAtual++;        
        if (this.frameAtual >= this.matriz.length) {
            this.frameAtual = 0;
        }
        

    }
}