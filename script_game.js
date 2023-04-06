
function startFunction() {
  alert('Гра розпочата!')
  // enemy
  
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
  } else if(left = 1500){
    document.getElementById("jwst").style.marginLeft = "1499px";
  }
}