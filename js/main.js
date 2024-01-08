const btnOpen = document.getElementById("btn_open-content");

$(".page-heading, .page-subheading-one, .page-subheading-two, .page-subheading-three, .page-subheading-four, #easter-egg, .button-open, .content-container").hide();

$(document).ready(function() {
    $(".page-heading").delay(100).fadeIn("slow");
    $(".page-subheading-one").delay(1000).fadeIn("slow");
    $(".page-subheading-two").delay(2000).fadeIn("slow");
    $(".page-subheading-three").delay(3000).fadeIn("slow");
    $(".page-subheading-four").delay(4000).fadeIn("slow");
   
    $(".button-open").delay(5000).fadeIn("slow");
})

btnOpen.addEventListener('click', showContent);

function showContent() {
    $(document).ready(function () {
        $(".button-open").fadeOut("slow");
        $(".content-container").fadeIn("slow");
    })
}

function showEasterEgg() {
    $("#easter-egg").fadeIn("slow");
}

function hideEasterEgg() {
    $("#easter-egg").fadeOut("slow");
}

