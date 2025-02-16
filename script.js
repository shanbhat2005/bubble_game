document.title="bubble game";
let a = document.querySelector("#heading").innerHTML="20";

function create_bubble(){
    
let bubble="";

for(let i=0;i<=69;i++){
    let number=Math.floor(Math.random()*10);

    bubble+=` <div class="bubble">${number}</div>`;
}
document.querySelector("#pbtm").innerHTML=bubble;

}
create_bubble();
