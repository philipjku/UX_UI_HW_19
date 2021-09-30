console.log("The js file is working!");

$("li").hover(
    function() {
    $(this).addClass("underline");},
    function() {
    $(this).removeClass("underline");
  }
);