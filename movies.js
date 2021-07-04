

let actionValues = []

function getAllMovie (value, type) {
    actionValues.push(value)
    if (actionValues.length === 2) {
        let listOfAllMovies = actionValues[0].results.concat(actionValues[1].results)
        listOfAllMovies.splice(6,3)
        createActionCarousel(listOfAllMovies, type)
        actionValues = []
    }
}

function createActionCarousel (listOfAllMovies, type) {
    function createCarouselList (listOfAllMovies, index) {
        let film = document.createElement("div")
            film.style.backgroundImage = "url(" + listOfAllMovies.image_url + ")"
            film.classList.add("caroussel__slide__movie")
            let filmTitle = document.createElement("h3") 
            filmTitle.textContent = listOfAllMovies.title
            film.appendChild(filmTitle)
            let parent = document.getElementById("carousel__slide" + index + "_" + type)
            parent.appendChild(film)
    }
        for (let i = 0; i <7; i++){
            if (i < 4) {
                createCarouselList(listOfAllMovies[i], 0)
            } else {
                createCarouselList(listOfAllMovies[i], 1)
            }

        }

    }



function fetchMultiplePages (type) {


    for (let i=1; i <3; i++) {
        let url =""
        if (type === "best-movies") {
            url ="http://localhost:8000/api/v1/titles/?page=" + i + "&sort_by=+-imdb_score"
        }else {
            url ="http://localhost:8000/api/v1/titles/?genre=" + type + "&page=" + i + "&sort_by=+-imdb_score"
        }
        fetch(url)


    .then(function(res) {
        if (res.ok) {
        return res.json();

        }
    })
    .then(function(value) {
        getAllMovie(value, type)

    })

    .catch(function(err) {
    console.log(err)
    });
    }

}

fetchMultiplePages("best-movies")
fetchMultiplePages("Action")

