import { images } from '../assets/img-skills/images'
import hello from "./hello.png"
import artwork from "./artwork.jpg"
import graphicdesign from "./graphicdesign.jpg"

export const CV = {
    hero: {
        name: "Ángela García",
        subtitle1: "Graphic desginer",
        subtitle2: "Front-End developer wannabe",
        city: "Barcelona",
        email: "angarcaz93@gmail.com",
        image: hello,
        linkedin: "https://www.linkedin.com/in/angarcaz/",
        github: "https://github.com/ang1993",
        about: "I consider myself a committed, creative, self-demanding and methodical person. I am interested in the product creation process, from ideation to development. I believe in the potential of design and technology to improve and simplify people's lives. This interest has led me to develop skills linked to graphic arts, web design and user experience. I am currently focused on turning my career around and have embarked on an exciting path to become a front end developer."
    },

    work: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem felis, fringilla a diam nec, molestie pretium arcu. Maecenas tempor dictum nisl, dictum fringilla diam lobortis vestibulum. Vivamus a elit facilisis, aliquet est ac, rutrum nulla. Nunc magna nunc, sollicitudin id rhoncus sit amet, vestibulum eget erat.",
        selectedworks: [
            {
                title: "Front-End",
                description: "Aquí va una breve descripción pero ahora no se me ocurre.",
                image: artwork,
            },
            {
                title: "UI",
                description: "Aquí va una breve descripción pero ahora no se me ocurre.",
                image: artwork,
            },
            {
                title: "Graphic Design",
                description: "Aquí va una breve descripción pero ahora no se me ocurre.",
                image: graphicdesign,
            },
            {
                title: "Artwork",
                description: "Aquí va una breve descripción pero ahora no se me ocurre.",
                image: artwork,
            },
        ]
    },

    education: [
        {
            title: "Front-End developer bootcamp",
            institution: "Upgrade Hub",
            date: "2022 - 2023",
            city: "Madrid"
        },
        {
            title: "Multimedia editorial products course",
            institution: "ASEDEM",
            date: "2019",
            city: "Barcelona"
        },
        {
            title: "Graphic and web design course",
            institution: "Escola Espai",
            date: "2018 - 2019",
            city: "Barcelona"
        },
        {
            title: "Advanced specific vocational training: Engraving and printing techniques",
            institution: "EASD Llotja",
            date: "2014 - 2018",
            city: "Barcelona"
        },
        {
            title: "Fine arts degree",
            institution: "Universitat Politècnica de València",
            date: "2010 - 2014",
            city: "Valencia"
        }
    ],

    experience: [
        {
            title: "Graphic and web designer",
            where: "CoRegistros SL",
            city: "Barcelona",
            date: "2019 - 2023",
            tasks: [
                "Newsletters and landing pages design and layout",
                "Prototyping and interface design",
                "Corporate documents design and layout",
                "Social media content"
            ]
        },
        {
            title: "Reprography operator",
            where: "Alfambra",
            city: "Barcelona",
            date: "2017-2019",
            tasks: [
                "Advanced copyshop services",
                "Gluing and bookbinding work",
                "Grpahic pieces design and layout"
            ]
        }
    ],

    skills: [
        {
            name: "HTML",
            image: images.html5
        },
        {
            name: "CSS",
            image: images.css3
        },
        {
            name: "Javascript",
            image: images.javascript
        },
        {
            name: "Sass",
            image: images.sass
        },
        {
            name: "Angular",
            image: images.angular
        },
        {
            name: "React",
            image: images.react
        },
        {
            name: "Git",
            image: images.git
        },
        {
            name: "Wordpress",
            image: images.wordpress
        },
        {
            name: "Adobe xd",
            image: images.xd
        },
        {
            name: "Adobe Photoshop",
            image: images.photoshop
        },
        {
            name: "Adobe Illustrator",
            image: images.illustrator
        },
        {
            name: "Adobe inDesign",
            image: images.indesign
        },
    ],

    languages: [
        "Spanish",
        "Catalan", 
        "English"
    ]

}