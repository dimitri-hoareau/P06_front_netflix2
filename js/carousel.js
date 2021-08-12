
    function navigate(id, index, type) {
        let listElement = document.getElementsByClassName('carousel__navigation-item' + type)
        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i].getAttribute("data-active") === "active") {
                if (listElement[i].getAttribute("id") === (id + type)) {
                    break;
                } else {
                    listElement[i].removeAttribute("data-active")
                    document.getElementById((id + type)).setAttribute("data-active", "active")
                    for (let i = 0; i < document.getElementsByClassName('carousel__slide' + type).length; i++) {
                        if (document.getElementsByClassName('carousel__slide' + type)[i].getAttribute("data-active") === "active") {
                            document.getElementsByClassName('carousel__slide' + type)[i].removeAttribute("data-active")
                        }
                    }
                    document.getElementById('carousel__slide' + index + type).setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + index + type
                    break;
                }

            }
        }
    }



    function navigateNext(type) {
        let listElement = document.getElementsByClassName('carousel__slide' + type)

        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i + 1]) {
                if (listElement[i].getAttribute("data-active") === "active") {
                    listElement[i].removeAttribute("data-active")
                    listElement[i + 1].setAttribute("data-active", "active")
                    document.getElementById('carousel__navigation-item_' + i + type).removeAttribute("data-active")
                    document.getElementById('carousel__navigation-item_' + (i + 1) + type).setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + (i + 1) + type
                    break;
                }
            } else {
                if (listElement[i].getAttribute("data-active") === "active") {
                    listElement[i].removeAttribute("data-active")
                    listElement[0].setAttribute("data-active", "active")
                    document.getElementById('carousel__navigation-item_' + i + type).removeAttribute("data-active")
                    document.getElementById('carousel__navigation-item_' + "0" + type).setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + "0" + type
                    break;
                }

            }
        }
    }

    function navigatePrevious(type) {
        let listElement = document.getElementsByClassName('carousel__slide' + type)
        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i - 1]) {
                if (listElement[i].getAttribute("data-active") === "active") {
                    listElement[i].removeAttribute("data-active")
                    listElement[i - 1].setAttribute("data-active", "active")
                    document.getElementById('carousel__navigation-item_' + i + type).removeAttribute("data-active")
                    document.getElementById('carousel__navigation-item_' + (i - 1) + type).setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + (i - 1) + type
                    break;
                }
            } else {
                arrayLenght = listElement.length - 1
                if (listElement[i].getAttribute("data-active") === "active") {
                    listElement[i].removeAttribute("data-active")
                    listElement[arrayLenght].setAttribute("data-active", "active")
                    document.getElementById('carousel__navigation-item_' + i + type).removeAttribute("data-active")
                    document.getElementById('carousel__navigation-item_' + arrayLenght + type).setAttribute("data-active", "active")
                    window.location.href='#carousel__slide' + "0" + type
                    break;
            }
        } 
    }
}