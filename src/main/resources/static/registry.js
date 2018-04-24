function getWardrobes() {
    $.get("/api/wardrobe", function (data) {

        if (data.length <= 0){
            return
        }

        var html = "";

        for (var i = 0; i < data.length; i++) {

            html += "<p>" + data[i].name + " - " + "</p>";
        }
        $("#wardrobes").html(html);
    });
}

function saveWardrobe(e) {
    e.preventDefault();

    var name = $("#name").val();

    console.log("Name of the wardrobe: " + name);

    $.get("/api/wardrobe" + name + "/", function() {
        getWardrobes();
    });  //deze get verwijst naar de @GetMapping

    $("#name").val("");
}

$("#saveForm").submit(saveWardrobe);
getWardrobes();