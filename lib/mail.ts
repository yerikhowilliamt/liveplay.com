import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const createVerificationEmail = (email: string, token: string) => {
  const domain = process.env.PUBLIC_DOMAIN;
  const verificationUrl = `${domain}/new-verification?token=${token}`;
  return {
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Email Verification",
    html: `
    <h3>To activate your account, click the link below:</h3>
      <a href="${verificationUrl}">Confirm your email.</a>
    `,
  };
};

const createPasswordResetEmail = (email: string, token: string) => {
  const domain = process.env.PUBLIC_DOMAIN;
  const resetLink = `${domain}/new-password?token=${token}`;
  return {
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Reset password",
    html: `
    <h3>To reset your password, click the link below:</h3>
      <a href="${resetLink}">Reset your password.</a>
    `,
  };
};

export const sendVerificationEmail = (email: string, token: string) => {
  return new Promise(() => {
    const mailOptions = createVerificationEmail(email, token);
    transporter.sendMail(mailOptions, (err: any, info: any) => {
    });
  });
};

export const sendPasswordResetEmail = (email: string, token: string) => {
  return new Promise(() => {
    const mailOptions = createPasswordResetEmail(email, token);
    transporter.sendMail(mailOptions, (err: any, info: any) => {
    });
  });
};
