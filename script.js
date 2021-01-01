const targets = document.querySelectorAll(".button");
const display = document.getElementById("display");
var contentText = "";
var contentValue = "";
var ans = "";
var enable = false;


targets.forEach(target => {
    
    // add event listener to each item
    target.addEventListener("click", (e) => {

    // inner text      
    let tempText = e.path[0].innerHTML;  
    let tempValue = target.getAttribute('data-value');

    // if its ON button
    if(tempText.localeCompare("ON") == 0) {

    enable = !enable ;
    if(!enable){getClear();}

    // if enable is true then decorate buttons
    if(enable) decorate();

    // if enable is false then disfigure buttons
    if(!enable) disfigure();
   
    return;
    }

    if(enable) {
        
        // creating reg to disable some keys
       let reg = RegExp('^(alpha|shift|hype|OK)', 'g');

        // if CLR is pressed the clear the screen 
        if(tempText.localeCompare("CLR") == 0) {
            getClear();
            return;
        }

        // if = is pressed the evaluate the expression and return the result 
        if(tempText.localeCompare("=") == 0) {
            getCalculated();
            return;
        }

        // if reg matches then return   
       if(reg.test(tempText)) {return;};
        
        // display content
        contentText += tempText;
        contentValue += tempValue;
        display.innerHTML = contentText;

    }
 });

});


function getClear() {
    contentText = "";
    contentValue = "";
    display.innerHTML = "";
}

function getCalculated() {
    let temp = contentValue;
    getClear();
    ans = eval(temp);
    display.innerHTML = ans;
}

function decorate() {

    document.getElementById("on").setAttribute("style", "background-color: #e26565;");
    document.getElementById("display").setAttribute("style", "background-color: #467979;");

    document.querySelectorAll(".numerical").forEach(element => {
        element.setAttribute("style", "background-color:#8395a7;");
    })

    document.querySelectorAll(".bottom").forEach(element => {
        element.setAttribute("style", "background-color: #5e9c5e;");
    })

    document.querySelectorAll(".clr").forEach(element => {
        element.setAttribute("style", "background-color: #e26565;");
    })

    document.querySelectorAll(".operators").forEach(element => {
        element.setAttribute("style", "background-color: rgb(245, 130, 89);");
    })

    document.querySelectorAll(".func").forEach(element => {
            element.setAttribute("style", "background-color:plum;");
    })
}

function disfigure() {

     document.getElementById("on").setAttribute("style", "background-color: #a56161;");
    document.getElementById("display").setAttribute("style", "background-color: #315959;");
     
    document.querySelectorAll(".numerical").forEach(element => {
        element.setAttribute("style", "background-color:#f4f4f5;");
    })

    document.querySelectorAll(".bottom").forEach(element => {
        element.setAttribute("style", "background-color:#f4f4f5;");
    })

    document.querySelectorAll(".clr").forEach(element => {
        element.setAttribute("style", "background-color:#f4f4f5;");
    })

    document.querySelectorAll(".operators").forEach(element => {
        element.setAttribute("style", "background-color:#f4f4f5;");
    })
    
    document.querySelectorAll(".func").forEach(element => {
            element.setAttribute("style", "background-color:#f4f4f5;");
    })
}