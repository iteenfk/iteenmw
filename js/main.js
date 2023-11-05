"use strict";
function btn(){
    const output = document.getElementById("output_id");
    const input = document.getElementById("input_id").value;
    for (let i = 1; i < 10; i++){
        // console.log(`1x${i}=${1*i}`);
        const li = document.createElement("li");
        li.textContent = `${input}x${i}=${input*i}`
        output.appendChild(li);
    }
}
