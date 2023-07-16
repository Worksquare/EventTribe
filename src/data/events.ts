import { techX, charity_gala, halleluyah, wofbec, who, trade_fair, dp1, dp2, dp3, dp4 } from "../assets/images"
export interface IEvents {
    eventPoster: string
    eventTheme: string
    eventDescription: string
    eventDate: string
    eventCategory: string
    eventOrganizers: string
    registeredParticipants: Person[]
}

export interface Person {
    name: string
    profile_picture: string
}

export const events: IEvents[] = [
    {
        eventPoster: techX,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "name",
                profile_picture: dp1,
            },
            {
                name: "name",
                profile_picture: dp2,
            },
            {
                name: "name",
                profile_picture: dp3,
            },
            {
                name: "name",
                profile_picture: dp3,
            }
        ] 
    },
    {
        eventPoster: charity_gala,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "name",
                profile_picture: dp1,
            },
            {
                name: "name",
                profile_picture: dp2,
            },
            {
                name: "name",
                profile_picture: dp3,
            },
            {
                name: "name",
                profile_picture: dp4,
            }
        ] 
    },
    {
        eventPoster: halleluyah,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "name",
                profile_picture: dp1,
            },
            {
                name: "name",
                profile_picture: dp2,
            },
            {
                name: "name",
                profile_picture: dp3,
            },
            {
                name: "name",
                profile_picture: dp4,
            }
        ] 
    },
    {
        eventPoster: wofbec,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "name",
                profile_picture: dp1,
            },
            {
                name: "name",
                profile_picture: dp2,
            },
            {
                name: "name",
                profile_picture: dp3,
            },
            {
                name: "name",
                profile_picture: dp4,
            }
        ] 
    },
    {
        eventPoster: who,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "name",
                profile_picture: dp1,
            },
            {
                name: "name",
                profile_picture: dp2,
            },
            {
                name: "name",
                profile_picture: dp3,
            },
            {
                name: "name",
                profile_picture: dp4,
            }
        ] 
    },
    {
        eventPoster: trade_fair,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "name",
                profile_picture: dp1,
            },
            {
                name: "name",
                profile_picture: dp2,
            },
            {
                name: "name",
                profile_picture: dp3,
            },
            {
                name: "name",
                profile_picture: dp4,
            }
        ] 
    }
]