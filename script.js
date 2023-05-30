// question1
const question1 = document.getElementById("Q1");
const option1 = document.getElementById('optionsForQ1');
const realInput =option1.childNodes;
// question2
const question2 = document.getElementById("Q2");
const option2 = document.getElementById('optionsForQ2');
const realInput2 =option2.childNodes;
// question 3
const question3 = document.getElementById("Q3");
const option3 = document.getElementById('optionsForQ3');
const realInput3 =option3.childNodes;
// question 4
const question4 = document.getElementById("Q4");
const option4 = document.getElementById('optionsForQ4');
const realInput4 =option4.childNodes;
// question 5
const question5 = document.getElementById("Q5");
const option5 = document.getElementById('optionsForQ5');
const realInput5 = option5.childNodes;
// question6
const question6 = document.getElementById("Q6");
const option6 = document.getElementById('optionsForQ6');
const realInput6 = option6.childNodes;
// question7
const question7 = document.getElementById("Q7");
const option7 = document.getElementById('optionsForQ7');
const realInput7 = option7.childNodes;
// question8
const question8 = document.getElementById("Q8");
const option8 = document.getElementById('optionsForQ8');
const realInput8 = option8.childNodes;
// question9
const question9 = document.getElementById("Q9");
const option9 = document.getElementById('optionsForQ9');
const realInput9 = option9.childNodes;
// question 10
const question10 = document.getElementById("Q10");
const option10 = document.getElementById('optionsForQ10');
const realInput10 = option10.childNodes;
// submit button
const button = document.getElementById("button");
let body = document.querySelector("body");

const answers ={
    question1 :"969",
    question2 :"lot",
    question3 :"30",
    question4 :"gates",
    question5 :"eunice",
    question6 :"elkanah",
    question7 :"teman" ,
    question8 :"psalms119",
    question9 : "jeremiah",
    question10 : "knowledge"
}
let nameInput =prompt("Please input your name");
let score = [];

let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});

let anwersDataBase = Object.entries(answers).filter(answer => {
    return answer;
});
function crossCheckAnswer1() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }
    })
    // checking if the selected option is equal to the answer      
    if (anwersDataBase[0][1] === filteredOption[0].value ) {
        return score.push(1);
    }
    else {
        return score.push(0);
    }
}
function crossCheckAnswer2() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput2).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }
    })
     // checking if the selected option is equal to the answer     
    if (anwersDataBase[1][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0);
    }
}
function crossCheckAnswer3() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput3).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }
        
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[2][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer4() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput4).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }
        
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[3][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer5() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput5).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }    
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[4][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer6() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput6).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }    
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[5][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer7() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput7).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }    
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[6][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer8() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput8).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }    
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[7][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer9() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput9).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }    
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[8][1] === filteredOption[0].value) {
        return score.push(1);
    }
    else {
        return score.push(0)
    }
}
function crossCheckAnswer10() {
    anwersDataBase
    // getting the selected option
    let flattenedChildren = Object.entries(realInput10).flat()
    let filteredFlattend = flattenedChildren.filter(value => {
        return value.ELEMENT_NODE
    });
    filteredFlattend.filter(value => {
        return value [0]
    })
    let inputFilteredFlattened = [filteredFlattend[0],filteredFlattend[1],filteredFlattend[6], filteredFlattend[11], filteredFlattend[15]];
    let filteredOption =  inputFilteredFlattened.filter(value =>{
        if (filteredFlattend[1].checked ===false && filteredFlattend[6].checked===false && filteredFlattend[11].checked===false && filteredFlattend[15].checked===false) {
            return value;
        } else {
            let valueChecked =value.checked  ;
            return valueChecked===true
        }    
    })
     // checking if the selected option is equal to the answer       
    if (anwersDataBase[9][1] === filteredOption[0].value) {
        return score.push(1);
        
    }
    else {
        return score.push(0)
    }
}
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
        
        alert(`Hey ${nameInput} \nYou got ${totalFlattenedScore} \\ ${anwersDataBase.length}  🤩🤩 \n💫👍 You took🥇 \n \nDate: ${now}`  );
        
    } 
    else if (totalFlattenedScore >= 4 && totalFlattenedScore <= 7) {
        alert(`Hey ${nameInput} \nYou got ${totalFlattenedScore} \\ ${anwersDataBase.length} 😊😊 \n👍 You took🥈 \n \nDate: ${now}`  ); 
        
    }
    else if (totalFlattenedScore >=1 &&totalFlattenedScore <4 ){
        alert(`Hey ${nameInput} \nYou got ${totalFlattenedScore} \\ ${anwersDataBase.length}  🙄🙄 \nYou took 🥉 \n \nDate: ${now}`  ); 
        
    }
    else{
        alert(`Hey ${nameInput} \nYou got ${totalFlattenedScore} \\ ${anwersDataBase.length}  😶‍🌫️😶‍🌫️ \nPlease try again \n \nDate: ${now}`  ); 
    }
    let meta =document.createElement("meta")
    meta.setAttribute("http-equiv", "refresh")
    meta.setAttribute("content","0; url=./index.html")
    body.appendChild(meta)
     
}
let clickButton = button.addEventListener("click" ,totalScore );
body.addEventListener( "keypress" , function (event) {
    if ( event.keyCode === 13) {
       totalScore();    
    }
})


