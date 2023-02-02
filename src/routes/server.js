// var http = require("http");
// const characters = require("../utils/data")
// const PORT = 3001;

// const {
//     getCharById,
//     getCharDetail
// } = require("../controllers/index")


// http.createServer((req, res) => {
//     console.log(`Server raised in port ${PORT}`)

//     const allUrl = req.url.split("/")
//     const id = Number(allUrl.pop());
//     const url = allUrl.join("/")

//     switch (url) {
//         case "/onsearch":
//             return getCharById(res, id)

//         case "/detail":
//             return getCharDetail(res, id)

//         default:
//             res.writeHead(404, { "Content-Type": "text/plain" })
//             res.end("Route not found")
//     }

   
// }).listen(PORT, "localhost")