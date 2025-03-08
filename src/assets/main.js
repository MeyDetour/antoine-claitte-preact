let animation = true

document.addEventListener('DOMContentLoaded', () => {
    console.log(animation)
    let section2 = document.querySelector(".section2")
    let section1 = document.querySelector(".section1")
    let section1WhiteBlur2 = document.querySelector(".section1 .whiteBlur2")
    let section3 = document.querySelector(".section3")
    let section4 = document.querySelector(".section4")
    let navbarBurger = document.querySelector(".navbarResponsive")
    let footer = document.querySelector(".footer")
    let body = document.querySelector("body")

    console.log(section1, section1WhiteBlur2, section2, section3, section4, footer)
    if (section1 && section3 && section2 && section4 && footer) {
        if (animation) {
            window.addEventListener("beforeunload", () => {
                section1.style.marginBottom = "0%"
            });
            console.log("start timeout")

            setTimeout(() => {
                console.log("end of timeout")
                section2.style.display = "flex"
                section3.style.display = "flex"
                footer.style.display = "flex"
                section4.style.display = "flex"
                section1WhiteBlur2.style.display = "flex"
                section1.style.marginBottom = "11%"
                body.style.overflowY = "auto    "
                body.style.paddingBottom = ' 36px';
                if (window.innerWidth <= 570) {
                    navbarBurger.style.display = "flex"
                }
                animation = false
                console.log(animation)
            }, 8000)

        } else {
            section2.style.display = "flex"
            section3.style.display = "flex"
            section4.style.display = "flex"
            footer.style.display = "flex"
            section1.style.marginBottom = "11%"
            if (window.innerWidth <= 570) {
                navbarBurger.style.display = "flex"
            }
        }
    }


    let links = document.querySelectorAll('.animatedSpan')
    links.forEach((link) => {
        let isAnimating = false;
        console.log(link)
        link.addEventListener('drag', () => {
            if (isAnimating) return;
            isAnimating = true;
            let div = link.querySelector('div')
            div.style.transform = "translateY(-29px)"

            setTimeout(()=>{
                let div = link.querySelector('div')
                div.style.transform = "translateY(-13px)";
                isAnimating = false;
            },2000)
        })

        link.addEventListener('mouseover', function (e) {

            if (isAnimating) return;
            isAnimating = true;
            console.log(link)
            const target = e.target;


            // Get the bounding rectangle of target
            const rect = target.getBoundingClientRect();

            const y = e.clientY - rect.top;

            // Vérifier si l'entrée vient du haut ou du bas
            if (y < rect.height / 2) {
                console.log("Entier par le haut")

                isAnimating = true;
                let div = link.querySelector('div')
                div.style.transform = "translateY(-29px)"

            } else {

                isAnimating = true;
                console.log("Entier par le bas")
                let div = link.querySelector('div')
                div.style.transform = "translateY(3px)"

            }


        });

        link.addEventListener('mouseout', function () {
            let div = link.querySelector('div')
            div.style.transform = "translateY(-13px)"; // Retour à l'état initial

            isAnimating = false;
        });
    })


})
