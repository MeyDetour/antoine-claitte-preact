let animation = true

export function loadHomeAnimation() {
    console.log(animation)
    let section2 = document.querySelector(".section2")
    let section1 = document.querySelector(".section1")
    let section1WhiteBlur2 = document.querySelector(".section1 .whiteBlur2")
    let section3 = document.querySelector(".section3")
    let section4 = document.querySelector(".section4")
    let navbarBurger = document.querySelector(".navbarResponsive")
    let footer = document.querySelector(".footer")
    let body = document.querySelector("body")

    const animationIsPassed = sessionStorage.getItem("animation") === "true"
    console.log(animationIsPassed)
    console.log(typeof animationIsPassed)
    console.log(animation && !animationIsPassed)
    console.log(section1, section1WhiteBlur2, section2, section3, section4, footer)

    function apprear() {
        if (section1 && section3 && section2 && section4 && footer) {
            if (animationIsPassed) {
                document.querySelector(".bienvenue").style.display = "none"
            }
            console.log("end of timeout")
            section1.style.marginBottom = "11%"
            section2.style.display = "flex"
            section3.style.display = "flex"
            footer.style.display = "flex"
            section4.style.display = "flex"
            section1WhiteBlur2.style.display = "flex"
            body.style.overflowY = "auto !important"
            body.style.paddingBottom = ' 36px';
            if (window.innerWidth <= 570) {
                navbarBurger.style.display = "flex"
            }


        }
    }

    if (section1 && section3 && section2 && section4 && footer) {
        if (animation && !animationIsPassed) {

            window.addEventListener("beforeunload", () => {
                section1.style.marginBottom = "0%"
            });

            //animations to columns
            document.querySelector(".section1 .columns").classList.add("columnsAnimations")

            //animation to bienvenu message
            document.querySelector(".bienvenue").classList.add("bienvenueAnimation")

            // animation to nav
            document.querySelectorAll(".section1 .columns .column .link ").forEach(link => {
                link.classList.add("linkTextAppearAnimation")
            })
            document.querySelector(".section1 .columns .column .logo").classList.add("logoAnimation")
            document.querySelector(".section1 .columns .column .mailAndLinkedin").classList.add("mailAndLinkedinAnimation")

            // animation to title
            document.querySelector(".section1 .titles  ").classList.add("animationsToTitles")


            setTimeout(() => {
                apprear();
                animation = false
                const now = new Date();
                const expires = new Date(now.getTime() + 60 * 60 * 1000);

                sessionStorage.setItem("animation", JSON.stringify({
                    value: true,
                    expires: expires.toISOString()
                }));

            }, 8000)

        } else {
            console.log("no animation ")
            apprear()
        }
    }

}

export function loadLinkAnimatins() {
    let links = document.querySelectorAll('.animatedSpan')
    links.forEach((link) => {
        let isAnimating = false;
        link.addEventListener('drag', () => {
            if (isAnimating) return;
            isAnimating = true;
            let div = link.querySelector('div')
            div.style.transform = "translateY(-29px)"

            setTimeout(() => {
                let div = link.querySelector('div')
                div.style.transform = "translateY(-13px)";
                isAnimating = false;
            }, 2000)
        })

        link.addEventListener('mouseover', function (e) {

            if (isAnimating) return;
            isAnimating = true;
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
}

