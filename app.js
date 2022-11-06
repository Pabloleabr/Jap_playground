"use strict";
import japAlpha from './japAlpha.json' assert {type: 'json'};


const input = document.getElementById("input");
const text = document.getElementById("text");
const cheatsheet = document.getElementById("cheatsheet_text");
const options = document.querySelectorAll("input[name='jap_option']");
let current = japAlpha.hiragana;
changeCheatsheet(japAlpha.hiragana);




for (const option of options) {//set functionality for all buttons on the right 
    option.addEventListener("click", () => {
        if(option.checked){
            current = japAlpha[option.id]//option id has to be the same as key
        }
        //change current letter
        translate();
        changeCheatsheet(japAlpha[option.id]);
    });
}




input.addEventListener("keyup", () => {//translates when ever you right
    translate();
})
/**
 * translate phonetical sound from the input element to jap letters on a div
 */
function translate(){
    let upper = input.value
    if ( Object.keys(current).length < 80) {//turn to uppercase in case not using both
        upper = upper.toUpperCase();
    }
    text.innerText = ""
    for(let i = 0; upper.length > i; i+=2){
        let sub2 = upper.substring(i,i+2)
        //check if its a vowel fisrt in any of the cases
        if(upper[i].toUpperCase() == "A" || upper[i].toUpperCase() == "I" || upper[i].toUpperCase() == "U" 
        || upper[i].toUpperCase() == "E" || upper[i].toUpperCase() == "O" || upper[i].toUpperCase() == "N" || upper[i].toUpperCase() == " "){
            if (upper[i] == " ") {
                text.innerHTML += "&nbsp"
            }else{
                text.innerText += current[upper[i]] != undefined ? current[upper[i]] : ""  ;
            }
            i--;
        } 
        else{
            text.innerText += current[sub2] != undefined ? current[sub2] : "" ;
        }
    }  
}
/**
 * changes the cheatsheet to the alphabet passed as a json
 * @param {json} alpha 
 */
function changeCheatsheet(alpha){
    cheatsheet.innerHTML = "";  

    for (const i in alpha) {
        let div = document.createElement("div");
        div.innerHTML =`${i} = ${alpha[i]}`;
        cheatsheet.appendChild(div)

    }
}
