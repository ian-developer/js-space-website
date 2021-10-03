
//postavlja fixed header
window.onscroll = function() {
    setSticky()
}
var header = document.getElementById("main")
var sticky = header.offsetTop

function setSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
}

//otvara/zatvara navigaciju
document.getElementById("hamb").addEventListener('click', function openNav() {
    document.getElementById("myNav").style.height = "60px"
    document.getElementById('closebtn-box').style.visibility = 'visible'
  })
document.getElementById("closebtn-box").addEventListener('click',function closeNav() {
    document.getElementById("myNav").style.height = "0%"
    document.getElementById('closebtn-box').style.visibility = 'hidden'
  })