
let images = ['images/cotp1.jpg', 'images/cotp2.jpg',  'images/cotp3.jpg', 'images/cotp4.jpg', 'images/cotp5.jpg',  'images/cotp6.jpg', 'images/dm1.jpg', 'images/dm2.jpg', 'images/dm3.jpg', 'images/dm4.jpg', 'images/dm5.jpg', 'images/eotm1.jpg', 'images/eotm2.jpg', 'images/eotm3.jpg', 'images/f71.jpg', 'images/f72.jpg', 'images/f73.jpg', 'images/f74.jpg', 'images/f75.jpg', 'images/kos1.jpg', 'images/kos2.jpg', 'images/kos3.jpg', 'images/kos4.jpg' , 'images/kos5.jpg', 'images/kos6.jpg', 'images/lobg1.jpg', 'images/lobg2.jpg', 'images/lobg3.jpg', 'images/lobg4.jpg', 'images/lobg5.jpg', 'images/los1.jpg', 'images/los2.jpg', 'images/pots1.jpg', 'images/pots2.jpg', 'images/pots3.jpg', 'images/pots4.jpg', 'images/rrt1.jpg', 'images/rrt2.jpg', 'images/rrt3.jpg', 'images/rrt4.jpg', 'images/rrt5.jpg', 'images/rrt6.jpg', 'images/rss1.jpg', 'images/rss2.jpg', 'images/rss3.jpg', 'images/rss4.jpg', 'images/rss5.jpg', 'images/tatp1.jpg', 'images/tatp2.jpg', 'images/tatp3.jpg', 'images/tatp4.jpg', 'images/tatp5.jpg', 'images/tatp6.jpg', 'images/tbe1.jpg', 'images/tbe2.jpg', 'images/tbe3.jpg', 'images/tbe4.jpg', 'images/tbi1.jpg', 'images/tbi2.jpg', 'images/tbl1.jpg', 'images/tbl2.jpg', 'images/tbl3.jpg', 'images/tbl4.jpg', 'images/tbl5.jpg', 'images/tbl6.jpg', 'images/tbl7.jpg', 'images/tca1.jpg', 'images/tca2.jpg', 'images/tca3.jpg', 'images/tca4.jpg', 'images/tca5.jpg', 'images/tca6.jpg','images/tce1.jpg', 'images/tce2.jpg', 'images/tce3.jpg', 'images/tce4.jpg', 'images/tcwtgc1.jpg', 'images/tcwtgc2.jpg', 'images/tcwtgc3.jpg', 'images/tcwtgc4.jpg', 'images/tcwtgc5.jpg','images/tia1.jpg', 'images/tia2.jpg', 'images/tia3.jpg', 'images/tia4.jpg', 'images/tia5.jpg', 'images/tit1.jpg', 'images/tit2.jpg', 'images/tit3.jpg', 'images/tit4.jpg', 'images/tscb1.jpg', 'images/tscb2.jpg', 'images/tscb3.jpg', 'images/tscb4.jpg', 'images/tsotu1.jpg', 'images/tsotu2.jpg', 'images/tsotu3.jpg', 'images/tsotu4.jpg', 'images/tsotu5.jpg', 'images/tss1.jpg', 'images/tss2.jpg', 'images/tss3.jpg', 'images/tss4.jpg', ]

let book
let dig
//changePicture()
let rightAnswers = 0
let wrongAnswers = 0
document.getElementById('pictureHolder').style.display = 'none';
document.getElementById('next').style.display = 'none';
//document.getElementById('skipBtn').style.display = 'none';
document.getElementById('skip').style.display = 'none';
document.getElementById('reStart').style.display = 'none';
document.getElementById('score1').style.display = 'none';
document.getElementById('score2').style.display = 'none';

