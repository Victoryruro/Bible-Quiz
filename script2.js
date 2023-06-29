const question =document.querySelectorAll("section");
// submit button
const button = document.getElementById("button");
const body = document.querySelector("body");
const head = document.querySelector("head");
let buttonContainer = document.querySelector(".button-container");
let nameInput2 =prompt("Please input your name");
let nameInput =()=>{
    if (nameInput2 === "") {
        return "User"
        
    } else {
        nameInput2.valueOf()
        const remainingLetters =nameInput2.slice(1);
        const firstLetter =nameInput2[0].toUpperCase();
        let result = `${firstLetter}${remainingLetters}`;
        return result
    }
}



// date
let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
// function to get the selected options
function gettingSelectedOptions () { 
    // 
    let some = Object.entries(question).map(element => {
        // getting the section element
        let realInput =element[1].childNodes;
        // getting the options container and the options
        let getOptions =realInput[3].childNodes ;
        let getInputOptions= [getOptions[0],getOptions[1],getOptions[6], getOptions[11], getOptions[15]];
        let filteredOption = getInputOptions.filter(value =>{
            if (getOptions[1].checked ===false && getOptions[6].checked===false && getOptions[11].checked===false && getOptions[15].checked===false) {
                return value;
            } else {
                let valueChecked =value.checked  ;
                return valueChecked===true
            }
        })
        return filteredOption[0].value
    });
    return some
}
// answer dataBase
const answerDatabase=[
    {
        questionNumber : 1 ,
        questionAnswer :"969"
    },
    {
        questionNumber : 2 ,
        questionAnswer :"lot"
    },
    {
        questionNumber : 3 ,
        questionAnswer :"30"
    },
    {
        questionNumber : 4 ,
        questionAnswer :"gates"
    },
    {
        questionNumber : 5 ,
        questionAnswer :"eunice"
    },
    {
        questionNumber : 6 ,
        questionAnswer :"elkanah"
    },
    {
        questionNumber : 7 ,
        questionAnswer :"teman"
    },
    {
        questionNumber : 8 ,
        questionAnswer :"psalms119"
    },
    {
        questionNumber : 9 ,
        questionAnswer :"jeremiah"
    },
    {
        questionNumber : 10 ,
        questionAnswer :"book of knowledge"
    },
];

function gettingDataBaseAnswer() {
  const mapAnswerDatabase = answerDatabase.map((answer) =>{
    return answer.questionAnswer
  })
  return [mapAnswerDatabase].flat(1)
}

