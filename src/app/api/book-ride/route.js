import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your email provider's SMTP server
  port: 587, // Replace with the correct port
  secure: false, // Set to true if using TLS
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL, // Replace with your email address
    pass: process.env.NEXT_PUBLIC_PASSWORD, // Replace with your email password
  },
});

export async function POST(request) {
  const { fullName, email, packageType, passengers, startDest, endDest, rideDate, rideTime } = await request.json();

  const mailOptions = {
    from: email, // Replace with your email address
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: 'Taxi Booking Request',
    html: `
      <h1>Taxi Booking Request</h1>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>PackageType:</strong> ${packageType}</p>
      <p><strong>Passengers:</strong> ${passengers}</p>
      <p><strong>Start Destination:</strong> ${startDest}</p>
      <p><strong>End Destination:</strong> ${endDest}</p>
      <p><strong>Date:</strong> ${rideDate}</p>
      <p><strong>Time:</strong> ${rideTime}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email!' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}