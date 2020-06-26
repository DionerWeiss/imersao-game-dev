
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, variacaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite)
        
        this.velocidade = velocidade

        this.x = width


    }

    move() {
        this.x -= this.velocidade
    }

    aparece() {
        this.x = width
    }

}