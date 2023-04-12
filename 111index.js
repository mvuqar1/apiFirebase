const express=require("express")
const app=express()

app.get("/",(request,response)=>{
    response.send("hello55 world")
    console.log("hello")
})

app.listen(3000,()=>{
    console.log("3000 express")
})


// const fs = require("fs")
// const http = require("http")

// const server = http.createServer((request, response) => {
//     if (request.url === "/") {
//         fs.readFile("./public/index.html", (err, html) => {
//             if (!err) {
//                 response.write(html)
//                 response.end()
//             }
//         })
//     }
// })

// server.listen(3000, () => {
//     console.log("qoshuldu 3000 ne")
// })