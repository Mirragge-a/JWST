var hp = 3;
let score = 0;
var enemyUp = 0;
var speed = 0.12

function enemySpawn() {
  document.getElementById("hp").innerHTML = hp + '❤';
  document.getElementById("score").innerHTML = score + '🥇';
  if (hp == 0) {
    alert('Гра завершена. Ви програли!')
    clearInterval(Interval);
    enemyProg.remove();
    return;
  }
  let enemyProg = document.createElement("img");
  enemyProg.setAttribute("src", "assets/meteorite.png");
  
  enemyProg.setAttribute("class", "enemy");
  document.getElementById("enemy_spawn");
  let enemy_spawn = document.getElementById("enemy_spawn");
  enemy_spawn.append(enemyProg);


  enemyProg.style.marginTop = "0";

  enemyProg.style.marginLeft = Math.floor(Math.random() * 100) + "%";
  enemyProg.style.opacity = ".99";
  
  Interval = setInterval(function () {
    enemyLeft = parseInt(getComputedStyle(enemyProg).marginLeft)
    enemyUp += speed;
    enemyProg.style.marginTop = enemyUp + "%";
    var styleLeftJWST = getComputedStyle(document.getElementById("jwst"));
    var jwstLeft = parseInt(styleLeftJWST.marginLeft);

      var L = (jwstLeft - 30)
      var N = (jwstLeft + 130)
      const jwstHitbox = [...Array(N + 1).keys()].slice(L); 


    if (enemyUp >= 40) {
      if (jwstHitbox.includes(enemyLeft) == true) {
          console.log("Damage!");
          enemyProg.remove();
          enemyUp = 0;
          speed += 0.03
          clearInterval(Interval);
          hp -= 1;
          enemySpawn();
    }

    }
    if (enemyUp >= 60) {
      enemyProg.remove();
      clearInterval(Interval);
      enemyUp = 0;
      score += 1;
      enemySpawn();
      speed += 0.03
    } 
  }, 10);
}

// function enemyCollison(enemyProg) {
//   //
//   //var N = jwstLeft + 150;
//   //const jwstHitbox = [...Array(N + 1).keys()].slice(jwstLeft);

//   jwstRight = jwstLeft + 150;
  
//   let enemyLeft = parseInt(getComputedStyle(enemyProg).marginLeft)



//   console.log(enemyLeft)
//     let enemyWidth = parseInt(getComputedStyle(enemyProg).width)
//   if (
//     enemyUp > 40 )
//     if (
//     jwstLeft < enemyLeft + enemyWidth &&
//     enemyLeft < jwstLeft + 150
//   ) {
//     console.log("enemyLeft " + enemyLeft);
//     console.log("jwstLeft! " + jwstLeft);

//     console.log("Damage!");
//     enemyProg.remove();
//     clearInterval(Interval);
//     enemySpawn();
//          hp -= 1;
//          document.getElementById("hp").innerHTML = hp;
//     //     clearInterval(Interval);
//     //     enemySpawn();
//       } 
  
// }

// enemySpawn();
// jwstControl

function startFunction() {
  enemySpawn();
  jwstControl();
}

function jwstControl() {
  var left = 45;
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
