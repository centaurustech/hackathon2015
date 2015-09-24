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

$('#contribute-button').click( function() {
    var amount = $('#contribution-amount').val();
    var projectId = $('#contribution-project-id').val();
    var url = "/api/project/" + projectId + "/payment/" + amount;
    console.log("Contributing at " + url);
    $.post( url, function( data) {
        console.log("Contribution result " + data);
    });
});

function showContribution() {
    $('#project-view').hide(500);
    $('#projects-list').hide(500);
    $('#project-contribution').show(250);
    window.scrollTo( 0, 0);
}

function showList() {
    $('#project-view').hide(500);
    $('#project-contribution').hide(500);
    $('#projects-list').show(250);
}

function loadProjects() {
    $.getJSON("/api/project", function (data) {
        $.each(data, function(i,project) {

            var refHTML = 'href="#" onclick="showProject(' + project.id + ')"';
            var innerHTML = '<div class="grid grid_6"><div class="contentItem"><h2 style="font-weight: bolder;"><a ' + refHTML + '>' + project.name + '</a></h2>';
            innerHTML += '<a ' + refHTML + '><img src="' + project.imgSrc + '" width="220" height="160"></a>';
            innerHTML += '<p>' + project.description + '</p>';
            innerHTML += '<p><a class="redLink" ' + refHTML + ' title="Find out more">Find out more</a></p>';
            innerHTML += '</div>';

            $('#projects-list').append( innerHTML);
        });
    })
        .done(function () {
        })
        .fail(function () {
            console.log("projects failed");
        })
    ;
}

function showProject( id) {
//    console.log( "I should be showing project " + id);
    $('#projects-list').hide(500);
    $('#project-contribution').hide(500);
    $('#contribution-project-id').val(id);

    $.getJSON("/api/project/" + id, function (project) {
        $('#project-view-name').text( project.name);
        $('#project-contribution-name').text( project.name);
        $('#project-view-target').text( to4Chars(project.targetAmount));
        var amountPct = 0;
        if( project.targetAmount != 0) {
            amountPct = Math.round((project.currentAmount / project.targetAmount) * 100);
        }
        $('#project-view-completion').text( amountPct.toString() + '%');
        $('#project-view-backers').text( project.backers);

        $('#project-amount-progress-bar').width( amountPct.toString() + '%');
        $('#project-amount-progress-text').text( project.currentAmount + ' of ' + project.targetAmount + ' ' + project.currency );

        var targetDate = Date.parse( project.targetDate);
        var creationDate = Date.parse( project.creationDate);
        var dateDifference = (targetDate - Date.now());
        var daysDifference = Math.round( dateDifference / 1000 / 3600 / 24);
        var targetDuration = ( targetDate - creationDate);
        var timePercent = 100 - (targetDuration == 0 ? 0 : Math.min( Math.round( dateDifference / targetDuration * 100), 100));

        $('#project-time-progress-bar').width( timePercent.toString() + '%');

        if( dateDifference > 0) {
            $('#project-time-progress-text').text( daysDifference + ' days left');
        } else {
            $('#project-time-progress-text').text( 'Completed');
        }

        $('#project-description').text(project.description);
    })
        .done(function () {
//            console.log("projects succeeded");
        })
        .fail(function () {
            console.log("project view failed");
        })
    ;
    $('#project-view').show(250);
}

function to4Chars( amount) {
    amount = Math.round( amount);
    // [0-1k[
    if( amount < 1000) return amount;
    // [1k,10k[ => 2d,1d
    if( amount < 10000) return Math.round( amount / 1000) + ',' + Math.round( amount % 1000) + 'k';
    // [10k,100k[ => 2d,1d
    if( amount < 100000) return Math.round( amount / 1000) + ',' + Math.round( amount / 100 % 10) + 'k';
    // [100k,1m[ => 3d + k
    if( amount < 1000000) return Math.round( amount / 1000) + 'k';
    // [1m < 10m[ 1d,3d
    if( amount < 10000000) return Math.round( amount / 1000000) + ',' + Math.round( amount / 1000 % 1000) + 'm';
    // [10m,100m[ => 2d,1d
    if( amount < 100000000) return Math.round( amount / 1000000) + ',' + Math.round( amount / 100000 % 10) + 'm';
    // [100m,1b[ => 3d + k
    if( amount < 1000000000) return Math.round( amount / 1000000) + 'm';
    // [1m < 10m[ 1d,3d
    if( amount < 10000000000) return Math.round( amount / 1000000000) + ',' + Math.round( amount / 1000000 % 1000) + 'b';
    // [10m,100m[ => 2d,1d
    if( amount < 100000000000) return Math.round( amount / 1000000000) + ',' + Math.round( amount / 100000000 % 10) + 'b';
    // [100m,1b[ => 3d + k
    return Math.round( amount / 1000000000) + 'b';
}