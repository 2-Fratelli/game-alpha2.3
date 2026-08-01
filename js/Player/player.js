class Player {

    constructor() {

        //----------------------
        // Posición
        //----------------------
    
        this.x = level.spawn.x;
        this.y = level.spawn.y;
    
        //----------------------
        // Tamaño
        //----------------------
    
        this.width = 64;
        this.height = 64;
    
        //----------------------
        // Movimiento
        //----------------------
    
        this.speed = 5;
        this.velX = 0;
        this.velY = 0;
    
        //----------------------
        // Física
        //----------------------
    
        this.gravity = 0.8;
        this.jumpForce = -16;
        this.onGround = false;
    
        //----------------------
        // Dirección
        //----------------------
    
        this.direction = 1;
    
        //----------------------
        // Animación
        //----------------------
    
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.frameSpeed = 5;
    
        //----------------------
        // Sprites
        //----------------------
    
        this.idle = null;
        this.runFrames = [];
    
        this.loadSprites();
    
    }

    update(){

        this.input();

        this.jump();

        this.applyGravity();

        this.moveHorizontal();

        this.moveVertical();

        this.worldLimits();

        this.animate();

    }

}