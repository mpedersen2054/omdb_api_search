$(document).ready(function() {

    $('#search-term').on('submit', function(event) {
        var term = $('#query').val(),
            url = 'http://www.omdbapi.com/?s='+term+'&r=json';
            event.preventDefault();

        getRequest(url);
        $('#query').val(''); // clears input
    })

    function getRequest(searchTerm) {
        $.getJSON(searchTerm, function(data) {
            showResults(data.Search);
        });
    }


    function showResults(results) {
        $('#search-results').html(''); // removes prev search

        for (var i=0; i<results.length; i++) {
            $('#search-results').append('<p>'+results[i].Title+'</p>');
        }
    }



});