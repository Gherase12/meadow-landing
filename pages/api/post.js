import nodemailer from 'nodemailer';

export default function handler(req, res) {
    const { firstName, lastName, mail, motivation } = req.body;
    console.log(req.body)

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'cgherase12@gmail.com',
            pass: 'saotmwktlhnzlxycsaotmwktlhnzlxyc'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'cgherase12@gmail.com', // sender address
        to: `gherase.cosmin.12@gmail.com`, // list of receivers
        subject: `${firstName} ${lastName} has applyed`, // Subject line
        text: motivation, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.status(200).json({ message: 'Email sent' });
    });
}
