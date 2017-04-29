// module.exports understood returns a variable or object or function
// here we are exporting the array of objects friends
//
var friends = [
        {
            "_id": "58fe1e64d01103a01be57abf",
            "index": 0,
            "name": "Amy Schumer",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Amy_Schumer_by_Mario_Santor.jpg",
            "age": 35,
            "gender": "female",
            "scores": [
                3,
                4,
                5,
                3,
                5,
                3,
                4,
                1,
                1,
                4
            ]
        },
        {
            "_id": "58fe1e64b287dc07fa4eae71",
            "index": 1,
            "name": "Ewan McGregor",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MjQ0MDg0Nl5BMl5BanBnXkFtZTcwNjYyNjI5Mg@@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "age": 46,
            "gender": "male",
            "scores": [
                1,
                3,
                1,
                3,
                5,
                1,
                1,
                4,
                2,
                5
            ]
        },
        {
            "_id": "58fe1e6411b1af145b680feb",
            "index": 2,
            "name": "Cate Blanchett",
            "photo": "http://pixel.nymag.com/imgs/daily/vulture/2015/12/10/10-cate-blanchett-thor.w529.h529.jpg",
            "age": 47,
            "gender": "female",
            "scores": [
                2,
                1,
                1,
                3,
                2,
                2,
                3,
                2,
                2,
                1
            ]
        },
        {
            "_id": "58fe1e64a60a823fb9f7d070",
            "index": 3,
            "name": "Emma Stone",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UY1200_CR84,0,630,1200_AL_.jpg",
            "age": 28,
            "gender": "female",
            "scores": [
                5,
                3,
                4,
                3,
                3,
                1,
                4,
                1,
                5,
                4
            ]
        },
        {
            "_id": "58fe1e6460ec9acedc5b4378",
            "index": 4,
            "name": "Scarlett Johansson",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY1200_CR180,0,630,1200_AL_.jpg",
            "age": 32,
            "gender": "female",
            "scores": [
                2,
                5,
                2,
                2,
                5,
                5,
                5,
                4,
                5,
                2
            ]
        },
        {
            "_id": "58fe1e647e2f50e0f4ee65cd",
            "index": 5,
            "name": "Ryan Reynolds",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg",
            "age": 40,
            "gender": "male",
            "scores": [
                4,
                2,
                5,
                2,
                1,
                2,
                5,
                3,
                4,
                1
            ]
        },
        {
            "_id": "58fe1e640e9430a919b97a12",
            "index": 6,
            "name": "Emma Roberts",
            "photo": "http://kingofwallpapers.com/emma-roberts/emma-roberts-010.jpg",
            "age": 26,
            "gender": "female",
            "scores": [
                3,
                1,
                1,
                2,
                5,
                2,
                2,
                3,
                4,
                4
            ]
        },
        {
            "_id": "58fe1e64b7b8db60838bb3d9",
            "index": 7,
            "name": "David Duchovny",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI5NzMzMTYwN15BMl5BanBnXkFtZTgwNjQ1MDMwNzE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg",
            "age": 56,
            "gender": "male",
            "scores": [
                4,
                3,
                5,
                4,
                2,
                2,
                1,
                4,
                1,
                1
            ]
        },
        {
            "_id": "58fe1e64527144a1288b997c",
            "index": 8,
            "name": "Kristen Bell",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/9/93/Kristen_Bell_Frozen_premiere_2013_%28cropped%29.jpg",
            "age": 36,
            "gender": "female",
            "scores": [
                4,
                4,
                4,
                5,
                3,
                2,
                1,
                1,
                4,
                3
            ]
        },
        {
            "_id": "58fe1e64331ef8698225dee5",
            "index": 9,
            "name": "Leonardo DiCaprio",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg",
            "age": 42,
            "gender": "male",
            "scores": [
                5,
                3,
                3,
                4,
                3,
                5,
                5,
                3,
                3,
                1
            ]
        },
        {
            "_id": "58fe1e646f0ac93b9adfd1ef",
            "index": 10,
            "name": "Charlize Theron",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Charlize_Theron_Cannes_2015_2.jpg",
            "age": 41,
            "gender": "female",
            "scores": [
                2,
                1,
                2,
                5,
                4,
                5,
                1,
                5,
                3,
                3
            ]
        },
        {
            "_id": "58fe1e6401d3bca3eb25fa6e",
            "index": 11,
            "name": "Billy Bob Thornton",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTUwMDI0OF5BMl5BanBnXkFtZTcwNjIyNzkzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "age": 61,
            "gender": "male",
            "scores": [
                4,
                3,
                4,
                4,
                4,
                3,
                1,
                3,
                3,
                3
            ]
        },
        {
            "_id": "58fe1e64b7932bfd9501b049",
            "index": 12,
            "name": "Tom Cruise",
            "photo": "https://lh6.googleusercontent.com/-8Qb06t7dSb8/AAAAAAAAAAI/AAAAAAAAK74/JIhZ9Z-dCDc/s0-c-k-no-ns/photo.jpg",
            "age": 54,
            "gender": "male",
            "scores": [
                4,
                5,
                5,
                2,
                3,
                2,
                2,
                4,
                1,
                2
            ]
        },
        {
            "_id": "58fe1e64c0bcade8d8dd07c5",
            "index": 13,
            "name": "Dakota Johnson",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTg5OTA5NjUxN15BMl5BanBnXkFtZTgwMjE4ODI3NjE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "age": 27,
            "gender": "female",
            "scores": [
                5,
                5,
                4,
                5,
                3,
                3,
                4,
                4,
                1,
                5
            ]
        },
        {
            "_id": "58fe1e64c94361caf5203dfa",
            "index": 14,
            "name": "Will Smith",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg",
            "age": 48,
            "gender": "male",
            "scores": [
                3,
                5,
                3,
                5,
                5,
                2,
                4,
                5,
                4,
                1
            ]
        },
        {
            "_id": "58fe1e645df8dae8b6e6ce67",
            "index": 15,
            "name": "Seth Rogen",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTgyMjg0Nl5BMl5BanBnXkFtZTgwNTk4NzU2NjE@._V1_SX1777_CR0,0,1777,739_AL_.jpg",
            "age": 35,
            "gender": "male",
            "scores": [
                3,
                2,
                5,
                3,
                1,
                3,
                2,
                3,
                4,
                5
            ]
        },
        {
            "_id": "58fe1e6420d43837a8342168",
            "index": 16,
            "name": "Robert De Niro",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxNjI3NTg4NjReQTJeQWpwZ15BbWU4MDkxMTYwODYx._V1_SX1777_CR0,0,1777,960_AL_.jpg",
            "age": 73,
            "gender": "male",
            "scores": [
                1,
                5,
                4,
                4,
                4,
                1,
                3,
                1,
                2,
                4
            ]
        },
        {
            "_id": "58fe1e64b41d680f99230f4e",
            "index": 17,
            "name": "Blake Lively",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Njk0NTUyNl5BMl5BanBnXkFtZTcwODE0OTgyNw@@._V1_UY317_CR13,0,214,317_AL_.jpg",
            "age": 29,
            "gender": "female",
            "scores": [
                3,
                5,
                4,
                3,
                3,
                4,
                4,
                1,
                1,
                2
            ]
        },
        {
            "_id": "58fe1e648f535b46920cdabf",
            "index": 18,
            "name": "Jennifer Jason Leigh",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MzU2NTg0Nl5BMl5BanBnXkFtZTcwMjcyNjY0MQ@@._V1_UY1200_CR148,0,630,1200_AL_.jpg",
            "age": 55,
            "gender": "female",
            "scores": [
                3,
                5,
                5,
                2,
                1,
                2,
                1,
                4,
                3,
                4
            ]
        },
        {
            "_id": "58fe1e64bbc6eeb85ed2a343",
            "index": 19,
            "name": "Chris Pine",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4OTQ4NTU3NV5BMl5BanBnXkFtZTcwNjEwNDU0OQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "age": 36,
            "gender": "male",
            "scores": [
                1,
                5,
                1,
                4,
                5,
                5,
                3,
                5,
                4,
                3
            ]
        },
        {
            "_id": "58fe1e64f9e0649020abaa6a",
            "index": 20,
            "name": "Kurt Russell",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjkwODQ5Mzc2Ml5BMl5BanBnXkFtZTgwNDA5MDM1NjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
            "age": 66,
            "gender": "male",
            "scores": [
                3,
                4,
                1,
                1,
                4,
                2,
                2,
                5,
                2,
                1
            ]
        },
        {
            "_id": "58fe1e64a7c69ca0b158df21",
            "index": 21,
            "name": "Amy Adams",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/4/49/Amy_Adams_%288000637920%29.jpg",
            "age": 42,
            "gender": "female",
            "scores": [
                4,
                5,
                4,
                2,
                3,
                1,
                1,
                2,
                2,
                5
            ]
        },
        {
            "_id": "58fe1e640e514b9889931417",
            "index": 22,
            "name": "Sandra Bullock",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/7/72/Sandra_Bullock_%289189702847%29.jpg",
            "age": 38,
            "gender": "female",
            "scores": [
                4,
                4,
                1,
                1,
                5,
                5,
                4,
                4,
                5,
                1
            ]
        },
        {
            "_id": "58fe1e6432ccfde396b947f5",
            "index": 23,
            "name": "Elizabeth Banks",
            "photo": "https://lh4.googleusercontent.com/--a4DqkuSIIw/AAAAAAAAAAI/AAAAAAAACnI/IWPG1xroEf0/s0-c-k-no-ns/photo.jpg",
            "age": 43,
            "gender": "female",
            "scores": [
                3,
                2,
                2,
                3,
                2,
                4,
                3,
                1,
                3,
                5
            ]
        },
        {
            "_id": "58fe1e6424f33ffaee0c68ca",
            "index": 24,
            "name": "Ben Affleck",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4MzIxMTk0Nl5BMl5BanBnXkFtZTcwOTU5NjA0Mg@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
            "age": 44,
            "gender": "male",
            "scores": [
                4,
                4,
                4,
                4,
                4,
                5,
                1,
                3,
                5,
                2
            ]
        },
        {
            "_id": "58fe1e64986b6b450f6e9416",
            "index": 25,
            "name": "Halle Berry",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNzc5MDAzOV5BMl5BanBnXkFtZTcwMDUxMjMxMw@@._V1_.jpg",
            "age": 50,
            "gender": "female",
            "scores": [
                2,
                1,
                4,
                4,
                4,
                4,
                3,
                2,
                5,
                4
            ]
        },
        {
            "_id": "58fe1e640e0f2a1043c2390f",
            "index": 26,
            "name": "Jude Law",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwOTg5NTQ3NV5BMl5BanBnXkFtZTcwNzM3MDAzNQ@@._V1_SY1000_CR0,0,711,1000_AL_.jpg",
            "age": 44,
            "gender": "male",
            "scores": [
                2,
                4,
                1,
                2,
                1,
                1,
                2,
                1,
                5,
                1
            ]
        },
        {
            "_id": "58fe1e64caa1942e0883f356",
            "index": 27,
            "name": "Olivia Munn",
            "photo": "http://img.usmagazine.com/article-leads-vertical-300/1291068127_olivia-290.jpg",
            "age": 36,
            "gender": "female",
            "scores": [
                5,
                5,
                4,
                5,
                2,
                4,
                2,
                1,
                5,
                5
            ]
        },
        {
            "_id": "58fe1e646ef3a013a2ad83d6",
            "index": 28,
            "name": "Shailene Woodley",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIxNTE2NTQ3Nl5BMl5BanBnXkFtZTcwMzMwOTk2Nw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
            "age": 25,
            "gender": "female",
            "scores": [
                5,
                4,
                1,
                4,
                3,
                4,
                1,
                3,
                3,
                4
            ]
        },
        {
            "_id": "58fe1e64ce88be4ddce0e314",
            "index": 29,
            "name": "Jennifer Lopez",
            "photo": "https://lh5.googleusercontent.com/-8KSyswkxG7s/AAAAAAAAAAI/AAAAAAAADMw/90SzgarTcrA/s0-c-k-no-ns/photo.jpg",
            "age": 47,
            "gender": "female",
            "scores": [
                5,
                4,
                1,
                1,
                5,
                3,
                3,
                1,
                1,
                5
            ]
        },
        {
            "_id": "58fe1e645dbf1b5a877ddc65",
            "index": 30,
            "name": "Russell Crowe",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "age": 53,
            "gender": "male",
            "scores": [
                4,
                3,
                3,
                4,
                4,
                1,
                1,
                4,
                3,
                2
            ]
        },
        {
            "_id": "58fe1e64460f45e8fd35b72a",
            "index": 31,
            "name": "Bruce Dern",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIzMDE0MzAzOV5BMl5BanBnXkFtZTYwODQxMDQ1._V1_UY317_CR3,0,214,317_AL_.jpg",
            "age": 80,
            "gender": "male",
            "scores": [
                4,
                3,
                1,
                5,
                5,
                1,
                3,
                4,
                5,
                3
            ]
        },
        {
            "_id": "58fe1e64abf74174034b30c4",
            "index": 32,
            "name": "Jennifer Lawrence",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jennifer_Lawrence_SDCC_2015_X-Men.jpg/220px-Jennifer_Lawrence_SDCC_2015_X-Men.jpg",
            "age": 26,
            "gender": "female",
            "scores": [
                3,
                1,
                1,
                1,
                3,
                5,
                1,
                1,
                3,
                3
            ]
        },
        {
            "_id": "58fe1e64d60a45b12e80b439",
            "index": 33,
            "name": "Michelle Williams",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNTQ2NTk3MV5BMl5BanBnXkFtZTcwNjExNDQzNA@@._V1_UY317_CR1,0,214,317_AL_.jpg",
            "age": 36,
            "gender": "female",
            "scores": [
                5,
                3,
                4,
                1,
                1,
                4,
                4,
                2,
                4,
                2
            ]
        },
        {
            "_id": "58fe1e64ef1fc393a3327b30",
            "index": 34,
            "name": "Imogen Poots",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3OTA3MzM2NV5BMl5BanBnXkFtZTcwMDczNjY0Mw@@._V1_UY317_CR20,0,214,317_AL_.jpg",
            "age": 27,
            "gender": "female",
            "scores": [
                4,
                4,
                4,
                1,
                3,
                1,
                1,
                1,
                4,
                3
            ]
        },
        {
            "_id": "58fe1e64ea347571f458ab4c",
            "index": 35,
            "name": "Brad Pitt",
            "photo": "http://img.usmagazine.com/article-leads-vertical-300/1250530894_brad_pitt_290x402.jpg",
            "age": 53,
            "gender": "male",
            "scores": [
                2,
                5,
                4,
                2,
                5,
                5,
                3,
                1,
                4,
                4
            ]
        },
        {
            "_id": "58fe1e6497deed617c865405",
            "index": 36,
            "name": "Clive Owen",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzAyOTc5Ml5BMl5BanBnXkFtZTcwOTQ5NzEzMg@@._V1_UY317_CR13,0,214,317_AL_.jpg",
            "age": 52,
            "gender": "male",
            "scores": [
                3,
                5,
                1,
                5,
                5,
                4,
                4,
                4,
                4,
                5
            ]
        },
        {
            "_id": "58fe1e6408c5e5f4e03cc521",
            "index": 37,
            "name": "Kurt Russell",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3MjkxNzQwMV5BMl5BanBnXkFtZTYwNDk4ODM1._V1_UX214_CR0,0,214,317_AL_.jpg2",
            "age": 66,
            "gender": "male",
            "scores": [
                4,
                2,
                1,
                5,
                4,
                5,
                1,
                5,
                1,
                5
            ]
        },
        {
            "_id": "58fe1e647795e7cc9827a366",
            "index": 38,
            "name": "Michael Keaton",
            "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NTE2MzczOF5BMl5BanBnXkFtZTYwNTM4MjYz._V1_UY317_CR21,0,214,317_AL_.jpg",
            "age": 65,
            "gender": "male",
            "scores": [
                3,
                4,
                5,
                5,
                5,
                1,
                3,
                1,
                3,
                4
            ]
        },
        {
            "_id": "58fe1e6449ae32c008d3ee17",
            "index": 39,
            "name": "Ben Kingsley",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Sir_Ben_Kingsley_2012.jpg/220px-Sir_Ben_Kingsley_2012.jpg",
            "age": 73,
            "gender": "male",
            "scores": [
                3,
                2,
                5,
                4,
                4,
                5,
                2,
                5,
                5,
                2
            ]
        }
    ]

exports.friends = friends;
