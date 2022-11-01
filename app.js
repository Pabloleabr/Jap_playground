"use strict";
import japAlpha from './japAlpha.json' assert {type: 'json'};


const input = document.getElementById("input");
const text = document.getElementById("text");
const cheatsheet = document.getElementById("cheatsheet_text");
const options = document.querySelectorAll("input[name='jap_option']")
let current = japAlpha.hiragana;
changeCheatsheet(japAlpha.hiragana);

console.log(options);

for (const option of options) {
    option.addEventListener("click", () => {
        if(option.checked){
            current = japAlpha[option.id]
        }
        translate();
    });
}




input.addEventListener("keyup", () => {
    translate();
})

function translate(){
    let upper = input.value.toUpperCase();
    text.innerText = ""
    for(let i = 0; upper.length > i; i+=2){
        let sub2 = upper.substring(i,i+2)
        if(upper[i] == "A" || upper[i] == "I" || upper[i] == "U" || upper[i] == "E" || upper[i] == "O" || upper[i] == "N" || upper[i] == " "){
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

function changeCheatsheet(alpha){
    cheatsheet.innerHTML = "";  

    for (const i in alpha) {
        let div = document.createElement("div");
        div.innerHTML =`${i} = ${alpha[i]}`;
        cheatsheet.appendChild(div)

    }
}
