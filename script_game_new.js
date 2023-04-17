var hp = 3
var enemyUp = 0
var enemyLeft = []
var jwstLeft = parseInt(getComputedStyle(document.getElementById("jwst")).marginLeft);
console.log(jwstLeft)

var Interval = []

function enemySpawn() {
    let enemyProg = document.createElement("img");
    enemyProg.setAttribute("src", "assets/meteorite.png");
    
    enemyProg.setAttribute("class", "enemy");
    document.getElementById("enemy_spawn");
    let enemy_spawn = document.getElementById("enemy_spawn");
    enemy_spawn.append(enemyProg);

    let enemyLeftPx = parseInt(getComputedStyle(enemyProg).marginLeft);

    enemyProg.style.opacity = ".99";
    enemyLeft = enemyProg.style.marginLeft = Math.floor(Math.random() * 100) + "%";
    enemyProg.style.marginTop = "0"

    Interval = setInterval(function () {
        enemyUp += 0.1
        enemyProg.style.marginTop = enemyUp + "%";
        if (enemyUp >= 40) {
          enemyControl(enemyLeftPx)
        }
      
        if (enemyUp > 60) {
            enemyProg.style.opacity = ".0";

          clearInterval(Interval)
        }



    }, 10);

   

}

function enemyControl(enemyLeftPx) {
        var N = (jwstLeft + 150)
        const jwstHitbox = [...Array(N + 1).keys()].slice(jwstLeft);
        console.log(enemyLeftPx)
        console.log(jwstHitbox)
        if ((jwstHitbox.includes(enemyLeftPx) == true) ) {
            console.log('Damage!')

            enemyProg.remove();
            clearInterval(Interval);
            hp -= 1;
            document.getElementById('hp').innerHTML = hp;
            clearInterval(Interval)
        }
           

        

    
}
function startFunction() {
    document.getElementById("hp").innerHTML = hp;
    enemySpawn();
    jwstControl();

    if (hp == 0) {
        alert('Гра завершена! Ви програли.')
        return;
    }
}

function jwstControl() {
    var left = enemyUp
    if (left < 90) {
        document.addEventListener('keydown', function (event) {
            if ((event.code == 'KeyA')) {
                left -= 5
                if (left > 4) {
                    document.getElementById("jwst").style.marginLeft = left + "%";
                } else {
                    left = 5
                }
            } else if (event.code == 'KeyD') {
                left += 5
                if (left < 86) {
                    document.getElementById("jwst").style.marginLeft = left + "%";
                } else {
                    left = 85
                }

            }
        })
    }
}

