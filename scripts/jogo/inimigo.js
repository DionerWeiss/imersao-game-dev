
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite, velocidade, delay) {
        super(matriz, imagem, x, variacaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite)
        
        this.velocidade = velocidade
        this.delay = delay
        this.x = width + this.delay


    }

    move() {
        this.x -= this.velocidade

        if (this.x < -this.larguraPersonagem - this.delay) {
            this.x = width
        }
    }

}