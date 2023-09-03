import nodemailer from "nodemailer";
import User from "@/app/models/userModel";

import bcryptjs from "bcryptjs";



export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    console.log("sending email process is running...");
    
    const hasedToken = await bcryptjs.hash(userId.toString(), 10);
   
    if (emailType == "VERIFY") {

      await User.findByIdAndUpdate(userId, {
        verifytoken: hasedToken,
        verifytokenexpiry: Date.now() + 3600000,
      });
    } else if (emailType == "RESETPASSWORD") {
      await User.findByIdAndUpdate(userId, {
        forgotpasswordtoken: hasedToken,
        forgotpasswordtokenexpiry: Date.now() + 3600000,
      });
    }

    //NODE MAILER TO TRANSPORT A EMAIL
    // var transport = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: process.env.NODEMAILER_USER,
    //     pass: process.env.NODEMAILER_PASSWORD,
    //   },
    // });

    var transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      }
    });

    const mailOptions = {
      from: "scholarsuports@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY"
          ? "Please Verify Your Email Address"
          : "Reset Your Password",
      html: `<div>
        <p>Dear Sir/Ma'am,</p> 
        <p>To complete the process, please click on the link below:</p>
        <a href="${
          process.env.DOMAIN
        }/verifyemail?token=${hasedToken}"> here</a> <span>to ${
        emailType === " VERIFY"
          ? "Please Verify Your Email Address"
          : " Reset Your Password"
      }</span>
        <p>Thank you for your prompt attention to this matter.</p>
        <p>Sincerely,</p>
        <p>ScholarSupports</p>
        </div>`,
    };
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
