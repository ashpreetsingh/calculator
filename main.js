var str=0;
var finalResult=0;
function calculate (val) {
    if(!validate(str,val)){
        return false;
    }
    var elem=document.getElementById('display');
    if(val=='='){
        finalResult=result(str);
        str=finalResult;
        elem.innerHTML=finalResult;
    }
    else if (val=='CLR'){
        str="";
        elem.innerHTML=str;
    }
    else if (val=='DEL'){
        str=str.slice(0,str.length-1);
        elem.innerHTML=str;
    }
    else {
        str+=val;
        elem.innerHTML=str;
    }
}
function result(eq) {
    return eval(eq);
}
function validate(str,val) {
    let prevVal=str[str.length-1]
    if(["=","-","*","/","+"].includes(prevVal) && ["=","-","*","/","+"].includes(val)){
        return false;
    }
    return true;
}