document.querySelector(".get-jokes").addEventListener("click",getJokes);
let loading=document.querySelector(".loading");
function getJokes(e){
        
    loading.style.display="block";

    const number=document.querySelector("input[type=number]").value;
    // setTimeout(function(){
    //     loading.style.display="none"
    // },2000);

    if(number>0 && number<=10){        
        const xhr=new XMLHttpRequest();
        xhr.open("GET",`http://api.icndb.com/jokes/random/${number}?firstName=Joshua&lastName=Aj`,true);
        
        xhr.onload=function(){
if(this.status===200){
const response=JSON.parse(this.responseText);
let output="";
if(response.type==="success"){
    response.value.forEach(function(joke){
          output+=`<li>${joke.joke}</li>`
        }
    )
}
else{
    output ="<li>something went wrong</li>"
}
document.querySelector(".jokes").innerHTML=output;
}
}
xhr.send();
}
else if(number>10){
    document.querySelector(".jokes").innerHTML="Hey take it easy, you can only input a maximum of 10 numbers there's enough awesomeness to go around 😁";

}
else if(number===""){
    document.querySelector(".jokes").innerHTML="You need to input a number 💁🏾‍♂️"
}
else{
    document.querySelector(".jokes").innerHTML=`how do you expect me to output ${number} number of examples 🤨`
}


e.preventDefault()
}
