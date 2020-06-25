
class Inimigo extends Animacao {
    constructor(matriz, imagem, x,  larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite)
        
        this.velocidade = 10;
    }

    move() {
        this.x -= this.velocidade;

        if (this.x < -this.larguraPersonagem) {
            this.x = width;
        }
    }

}