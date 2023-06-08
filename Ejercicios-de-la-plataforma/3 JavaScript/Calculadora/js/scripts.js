var displayDiv = document.querySelector("#display");

var result = 0, number = 0, op;

function clr(){
    result=0;
    number=0;
    displayDiv.innerText = "0";
}

function press(number){
    console.log(displayDiv.innerText);
    if (displayDiv.innerText=="0"){
        displayDiv.innerText=number;
    }
    else{
        displayDiv.innerText+=number;
    }
}

function setOP(operator){
    if (!op){
        result=Number(displayDiv.innerText);
        displayDiv.innerText = "0";
        if(operator=="+"){
            op="+";
        }
        else if(operator=="-"){
            op="-";
        }
        else if(operator=="*"){
            op="*";
        }
        else if(operator=="/"){
            op="/";
        }
    }
}

function calculate(){
    number=Number(displayDiv.innerText);
    if(op=="+"){
        result+=number;
        displayDiv.innerText=result;
        op=false;
    }
    else if(op=="-"){
        result-=number;
        displayDiv.innerText=result;
        op=false;
    }
    else if(op=="*"){
        result*=number;
        displayDiv.innerText=result;
        op=false;
    }
    else if(op=="/"){
        result/=number;
        displayDiv.innerText=result;
        op=false;
    }
    else{
        displayDiv.innerText=result;
        op=false;
    }
}