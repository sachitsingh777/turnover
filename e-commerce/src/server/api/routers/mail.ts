import { PrismaClient } from '@prisma/client';
import { sendVerificationEmail } from './sendemail';

const prisma = new PrismaClient();

export const registerUser = async (email: string) => {
  // Generate a unique verification code
  const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

  // Store the verification code in the database associated with the user
  const user = await prisma.user.create({
    data: {
      email,
      verificationCode,
      // Other user fields...
    },
  });

  // Send the verification email
  await sendVerificationEmail({
    to: email,
    from: 'your-email@example.com',
    subject: 'Verify Your Email',
    text: `Your verification code is: ${verificationCode}`,
    html: `<strong>Your verification code is: ${verificationCode}</strong>`,
  });

  return user;
};
