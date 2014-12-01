$(document).ready(function() {

    $('#search-term').on('submit', function(event) {
        var term = $('#query').val();

        event.preventDefault();
        getRequest(term);
        $('#query').val(''); // clears input
    })

    function getRequest(searchTerm) {
        var url = 'http://www.omdbapi.com';
        params = {
            s: searchTerm,
            r: 'json'
        }

        $.getJSON(url, params, function(data) {
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