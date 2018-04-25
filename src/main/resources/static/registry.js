function getWardrobe() {
   var wardrobeResult = $.get("/api/wardrobe/get", function(data) {
       var html = "<p>" + data.name + "</p>";

       $("#wardrobe").html(html);
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

$("#openBtn").click(function () {
    $.post("/api/wardrobe/open", function () {
        console.log("open!");
        getWardrobe();
    });
});

$("#closeBtn").click(function () {
    $.post("/api/wardrobe/close", function () {
        console.log("close!");
        getWardrobe();
    });
});

$("#getInsideBtn").click(function () {
    $.post("/api/wardrobe/inside", function () {
        console.log("I'm inside, yippay!!");
        getWardrobe();
    });
});

$("#getOutsideBtn").click(function () {
    $.post("/api/wardrobe/outside", function () {
        console.log("Scheisse!!, ik moet weer naar buiten :-(");
        getWardrobe();
    });
});

$("#headFirstBtn").click(function () {
    $.post("/api/wardrobe/headfirst", function () {
        console.log("Watch out! Coming through!!!!");
        getWardrobe();
    });
});

$("#saveBtn").click(function(e) {
    e.preventDefault();

    saveWardrobe();
});

$("#saveForm").submit(saveWardrobe);
getWardrobe();