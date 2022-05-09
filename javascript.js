//inverser de couleur du boutton

let bouton = document.getElementsByClassName('inverse');

console.log(bouton);

for (let i = 0; i < bouton.length; i++) {
    bouton[i].addEventListener('mouseover',()=>{
        bouton[i].style.backgroundColor='#b11313';
        bouton[i].style.color='white';
        bouton[i].style.boxShadow='5px 5px 30px white';
        bouton[i].style.transform='scale(1.1,1.1)';
    });
    bouton[i].addEventListener('mouseout',()=>{
        bouton[i].style.backgroundColor='white';
        bouton[i].style.color='#b11313';
        bouton[i].style.boxShadow='none';
        bouton[i].style.transition='all 0.7s';
    });
}

let bouton1 = document.getElementById('inversser');

console.log(bouton1);

bouton1.addEventListener('mouseover',()=>{
bouton1.style.backgroundColor='#b11313';
bouton1.style.color='white';
bouton1.style.boxShadow='5px 5px 30px white';
bouton1.style.transform='scale(1.1,1.1)';
});
bouton1.addEventListener('mouseout',()=>{
    bouton1.style.backgroundColor='unset';
    bouton1.style.color='white';
    bouton1.style.boxShadow='none';
    bouton1.style.transition='all 0.7s';
});
