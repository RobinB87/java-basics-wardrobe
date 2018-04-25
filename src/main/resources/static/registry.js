function getWardrobe() {
    var wardrobeResult = $.get("/api/wardrobe/get", function (data) {
        var html = "<p>" + data.name + "</p>" +
            "<p>" + data.open + "</p>";

        $("#gameConsole").html(html);
    })
}


function saveWardrobe() {
    var name = $("#name").val();
    console.log(name);

    $.post("/api/wardrobe/create",
        {
            name: name
        },
        function () {
            getWardrobe();
        });
}


/**
 * JavaScript Button Functionalities
 */

// Buttons are closed until startgame is clicked
$("#openBtn").hide();
$("#closeBtn").hide();
$("#getInsideBtn").hide();
$("#getOutsideBtn").hide();


$("#startBtn").click(function () {
    $.post("/api/wardrobe/start", function () {

        $("#startBtn").hide();
        $("#openBtn").show();

        console.log("Welcome to the Narnia game, " + $("#name").val() + ". I hope you have fun! Press the 'open' button to continue.");
        getWardrobe();
    });
});


$("#openBtn").click(function () {
    $.post("/api/wardrobe/open", function () {

        $("#openBtn").hide();
        $("#getInsideBtn").show();

        console.log("The door is open... please enter a possible world of pain, or find redemption!");
        getWardrobe();
    });
});

$("#getInsideBtn").click(function () {
    $.post("/api/wardrobe/inside", function () {

        $("#getInsideBtn").hide();

        //TODO add button to go to Narnia

        console.log("I'm inside, yippay!!!");
        getWardrobe();
    });
});

/**
 * TODO Add functionality om naar Narnia te kunnen gaan (1:10 chance to go there) with Math.random().
 * TODO If not naar Narnia, then show goOutsideBtn and be able to get back in.
 */


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
 * JavaScript Save Functionalities
 */

$("#saveBtn").click(function (e) {
    e.preventDefault();

    saveWardrobe();
});

$("#saveForm").submit(saveWardrobe);
getWardrobe();

