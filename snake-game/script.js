let canvas = document.getElementById("snake"); //cria o elemento onde rodará o jogo;
let context = canvas.getContext("2d"); //Sinaliza plano do jogo como 2D;
let box = 32; // Tamanho do box(plano de fundo);

//cria a cobrinha como array. As coordenadas, quando coloridas, dará a sensação de movimento;
let snake = [];
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

//Variável que cria a direção inicial da cobrinha
let direction = "right";


let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let score = 0; // Seta o score do jogo.

//Criando o background do jogo.
function criarBG(){
    context.fillStyle = "lightgreen"; // cor do backgroung do canvas
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo(plano cartesiano) usando x e y e a largura e altura setadas
}

//Criando a cobrinha.
function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "black"; // cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box); // tamanho da cobrinha
    }
}

function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//quando um evento acontece, vai detectar e chamar a função
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

//Função que inicializa o jogo
function iniciarJogo(){    

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; // definino o ponto de partida na posição x;
    let snakeY = snake[0].y; // definindo o ponto de partida na posição y;

    if(direction == "right") snakeX += box; // adiciona um quadradinho do lado direito, dando a ilusão de movimento
    if(direction == "left") snakeX -= box; // retira um quadeadinho do lado esquerdo, dando a ilusão de movimento
    if (direction == "up") snakeY -= box; // retira um quadradinho do lado superior, dando a ilusão de movimento
    if(direction == "down") snakeY += box; // adiciona um quadradinho do lado inferior, dando a ilusão de movimento

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop retira o último elemento do array;
    }
    else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
        score ++;
        document.getElementById('score').innerHTML = score;
    }
    
    // variável para add a cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona uma nova "cabeça" na cobrinha
    
    }

let jogo = setInterval(iniciarJogo, 150); // re-inicializa o jogo a cada 150 milisegundos;
