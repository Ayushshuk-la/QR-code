let theme= window.localStorage.getItem('theme');

let buttons= document.getElementsByClassName('theme-change')
for (let i of buttons){i.addEventListener('click',function() {let theme= this.dataset.theme ;
  console.log(theme);
  SetTheme(theme) ;
})}

function SetTheme(theme) {
    if (theme=='theme1') {document.getElementById('changer').href='./theme1.css';  
}
  else if (theme=='theme2') {document.getElementById('changer').href='./theme2.css';  
} 
else if (theme=='theme3') {document.getElementById('changer').href='./theme3.css';
}
}