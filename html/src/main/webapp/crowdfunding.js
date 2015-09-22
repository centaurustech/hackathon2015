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
    $.getJSON("/api/project", function (data) {
        $.each(data.array, function(i,project) {

            // Force it for now, it should be populated soon
            project.id = 12;
            var refHTML = 'href="#" onclick="showProject(' + project.id + ')"';
            var innerHTML = '<div class="grid grid_6"><div class="contentItem"><h2><a ' + refHTML + '>' + project.name + '</a></h2>';
            innerHTML += '<a ' + refHTML + '><img src="' + project.pictureURL + '" width="220" height="160"></a>';
            innerHTML += '<p style="padding-right: 0">' + project.description + '</p>';
            innerHTML += '<p><a class="redLink" ' + refHTML + ' title="Find out more">Find out more</a></p>';
            innerHTML += '</div>';

            $('#projects-list').append( innerHTML);
        });
    })
        .done(function () {
//            console.log("projects suceeded");
        })
        .fail(function () {
            console.log("projects failed");
        })
    ;
}

function showProject( id) {
//    console.log( "I should be showing project " + id);
    $('#projects-list').hide(500);
    // TODO load data from REST
    $('#project-view').show(250);
}