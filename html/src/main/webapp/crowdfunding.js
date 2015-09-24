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

function loadProjects() {
    console.log("projects sent");
    $.getJSON("/api/project", function (data) {
        console.log("projects received " + data);
        $.each(data, function(i,project) {

            innerHTML = '<div class="grid grid_6"><div class="contentItem"><h2><a href="">' + project.name + '</a></h2>';
            innerHTML += '<a href=""><img src="' + project.pictureURL + '" width="220" height="160"></a>';
            innerHTML += '<p style="padding-right: 0">' + project.description + '</p>';
            innerHTML += '<p><a class="redLink" href="" title="Find out more">Find out more</a></p>';
            innerHTML += '</div>';

            $('#projects-list').append( innerHTML);
        });
    })
        .done(function () {
            console.log("projects suceeded");
        })
        .fail(function () {
            console.log("projects failed");
        })
    ;
}
