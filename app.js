"use strict";
import japAlpha from './japAlpha.json' assert {type: 'json'};


const input = document.getElementById("input");
const text = document.getElementById("text");
let current = japAlpha.hiragana;

const options = document.querySelectorAll("input[name='jap_option']")
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
        
        if(upper[i] == "A" || upper[i] == "I" || upper[i] == "U" || upper[i] == "E" || upper[i] == "O" || upper[i] == "N" || upper[i] == " "){
            if (upper[i] == " ") {
                text.innerHTML += "&nbsp"
            }else{
                text.innerText += current[upper[i]] != undefined ? current[upper[i]] : ""  ;
            }
            i--;
        } else{
            text.innerText += current[upper.substring(i,i+2)] != undefined ? current[upper.substring(i,i+2)] : "" ;
        }
    }  
}


