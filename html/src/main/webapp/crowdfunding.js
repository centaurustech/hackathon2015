var fallbackURL = "http://ptxw13040:8181";

function showContribution() {
    $('#crofu-list').hide(500);
    $('#project-view').hide(500);
    $('#project-contribution').show(250);
    window.scrollTo(0, 0);
}

function showList() {
    $('#project-view').hide(500);
    $('#project-contribution').hide(500);
    $('#crofu-list').show(250);
}

function loadProjects( userId, lowerBound) {

    if( lowerBound === undefined) lowerBound = "";

    $.cookie( "userId", userId);

    var urlPrefix = (window.location.href).match("^http") ? "" : fallbackURL;

    $('#featured-list').children().remove();
    $.getJSON( urlPrefix + "/api/project/featured",
        { "userId": userId },
        function (data) {
        fillList( '#featured-list', data);
    })
        .done(function () {
        })
        .fail(function () {
            console.log("featured projects list failed");
        })
    ;

    $('#projects-list').children().remove();
    $('#projects-list').append('<div class="crofu-header"><span>Projects</span></div>');
    $.getJSON(urlPrefix + "/api/project",
        { "lowerBound" : lowerBound},
        function (data) {
        var lastId = fillList( '#projects-list', data);
        $('#projects-list').append('<div class="projects-nav"><a href="#" onclick="loadProjects( \'' + userId + '\', \'' + lastId + '\')">Next</a> </div>');
    })
        .done(function () {
        })
        .fail(function () {
            console.log("projects list failed");
        })
    ;
}

function fillList( id, data) {
    $(id).children("div").remove();
    var innerHTML = '<div class="row">';
    var projectCount = 0;
    $.each(data, function (i, project) {

        projectCount++;
        if( ( projectCount - 1) % 4 == 0 && projectCount > 1) {
            innerHTML += '</div><div class="row">';
        }
        var refHTML = 'href="#" onclick="showProject(\'' + project.id + '\')"';
        innerHTML += '<div class="col-md-3"><div class="project-name"><a ' + refHTML + '>' + project.name + '</a></div>';
        innerHTML += '<a ' + refHTML + ' ><img src="' + project.imgSrc + '" width="100%" height="100%"></a>';
        innerHTML += '<p class="project-description">' + project.description + '</p>';
        innerHTML += '<p><a class="project-more" ' + refHTML + ' title="Find out more">Find out more</a></p>';
        innerHTML += '</div>';
        lastId = project.id;
    });
    innerHTML += '</div>';
    $(id).append(innerHTML);

    return lastId;
}

