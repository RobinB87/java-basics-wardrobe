function getWardrobe() {
   var wardrobeResult = $.get("/api/wardrobe/get", function(data) {
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

$("#openBtn").click(function () {
    $.post("/api/wardrobe/open", function () {
        $("#openBtn").hide();
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

$("#saveBtn").click(function(e) {
    e.preventDefault();

    saveWardrobe();
});

$("#saveForm").submit(saveWardrobe);
getWardrobe();

function isOpen(open){
    if(open){
        $("#openBtn").hide();
        $("#closeBtn").show();
        return("Open");
    }
}

//isOpen();