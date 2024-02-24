
const mailer = require("../utils/mailer")
let sendMail = async(req, res) => {
    try {
        // lấy data truyền vào form phía client
        const {to, subject, body} = req.body;
        //thực hiện email
        await mailer.sendMail(to, subject, body)
        //text email nếu gửi email thành công
        res.send('<h3>email của bạn đã gửi thành công !</h3>')
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    sendMail: sendMail
}