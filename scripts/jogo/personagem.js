class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite)
        
        this.variacaoY = variacaoY
        this.chao = height - this.alturaPersonagem - this.variacaoY
        this.y = this.chao
        this.velocidadeDoPulo = 0
        this.gravidade = 5
        this.alturaDoPulo = -50

        this.pulos = 0
        this.invencivel = false
    }

    pula() {
        if (this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo
            this.pulos++
        }
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo
        this.velocidadeDoPulo += this.gravidade

        if (this.y > this.chao ) {
            this.y = this.chao
            this.pulos = 0
        }
    }

    tornarInvencivel() {
        this.invencivel = true
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }

    estaColidindo(inimigo) {
        if (this.invencivel) {
            return false
        }

        const precisao = .7
        const colisao = collideRectRect(
            this.x,
            this.y, 
            this.larguraPersonagem * precisao, 
            this.alturaPersonagem * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.larguraPersonagem * precisao,
            inimigo.alturaPersonagem * precisao
        )

        return colisao
    }
}