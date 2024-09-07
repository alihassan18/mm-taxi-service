'use client'
import React, { useState } from "react";
import { toast } from "react-toastify";


const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isloading, setIsLoading] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true)
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Request sent successfully!');
                setIsLoading(false);
                setFormData('')
            } else {
                toast.error('Request failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
            setIsLoading(false);
        }
    };

    return (
        <form
            action="contact.php"
            method="post"
            id="ajax_contact"
            className="form-horizontal"
            onSubmit={handleSubmit}
        >
            <div className="contact-title">
                <h2>
                    Contact With Us! <span></span>
                </h2>
            </div>
            <div className="contact-form-group">
                <div className="form-field">
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field message">
                    <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="4"
                        className="form-control"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-field">
                    {
                        isloading ? <button id="submit" className="default-btn" type="submit">
                            Loading...
                        </button> : <button id="submit" className="default-btn" type="submit">
                            Send Message
                        </button>
                    }
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;
