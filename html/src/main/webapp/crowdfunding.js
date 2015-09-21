$("#projects-button").click( function() {
    console.log("projects sent");
    $.getJSON("/api/projects", function(data) {
        console.log("projects received " + data);
        })
        .done( function() {
            console.log("projects suceeded");
        })
        .fail( function() {
            console.log("projects failed");
        })
    ;
});

$("#ping-button").click( function() {
    console.log("projects ping");
    $.ajax( {
            url:"/api/ping",
            dataType: "text"
        })
        .done( function( data){
            console.log("Ping received " + data);
        })
        .fail(function(){
            console.log("Ping failed");
        })
    ;
});