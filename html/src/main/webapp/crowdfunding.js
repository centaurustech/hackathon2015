$("#ping-button").click(function () {
    console.log("projects ping");
    $.ajax({
        url: "/api/ping",
        dataType: "text"
    })
        .done(function (data) {
            console.log("Ping received " + data);
        })
        .fail(function () {
            console.log("Ping failed");
        })
    ;
});

$(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    $(this).parents('.btn-group').find('input').val(selText);
});

$('#contribute-button').click(function () {
    var amount = $('#contribution-amount').val();
    var projectId = $('#contribution-project-id').val();
    var amount = $('#contribution-amount').val();
    var currency = $('#contribution-currency').val();
    var source = $('#contribution-source').val();

    var data = { "id" : projectId,
                 "amount" : amount,
                 "currency" : currency,
                 "source" : source};

    console.log("Contributing at Project id" + projectId + " with " + amount + " " + currency + " from " + source);
    $.post("/api/payment/create", data, function(r) {
            $('#thank-you-modal').modal('show');
        }
    );
});

$('#thank-you-modal').on('hidden.bs.modal', function() {
    location.reload();
});

function showContribution() {
    $('#project-view').hide(500);
    $('#projects-list').hide(500);
    $('#featured-list').hide(500);
    $('#project-contribution').show(250);
    window.scrollTo(0, 0);
}

function showList() {
    $('#project-view').hide(500);
    $('#project-contribution').hide(500);
    $('#featured-list').show(250);
    $('#projects-list').show(250);
}

function loadProjects() {
    var titleFproject = '<h3>Featured Projects</h3>';
    var titleProjects = '<h3>Projects</h3>';

    $('#featured-list').append(titleFproject);
    $.getJSON("/api/project/featured", function (data) {
        $.each(data, function (i, project) {

            var refHTML = 'href="#" onclick="showProject(\'' + project.id + '\')"';
            var innerHTML = '<div class="grid grid_6"><div class="contentItem"><h2 style="font-weight: bolder;"><a ' + refHTML + '>' + project.name + '</a></h2>';
            innerHTML += '<a ' + refHTML + '><img src="' + project.imgSrc + '" width="220" height="160"></a>';
            innerHTML += '<p>' + project.description + '</p>';
            innerHTML += '<p><a class="redLink" ' + refHTML + ' title="Find out more">Find out more</a></p>';
            innerHTML += '</div>';

            $('#featured-list').append(innerHTML);
        });
    })
        .done(function () {
        })
        .fail(function () {
            console.log("projects failed");
        })
    ;

    $('#projects-list').append(titleProjects);
    $.getJSON("/api/project", function (data) {
        $.each(data, function (i, project) {

            var refHTML = 'href="#" onclick="showProject(\'' + project.id + '\')"';
            var innerHTML = '<div class="grid grid_6"><div class="contentItem"><h2 style="font-weight: bolder;"><a ' + refHTML + '>' + project.name + '</a></h2>';
            innerHTML += '<a ' + refHTML + '><img src="' + project.imgSrc + '" width="220" height="160"></a>';
            innerHTML += '<p>' + project.description + '</p>';
            innerHTML += '<p><a class="redLink" ' + refHTML + ' title="Find out more">Find out more</a></p>';
            innerHTML += '</div>';

            $('#projects-list').append(innerHTML);
        });
    })
        .done(function () {
        })
        .fail(function () {
            console.log("projects failed");
        })
    ;
}

function showProject(id) {
//    console.log( "I should be showing project " + id);
    $('#projects-list').hide(500);
    $('#project-contribution').hide(500);
    $('#contribution-project-id').val(id);

    $.getJSON("/api/project/" + encodeURIComponent(id), function (project) {
        $('#project-view-name').text(project.name);
        $('#project-contribution-name').text(project.name);
        $('#project-view-target').text(to4Chars(project.targetAmount));
        var amountPct = 0;
        if (project.targetAmount != 0) {
            amountPct = Math.round((project.currentAmount / project.targetAmount) * 100);
        }
        $('#project-view-completion').text(amountPct.toString() + '%');
        $('#project-view-backers').text(project.backers);

        $('#project-amount-progress-bar').width(amountPct.toString() + '%');
        $('#project-amount-progress-text').text(project.currentAmount + ' of ' + project.targetAmount + ' ' + project.currency);

        var targetDate = Date.parse(project.targetDate);
        var creationDate = Date.parse(project.creationDate);
        var dateDifference = (targetDate - Date.now());
        var daysDifference = Math.round(dateDifference / 1000 / 3600 / 24);
        var targetDuration = ( targetDate - creationDate);
        var timePercent = 100 - (targetDuration == 0 ? 0 : Math.min(Math.round(dateDifference / targetDuration * 100), 100));

        $('#project-time-progress-bar').width(timePercent.toString() + '%');

        if (dateDifference > 0) {
            $('#project-time-progress-text').text(daysDifference + ' days left');
        } else {
            $('#project-time-progress-text').text('Completed');
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

function to4Chars(v) {
    var order = Math.trunc(Math.log10(v) / 3);
    var magnitude = Math.pow(10,3*order);
    var a = Math.trunc( v / magnitude);
    var blen = 3 - Math.trunc( Math.log10(a));
    var b = v % magnitude;
    var u = ["","k","m","b","t","q"];

    return a + ( b > 0 ? ("," + b.toString().substr(0,blen)) : "" ) + u[order];
}