function changePicture(){
    dig = Math.floor(Math.random() * (91 - 0 + 1) + 0)
    document.getElementById('pictureHolder').innerHTML = `<img src= ${images[dig]} height = 100% ><div class="text-block" id ="tickOrNo"></div>   `
    document.getElementById('tickOrNo').style.display = 'none';
    //document.getElementById('skipBtn').style.display = 'block';
    document.getElementById('skip').style.display = 'block';
    //console.log(dig)
}

function rightAnswer(data){
   //console.log(data +  " is the right answer")
    document.getElementById('tickOrNo').style.display = 'block';
    document.getElementById('tickOrNo').innerHTML = `${data}`
    document.getElementById('next').style.display = 'block';
    //document.getElementById('skipBtn').style.display = 'none';
    document.getElementById('skip').style.display = 'none';
    document.querySelectorAll('button.bookButton').forEach(elem => {
    elem.disabled = true;});
    rightAnswers+=1;
    let percent = (rightAnswers/10)*100
    //console.log(percent)
   document.getElementById('correctHealth').innerHTML = `<div class ="health-bar-outer">
                    <div class="goodhealth-bar-inner " 
                            style="width:${percent}%">
                    </div>
                </div>`   
                   
      
    document.getElementById('correctAnswers').innerHTML = `Correct Answers/10 : ${rightAnswers}`
    if (rightAnswers == 10){
        //console.log("the end - you win!")
        reStart.style.display = 'block'
        nextBtn.style.display= 'none';
        pictureHolder.style.display = 'none'
        document.getElementById('buttons').innerHTML = `<p2>the end, you won!</p2>`
    }
    
}

function wrongAnswer(){
    pictureHolder.style.filter='grayscale(100%)'
    document.getElementById('tickOrNo').style.display = 'block';
    document.getElementById('tickOrNo').innerHTML = `Wrong answer!`
    document.getElementById('next').style.display = 'block';
   document.getElementById('skip').style.display = 'none';
   //document.getElementById('skipBtn').style.display = 'none';
   document.querySelectorAll('button.bookButton').forEach(elem => {
    elem.disabled = true;});
    wrongAnswers+=1;
    let percent = (wrongAnswers/5)*100
    //console.log(percent)
   document.getElementById('badHealth').innerHTML = `<div class ="health-bar-outer">
                    <div class="badhealth-bar-inner " 
                            style="width:${percent}%">
                    </div>
                </div>`   
    
    document.getElementById('wrongAnswers').innerHTML = `Wrong Answers/5 : ${wrongAnswers}`
    if (wrongAnswers == 5){

        reStart.style.display = 'block'
        pictureHolder.style.display = 'none'
        document.getElementById('buttons').innerHTML = `<p2>you lost!</p2>`
        nextBtn.style.display= 'none';
    }
}


start.addEventListener("click", function(){
    firstTitle.style.display = 'none'
    pictureHolder.style.display= 'block';
    start.style.display = 'none';
    score1.style.display = 'block';
     score2.style.display = 'block';
    changePicture()
    //console.log(dig)
    //document.getElementById('skipBtn').style.display = 'block';
    document.getElementById('skip').style.display = 'block';
    })

skip.addEventListener("click", function(){
    
    //pictureHolder.style.display= 'block';
    //start.style.display = 'none';
    changePicture()
    //console.log(dig)
    //document.getElementById('skip').style.display = 'block';
    })

next.addEventListener("click", function(){
    //pictureHolder.style.display= 'block';
    //start.style.display = 'none';
    changePicture()
    //console.log(dig)
    pictureHolder.style.filter='grayscale(0%)'
    document.querySelectorAll('button.bookButton').forEach(elem => {
    elem.disabled = false;});
    next.style.display = 'none'

    //document.getElementById('skip').style.display = 'block';
    })



