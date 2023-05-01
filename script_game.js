var hp = 3;
let score = 0;
var styleLeftJWST = getComputedStyle(document.getElementById("jwst"));
var jwstLeft = parseInt(styleLeftJWST.marginLeft);

var Interval = [];

function enemySpawn() {

  // 
  let enemyProg = document.createElement("img");
  enemyProg.setAttribute("src", "assets/meteorite.png");
  
  enemyProg.setAttribute("class", "enemy");
  document.getElementById("enemy_spawn");
  let enemy_spawn = document.getElementById("enemy_spawn");
  enemy_spawn.append(enemyProg);

  var enemyCollection = document.getElementsByClassName("enemy");
  var enemyArray = Array.from(enemyCollection);
  var rand1 = Math.floor(Math.random() * enemyArray.length);

  var enemyUp = 0;
  enemyProg.style.marginTop = "0";
  enemyProg.style.marginLeft = Math.floor(Math.random() * 100) + "%";
  enemyProg.style.opacity = ".99";

  Interval = setInterval(function () {
    enemyUp += 0.1;
    enemyProg.style.marginTop = enemyUp + "%";

    enemyCollison(enemyProg);

    if (enemyUp > 60) {
      enemyProg.remove();
      clearInterval(Interval);
      enemySpawn();
      score +=1
      document.getElementById("score").innerHTML = score;
    }
  }, 10);
}

function enemyCollison(enemyProg) {
  //
  //var N = jwstLeft + 150;
  //const jwstHitbox = [...Array(N + 1).keys()].slice(jwstLeft);

  jwstRight = jwstLeft + 150;
  
  let enemyLeft = parseInt(getComputedStyle(enemyProg).marginLeft)
  let enemyUp = parseInt(getComputedStyle(enemyProg).marginTop)

  console.log(enemyLeft)
    let enemyWidth = parseInt(getComputedStyle(enemyProg).width)
  if (
    enemyUp > 40 &&
    jwstLeft < enemyLeft + enemyWidth &&
    enemyLeft < jwstLeft + 150
  ) {
    console.log("enemyLeft " + enemyLeft);
    console.log("jwstLeft! " + jwstLeft);

    console.log("Damage!");
    enemyProg.remove();
    clearInterval(Interval);
    enemySpawn();
         hp -= 1;
         document.getElementById("hp").innerHTML = hp;
    //     clearInterval(Interval);
    //     enemySpawn();
      } 
  
}

// enemySpawn();
// jwstControl

function startFunction() {
  // alert('Гра розпочата!')

  // player control
  enemySpawn();
  jwstControl();

  // setInterval(function() {
  // enemySpawn()
  // }, 3000);

  // do {

  // } while (up <= 60 && up)
  // setTimeout(function() {
  //     enemyArray[rand1].style.opacity = ".0";
  //     enemyArray[rand1].style.marginTop = "0"
  // }, 3000);
}

function jwstControl() {
  var hp = 3;
  var left = 45;
  document.getElementById("hp").innerHTML = hp;
  if (left < 90) {
    document.addEventListener("keydown", function (event) {
      if (event.code == "KeyA") {
        left -= 5;
        if (left > 4) {
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 5;
        }
      } else if (event.code == "KeyD") {
        left += 5;
        if (left < 86) {
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 85;
        }
        
      }
    });
  }

  // enemy control
 
}
