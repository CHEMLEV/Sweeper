
var positions=[];
var bombs=[];
var open_field_count="";
var restart = "";
var timer_counter=0;
var z= 0;    


for (i=0; i<100; i++)
{
    var field = document.createElement('div');
    field.id=i;
    field.className="fields";
    field.style.width="50px";
    field.style.height="50px";
    field.style.backgroundColor = "gray";
    field.style.border = "1px dotted black";
    
    document.getElementById("game_field").appendChild(field);
}


start();

function start()

{
    timer_counter=0;
    z=0;

    
    
    
    
    for (i=0; i<100; i++)
    {
    document.getElementById(i).addEventListener("click", check_field);
    document.getElementById(i).addEventListener("contextmenu", set_flag);  
    }

    open_field_count=0;
    document.getElementById("bottom_message_1").innerHTML="";
    document.getElementById("bottom_message_2").innerHTML="";
    positions=[];
    bombs=[];


for (i=0; i<100; i++)
{
document.getElementById(i).innerHTML="";
document.getElementById(i).style.color="black";
document.getElementById(i).style.backgroundColor="gray";

}



   for (x=1; x<101; x++)
   {
   positions.push(0);
   }
   console.log(positions);


   for (x=1; x<11; x++)
   {
   bomb = Math.floor(Math.random() * 100);

   if (bombs.includes(bomb)==false)
   {
   bombs.push(bomb);    
   }
   else
   {
   x--;    
   }
   }

   console.log(bombs);


for (k=0; k<10; k++)
{
    
bomb_position=bombs[k];

if (bomb_position>9 & bomb_position<89 & bomb_position%10!=0 & bomb_position%10!=9) 
{
affected_field_1=bomb_position-11;
current_alert=positions[affected_field_1];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_1, affected_field_1+1);

affected_field_2=bomb_position-10;
current_alert=positions[affected_field_2];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_2, affected_field_2+1);

affected_field_3=bomb_position-9;
current_alert=positions[affected_field_3];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_3, affected_field_3+1);

affected_field_4=bomb_position-1;
current_alert=positions[affected_field_4];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_4, affected_field_4+1);

affected_field_5=bomb_position+1;
current_alert=positions[affected_field_5];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_5, affected_field_5+1);

affected_field_6=bomb_position+9;
current_alert=positions[affected_field_6];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_6, affected_field_6+1);

affected_field_7=bomb_position+10;
current_alert=positions[affected_field_7];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_7, affected_field_7+1);

affected_field_8=bomb_position+11;
current_alert=positions[affected_field_8];
changed_alert=current_alert+1;
positions.fill(changed_alert, affected_field_8, affected_field_8+1);
}

if (bomb_position%10==0 & bomb_position !=0 & bomb_position !=90)
{      
    affected_field_2=bomb_position-10;
    current_alert=positions[affected_field_2];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_2, affected_field_2+1);
    
    affected_field_3=bomb_position-9;
    current_alert=positions[affected_field_3];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_3, affected_field_3+1);
          
    affected_field_5=bomb_position+1;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
    
    affected_field_6=bomb_position+10;
    current_alert=positions[affected_field_6];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_6, affected_field_6+1);
           
    affected_field_8=bomb_position+11;
    current_alert=positions[affected_field_8];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_8, affected_field_8+1);
}
if (bomb_position%10==9 & bomb_position !=9 & bomb_position !=99)
{      
    affected_field_1=bomb_position-11;
    current_alert=positions[affected_field_1];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_1, affected_field_1+1);
    
    affected_field_2=bomb_position-10;
    current_alert=positions[affected_field_2];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_2, affected_field_2+1);
    
    affected_field_4=bomb_position-1;
    current_alert=positions[affected_field_4];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_4, affected_field_4+1);
    
    affected_field_6=bomb_position+9;
    current_alert=positions[affected_field_6];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_6, affected_field_6+1);
    
    affected_field_7=bomb_position+10;
    current_alert=positions[affected_field_7];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_7, affected_field_7+1);   
}
if (bomb_position<9 & bomb_position!=0) 
{
       
    affected_field_4=bomb_position-1;
    current_alert=positions[affected_field_4];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_4, affected_field_4+1);
    
    affected_field_5=bomb_position+1;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
    
    affected_field_6=bomb_position+9;
    current_alert=positions[affected_field_6];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_6, affected_field_6+1);
    
    affected_field_7=bomb_position+10;
    current_alert=positions[affected_field_7];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_7, affected_field_7+1);
    
    affected_field_8=bomb_position+11;
    current_alert=positions[affected_field_8];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_8, affected_field_8+1);
}

