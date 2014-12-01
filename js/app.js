$(document).ready(function() {

    $('#search-term').on('submit', function(event) {
        var term = $('#query').val(),
            url = 'http://www.omdbapi.com/?s='+term+'&r=json';

        event.preventDefault();

        $.getJSON(url, function(data) {
            showResults(data.Search);
        });

        // $('#query').val('');
    })


    function showResults(results) {
        $('#search-results').html(''); // removes prev search

        for (var i=0; i<results.length; i++) {
            $('#search-results').append(results[i].Title + '<br>');
        }
    }



});