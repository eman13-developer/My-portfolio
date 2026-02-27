// hamburgor
function navbarlinks2(){
    let navchild=document.getElementsByClassName("navbarlinks")[0];
    let openmenu=document.getElementsByClassName("openmenu");
    let closemenu=document.getElementsByClassName("closemenu");
    if(navchild.style.display==="none"){
        navchild.style.display="flex";
    }
    else{
        navchild.style.display="none";
    }
}