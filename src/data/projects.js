export const projectData = [
    {
        id: 1,
        title: "Karstorps Koloniförening",
        tagline: "Adminverktyg & Medlemshantering",
        description: "En fullstack-lösning för att digitalisera en hel förening. Inkluderar rollbaserad åtkomst och realtidsbokningar.",
        image: "/src/assets/Shot.png",
        tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
        details: [
            { title: "Rollbaserad åtkomst", content: "Implementerat med JWT och middleware för att säkra admin-vyer." },
            { title: "Databasdesign", content: "Relationell databas optimerad för snabba sökningar i medlemsregister." }
        ]
    },
    {
        id: 2,
        title: "Cinema App",
        tagline: "Sömlös filmupptäckt & platsbokning",
        description: "En modern bio-applikation där användare kan utforska aktuella filmer, se trailers och simulera bokningar av sittplatser med ett dynamiskt och responsivt gränssnitt.",
        image: "/src/assets/Cinema.png", // Ersätt med din faktiska bild
        tech: ["React", "Tailwind CSS", "TMDB API", "Context API"],
        details: [
            {
                title: "Dynamisk filmdata via TMDB",
                content: "Integration med The Movie Database (TMDB) API för att hämta 'Trending Now', 'Top Rated' och detaljerad information om tusentals titlar i realtid."
            },
            {
                title: "Interaktivt platsval",
                content: "En visuell sittplatskarta byggd med CSS Grid och React state. Användare kan välja lediga platser, se prisförändringar och få direkt feedback på sina val."
            },
            {
                title: "Global State Management",
                content: "Använder React Context API för att hantera användarens kundvagn och bokningsdetaljer genom hela applikationen utan 'prop-drilling'."
            },
            {
                title: "Sök- och filtreringslogik",
                content: "Implementerat avancerad filtrering som låter användare sortera filmer efter genre, betyg eller utgivningsdatum för en snabbare användarupplevelse."
            }
        ]
    }
];