function showProject(id) {
//    console.log( "I should be showing project " + id);
    $('#crofu-list').hide(500);
    $('#project-contribution').hide(500);
    $('#contribution-project-id').val(id);

    var urlPrefix = (window.location.href).match("^http") ? "" : fallbackURL;

    $.getJSON( urlPrefix + "/api/project/" + encodeURIComponent(id), function (project) {
        $('#project-view-image').attr("src", project.imgSrc);
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

Math.log10 = Math.log10 || function(x) {
    return Math.log(x) / Math.LN10;
}

Math.trunc = Math.trunc || function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

function initCrowdfunding(userId) {
    var innerHTML = '<div id="crofu-list">';
    innerHTML += '<div id="crofu-featured" class="project-list"><div class="crofu-header">Recommended Projects</div><div id="featured-list"></div></div><div class="project-list"></div>';
    innerHTML += '<div id="crofu-projects" class="project-list"><div class="crofu-header">All Projects</div><div id="projects-list"></div></div><div class="project-list"></div>';
    innerHTML += '</div>';
    innerHTML += '            <div id="project-view" style="display: none">';
    innerHTML += '                <div class="project-title"><span id="project-view-name">Project Name<\/span><\/div>';
    innerHTML += '                <div class="project-image"><img id="project-view-image" src=""><\/div>';
    innerHTML += '                <div>';
    innerHTML += '                    <div class="row">';
    innerHTML += '                        <div class="col-md-3">';
    innerHTML += '                            <span class="crofu-dashboard-title">Type</span>';
    innerHTML += '                            <img src="images\/donation.jpg" width="180" height="150">';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3">';
    innerHTML += '                            <span class="crofu-dashboard-title">Target</span>';
    innerHTML += '                            <span class="crofu-dashboard-value" id="project-view-target">-<\/span>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3">';
    innerHTML += '                            <span class="crofu-dashboard-title">Completion</span>';
    innerHTML += '                            <span class="crofu-dashboard-value" id="project-view-completion">-%<\/span>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3">';
    innerHTML += '                            <span class="crofu-dashboard-title">Backers</span>';
    innerHTML += '                            <span class="crofu-dashboard-value" id="project-view-backers">-<\/span>';
    innerHTML += '                        <\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                <\/div>';
    innerHTML += '                <div class="crofu-separator"><span class="label">Progress<\/span><\/div>';
    innerHTML += '                <div>';
    innerHTML += '                    <div class="row" style="padding-left: 50px;padding-right: 50px">';
    innerHTML += '                        <div class="col-md-1">Funds<\/div>';
    innerHTML += '                        <div class="col-md-8">';
    innerHTML += '                            <div class="progress">';
    innerHTML += '                                <div class="progress-bar" role="progressbar" id="project-amount-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="width:33%"><\/div>';
    innerHTML += '                            <\/div>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3" id="project-amount-progress-text"> X out of Y<\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                    <div class="row" style="padding-left: 50px;padding-right: 50px">';
    innerHTML += '                        <div class="col-md-1">Time<\/div>';
    innerHTML += '                        <div class="col-md-8">';
    innerHTML += '                            <div class="progress">';
    innerHTML += '                                <div class="progress-bar" role="progressbar" id="project-time-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="width:66%"><\/div>';
    innerHTML += '                            <\/div>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3" id="project-time-progress-text">X days left<\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                    <div class="row" style="padding:20px;padding-left: 100px; padding-right: 100px">';
    innerHTML += '                        <div class="col-md-7"><button type="button" class="btn btn-success btn-block btn-large" onclick="showContribution()">Donate<\/button><\/div>';
    innerHTML += '                        <div class="col-md-1"><\/div>';
    innerHTML += '                        <div class="col-md-4"><button type="button" class="btn btn-info btn-block" onclick="showList()">Follow<\/button><\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                <\/div>';
    innerHTML += '                <div class="crofu-separator"><span class="label">Description<\/span><\/div>';
    innerHTML += '                <div id="project-description-div">';
    innerHTML += '                    <div id="project-description">Project Description<\/div>';
    innerHTML += '                    <div class="row" style="padding:20px;padding-left: 100px; padding-right: 100px">';
    innerHTML += '                        <div class="col-md-7"><button type="button" class="btn btn-success btn-block btn-large" onclick="showContribution()">Donate<\/button><\/div>';
    innerHTML += '                        <div class="col-md-1"><\/div>';
    innerHTML += '                        <div class="col-md-4"><button type="button" class="btn btn-info btn-block" onclick="showList()">Follow<\/button><\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                <\/div>';
    innerHTML += '            <\/div>';
    innerHTML += '            <div id="project-contribution" style="display: none">';
    innerHTML += '                <div class="project-title"><span id="project-contribution-name">Project Name<\/span><\/div>';
    innerHTML += '                <div class="block text-center" style="padding-top: 10px;">You are about to contribute funds to this project<\/div>';
    innerHTML += '                <form role="form">';
    innerHTML += '                    <input type="hidden" name="project-id" id="contribution-project-id">';
    innerHTML += '                    <input type="hidden" name="user-id" id="contribution-user-id" value="#67:903">';
    innerHTML += '                    <div class="row" style="padding-top: 30px;">';
    innerHTML += '                        <div class="col-md-3"><\/div>';
    innerHTML += '                        <div class="col-md-3" style="text-align: right;height: 34px">';
    innerHTML += '                            <label for="contribution-source" style="line-height:30px" >Source:<\/label>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3">';
    innerHTML += '                            <div class="btn-group">';
    innerHTML += '                                <input type="hidden" name="project-id" id="contribution-source" value="Account ending in -4321">';
    innerHTML += '                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >';
    innerHTML += '                                    Account ending in -4321';
    innerHTML += '                                    <span class="caret"><\/span>';
    innerHTML += '                                <\/button>';
    innerHTML += '                                <ul class="dropdown-menu">';
    innerHTML += '                                    <li><a href="#">Account ending in -4321<\/a><\/li>';
    innerHTML += '                                    <li><a href="#">Account ending in -5678<\/a><\/li>';
    innerHTML += '                                    <li><a href="#">Credit card ending in -0000<\/a><\/li>';
    innerHTML += '                                    <li><a href="#">PayPal<\/a><\/li>';
    innerHTML += '                                <\/ul>';
    innerHTML += '                            <\/div>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3"><\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                    <div class="row" style="padding-top: 5px;" >';
    innerHTML += '                        <div class="col-md-3"><\/div>';
    innerHTML += '                        <div class="col-md-3" >';
    innerHTML += '                            <input type="text" class="form-control" id="contribution-amount" placeholder="Amount" style="text-align: right;" >';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3">';
    innerHTML += '                            <div class="btn-group">';
    innerHTML += '                                <input type="hidden" name="project-id" id="contribution-currency" value="EUR">';
    innerHTML += '                                <button class="btn btn-default dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">';
    innerHTML += '                                    EUR';
    innerHTML += '                                    <span class="caret"><\/span>';
    innerHTML += '                                <\/button>';
    innerHTML += '                                <ul class="dropdown-menu">';
    innerHTML += '                                    <li><a href="#">EUR<\/a><\/li>';
    innerHTML += '                                    <li><a href="#">USD<\/a><\/li>';
    innerHTML += '                                    <li><a href="#">GBP<\/a><\/li>';
    innerHTML += '                                <\/ul>';
    innerHTML += '                            <\/div>';
    innerHTML += '                        <\/div>';
    innerHTML += '                        <div class="col-md-3"><\/div>';
    innerHTML += '                    <\/div>';
    innerHTML += '                <\/form>';
    innerHTML += '                <div class="row" style="padding:20px;padding-left: 100px; padding-right: 100px">';
    innerHTML += '                    <div class="col-md-3"><\/div>';
    innerHTML += '                    <div class="col-md-3"><button type="button" class="btn btn-success btn-block btn-large" id="contribute-button" onclick="sendContribution()">Donate<\/button><\/div>';
    innerHTML += '                    <div class="col-md-3"><button type="button" class="btn btn-warning btn-block" onclick="showList()">Cancel<\/button><\/div>';
    innerHTML += '                    <div class="col-md-3"><\/div>';
    innerHTML += '                <\/div>';
    innerHTML += '            <\/div>';

    $('#crowdfunding').append(innerHTML);

    var innerHTML='';
    innerHTML += '<div class="modal fade" id="thank-you-modal">';
    innerHTML += '    <div class="modal-dialog">';
    innerHTML += '        <div class="modal-content">';
    innerHTML += '            <div class="modal-header">';
    innerHTML += '                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    innerHTML += '                <h4 class="modal-title">Thank you!</h4>';
    innerHTML += '            </div>';
    innerHTML += '            <div class="modal-body">';
    innerHTML += '                <p>Your contribution has been recorded.<br>Thank you for your support!</p>';
    innerHTML += '            </div>';
    innerHTML += '            <div class="modal-footer">';
    innerHTML += '                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    innerHTML += '            </div>';
    innerHTML += '        </div>';
    innerHTML += '    </div>';
    innerHTML += '</div>';
    innerHTML += '';

    $('body').append( innerHTML);

    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
        $(this).parents('.btn-group').find('input').val(selText);
    });

    $('#thank-you-modal').on('hidden.bs.modal', function() {
        location.reload();
    });


    loadProjects(userId);
}

function sendContribution() {
    var amount = $('#contribution-amount').val();
    var projectId = $('#contribution-project-id').val();
    var amount = $('#contribution-amount').val();
    var currency = $('#contribution-currency').val();
    var source = $('#contribution-source').val();
    var userId = $('#contribution-user-id').val();

    var data = { "id" : projectId,
        "amount" : amount,
        "currency" : currency,
        "source" : source,
        "userId" : userId
        //"userId" : $.cookie( "userId")
    };

    console.log("Contributing to Project id" + projectId + " with " + amount + " " + currency + " from " + source + " with data= " + data);

    var urlPrefix = (window.location.href).match("^http") ? "" : fallbackURL;

    $.post( urlPrefix + "/api/payment/create", data, function (r) {
        $('#thank-you-modal').modal('show');
    });
}