export const projectData = [
    {
        id: 1,
        title: "Karstorps Koloniförening",
        github: "https://github.com/danielthornsjo/karstorpskoloni",
        live: "https://karstorpskoloni.se",
        tagline: "Adminverktyg & Medlemshantering",
        description: "En fullstack-lösning för att digitalisera en hel förening. Inkluderar rollbaserad åtkomst och realtidsbokningar.",
        image: "Shot.png",
        tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
        details: [
            {
                id: 1,
                title: "Administrativt kontrollcenter",
                content: "Utvecklat en PHP-backend med rollbaserad behörighet där administratörer och moderatorer kan hantera nyhetsflöden och uppdatera ägarskap för kolonilotter."
            },
            {
                title: "Säker ägarlogik",
                content: "Implementerat logik som knyter lotter till specifika användarkonton, vilket säkerställer att medlemmar endast kan administrera och publicera sina egna annonser till försäljning."
            },
            {
                title: "Dynamisk marknadsplats",
                content: "Byggt ett system för försäljning där användarnas annonser automatiskt publiceras och kategoriseras under 'Köpa kolonilott' efter validering."
            }
        ]
    },
    {
        id: 2,
        title: "Cinema App",
        github: "https://github.com/danielthornsjo/Case-8-Nodejs",
        live: "https://beta.karstorpskoloni.se",
        tagline: "Sömlös filmupptäckt & platsbokning",
        description: "En modern bio-applikation där användare kan utforska aktuella filmer, se trailers och simulera bokningar av sittplatser med ett dynamiskt och responsivt gränssnitt.",
        image: "Cinema.png",
        tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "REST API", "Jest"],
        details: [
            {
                title: "Egenutvecklad Filmdatabas",
                content: "Designat och strukturerat en egen databasmodell i MongoDB för att lagra och hantera filmdata, titlar och metadata på ett effektivt sätt."
            },
            {
                title: "Interaktivt platsval",
                content: "En visuell sittplatskarta byggd med CSS Grid och React state. Användare kan välja lediga platser och få direkt feedback på sina val i realtid."
            },
            {
                title: "Fullstack-integration",
                content: "Sömlös kommunikation mellan frontend (React) och backend (Node.js/Express) för att hämta och spara bokningsdata direkt i databasen."
            },
            {
                title: "Responsiv UI/UX-design",
                content: "Planerat och skissat användargränssnittet i Figma för att säkerställa en modern och användarvänlig upplevelse på både desktop och mobil."
            }
        ]
    }
];