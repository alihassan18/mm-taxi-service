import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your email provider's SMTP server
    port: 587, // Replace with the correct port
    secure: false, // Set to true if using TLS
    auth: {
        user: 'your-email@example.com', // Replace with your email address
        pass: 'your-password', // Replace with your email password
    },
});

export async function POST(request) {

    const { firstname, lastname, email, phone, message } = await request.json();

    const mailOptions = {
        from: 'your-email@example.com', // Replace with your email address
        to: email, // Replace with the recipient's email address
        subject: 'Taxi Booking Request',
        html: `
      <h1>Taxi Booking Request</h1>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone No:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
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