if (bomb_position>90 & bomb_position!=99) 
{
    affected_field_1=bomb_position-11;
    current_alert=positions[affected_field_1];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_1, affected_field_1+1);
    
    affected_field_2=bomb_position-10;
    current_alert=positions[affected_field_2];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_2, affected_field_2+1);
    
    affected_field_3=bomb_position-9;
    current_alert=positions[affected_field_3];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_3, affected_field_3+1);
    
    affected_field_4=bomb_position-1;
    current_alert=positions[affected_field_4];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_4, affected_field_4+1);
    
    affected_field_5=bomb_position+1;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
         
}
if (bomb_position==0)
{
    affected_field_5=bomb_position+1;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
    
    affected_field_7=bomb_position+10;
    current_alert=positions[affected_field_7];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_7, affected_field_7+1);
    
    affected_field_8=bomb_position+11;
    current_alert=positions[affected_field_8];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_8, affected_field_8+1);   
}
if (bomb_position==9)
{
    affected_field_5=bomb_position-1;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
    
    affected_field_7=bomb_position+10;
    current_alert=positions[affected_field_7];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_7, affected_field_7+1);
    
    affected_field_8=bomb_position+9;
    current_alert=positions[affected_field_8];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_8, affected_field_8+1);   
}
if (bomb_position==90)
{
    affected_field_5=bomb_position-10;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
    
    affected_field_7=bomb_position-9;
    current_alert=positions[affected_field_7];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_7, affected_field_7+1);
    
    affected_field_8=bomb_position+1;
    current_alert=positions[affected_field_8];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_8, affected_field_8+1);   
}
if (bomb_position==99)
{
    affected_field_5=bomb_position-1;
    current_alert=positions[affected_field_5];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_5, affected_field_5+1);
    
    affected_field_7=bomb_position-10
    current_alert=positions[affected_field_7];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_7, affected_field_7+1);
    
    affected_field_8=bomb_position-11;
    current_alert=positions[affected_field_8];
    changed_alert=current_alert+1;
    positions.fill(changed_alert, affected_field_8, affected_field_8+1);   
}
}

console.log(positions);

for (k=0; k<10; k++)
{
positions.fill('<img width="50" height="50" src="bomb.png">', bombs[k], bombs[k]+1);
}
}



function check_field()
{
  console.log(this.id);
  if (positions[this.id]==0)
   {
   document.getElementById(this.id).innerHTML=" ";    
   }
  else
  {
  document.getElementById(this.id).innerHTML=positions[this.id];
  }
 
   if (document.getElementById(this.id).innerHTML=='<img width="50" height="50" src="bomb.png">')
  {
   document.getElementById("bottom_message_1").innerHTML="GAME OVER! You've lost!";
   z= setInterval(countdown, 1000);
   restart = setTimeout (start, 10000);       

    for (i=0; i<100; i++)
    {
     document.getElementById(i).removeEventListener("click", check_field);
     document.getElementById(i).removeEventListener("contextmenu", set_flag);
     document.getElementById("restart").removeEventListener("click", start); 
    }
     
  }

else if (document.getElementById(this.id).style.backgroundColor=="gray")
   {
     document.getElementById(this.id).style.color="green";
     document.getElementById(this.id).style.backgroundColor="darkgrey";
     
     open_field_count++;
     console.log(open_field_count);
     if (open_field_count==90)
     {
       document.getElementById("bottom_message_1").innerHTML="GAME OVER! You've won!";
       document.getElementById("restart").removeEventListener("click", start); 
       z= setInterval(countdown, 1000);
       restart = setTimeout (start, 10000);      
     }
   }
}


function set_flag()
{
if (document.getElementById(this.id).innerHTML=="")
{
document.getElementById(this.id).innerHTML='<img width="50" height="50" src="flag.jpg">';
}
else if (document.getElementById(this.id).innerHTML=='<img width="50" height="50" src="flag.jpg">')
{
    document.getElementById(this.id).innerHTML="";
}
}



function show()
{
for (i=0; i<100; i++)
{

document.getElementById(i).innerHTML=positions[i];
}
}

function countdown()
{
timer_counter++;
countdown_message = "New game will start in "+ (10-timer_counter) +" seconds.";
document.getElementById("bottom_message_2").innerHTML= countdown_message;
document.getElementById("bottom_message_2").style.visibility="visible";
console.log(timer_counter);
if (timer_counter>9)
{
clearInterval(z);  
}

}