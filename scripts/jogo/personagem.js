class Personagem extends Animacao{
    constructor(matriz, imagem, x,  larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite)
        
        this.yBase = height - this.alturaPersonagem;
        this.y = this.yBase;
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
    }

    pula() {
        this.velocidadeDoPulo = -30
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.y > this.yBase ) {
            this.y = this.yBase;
        }
    }

    estaColidindo(inimigo) {
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
        );

        return colisao;
    }

    // exibe() {  
    //     const larguraPersonagem = 110;
    //     const alturaPersonagem = 135;
    //     const eixoX = 0;
    //     const eixoY = height - alturaPersonagem;
    //     const comecoImagemX = this.matriz[this.frameAtual][0];
    //     const comecoImagemY = this.matriz[this.frameAtual][1];
    //     const alturaImagemPersonagem = 270;
    //     const largutaImagemPersonagem = 220;
      
    //     image(this.imagem, eixoX, eixoY, larguraPersonagem, alturaPersonagem, comecoImagemX, comecoImagemY, largutaImagemPersonagem, alturaImagemPersonagem);
    //     this.anima();
    // }

    // anima() {
    //     this.frameAtual++;        
    //     if (this.frameAtual >= this.matriz.length) {
    //         this.frameAtual = 0;
    //     }
        

    // }
}