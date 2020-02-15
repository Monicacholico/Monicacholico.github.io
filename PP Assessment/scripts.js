$(document).ready(function() {
  let mobileUser = $(".at-text.MobilePhone");
  let emailUser = $(".at-text.EmailAddress");

  $(window).on("load", function() {
    console.log(mobileUser);
    emailUser.remove();
    emailUser.appendTo(mobileUser);
  });

  function optIn() {
    let inputs = $("input");
    let disclaimer = $(".at-row at-row-solo SmsSubscribeMobilePhone");
    let displayer = $("#displayerDisclaim");
    console.log(disclaimer);
    console.log(inputs.attr);
    if (inputs.attr("title", "Email (required)")) {
      displayer.append(
        "You'll receive emails from Save The Narwhals. You may unsubscribe at any time."
      );
    }
  }

  function displayCheckbox() {
    let checkBox = $("#XYZ");
    optIn();
    if (checkBox.attr("required")) {
      checkBox.hide();
    } else {
      checkBox.show();
    }
  }
  displayCheckbox();
});
