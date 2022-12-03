// document.querySelectorAll("button");
// for (let i=0; i<buttons.length; i++)
// buttons[i].addEventListener("click", function () {
//     console.log(this);
// });
$(document).ready(function(){
$("button").click(function (){
   // console.log($(this).text());
     $(this).text("Clicked!");
     $(this).addClass("red_text bigger_text");
     console.log($(this).text());
    // $(this).css({color: "red", fontSize: "1.1rem"});
    // $(this).css("color", "red");
    // $(this).css("fontSize", "1.1rem");
    // $("p").toggle();
  
})
// console.log($("img").attr())
$("p").click(function () {
    $(this).after("<p>Hey There</p>");
    
});
$("li").click(function (){
    $(this, ).after("<li>New Item</li>");
});
});