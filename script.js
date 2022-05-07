function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
var number=document.myform.number.value;  
var mail=document.myform.mail.value;
var ad=document.myform.adrsee.value;
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password==null || password==""){  
  alert("Password must be at least 6 characters long."); 
  return false;  
  } else if (number==null || number==""){  
  alert("Number can't be blank");  
  return false;  
}else if (mail==null || mail==""){  
  alert("E-mail can't be blank");  
  return false;  
}else if (ad==null || ad==""){  
  alert("Adress can't be blank");  
  return false;  
}
}