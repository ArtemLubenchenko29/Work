var a = 100;
var b = "gb"

if(b == "kb"){
    console.log(a * 1024);
}else if(b == "mb"){
    console.log(a * 1024 * 1024);
}else if(b == "gb"){
    console.log(a * 1024 * 1024 * 1024);
}else if(b == "byte"){
    console.log(a);
}
