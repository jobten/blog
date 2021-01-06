const Service = require('egg').Service
const svgCaptcha = require('svg-captcha')
const nodemailer = require('nodemailer')

const userEmail = '1017665401@qq.com'
let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465,
    // secureConnetion: true,
    auth: {
        user: userEmail,
        // pass: "hrvaxbklxvkjbfeb"
        // pass: "kkbzrffedvapbeaf"
        pass: "fjmbvtmmdnkhbfdj"
    }
})

class ToolsService extends Service {
    captcha() {
        let captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
        })
        return captcha
    }

    async sendEmail(email, title, html) {
        const mailOptions = {
            from: userEmail,
            to: email,
            subject: title,
            text: '',
            html
        }
        try {
            const ret = await transporter.sendMail(mailOptions)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = ToolsService