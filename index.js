const colors = ["green", "yellow", "blue", "orange", "red", "purple", "pink", "brown", "cyan"];

// Add an event listener to the "Reload" button
$(".yellow").on("click", function () {
    location.reload(); // This will reload the page
});

// Add an event listener to the "Flipper" button
$(".green").on("click", function () {
    var randomNum = randomNumber();
    $("body").css("background-color", colors[randomNum]);
    $(".clr").text(colors[randomNum]);
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}
