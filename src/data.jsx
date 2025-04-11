export default function projectData() {

    const baseLink = "/images/projects"
    return [
        {
            uniqueName: "MaisonLaborde",
            title: "Maison Laborde",
            image: `${baseLink}/laborde/image1.png`,
            description: "Réalisation de la maquette Figma prototypée pour “Maison Laborde”, architecte d’intérieur",
            link: "https://www.maison-laborde.fr/",
            images: [
                `${baseLink}/laborde/image1.png`,
                `${baseLink}/laborde/image2.png`,
                `${baseLink}/laborde/image3.png`,
            ]
        },     {
            uniqueName: "NexPlay",
            title: "NexPlay",
            image: `${baseLink}/nextPlay/cover.png`,
            description: "Réalisation de la maquette Figma prototypée ainsi que du site web sur Webflow pour un projet fictif “NexPlay”.",
            link: "https://nexplay.webflow.io/",
            images: [
                `${baseLink}/nextPlay/img1.png`,
                `${baseLink}/nextPlay/cover.png`,
                `${baseLink}/nextPlay/img3.png`,
            ]
        },  {
            uniqueName: "ChallengeBehance",
            title: "Challenge Behance",
            image: `${baseLink}/behance/behance.png`,
            description: "Réalisation d’un Challenge UI qui consistait à réaliser 1 design par jour pendant 100 jours de suite.",
            link: "https://www.behance.net/antoineclaitte",
            images: [
                `${baseLink}/behance/img1.png`,
                `${baseLink}/behance/behance.png`,
                `${baseLink}/behance/img3.png`,
            ]
        },

    ]

}