cotp.addEventListener("click", function(){
    if (dig < 6) {
    rightAnswer('Cigars of the Pharoh')
    
    } else {
        wrongAnswer()
        //console.log("incorrect")
    }
});
dm.addEventListener("click", function(){
    if ( dig > 5 && dig < 11){
        rightAnswer('Destination Moon')
        
} else {
    wrongAnswer()
        
    }
})
eotm.addEventListener("click", function(){
    rightAnswer('Explorers on the Moon')
    if ( dig > 10 && dig < 13){
        
} else {
    wrongAnswer()
        
    }
})
f7.addEventListener("click", function(){
    if ( dig > 13 && dig < 19){
        rightAnswer("Flight 714")
        
} else {
    wrongAnswer()
        
    }
})
kos.addEventListener("click", function(){
    if ( dig > 18 && dig < 25){
        rightAnswer('King ottakars Sceptre')
        
} else {
    wrongAnswer()
        
    }
})
lobg.addEventListener("click", function(){
    if ( dig > 24 && dig < 30){
        
         rightAnswer('Land of Black Gold')
} else {
    wrongAnswer()
        
    }
})
los.addEventListener("click", function(){
    if ( dig > 29 && dig < 32){
        
         rightAnswer('Lake of Sharks')
} else {
    wrongAnswer()
        
    }
})
pots.addEventListener("click", function(){
    if ( dig > 31 && dig < 36){
        
        rightAnswer('Prisoners of the Sun')
} else {
    wrongAnswer()
        
    }
})

rrt.addEventListener("click", function(){
    if ( dig > 35 && dig < 42){
        
        rightAnswer("Red Rackham's Teasure")
} else {
    wrongAnswer()
        
    }
})
rss.addEventListener("click", function(){
    if ( dig > 41 && dig < 47){
        
        rightAnswer("Red Sea Sharks")
} else {
    wrongAnswer()
        
    }
})

tatp.addEventListener("click", function(){
    if ( dig > 46 && dig < 53){
        
        rightAnswer('Tintin and the Picaros')
} else {
    wrongAnswer()  
    }
})
tbe.addEventListener("click", function(){
    if ( dig > 52 && dig < 57){
        rightAnswer('The Broken Ear')
        
} else {
    wrongAnswer()
        
    }
})
tbi.addEventListener("click", function(){
    if ( dig > 56 && dig < 59){
        rightAnswer('The Black Island')
        
} else {
    wrongAnswer()
        
    }
})
tbl.addEventListener("click", function(){
    if ( dig > 58 && dig < 66){
        
        rightAnswer("The Blue Lotus")
} else {
    wrongAnswer() 
    }
})
tca.addEventListener("click", function(){
    if ( dig > 65 && dig < 72){
        rightAnswer('The Calculus Affair')
} else {
    wrongAnswer()
    }
})
tce.addEventListener("click", function(){
    if ( dig > 71 && dig < 76){
        rightAnswer('The Castiafore Emerald')
} else {
    wrongAnswer()
    }
})

cwtgc.addEventListener("click", function(){
    if ( dig > 75 && dig < 81){
        rightAnswer('The Crab with the Golden Claws')
} else {
    wrongAnswer()
    }
})
tia.addEventListener("click", function(){
    if ( dig > 80 && dig < 86){
        rightAnswer("Tintin in America")
        
} else {
    wrongAnswer()
        
    }
})
tit.addEventListener("click", function(){
    if ( dig > 85 && dig < 90){
        rightAnswer("Tintin in Tibet")
        
} else {
    wrongAnswer()
        
    }
})

tscb.addEventListener("click", function(){
    if ( dig > 89 && dig < 94){
        rightAnswer("The Seven Crystal Balls")
        
} else {
    wrongAnswer()
        
    }
})
sotu.addEventListener("click", function(){
    if ( dig > 93 && dig < 99){
        rightAnswer("The Secret of the Unicorn")
        
} else {
    wrongAnswer()
        
    }
})
tss.addEventListener("click", function(){
    if ( dig > 98 && dig < 102){
        rightAnswer("The Shooting Star")
        
} else {
    wrongAnswer()
        
    }
})


reStart.addEventListener("click", function(){
    window.location.reload()
})

