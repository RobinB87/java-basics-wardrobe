function getWardrobes() {
    $.get("/api/wardrobe/", function (data) {

        if (data.length <= 0){
            return
        }

        var html = "";

        for (var i = 0; i < data.length; i++) {

            html += "<p>" + data[i].name + " - " + data[i].id + "</p>";
        }
        $("#wardrobes").html(html);
    });
}

function saveWardrobe(e) {
    e.preventDefault();

    var name = $("#name").val();
    var id = $("#id").val();

    console.log("Name of the wardrobe: " + name + ", id: " + id);

    $.get("/api/wardrobe/" + name + "/" + id, function() {
        getWardrobes();
    });
    //deze get verwijst naar de @GetMapping

    $("#name").val("");
}

$("#saveForm").submit(saveWardrobe);
getWardrobes();