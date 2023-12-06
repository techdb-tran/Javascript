const eleContainer = document.querySelector('.container');
const eleCheck = document.querySelector('.check');
const eleAgain = document.querySelector('.again');
const eleScore = document.querySelector('#score');
const eleStatus = document.querySelector('.status');
const eleNumber = document.querySelector('.number');
const eleHightScore = document.querySelector('#hightScore');
let score = 20;
let maxScore = 0;
eleScore.innerHTML = `${score}`;
eleHightScore.innerHTML = `${maxScore}`;

let randomNumber = Math.ceil(19*Math.random());
eleAgain.addEventListener('click', function(){
    eleContainer.style.backgroundColor = 'white';
    randomNumber=Math.ceil(19*Math.random());
    document.querySelector('.box input[type="number"]').value= '';
    eleNumber.innerHTML =`?`;
    eleStatus.innerHTML =`Start guessing...👌`;
    score = 20;
    eleScore.innerHTML = `${score}`;
    eleHightScore.innerHTML = `${maxScore}`;
})
eleCheck.addEventListener('click', function(){
    const eleBoxVal = document.querySelector('.box input[type="number"]').value;
    console.log(randomNumber);
    console.log(eleBoxVal);
    if(Number(eleBoxVal) === randomNumber){
        eleStatus.innerHTML =`Correct! 🎉`;
        eleContainer.style.backgroundColor = 'green';
        eleNumber.innerHTML = `${randomNumber}`;
        if(score>maxScore) {
            maxScore = score;
        }
    }
    else if(eleBoxVal === ''){
        eleStatus.innerHTML =`No number! ⛔`;
    }
    else if(score===0){
        eleStatus.innerHTML =`You lost the game! 🤦‍♂️`;
    }
    else{
        score --;
        eleContainer.style.backgroundColor = 'white';
        eleScore.innerHTML = `${score}`;
        (eleBoxVal > randomNumber)? (eleStatus.innerHTML =`Too Hight! 😅`) : (eleStatus.innerHTML =`Too Low! 🤗`);
    }
})

