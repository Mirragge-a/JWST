function lvl1() {
// enemy
var enemyCollection = document.getElementsByClassName("enemy")
var enemyArray = Array.from(enemyCollection)
var rand1 = Math.floor(Math.random() * enemyArray.length);
var rand2 = Math.floor(Math.random() * enemyArray.length);
var rand3 = Math.floor(Math.random() * enemyArray.length);
var rand4 = Math.floor(Math.random() * enemyArray.length);
enemyArray[rand1].style.opacity = ".99";
enemyArray[rand1].style.animation = "enemy_anim 5s infinite";
enemyArray[rand2].style.opacity = ".99";
enemyArray[rand2].style.animation = "enemy_anim 5s infinite";
enemyArray[rand3].style.opacity = ".99";
enemyArray[rand3].style.animation = "enemy_anim 5s infinite";
enemyArray[rand4].style.opacity = ".99";
enemyArray[rand4].style.animation = "enemy_anim 5s infinite";

setTimeout(function() {
  enemyArray[rand1].style.opacity = ".0";
  enemyArray[rand1].style.animation = "none";
  enemyArray[rand2].style.opacity = ".0";
  enemyArray[rand2].style.animation = "none";
  enemyArray[rand3].style.opacity = ".0";
  enemyArray[rand3].style.animation = "none";
  enemyArray[rand4].style.opacity = ".0";
  enemyArray[rand4].style.animation = "none";
}, 3000);
}

function lvl2() {
  // enemy
  var enemyCollection = document.getElementsByClassName("enemy")
  var enemyArray = Array.from(enemyCollection)
  var rand1 = Math.floor(Math.random() * enemyArray.length);
  var rand2 = Math.floor(Math.random() * enemyArray.length);
  var rand3 = Math.floor(Math.random() * enemyArray.length);
  var rand4 = Math.floor(Math.random() * enemyArray.length);
  var rand5 = Math.floor(Math.random() * enemyArray.length);
  enemyArray[rand1].style.opacity = ".99";
  enemyArray[rand1].style.animation = "enemy_anim 4s infinite";
  enemyArray[rand2].style.opacity = ".99";
  enemyArray[rand2].style.animation = "enemy_anim 4s infinite";
  enemyArray[rand3].style.opacity = ".99";
  enemyArray[rand3].style.animation = "enemy_anim 4s infinite";
  enemyArray[rand4].style.opacity = ".99";
  enemyArray[rand4].style.animation = "enemy_anim 4s infinite";
  enemyArray[rand5].style.opacity = ".99";
  enemyArray[rand5].style.animation = "enemy_anim 4s infinite";
  
  setTimeout(function() {
    enemyArray[rand1].style.opacity = ".0";
    enemyArray[rand1].style.animation = "none";
    enemyArray[rand2].style.opacity = ".0";
    enemyArray[rand2].style.animation = "none";
    enemyArray[rand3].style.opacity = ".0";
    enemyArray[rand3].style.animation = "none";
    enemyArray[rand4].style.opacity = ".0";
    enemyArray[rand4].style.animation = "none";
    enemyArray[rand5].style.opacity = ".0";
    enemyArray[rand5].style.animation = "none";
  }, 2500);
  }


function startFunction() {
  alert('Гра розпочата!')
  lvl1()
  setTimeout(function() {
    lvl1()
  }, 3500);
  setTimeout(function() {
    lvl1()
  }, 7000);
  setTimeout(function() {
    lvl1()
  }, 10500);
  setTimeout(function() {
    lvl2()
  }, 13500);
  // setTimeout(function() {
  //   lvl2()
  // }, 15500);
  // setTimeout(function() {
  //   lvl2()
  // }, 18000);

  // do {
  //   up += 1
  //   up_jwst -= 1
  //   enemyArray[rand1].style.opacity = ".99";
  //   enemyArray[rand2].style.opacity = ".99";
  //   enemyArray[rand3].style.opacity = ".99";
  //   enemyArray[rand4].style.opacity = ".99";
  //   document.getElementById("jwst").style.marginTop = up_jwst  + "%"
  //   } while (up <= 45 && up)
  // damage

  // if 
  // player control
  var left=45

  if(left < 90) {
    document.addEventListener('keydown', function(event) {
    if ((event.code == 'KeyA')) {
        left -= 5
        if(left > 4) {
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 5
        }
    } else if (event.code == 'KeyD') {
        left += 5
        if(left < 86) {
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 85
        }
        
      }
  })
  }
}