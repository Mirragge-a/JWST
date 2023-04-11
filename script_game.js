
function startFunction() {
  alert('Гра розпочата!')
  var enemyCollection = document.getElementsByClassName("enemy")
  var enemyArray = Array.from(enemyCollection)
  var rand1 = Math.floor(Math.random() * enemyArray.length);
  var rand2 = Math.floor(Math.random() * enemyArray.length);
  var rand3 = Math.floor(Math.random() * enemyArray.length);
  var rand4 = Math.floor(Math.random() * enemyArray.length);
  var up_low = 0
  var hp = 3

  // player control
  var left=45
  document.getElementById('hp').innerHTML = hp;
  

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
 enemyArray[rand2].style.opacity = ".99";
 enemyArray[rand3].style.opacity = ".99";
 enemyArray[rand4].style.opacity = ".99";
    Interval = setInterval (function() {
        up_low += 0.1
        enemyArray[rand1].style.marginTop = up_low + "%";
        enemyArray[rand2].style.marginTop = up_low + "%";
        enemyArray[rand3].style.marginTop = up_low + "%";
        enemyArray[rand4].style.marginTop = up_low + "%";
        var styleLeftEnemy1 = getComputedStyle(enemyArray[rand1]);
        var enemyLeft1 = parseInt(styleLeftEnemy1.marginLeft);
        var styleLeftEnemy2 = getComputedStyle(enemyArray[rand2]);
        var enemyLeft2 = parseInt(styleLeftEnemy2.marginLeft);
        var styleLeftEnemy3 = getComputedStyle(enemyArray[rand3]);
        var enemyLeft3 = parseInt(styleLeftEnemy3.marginLeft);
        var styleLeftEnemy4 = getComputedStyle(enemyArray[rand4]);
        var enemyLeft4 = parseInt(styleLeftEnemy4.marginLeft);
        var styleLeftJWST= getComputedStyle(document.getElementById("jwst"));
        var jwstLeft = parseInt(styleLeftJWST.marginLeft);

        if (up_low > 40) {
          var N =  (jwstLeft + 150)
          const jwstHitbox = [...Array(N+1).keys()].slice(jwstLeft);
          
          console.log(jwstHitbox)
          if ((jwstHitbox.includes(enemyLeft1) == true) || (jwstHitbox.includes(enemyLeft2) == true) || (jwstHitbox.includes(enemyLeft3) == true) || (jwstHitbox.includes(enemyLeft4) == true)) {
            console.log('Damage!')
            enemyArray[rand1].style.opacity = ".0";
            enemyArray[rand1].style.marginTop = "0"
            enemyArray[rand2].style.opacity = ".0";
            enemyArray[rand2].style.marginTop = "0"
            enemyArray[rand3].style.opacity = ".0";
            enemyArray[rand3].style.marginTop = "0"
            enemyArray[rand4].style.opacity = ".0";
            enemyArray[rand4].style.marginTop = "0"
            hp -= 1
            document.getElementById('hp').innerHTML = hp;
            clearInterval(Interval)
            if (hp == 0) {
              alert('Гра завершена! Ви програли.')
              return;
            }
          } else if (up_low > 60) {
            enemyArray[rand1].style.opacity = ".0";
            console.log('Hi')
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