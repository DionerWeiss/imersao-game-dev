
class Animacao {
    constructor(matriz, imagem, x, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.imagem = imagem;
        this.x = x;
        this.y = height - alturaPersonagem;
        this.larguraPersonagem = larguraPersonagem;
        this.alturaPersonagem = alturaPersonagem;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;

    }

    exibe() {
        image(this.imagem,
            this.x,
            this.y,
            this.larguraPersonagem,
            this.alturaPersonagem,
            this.matriz[this.frameAtual][0],
            this.matriz[this.frameAtual][1],
            this.larguraSprite,
            this.alturaSprite
        );

        this.anima();
    }

    anima() {
        this.frameAtual++;        
        if (this.frameAtual >= this.matriz.length) {
            this.frameAtual = 0;
        }
        

    }
}