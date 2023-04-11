// coordinate = []
// function lvl1() {
// // enemy
// var enemyCollection = document.getElementsByClassName("enemy")
// var enemyArray = Array.from(enemyCollection)
// var rand1 = Math.floor(Math.random() * enemyArray.length);
// // var rand2 = Math.floor(Math.random() * enemyArray.length);
// // var rand3 = Math.floor(Math.random() * enemyArray.length);
// // var rand4 = Math.floor(Math.random() * enemyArray.length);
// coordinate = enemyArray[rand1].getBoundingClientRect()
// // let c2 = enemyArray[rand1].getBoundingClientRect()
// // let c3 = enemyArray[rand1].getBoundingClientRect()
// // let c4 = enemyArray[rand1].getBoundingClientRect()
// enemyArray[rand1].style.opacity = ".99";
// enemyArray[rand1].style.animation = "enemy_anim 50s infinite";
// // enemyArray[rand2].style.opacity = ".99";
// // enemyArray[rand2].style.animation = "enemy_anim 5s infinite";
// // enemyArray[rand3].style.opacity = ".99";
// // enemyArray[rand3].style.animation = "enemy_anim 5s infinite";
// // enemyArray[rand4].style.opacity = ".99";
// // enemyArray[rand4].style.animation = "enemy_anim 5s infinite";

// setTimeout(function() {
//   enemyArray[rand1].style.opacity = ".0";
//   enemyArray[rand1].style.animation = "none";
//   // enemyArray[rand2].style.opacity = ".0";
//   // enemyArray[rand2].style.animation = "none";
//   // enemyArray[rand3].style.opacity = ".0";
//   // enemyArray[rand3].style.animation = "none";
//   // enemyArray[rand4].style.opacity = ".0";
//   // enemyArray[rand4].style.animation = "none";
// }, 30000);
// }



function startFunction() {
  alert('Гра розпочата!')
  var enemyCollection = document.getElementsByClassName("enemy")
  var enemyArray = Array.from(enemyCollection)
  var rand1 = Math.floor(Math.random() * enemyArray.length);
  var up_low = 0

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
          console.log(left)
          document.getElementById("jwst").style.marginLeft = left + "%";
        } else {
          left = 85
        }
        
      }
  })
  }
  // enemy control
 enemyArray[rand1].style.opacity = ".99";
    Interval = setInterval (function() {
        up_low += 0.1
        enemyArray[rand1].style.marginTop = up_low + "%";
        var styleLeftEnemy= getComputedStyle(enemyArray[rand1]);
        var enemyLeft = parseInt(styleLeftEnemy.marginLeft);
        var styleLeftJWST= getComputedStyle(document.getElementById("jwst"));
        var jwstLeft = parseInt(styleLeftJWST.marginLeft);
        console.log(jwstLeft)

        console.log(enemyLeft)
        if (up_low > 40) {
          if (jwstLeft < enemyLeft) {
            console.log('Damage!')
            enemyArray[rand1].style.opacity = ".0";
            enemyArray[rand1].style.marginTop = "0"
            clearInterval(Interval)
          } 
  }
    }, 10); 

  // do {
   

  //   } while (up <= 60 && up)
  //   setTimeout(function() {
  //     enemyArray[rand1].style.opacity = ".0";
  //     enemyArray[rand1].style.marginTop = "0"
  //   }, 3000);

  // damage
 
}