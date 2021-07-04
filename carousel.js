
    function navigate(id, index, type) {
        let listElement = document.getElementsByClassName('carousel__navigation-item')
        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i].getAttribute("data-active") === "active") {
                if (listElement[i].getAttribute("id") === (id + type)) {
                    break;
                } else {
                    listElement[i].removeAttribute("data-active")
                    document.getElementById((id + type)).setAttribute("data-active", "active")
                    for (let i = 0; i < document.getElementsByClassName('carousel__slide').length; i++) {
                        if (document.getElementsByClassName('carousel__slide')[i].getAttribute("data-active") === "active") {
                            document.getElementsByClassName('carousel__slide')[i].removeAttribute("data-active")
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
        let listElement = document.getElementsByClassName('carousel__slide')


        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i].getAttribute("data-active") === "active") {
                listElement[i + 1].setAttribute("data-active", "active")
                listElement[i].removeAttribute("data-active")
                document.getElementById('carousel__navigation-item_' + i + type).removeAttribute("data-active")
                document.getElementById('carousel__navigation-item_' + (i + 1) + type).setAttribute("data-active", "active")
                window.location.href='#carousel__slide' + (i + 1) + type

                break;
            }
        }
    }

    function navigatePrevious(type) {
        let listElement = document.getElementsByClassName('carousel__slide')
        for (let i = 0; i < listElement.length; i++) {
            if (listElement[i].getAttribute("data-active") === "active") {
                listElement[i - 1].setAttribute("data-active", "active")
                listElement[i].removeAttribute("data-active")
                document.getElementById('carousel__navigation-item_' + i + type).removeAttribute("data-active")
                document.getElementById('carousel__navigation-item_' + (i - 1) + type).setAttribute("data-active", "active")
                window.location.href='#carousel__slide' + (i - 1) + type
                
                break;
            }
        } 
    }
