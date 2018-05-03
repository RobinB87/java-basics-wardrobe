function getWardrobe() {
    var wardrobeResult = $.get("/api/wardrobe/get", function (data) {

        console.table(data);
        var html = "<p>" + "Welcome " + data.name + ". Press the start button to start the game." + "</p>" +
            "<p>" + "The door is open: " + data.open + "</p>" +
            "<p>" + "You are now inside: " + data.inside + "</p>" +
            "<p>" + "You broke the closet: " + data.broken + "</p>";

        $("#gameConsole").html(html);
    })
}

function saveWardrobe() {
    var name = $("#name").val();
    console.log("Welcome " + name + ". Press the start button to start the game.");

    $.post("/api/wardrobe/create",
        {
            name: name
        },
        function () {
            getWardrobe();
        });
}


/**
 * JavaScript button functionalities
 */

// Buttons are closed until startgame is clicked
$("#openBtn").hide();
$("#closeBtn").hide();
$("#getInsideBtn").hide();
$("#enterNarniaBtn").hide();
$("#getOutsideBtn").hide();


$("#startBtn").click(function () {
    $.post("/api/wardrobe/start", function () {

        $("#startBtn").hide();
        $("#openBtn").show();

        console.log("The Narnia game has started, " + $("#name").val() + ". I hope you have fun! Press the 'open' button to continue.");
        getWardrobe();
    });
});


$("#openBtn").click(function () {
    $.post("/api/wardrobe/open", function () {

        $("#openBtn").hide();
        $("#getInsideBtn").show();

        console.log("The door is open... enter it to find redemption... or a possible world of pain...! HUHAUHAHAHAHAHUHAAH");
        getWardrobe();
    });
});

$("#getInsideBtn").click(function () {
    $.post("/api/wardrobe/inside", function () {

        $("#getInsideBtn").hide();
        $("#enterNarniaBtn").show();

        console.log("I'm inside, yippay!!!");
        getWardrobe();
    });
});

$("#enterNarniaBtn").click(function () {
    function calcChance() {
        if (Math.random() > 0.5 === true) {
            window.open('/narnia.html', 'Narnia');
        } else {
            $("#enterNarniaBtn").hide();
            $("#getOutsideBtn").show();
        }
    }
        var chance = calcChance();
        console.log(chance);
});

$("#closeBtn").click(function () {
    $.post("/api/wardrobe/close", function () {
        console.log("close!");
        getWardrobe();
    });
});

$("#getOutsideBtn").click(function () {
    $.post("/api/wardrobe/outside", function () {

        $("#getOutsideBtn").hide();
        $("#getInsideBtn").show();

        console.log("Scheisse!!, ik moet weer naar buiten :-(");
        getWardrobe();
    });
});


/**
 * headfirst is an opportunity to make fun, as I really like humor and hobby's.
 * however, there is a chance you get caught by the housekeeper.
 * If so, you cannot press any buttons for 10 seconds.
 *
 * TODO add chance functionality (1:10)
 * TODO add delay functionality
 */


$("#headFirstBtn").click(function (e) {
    e.preventDefault();
    var force = $("#force").val();
    $.post("/api/wardrobe/headfirst", {
        force: force
    }, function () {
        console.log("Coming through with force!#$!! Watch out, force level: " + force + "!");
        getWardrobe();
    });
});


/**
 * JavaScript save functionalities
 */

$("#saveBtn").click(function (e) {
    e.preventDefault();

    saveWardrobe();
});

$("#saveForm").submit(saveWardrobe);
getWardrobe();

