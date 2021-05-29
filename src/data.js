export const users = [
    {
        "id": 1,
        "name": "Arthur",
        "age": 24,
        "password": "arthur",
        "group":[
            {
                "gid": 401
            },
            {
                "gid": 402
            }
        ]
    },
    {
        "id": 2,
        "name": "David",
        "age": 22,
        "password": "david",
        "group":[
            {
                "gid": 402
            },
            {
                "gid": 403
            }
        ]
    },
    {
        "id": 3,
        "name": "Betty",
        "age": 18,
        "password": "betty",
        "group":[
            {
                "gid": 401
            }
        ]
    },
    {
        "id": 4,
        "name": "admin",
        "age": 24,
        "password": "admin",
        "group":[
            {
                "gid": 403
            }
        ]
    }
];

export const films = [
    {
        "id": 101,
        "title": "Avengers: Endgame",
        "overview": "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, \"Avengers: Endgame.\"",
        "directors": "Anthony Russo, Joe Russo",
        "producer": "Kevin Feige",
        "img": "https://wallpapercave.com/wp/wp5323626.png"
    },
    {
        "id": 102,
        "title": "Joker",
        "overview": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. Arthur Fleck works as a clown and is an aspiring stand-up comic.",
        "directors": "Todd Phillips",
        "producer": "Todd Phillips, Bradley Cooper, Emma Tillinger Koskoff",
        "img": "https://wallpapercave.com/wp/wp4654536.jpg"
    },
    {
        "id": 103,
        "title": "Frozen II",
        "overview": "Set three years after the events of the first film, the story follows Elsa, Anna, Kristoff, Olaf, and Sven, who embark on a journey beyond their kingdom of Arendelle in order to discover the origin of Elsa's magical powers and save their kingdom after a mysterious voice calls out to Elsa.",
        "directors": "Chris Buck, Jennifer Lee",
        "producer": "Peter Del Vecho",
        "img": "https://wallpapercave.com/wp/wp4869315.jpg"
    }
];

export const showings = [
    {
        "id": 201,
        "fid": 101,
        "address": "Pathe Bellecour",
        "date": "15/12/2019",
        "time": "17:30",
        "participants":[]
    },
    {
        "id": 202,
        "fid": 102,
        "address": "UGC Cite Confluence",
        "date": "20/12/2019",
        "time": "15:30",
    },
    {
        "id": 203,
        "fid": 103,
        "address": "Pathe Bellecour",
        "date": "20/12/2019",
        "time": "16:30",
    }
];

export const events = [
    {
        "id": 301,
        "title": "watch Avengers:Endgame",
        "type": "showing",
        "participants":[
            {
                "id": 1
            },
            {
                "id": 2
            }
        ]
    }
]

export const groups = [
    {
        "id": 401,
        "name": "DC Fans",
        "members": [
            {
                "id": 1
            },
            {
                "id": 3
            }
        ],
        "events": [
            {
                "id": 501
            },
            {
                "id": 503
            }
        ],
        "img": "https://cdn.iconscout.com/icon/premium/png-256-thumb/superman-1912328-1623451.png"
    },
    {
        "id": 402,
        "name": "Marvel Fans",
        "members": [
            {
                "id": 1
            },
            {
                "id": 2
            }
        ],
        "events": [
            {
                "id": 502
            },
            {
                "id": 504
            },
            {
                "id": 506
            }
        ],
        "img": "https://cdn.iconscout.com/icon/free/png-512/marvel-282124.png"
    },
    {
        "id": 403,
        "name": "Disney Films",
        "members": [
            {
                "id": 2
            },
            {
                "id": 4
            }
        ],
        "events": [
            {
                "id": 505
            }
        ],
        "img": "https://cdn.iconscout.com/icon/free/png-256/disney-282116.png"
    }
];



