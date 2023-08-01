import { techX, charity_gala, halleluyah, wofbec, who, trade_fair, dp1, dp2, dp3, dp4 } from "../assets/images"
export interface IEvents {
    eventId: string
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
        eventId: "aB3dFgH7",
        eventPoster: techX,
        eventTheme: "TechX 2023: Explore the Future of Technology", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Saturday 20th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "Code Ambassadors",
        registeredParticipants: [
            {
                name: "Favour Okonkwo",
                profile_picture: dp1,
            },
            {
                name: "Victor Thompson",
                profile_picture: dp2,
            },
            {
                name: "Ariella Adeyemo",
                profile_picture: dp3,
            },
            {
                name: "Favour Okonkwo",
                profile_picture: dp3,
            }
        ] 
    },
    {
        eventId: "Kj2LpRt4",
        eventPoster: charity_gala,
        eventTheme: "Charity Gala Night", 
        eventDescription: "Join us for another evening of giving back at the shining star gala. Together we can make a difference in the lives of those in need.",
        eventDate: "Tuesday 25th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "The Good Foundation",
        registeredParticipants: [
            {
                name: "Favour Okonkwo",
                profile_picture: dp1,
            },
            {
                name: "Victor Thompson",
                profile_picture: dp2,
            },
            {
                name: "Ariella Adeyemo",
                profile_picture: dp3,
            },
            {
                name: "Favour Okonkwo",
                profile_picture: dp4,
            }
        ] 
    },
    {
        eventId: "qW8sYzX5",
        eventPoster: halleluyah,
        eventTheme: "Halleluyah Festival", 
        eventDescription: "Lorem ipsum dolor sit amet consectetur. Ut eu in volutpat elementum dui. Ut egestas interdum tristique cursus.",
        eventDate: "Sundayy 2nd July 2023,10am WAT",
        eventCategory: "8000 NGN",
        eventOrganizers: "Nathaniel Bassey",
        registeredParticipants: [
            {
                name: "Favour Okonkwo",
                profile_picture: dp1,
            },
            {
                name: "Victor Thompson",
                profile_picture: dp2,
            },
            {
                name: "Ariella Adeyemo",
                profile_picture: dp3,
            },
            {
                name: "Favour Okonkwo",
                profile_picture: dp3,
            }
        ] 
    },
    {
        eventId: "M6nTbVc9",
        eventPoster: wofbec,
        eventTheme: "WOFBEC Conference", 
        eventDescription: "Discover the latest trends ,innovations and  breakthroughs in the tech industry.",
        eventDate: "Sunday 31st July 2023,10am WAT",
        eventCategory: "8000 NGN",
        eventOrganizers: "The Convenant Nation",
        registeredParticipants: [
            {
                name: "Favour Okonkwo",
                profile_picture: dp1,
            },
            {
                name: "Victor Thompson",
                profile_picture: dp2,
            },
            {
                name: "Ariella Adeyemo",
                profile_picture: dp3,
            },
            {
                name: "Favour Okonkwo",
                profile_picture: dp3,
            }
        ] 
    },
    {
        eventId: "eR1uYwZ0",
        eventPoster: who,
        eventTheme: "WHO Health Seminar", 
        eventDescription: "Join us for another evening of giving back at the shining star gala. Together we can make a difference in the lives of those in need.",
        eventDate: "Friday 28th July 2023,10am WAT",
        eventCategory: "8000 NGN",
        eventOrganizers: "World Health Organization",
        registeredParticipants: [
            {
                name: "Favour Okonkwo",
                profile_picture: dp1,
            },
            {
                name: "Victor Thompson",
                profile_picture: dp2,
            },
            {
                name: "Ariella Adeyemo",
                profile_picture: dp3,
            },
            {
                name: "Favour Okonkwo",
                profile_picture: dp3,
            }
        ] 
    },
    {
        eventId: "iK7jHdF3",
        eventPoster: trade_fair,
        eventTheme: "NaijaBrandChick Trade Fair", 
        eventDescription: "Lorem ipsum dolor sit amet consectetur. Ut eu in volutpat elementum dui. Ut egestas interdum tristique cursus.",
        eventDate: "Sunday 30th July 2023,10am WAT",
        eventCategory: "Free",
        eventOrganizers: "The Naija Brand Chick",
        registeredParticipants: [
            {
                name: "Favour Okonkwo",
                profile_picture: dp1,
            },
            {
                name: "Victor Thompson",
                profile_picture: dp2,
            },
            {
                name: "Ariella Adeyemo",
                profile_picture: dp3,
            },
            {
                name: "Favour Okonkwo",
                profile_picture: dp3,
            }
        ] 
    }
]