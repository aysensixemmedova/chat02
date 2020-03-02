var textUser = document.querySelector("#chatInput ")
//keypress,keydown,keyup
textUser.addEventListener("keyup",function(e){
    var texti =textUser.value.trim();
    if(texti != ""){
        if(e.keyCode ==13){
            if(texti[0].toUpperCase()==texti[0]){
                AddMessage("support",texti)
            }
            else{
                AddMessage("user",texti)
            }
        }
    }
})

function AddMessage(clName,texti){
    var date=new Date();
    document.querySelector('#chat main').insertAdjacentHTML("beforeend",`
    <div class="message ${clName}">
      <p>${texti}</p>
      <p class="time">${date.getHours()+":" + date.getMinutes()}</p>
</div>
    `)
    textUser.value=""
}