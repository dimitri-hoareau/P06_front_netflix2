

function buildModal (movieTitle, movieId) {
    fetch("http://localhost:8000/api/v1/titles/" + movieId)


    .then(function(res) {
        if (res.ok) {
        return res.json();

        }
    })
    .then(function(value) {
        generateModal(value)

    })

    .catch(function(err) {
    console.log(err)
    });
}



function generateModal(movieData) {
    let modal = document.createElement("div")
    modal.id = "myModal"
    modal.classList.add("modal")
    document.querySelector('body').appendChild(modal);

    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    modal.appendChild(modalContent)

    let span = document.createElement("span")
    span.classList.add("close")
    span.textContent = "x"
    modalContent.appendChild(span)

    function getMovieImage (data) {
        let image = document.createElement("img")
        image.className = "modal-content--image"
        image.src = data
        modalContent.appendChild(image)
    }


    function createModalTextElements(title, data){
        typeOfData = typeof(data)
        let container = document.createElement("div")
        container.className = "modal-content__container--" + typeOfData
        let elementTitle = document.createElement("p")
        elementTitle.textContent = title
        elementTitle.className = "modal-content__container__title"
        let element
        if (typeOfData === "string" || typeOfData === "number") {
            element = document.createElement("p")
            element.textContent = data
        } else {
            element = document.createElement("ul")
            if (data === null) {
            }else {

                for (i=0;i<data.length;i++) {
      

                    let elementList = document.createElement("li")
                    elementList.textContent = data[i]
                    element.appendChild(elementList)
                }
            }
    }
        container.appendChild(elementTitle)
        container.appendChild(element)
        modalContent.appendChild(container)
    }


    getMovieImage(movieData.image_url)
    createModalTextElements("titre : ", movieData.title)
    createModalTextElements("genres : ", movieData.genres)
    createModalTextElements("Année : ", movieData.date_published)
    createModalTextElements("votes : ", movieData.votes)
    createModalTextElements("score IMDB : ", movieData.imdb_score)
    createModalTextElements("réalisateurs : ", movieData.directors)
    createModalTextElements("acteurs : ", movieData.actors)
    createModalTextElements("durée : ", movieData.duration + " minutes")
    createModalTextElements("pays : ", movieData.countries)
    createModalTextElements("résultat au box-office : ", movieData.worldwide_gross_income + " visitors")
    createModalTextElements("résumé : ", movieData.long_description)



    modal.style.display = "block";

    span.onclick = function() {
    modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
}

function openModal (movieTitle, movieId) {
    buildModal(movieTitle, movieId)
    // modal.style.display = "block";
}




