let h2Ele = document.querySelectorAll('h2 a');
let pEle = document.querySelectorAll("p");
let emEle = document.querySelectorAll("p em");
let bEle = document.querySelectorAll("b");
let hrEle = document.querySelectorAll("hr");
let code = document.querySelectorAll(".maincode");
let code1 = document.getElementsByClassName("mainCode");
let yellowCode = document.getElementsByClassName("yellow");
let peachCode = document.getElementsByClassName("peach");
let commentCode = document.getElementsByClassName("comment");

function themea(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('nav').style.backgroundColor = 'white';
    document.querySelector('h1 a').style.color = '#131415';
    document.querySelector('h1').style.color = '#131415';
    document.querySelector('h1 em').style.color = '#0493d3';
    document.getElementById("themeb").style.display = "inline-block";
    document.getElementById("themea").style.display = "none";

    for(i=0; i<h2Ele.length; i++){
        h2Ele[i].style.color = "#222";
    }

    for(i=0; i<pEle.length; i++){
        pEle[i].style.color = "#222";
    }

    for(i=0; i<emEle.length; i++){
        emEle[i].style.color = "#222";
    }

    for(i=0; i<bEle.length; i++){
        bEle[i].style.color = "#222";
    }

    for(i=0; i<hrEle.length; i++){
        hrEle[i].style.borderColor = "#dedede";
    }

    for(i=0; i<code.length; i++){
        code[i].style.backgroundColor = "#fafafa";
    }

    for(i=0; i<code1.length; i++){
        code1[i].style.color = "#353535";
    }

    for(i=0; i<yellowCode.length; i++){
        yellowCode[i].style.color = "#0493d3";
    }

    for(i=0; i<peachCode.length; i++){
        peachCode[i].style.color = "#1274a0";
    }

    for(i=0; i<commentCode.length; i++){
        commentCode[i].style.color = "#404040";
    }
}
function themeb(){
    document.querySelector('body').style.backgroundColor = '#131415';
    document.querySelector('nav').style.backgroundColor = '#131415';
    document.querySelector('h1 a').style.color = 'white';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h1 em').style.color = '#ffe77a';
    document.getElementById("themea").style.display = "inline-block";
    document.getElementById("themeb").style.display = "none";

    for(i=0; i<h2Ele.length; i++){
        h2Ele[i].style.color = "white";
    }

    for(i=0; i<pEle.length; i++){
        pEle[i].style.color = "white";
    }

    for(i=0; i<emEle.length; i++){
        emEle[i].style.color = "white";
    }

    for(i=0; i<bEle.length; i++){
        bEle[i].style.color = "white";
    }

    for(i=0; i<hrEle.length; i++){
        hrEle[i].style.borderColor = "#444";
    }

    for(i=0; i<code.length; i++){
        code[i].style.backgroundColor = "#1a1a1a";
    }

    for(i=0; i<code1.length; i++){
        code1[i].style.color = "white";
    }

    for(i=0; i<yellowCode.length; i++){
        yellowCode[i].style.color = "#ffe741";
    }

    for(i=0; i<peachCode.length; i++){
        peachCode[i].style.color = "#fff3ad";
    }

    for(i=0; i<commentCode.length; i++){
        commentCode[i].style.color = "#ccc";
    }
}