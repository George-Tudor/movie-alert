$(() => {

    $("body").on('click', '#movieSearch', function () {
        console.log('testing')
            fetch('https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=en-US&query=fight&page=1&include_adult=false')
                .then(response => {
                    return console.log(response.json());
                })

                })
        });


