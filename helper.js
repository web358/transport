// ako e li za btns dava index -1 !!! tr da e naj-vutre6noto koeto se natiska
let close = document.querySelector('.closebtn')
let btns = Array.from(document.querySelectorAll('li')).slice(0, 6) 
   let table = Array.from(document.querySelectorAll('.overlay-content a')).slice(0, 6)
   btns.forEach(x => x.addEventListener('click', show))
  function show(e){
    document.querySelector('#h1').style.filter = 'blur(4px)'
    document.querySelectorAll('.h2').forEach(x => x.style.filter = 'blur(4px)')
    document.querySelector('.th2').style.filter = 'blur(4px)'
    close.addEventListener('click', closeNav) // !!! ako tova e izvun funkciata show posle dava za closeNav undefined
    document.getElementById("myNav").style.height = "70%"; 
    let i = btns.indexOf(e.target)
    if(i !== -1){
      table[i].style.display = 'block'
      btns.forEach(x => x.removeEventListener('click', show))
    }
    function closeNav() {
      document.querySelector('#h1').style.filter = 'blur(0px)'
      document.querySelectorAll('.h2').forEach(x => x.style.filter = 'blur(0px)')
      document.querySelector('.th2').style.filter = 'blur(0px)'
  document.getElementById("myNav").style.height = "0%";
  table[i].style.display = 'none'
  btns.forEach(x => x.addEventListener('click', show))
}
  }

  
  