const eleContainer = document.querySelector('.container');
const eleCheck = document.querySelector('.check');
const eleAgain = document.querySelector('.again');
const eleScore = document.querySelector('#score');
const eleStatus = document.querySelector('.status');
const eleNumber = document.querySelector('.number');
const eleHightScore = document.querySelector('#hightScore');
let score = 20;
let maxScore = [0];
eleScore.innerHTML = `${score}`;
eleHightScore.innerHTML = `${Math.max(...maxScore)}`;

let randomNumber = 9;
eleAgain.addEventListener('click', function(){
    eleContainer.style.backgroundColor = 'white';
    randomNumber=Math.ceil(19*Math.random());
    document.querySelector('.box input[type="number"]').value= '';
    eleNumber.innerHTML =`?`;
    eleStatus.innerHTML =`Start guessing...👌`
    score = 20;
    eleScore.innerHTML = `${score}`;
    eleHightScore.innerHTML = `${Math.max(...maxScore)}`
})
eleCheck.addEventListener('click', function(){
    const eleBoxVal = document.querySelector('.box input[type="number"]').value;
    console.log(randomNumber);
    console.log(eleBoxVal);
    if(Number(eleBoxVal) === randomNumber){
        eleStatus.innerHTML =`Correct 🎉`;
        maxScore.push(score);
        eleContainer.style.backgroundColor = 'green';
        eleNumber.innerHTML = `${randomNumber}`
    }else{
        score --;
        eleContainer.style.backgroundColor = 'white';
        eleScore.innerHTML = `${score}`;
        (eleBoxVal > randomNumber)? (eleStatus.innerHTML =`Too Hight 😅`) : (eleStatus.innerHTML =`Too Low 🤗`);
    }
})

