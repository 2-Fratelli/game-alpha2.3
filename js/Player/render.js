Player.prototype.draw = function(ctx){

    const sprite = this.getCurrentSprite();

    ctx.save();

    if(this.direction == -1){

        ctx.scale(-1,1);

        ctx.drawImage(

            sprite,

            -this.x - this.width,
            this.y,

            this.width,
            this.height

        );

    }

    else{

        ctx.drawImage(

            sprite,

            this.x,
            this.y,

            this.width,
            this.height

        );

    }

    ctx.restore();

}