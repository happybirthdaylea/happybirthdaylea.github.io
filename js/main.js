$("#unlockDiv").click(function(){
  hideAllForms();
  $("#loginForm").css("display", "flex");
});

$("#loginButton").click(function(){
  if($("#password").val() == "532"){
    $("#password").val("");
    hideAllForms();
    $("#unlockDiv").hide();
    $("#indexPage").css("display", "flex");
    $("#birthdayLetterDiv").css("display", "flex");
    $("#imagesDiv").css("display", "flex");
  }
});

$(".titleContainer").click(function(){
  window.location = "index.html";
});

$("#birthdayLetterDiv").click(function(){
  hideAllForms();
  $("#birthdayLetterForm").css("display", "flex");
  $("#birthdayLetterDiv").removeClass("glowing");
});

function hideAllForms(){
  $("#indexPage").hide();
  $("#loginForm").hide();
  $("#birthdayLetterForm").hide();
  $("#imagesForm").hide();
}

$("#imagesDiv").click(function(){
  hideAllForms();
  $("#imagesForm").css("display", "flex");
  $("#imagesDiv").removeClass("glowing");
});
