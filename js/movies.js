

let actionValues = []
let bestMovieArray = []

function getAllMovie (value, type) {

    if (type === "best-movies") {
        bestMovieArray.push(value)
        if (bestMovieArray.length === 2) {
            let listOfAllMovies = bestMovieArray[0].results.concat(bestMovieArray[1].results)
            getTheBestMovie(listOfAllMovies[0])
            listOfAllMovies.shift()
            listOfAllMovies.splice(6,2)
            createActionCarousel(listOfAllMovies, type)
            bestMovieArray = []
        }

    } else {

        actionValues.push(value)
        if (actionValues.length === 2) {
            let listOfAllMovies = actionValues[0].results.concat(actionValues[1].results)
            listOfAllMovies.splice(6,3)
            createActionCarousel(listOfAllMovies, type)
            actionValues = []
        }
    }

}

function getTheBestMovie (bestMovie) {
document.getElementById("best_movie__title").textContent = bestMovie.title
document.getElementById("best_movie__bloc--image").style.backgroundImage = "url(" + bestMovie.image_url + ")"
document.getElementById("best_movie__button_knowMore").addEventListener("click", function(){
    openModal(bestMovie.title, bestMovie.id)
})

}


function createActionCarousel (listOfAllMovies, type) {
    function createCarouselList (selectedMovie, index) {
        let film = document.createElement("div")
        titleMovie = selectedMovie.title

            film.style.backgroundImage = "url(" + selectedMovie.image_url + ")"
            film.classList.add("caroussel__slide__movie")
            let filmTitle = document.createElement("h3")
            filmTitle.classList.add("film_title_detail")
            filmTitle.textContent = titleMovie
            film.appendChild(filmTitle)
            let parent = document.getElementById("carousel__slide" + index + "_" + type)
            parent.appendChild(film)
            film.addEventListener("click", function(){
                openModal(filmTitle.textContent, selectedMovie.id)
            })
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
fetchMultiplePages("Thriller")
fetchMultiplePages("Comedy")


