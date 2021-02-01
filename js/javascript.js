function funValide()
{
    var name=document.myform.name.value,
        password=document.myform.password.value;
       

 if(name=="admin"&& password=="adminadmin" )
    {  
   window.location.href = "table.html";

    
    } 
    else if ( name==null|| name=="")
    {  
       
        document.getElementById("message").innerHTML="أسم المستخدم لايمكن ان يكون فارغ "
    } else  if ( password==null|| password=="")
    {  
         
        document.getElementById("message").innerHTML="كلمة المرور لايمكن ان تكون فارغة"
    }

   
else
   document.getElementById("message").innerHTML="أسم المستخدم او كلمة المرور غير صحيحة "
  
  }