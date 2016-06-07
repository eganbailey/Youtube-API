$(document).ready(function () {

    // STEP 1 - get the input from the user
    $("#search-form").submit(function (event) {
        event.preventDefault();
        getResults($("#query").val());
    });

    // STEP 2 - using the input from the user (query) make the API call to get the JSON response
    function getResults(query) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                "part": "snippet",
                "key": "AIzaSyB1cnySzrn2c-DwHoFtU5CKydZXW2VEBiQ",
                "q": query,
                "type": "video"
            },
            function (data) {
                if (data.pageInfo.totalResults == 0) {
                    alert("No videos found!");
                }
                displaySearchResults(data.items);
            }
        );
    }
    function displaySearchResults(videos) {

        var htmlOutput = "";

        $.each(videos, function (index, video) {
            htmlOutput += "<li><p>" + video.snippet.title + "</p><a href='https://www.youtube.com/watch?v=" + video.id.videoId + "' target='_blank'><img src='" + video.snippet.thumbnails.high.url + "'/></a></li>";
        });
        $("#search-results ul").html(htmlOutput);
    }
});