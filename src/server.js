const express = require("express");
const app = express();
const routes = require("./routes/index");

//cho phép dữ liệu từ form method post
app.use(express.urlencoded({
    extended: true
}))

//connect roues
//cách1
routes(app);
// cách2
// app.use('/',routes)

app.listen(3000, () => {
    console.log("thành Công");
})