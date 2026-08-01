const background = new Image();
background.src = level.background;

background.onload = () => {

    // El mundo tendrá el mismo tamaño que la imagen
    level.world.width = background.width;
    level.world.height = background.height;

    console.log(
        "Tamaño del mundo:",
        level.world.width,
        level.world.height
    );

    // Iniciar el juego cuando la imagen ya cargó
    gameLoop();

};

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

//----------------------
// Crear jugador y cámara
//----------------------

const player = new Player();
const camera = new Camera();

//----------------------
// UPDATE
//----------------------

function update(){

    player.update();

    camera.update(player);

}

//----------------------
// mostar en pantalla
//----------------------

function drawPlatforms(){

    if(!level.showPlatforms) return;

    for(const p of level.platforms){

        ctx.fillStyle = "rgba(255,0,0,0.35)";

        ctx.fillRect(

            p.x,
            p.y,
            p.width,
            p.height

        );

        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        ctx.strokeRect(

            p.x,
            p.y,
            p.width,
            p.height

        );

        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.fillText(
            p.name,
            p.x + 5,
            p.y - 8
        );
    }

}

function draw(){

    // Limpiar pantalla
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Activar cámara
    ctx.save();

    // Aplicar zoom
    ctx.scale(camera.zoom, camera.zoom);
    
    // Mover la cámara
    ctx.translate(-camera.x, -camera.y);

    
    if(background.complete){

        ctx.drawImage(
            background,
            0,
            0,
            background.width,
            background.height
        );
    
    }

    drawPlatforms();

    //----------------------
    // Personaje
    //----------------------

    player.draw(ctx);

    // Desactivar cámara
    ctx.restore();

}

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}