// cross checking each option chosen with dataBase answers
function crossCheckAnswer1() {
    if (gettingSelectedOptions()[0] === gettingDataBaseAnswer()[0]) {
        question[0].append( "correct ✅");
        return score.push(1)
    } 
    else {
        question[0].append( "Wrong ❎");
        question[0].appendChild(document.createElement("p"))
        question[0].append(`Ans : ${gettingDataBaseAnswer()[0]}`);
        return score.push(0)
    }
}
function crossCheckAnswer2() {
    if (gettingSelectedOptions()[1] === gettingDataBaseAnswer()[1]) {
        question[1].append( "correct ✅");
        return score.push(1)
    } else {
        question[1].append( "Wrong ❎");
        question[1].appendChild(document.createElement("p"))
        question[1].append(`Ans : ${gettingDataBaseAnswer()[1]}`);
        return score.push(0)
    }
}
function crossCheckAnswer3() {
    if (gettingSelectedOptions()[2] === gettingDataBaseAnswer()[2]) {
       question[2].append("correct ✅");
        return score.push(1)
    }
    else {
        question[2].append("Wrong ❎");
        question[2].appendChild(document.createElement("p"))
        question[2].append(`Ans : ${gettingDataBaseAnswer()[2]}`);
        return score.push(0)
    }
}
function crossCheckAnswer4() {
    if (gettingSelectedOptions()[3] === gettingDataBaseAnswer()[3]) {
        question[3].append("correct ✅");
        return score.push(1)
    } 
    else {
        question[3].append("Wrong ❎");
        question[3].appendChild(document.createElement("p"))
        question[3].append(`Ans : ${gettingDataBaseAnswer()[3]}`);
        return score.push(0)
    }
}
function crossCheckAnswer5() {
    if (gettingSelectedOptions()[4] === gettingDataBaseAnswer()[4]) {
        question[4].append("correct ✅");
        return score.push(1)
    }
    else {
        question[4].append("Wrong ❎");
        question[4].appendChild(document.createElement("p"))
        question[4].append(`Ans : ${gettingDataBaseAnswer()[4]}`);
        return score.push(0)
    }
}
function crossCheckAnswer6() {
    if (gettingSelectedOptions()[5] === gettingDataBaseAnswer()[5]) {
        question[5].append("correct ✅");
        return score.push(1)
    }
    else {
        question[5].append("Wrong ❎");
        question[5].appendChild(document.createElement("p"))
        question[5].append(`Ans : ${gettingDataBaseAnswer()[5]}`);
        return score.push(0)
    }
}
function crossCheckAnswer7() {
    if (gettingSelectedOptions()[6] === gettingDataBaseAnswer()[6]) {
        question[6].append("correct ✅");
        return score.push(1)
    }
    else {
        question[6].append("Wrong ❎");
        question[6].appendChild(document.createElement("p"))
        question[6].append(`Ans : ${gettingDataBaseAnswer()[6]}`);
        return score.push(0)
    }
}
function crossCheckAnswer8() {
    if (gettingSelectedOptions()[7] === gettingDataBaseAnswer()[7]) {
        question[7].append("correct ✅");
        return score.push(1)
    }
    else {
        question[7].append("Wrong ❎");
        question[7].appendChild(document.createElement("p"))
        question[7].append(`Ans : ${gettingDataBaseAnswer()[7]}`);
        return score.push(0)
    }
}
function crossCheckAnswer9() {
    if (gettingSelectedOptions()[8] === gettingDataBaseAnswer()[8]) {
        question[8].append("correct ✅");
        return score.push(1)
    }
    else {
        question[8].append("Wrong ❎ \n");
        question[8].appendChild(document.createElement("p"))
        question[8].append(`Ans : ${gettingDataBaseAnswer()[8]}`);
        return score.push(0)
    }
}
function crossCheckAnswer10() {
    if (gettingSelectedOptions()[9] === gettingDataBaseAnswer()[9]) {
        question[9].append("correct ✅");
        return score.push(1)
    } 
    else {
        question[9].append("Wrong ❎");
        question[9].appendChild(document.createElement("p"))
        question[9].append(`Ans : ${gettingDataBaseAnswer()[9]}`);
        return score.push(0)
    }
}
// restart button and restart function
let restart =document.createElement("button");
restart.textContent="Restart";
function restartPage() {
    let meta =document.createElement("meta")
    meta.setAttribute("http-equiv", "refresh")
    meta.setAttribute("content","0; url=./index.html")
    body.appendChild(meta)
}
restart.addEventListener("click" , restartPage)
// summing score
let score = [];
let totalScore = () =>{
    crossCheckAnswer1()
    crossCheckAnswer2()
    crossCheckAnswer3()
    crossCheckAnswer4()
    crossCheckAnswer5()
    crossCheckAnswer6()
    crossCheckAnswer7()
    crossCheckAnswer8()
    crossCheckAnswer9()
    crossCheckAnswer10()
    console.log(score);
    const flattenedScore =score.flat(2);
    const totalFlattenedScore = flattenedScore.reduce((acc,result) =>{
        return acc + result
    }, 0)
    if (totalFlattenedScore > 7) {
        
        alert(`Hey ${nameInput()} \nYou got ${totalFlattenedScore} \\ ${gettingDataBaseAnswer().length}  🤩🤩 \n💫👍 You took🥇 \n \nDate: ${now}`  );
        
    } 
    else if (totalFlattenedScore >= 4 && totalFlattenedScore <= 7) {
        alert(`Hey ${nameInput()} \nYou got ${totalFlattenedScore} \\ ${gettingDataBaseAnswer().length} 😊😊 \n👍 You took🥈 \n \nDate: ${now}`  ); 
        
    }
    else if (totalFlattenedScore >=1 &&totalFlattenedScore <4 ){
        alert(`Hey ${nameInput()} \nYou got ${totalFlattenedScore} \\ ${gettingDataBaseAnswer().length}  🙄🙄 \nYou took 🥉 \n \nDate: ${now}`  ); 
        
    }
    else{
        alert(`Hey ${nameInput()} \nYou got ${totalFlattenedScore} \\ ${gettingDataBaseAnswer().length}  😶‍🌫️😶‍🌫️ \nPlease try again \n \nDate: ${now} `  ); 
    };
    
    buttonContainer.style.justifyContent ="space-evenly";
    buttonContainer.removeChild(button);
    buttonContainer.appendChild(restart);

    
};
let r =buttonContainer.contains(button);
let clickButton = button.addEventListener("click" ,totalScore );
body.addEventListener( "keypress" , function (event) {
    if ( buttonContainer.contains(button) === true  && event.keyCode === 13) {
       totalScore();  
       
    }
    else{
        restartPage()
    }
})

