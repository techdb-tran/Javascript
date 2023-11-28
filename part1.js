//##coding 1
let data1 = {
    'Marks':{
        weight:78,
        height:1.69
    },
    'John':{
        weight:92,
        height:1.95
    }
}
let data2 = {
    'Marks':{
        weight:95,
        height:1.88
    },
    'John':{
        weight:85,
        height:1.76
    }
}
let BMIsMark = (data1.Marks.weight/data1.Marks.height**2).toFixed(2);
let BMIsJohn = (data1.John.weight/data1.John.height**2).toFixed(2);

// const markHigherBMI = ()=>{
//     if(BMIsMark>BMIsJohn) return true;
//     return false;
// };
//##coding 2
const markHigherBMI = ()=>{
    if(BMIsMark>BMIsJohn) return `Mark\'s BMI(${BMIsMark}) is higher than John\'s(${BMIsJohn})!`;
    return `John\'s(${BMIsJohn}) BMI is higher than Mark\'s(${BMIsMark})!`;
};
//console.log(markHigherBMI());
//##coding 3
let data = {
    data1:{
        'Dolphins': [96,108,89],
        'Koalas': [88,91,110]
    },
    dataBonus1:{
        'Dolphins': [97,112,101],
        'Koalas': [109,95,123]
    },
    dataBonus2:{
        'Dolphins': [97,112,101],
        'Koalas': [109,95,106]
    }
}
const arg = (arr)=>{
    let sum = 0;
    arr.forEach(element => {
        sum+=element
    });
    return sum/arr.length;
}
let arrAgrScore;
const argScore = ()=>{
    arrAgrScore= [arg(data.data1.Dolphins),arg(data.data1.Koalas)];
    return arrAgrScore;
}
argScore();
const compareScore = {
    data1: (()=>{
        if(arrAgrScore[0]>arrAgrScore[1]) return 'Dolphins wins!';
        else if(arrAgrScore[0]<arrAgrScore[1]) return 'Koalas wins!';
        else return 'Two team is draw!';
    })(),
    dataBonus1: (()=>{
        if(arrAgrScore[0]>100||arrAgrScore[1]>100){
            if(arrAgrScore[0]>arrAgrScore[1]) return 'Dolphins wins!';
            else if(arrAgrScore[0]<arrAgrScore[1]) return 'Koalas wins!';
            else return 'Two team is draw!';
        }
        else{
            return 'No team wins the trophy';
        }
    })(),
    dataBonus2: (()=>{
        if(arrAgrScore[0]===arrAgrScore[1] && arrAgrScore[0]>100){
            return 'Two team is draw';
        }
        if(arrAgrScore[0]>100||arrAgrScore[1]>100){
            if(arrAgrScore[0]>arrAgrScore[1]) return 'Dolphins wins!';
            else if(arrAgrScore[0]<arrAgrScore[1]) return 'Koalas wins!';
            else return 'Two team is draw!';
        }
        else{
            return 'No team wins the trophy';
        }   
    })(),
}
//console.log(argScore())
//console.log(compareScore.dataBonus2);
//##coding 4
let tip;
let valueBill = [275,40,430];
for(let i=0; i<valueBill.length;i++){
    tip = (valueBill[i] >50 &&valueBill[i]<300)? 0.15*valueBill[i]:0.2*valueBill[i];
let finalValue = Number(valueBill[i])+ Number(tip.toFixed(2));
console.log(tip.toFixed(2));
console.log(`The bill was ${valueBill[i]}, the tip was ${tip.toFixed(2)}, and the total value ${finalValue}`)
}

