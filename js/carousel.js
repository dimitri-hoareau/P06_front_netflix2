
    function navigateNext(type) {
        var x = window.pageXOffset
        var y = window.pageYOffset;
            let listElement = document.getElementsByClassName('carousel__slide' + type)
            for (let i = 0; i < listElement.length; i++) {
                if (listElement[i + 1]) {
                    if (listElement[i].getAttribute("data-active") === "active") {
                        listElement[i].removeAttribute("data-active")
                        listElement[i + 1].setAttribute("data-active", "active")
                        window.location.href='#carousel__slide' + (i + 1) + type
                        window.scrollTo(x,y)

                        break;
                    }
                } else {
                    if (listElement[i].getAttribute("data-active") === "active") {
                        listElement[i].removeAttribute("data-active")
                        listElement[0].setAttribute("data-active", "active")
                        window.location.href='#carousel__slide' + "0" + type
                        window.scrollTo(x,y)
                    }

                }
            }
    }

    function navigatePrevious(type) {
        var x = window.pageXOffset
        var y = window.pageYOffset;
        let listElement = document.getElementsByClassName('carousel__slide' + type)
        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i - 1]) {
                if (listElement[i].getAttribute("data-active") === "active") {
                    listElement[i].removeAttribute("data-active")
                    listElement[i - 1].setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + (i - 1) + type
                    window.scrollTo(x,y)
                    break;
                }
            } else {
                arrayLenght = listElement.length - 1
                if (listElement[i].getAttribute("data-active") === "active") {
                    listElement[i].removeAttribute("data-active")
                    listElement[arrayLenght].setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + "0" + type
                    window.scrollTo(x,y)
                    break;
            }
        } 
    }
}