//Extract value from input box

function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
var number=document.myform.number.value;  
var mail=document.myform.mail.value;
var ad=document.myform.ad.value;
 
//Judge whether the name is empty, and prompt if it is empty
if (name==null || name==""){  
  alert("Name can't be blank");  
    return false;  
}return true;
}
//Judge whether the password is at least 6 digits, if not, prompt
}else if(password.length<6 || password==""){  
  alert("Password must be at least 6 characters long.");
    return false;  
}return true;
}
// Judge whether the number is empty, and prompt if it is empty
  } else if (number==null || number==""){  
  alert("Number can't be blank");  
    return false;  
}return true;
}
//Judge whether the mailbox is empty, and prompt if it is empty
}else if (mail==null || mail==""){  
  alert("E-mail can't be blank");  
   return false;  
}return true;
}
//Judge whether the address is empty, and prompt if it is empty
}else if (ad==null || ad==""){  
  alert("Adress can't be blank");  
  return false;  
}return true;
}
