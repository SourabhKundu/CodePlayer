function updateOutput() {
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<html><head><style type='text/css'>" +
        $("#cssTextarea").val() +
        "</style><head><body>" +
        $("#htmlTextarea").val() +
        "</body></html>"
    );
  document
    .getElementById("outputTextarea")
    .contentWindow.eval($("#javascriptTextarea").val());
}
$(".toggleButton").hover(
  function () {
    $(this).addClass("highlightedbutton");
  },
  function () {
    $(this).removeClass("highlightedbutton");
  }
);
$(".toggleButton").click(function () {
  $(this).toggleClass("active");
  $(this).removeClass("highlightedbutton");
  var panelId = $(this).attr("id") + "Textarea";
  $("#" + panelId).toggleClass("hidden");
  var noOfActiveClass = 4 - $(".hidden").length;
  $(".panel").width($(window).width() / noOfActiveClass - 10);
});
$(".panel").height($(window).height() - $("#Topbar").height() - 15);
$(".panel").width($(window).width() / 2 - 10);
updateOutput();
$("textarea").on("change keyup paste", function () {
  updateOutput();
});