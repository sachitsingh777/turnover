import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export const sendVerificationEmail = async (emailParams: EmailParams) => {
  try {
    await sgMail.send(emailParams);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending verification email', error);
  }
};
