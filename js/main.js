const btnOpen = document.getElementById("btn_open-content");

$(".page-heading, .page-subheading-one, .page-subheading-two, .page-subheading-three, .page-subheading-four, #easter-egg, .button-open, .content-container").hide();

$(document).ready(function() {
    $(".page-heading").delay(100).fadeIn("slow");
    $(".page-subheading-one").delay(600).fadeIn("slow");
    $(".page-subheading-two").delay(1100).fadeIn("slow");
    $(".page-subheading-three").delay(1600).fadeIn("slow");
    $(".page-subheading-four").delay(2100).fadeIn("slow");
   
    $(".button-open").delay(2600).fadeIn("slow");
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

