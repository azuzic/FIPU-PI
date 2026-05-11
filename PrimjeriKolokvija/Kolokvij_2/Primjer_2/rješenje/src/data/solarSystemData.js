export default {
    planets: [
        {
            name: "Mercury",
            description: "The smallest and innermost planet in the Solar System, known for its extreme temperature variations.",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
            satellites: []
        },
        {
            name: "Venus",
            description: "Similar in size to Earth but with a thick, toxic atmosphere and surface temperatures hot enough to melt lead.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/330px-Venus_globe.jpg",
            satellites: []
        },
        {
            name: "Earth",
            description: "Our home planet, the only known world to support life, with vast oceans and diverse ecosystems.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Meteosat-12-fci-march-equinox-2025-noon.jpg/960px-Meteosat-12-fci-march-equinox-2025-noon.jpg",
            satellites: [
                {
                    name: "Moon",
                    description: "Earth's only natural satellite, influencing tides and stabilizing the planet's axial tilt.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
                }
            ]
        },
        {
            name: "Mars",
            description: "Known as the Red Planet, Mars has the tallest volcano and the deepest canyon in the Solar System.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
            satellites: [
                {
                    name: "Phobos",
                    description: "The larger of Mars' two satellites, Phobos orbits very close to the planet and is gradually spiraling inward.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Phobos_colour_2008.jpg/960px-Phobos_colour_2008.jpg"
                },
                {
                    name: "Deimos",
                    description: "The smaller and outermost moon of Mars, with a smooth surface due to a thick layer of regolith.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/NASA-Deimos-MarsMoon-20090221.jpg"
                }
            ]
        },
        {
            name: "Jupiter",
            description: "The largest planet in the Solar System, a gas giant with a prominent Great Red Spot storm.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter_OPAL_2024.png/960px-Jupiter_OPAL_2024.png",
            satellites: [
                {
                    name: "Io",
                    description: "The most volcanically active body in the Solar System, with hundreds of erupting volcanoes.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Io_highest_resolution_true_color.jpg/960px-Io_highest_resolution_true_color.jpg"
                },
                {
                    name: "Europa",
                    description: "Believed to have a subsurface ocean beneath its icy crust, making it a candidate for potential life.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Europa_-_Perijove_45_%28cropped%29.png/960px-Europa_-_Perijove_45_%28cropped%29.png"
                },
                {
                    name: "Ganymede",
                    description: "The largest moon in the Solar System, even bigger than Mercury, with its own magnetic field.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ganymede_-_Perijove_34_Composite.png/960px-Ganymede_-_Perijove_34_Composite.png"
                },
                {
                    name: "Callisto",
                    description: "Heavily cratered and ancient, Callisto's surface dates back to the early Solar System.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Callisto_VGR2_C2060635_OGB.png/960px-Callisto_VGR2_C2060635_OGB.png"
                }
            ]
        },
        {
            name: "Saturn",
            description: "Famous for its stunning ring system, Saturn is a gas giant with numerous satellites.",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
            satellites: [
                {
                    name: "Titan",
                    description: "Saturn's largest moon, with a thick atmosphere and lakes of liquid methane and ethane.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Titan_in_true_color_by_Kevin_M._Gill.jpg"
                },
                {
                    name: "Enceladus",
                    description: "An icy moon that ejects plumes of water vapor, indicating a subsurface ocean.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/PIA17202_-_Approaching_Enceladus.jpg/960px-PIA17202_-_Approaching_Enceladus.jpg"
                },
                {
                    name: "Rhea",
                    description: "The second-largest moon of Saturn, with a heavily cratered surface.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PIA07763_Rhea_full_globe5.jpg/960px-PIA07763_Rhea_full_globe5.jpg"
                },
                {
                    name: "Iapetus",
                    description: "Known for its two-tone coloration and a distinctive equatorial ridge.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Iapetus_as_seen_by_Cassini_True_Color.png/960px-Iapetus_as_seen_by_Cassini_True_Color.png"
                },
                {
                    name: "Dione",
                    description: "Features bright ice cliffs and a mix of heavily cratered and smooth terrains.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dione_in_natural_light.jpg/960px-Dione_in_natural_light.jpg"
                }
            ]
        },
        {
            name: "Uranus",
            description: "An ice giant with a unique tilt, rotating on its side relative to its orbit.",
            image: "https://images-assets.nasa.gov/image/PIA17306/PIA17306~orig.jpg?w=1024&h=800&fit=clip&crop=faces%2Cfocalpoint",
            satellites: [
                {
                    name: "Miranda",
                    description: "Displays a patchwork of terrains, indicating a history of geological activity.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Miranda_mosaic_in_color_-_Voyager_2.png/960px-Miranda_mosaic_in_color_-_Voyager_2.png"
                },
                {
                    name: "Ariel",
                    description: "One of Uranus's brightest satellites, with canyons and ridges suggesting tectonic activity.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ariel_in_monochrome.jpg/960px-Ariel_in_monochrome.jpg"
                },
                {
                    name: "Umbriel",
                    description: "A dark moon with a heavily cratered surface and mysterious bright ring structures.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PIA00040_Umbrielx2.47.jpg"
                },
                {
                    name: "Titania",
                    description: "The largest moon of Uranus, featuring large faults and canyons.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Titania_VGR2_C2684315.png"
                },
                {
                    name: "Oberon",
                    description: "The second-largest Uranian moon, with a heavily cratered surface and bright rays.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Oberon_in_true_color_by_Kevin_M._Gill.jpg"
                }
            ]
        },
        {
            name: "Neptune",
            description: "The farthest known planet in the Solar System, known for its deep blue color and strong winds.",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
            satellites: [
                {
                    name: "Triton",
                    description: "Neptune's largest moon, with retrograde orbit and geysers of liquid nitrogen.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Triton-usgs23-with-frame.jpg/960px-Triton-usgs23-with-frame.jpg"
                },
            ]
        },
        {
            name: "Pluto",
            description: "A dwarf planet in the Kuiper Belt, known for its complex surface and heart-shaped glacier.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pluto_in_True_Color_-_High-Res.png/960px-Pluto_in_True_Color_-_High-Res.png",
            satellites: [
                {
                    name: "Charon",
                    description: "The largest of Pluto's satellites, so massive that Pluto and Charon orbit a common center of mass.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Charon_in_True_Color_-_High-Res.png/960px-Charon_in_True_Color_-_High-Res.png"
                },
            ]
        }
    ]
};