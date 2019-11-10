$("#unlockDiv").click(function(){
  hideAllForms();
  $("#loginForm").css("display", "flex");
});

$("#loginButton").click(function(){
  if($("#password").val() == "532"){
    $("#password").val("");
    $("#loginForm").hide();
    $("#indexPage").css("display", "flex");
    $("#birthdayLetterDiv").css("display", "flex");
  }
});

$(".titleContainer").click(function(){
  window.location = "index.html";
});

$("#birthdayLetterDiv").click(function(){
  hideAllForms();
  $("#birthdayLetterForm").css("display", "flex");
});

function hideAllForms(){
  $("#indexPage").hide();
  $("#loginForm").hide();
  $("#birthdayLetterForm").hide();
}
