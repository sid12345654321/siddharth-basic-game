const score0=document.querySelector('#score-0');
const score1=document.querySelector('#score-1');
const dice=document.querySelector('.dice');
const newbtn=document.querySelector('.btn-new');
const rolbtn=document.querySelector('.btn-rol');
const holdbtn=document.querySelector('.btn-hold');
let curScore0el=document.querySelector('#curScore-0');
let curScore1el=document.querySelector('#curScore-1');
let player0el=document.querySelector('.player--0');
let player1el=document.querySelector('.player--1');
 score0.textContent='0';
 score1.textContent=0;
 let scores=[0,0];
dice?.classList.add('hidden');
let curscore0=0;
let activeplayer=0;
let playing=true;
 
const switchplayer=function(){
   document.getElementById(`curScore-${activeplayer}`).textContent=0;
    curscore0=0;
    activeplayer=activeplayer===0?1:0;
    player0el.classList.toggle('player-active');
    player1el.classList.toggle('player-active');
}



rolbtn?.addEventListener('click',function(){
   if(playing){
 let diceop=Math.trunc(Math.random()*6)+1;
 dice?.classList.remove('hidden');
 dice.src=`dice-${diceop}.png`;
 console.log(diceop);
 if(diceop!==1){
curscore0+=diceop;
document.getElementById(`curScore-${activeplayer}`).textContent=curscore0;

 }else{
    switchplayer();  
 }}
});


holdbtn?.addEventListener('click',function(){
   if(playing){
   scores[activeplayer]+=curscore0;
   document.getElementById(`score-${activeplayer}`).textContent=scores[activeplayer];
  
   if(scores[activeplayer]>=100){
      playing=false;
      dice?.classList.add('hidden');
      document.querySelector(`.player--${activeplayer}`)?.classList.add('winner-class');
      document.querySelector(`.player--${activeplayer}`)?.classList.remove('player-active')
   }else{
   switchplayer();
   }}
});

newbtn?.addEventListener('click',function(){
   player0el.classList.remove('winner-class');
    player1el.classList.remove('winner-class');
    scores=[0,0];
    curscore0=0;
    score0.textContent=0;
    score1.textContent=0;
    curScore0el.textContent=0;
    curScore1el.textContent=0;
    player0el.classList.add('player-active');
    player1el.classList.remove('player-active');
    activeplayer=0;

});