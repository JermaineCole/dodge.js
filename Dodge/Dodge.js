window.onload = function()
{
    
/* flag=1 function f1() 
{ alert("Yes. you are right ") } 

function f() 
{ if(flag==1) 
{ Bn.style.top=90 Bn.style.left=500 flag=2 } 
 else if(flag==2) 
 { Bn.style.top=90 Bn.style.left=50 flag=3 } 
 else if(flag==3) 
 { Bn.style.top=235 Bn.style.left=360 flag=1 } } 
 */
console.log(Math.floor(Math.random() * 1200) + 1);

    
var dodge = document.getElementsByClassName("Dodge");
for (var i = 0; i < dodge.length; i++)
    {
        dodge[i].addEventListener('mouseover', function(dodging)
            {    
                var number1 = Math.floor(Math.random() * 400) + 1;  
                var number2 = Math.floor(Math.random() * 1200) + 100;
                var number3 = Math.floor(Math.random() * 1200) + 100;
                
                this.style.paddingTop=number1;
                this.style.paddingLeft=number2;
                this.style.paddingRight=number3;
                //console.log(dodging);
            }                         
                                 
                                 )
    }





/*


var asociaal = document.getElementsByClassName("asociaal");
for (var i = 0; i < asociaal.length; i++) {
    asociaal[i].addEventListener('mouseup', function(antisocial) {
        var x = antisocial.clientX;
        var y = antisocial.clientY;
        var berichten = ["Waarom klik je hier?", "Je kan niet praten met een stuk natuur", "Dit is geen persoon", "Hier is niks te vinden", "Geen interactie mogelijk hier"];
        var bericht = berichten[Math.floor(Math.random()*berichten.length)];
        
        var beweeghet = document.createElement("div");
        beweeghet.innerHTML = bericht;
        beweeghet.setAttribute("id", "wolk");
        beweeghet.style.left = x + "px";
        beweeghet.style.top = y + "px";
        beweeghet.addEventListener('animationend', function(antisocial) {
            this.parentNode.removeChild(this);
        });
        document.body.appendChild(beweeghet);
    });
}

*/    
    
    
    
}


