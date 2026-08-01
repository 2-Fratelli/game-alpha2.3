Player.prototype.horizontalCollisions = function(){

    for(const platform of level.platforms){

        const overlap =

            this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.y + this.height > platform.y;

        if(!overlap) continue;

        if(this.velX > 0){

            this.x = platform.x - this.width;

        }

        else if(this.velX < 0){

            this.x = platform.x + platform.width;

        }

    }

}

/*---------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------*/

Player.prototype.verticalCollisions = function(){

    this.onGround = false;

    for(const platform of level.platforms){

        const overlap =

            this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.y + this.height > platform.y;

        if(!overlap) continue;

        //----------------------
        // Caer
        //----------------------

        if(
            this.velY > 0 &&
            this.y + this.height - this.velY <= platform.y
        ){

            this.y = platform.y - this.height;

            this.velY = 0;

            this.onGround = true;

        }

        //----------------------
        // Golpear techo
        //----------------------

        else if(
            this.velY < 0 &&
            this.y - this.velY >= platform.y + platform.height
        ){

            this.y = platform.y + platform.height;

            this.velY = 0;

        }

    }

}

Player.prototype.worldLimits = function() {

    //----------------------
    // Límite izquierdo
    //----------------------

    if (this.x < 0) {
        this.x = 0;
    }

    //----------------------
    // Límite derecho
    //----------------------

    if (this.x + this.width > level.world.width) {
        this.x = level.world.width - this.width;
    }
}