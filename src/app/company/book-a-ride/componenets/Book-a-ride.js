'use client'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const vehicles = [
    { "option": "Camry Car", "value": "camry-car" },
    { "option": "GMC- 2022", "value": "gmc-2022" },
    { "option": "GMC- 2020", "value": "gmc-2020" },
    { "option": "Hyundai Staria", "value": "hyundai-staria" },
    { "option": "Toyota HIACE", "value": "toyota-hiace" },
    { "option": "Coaster Saloon", "value": "coaster-saloon" }
];

const persons = [
    { "passengers": 1 }, { "passengers": 2 }, { "passengers": 3 },
    { "passengers": 4 }, { "passengers": 5 }, { "passengers": 6 },
    { "passengers": 7 }, { "passengers": 8 }, { "passengers": 9 },
    { "passengers": 10 }, { "passengers": 11 }, { "passengers": 12 },
    { "passengers": 13 }, { "passengers": 14 }, { "passengers": 15 },
    { "passengers": 16 }, { "passengers": 17 }, { "passengers": 18 }
];

const BookARide = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        packageType: '',
        passengers: '',
        startDest: '',
        endDest: '',
        rideDate: '',
        rideTime: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            const name = searchParams.get('name');
            const passengers = searchParams.get('passengers');

            const vehicle = vehicles.find(vehicle => vehicle.option === name);
            const passenger = persons.find(person => person.passengers === parseInt(passengers));

            setFormData(prevState => ({
                ...prevState,
                packageType: vehicle ? vehicle.value : '',
                passengers: passenger ? passenger.passengers : ''
            }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch('/api/book-ride', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Booking successful!');
                setIsLoading(false);
            } else {
                toast.error('Booking failed. Please try again.');
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="book-taxi-ride">
            <div className="taxi-booking-form">
                {/* Input fields */}
                <div className="form-field">
                    <i className="las la-user-tie"></i>
                    <input
                        type="text"
                        id="full-name"
                        name="fullName"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <i className="las la-envelope-open"></i>
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
                    <i className="las la-tags"></i>
                    <select
                        name="packageType"
                        className="niceSelect"
                        value={formData.packageType}
                        onChange={handleChange}
                    >
                        {vehicles.map((vehicle, index) => (
                            <option key={index} value={vehicle.value}>
                                {vehicle.option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-field">
                    <i className="las la-user-friends"></i>
                    <select
                        name="passengers"
                        id="passengers"
                        className="niceSelect"
                        value={formData.passengers}
                        onChange={handleChange}
                    >
                        {persons.map((person, index) => (
                            <option key={index} value={person.passengers}>
                                {`${person.passengers} Person${person.passengers > 1 ? 's' : ''}`}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Additional input fields */}
                <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                        type="text"
                        id="start-dest"
                        name="startDest"
                        className="form-control"
                        placeholder="Start Destination"
                        value={formData.startDest}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                        type="text"
                        id="end-dest"
                        name="endDest"
                        className="form-control"
                        placeholder="End Destination"
                        value={formData.endDest}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <i className="las la-calendar"></i>
                    <input
                        type="text"
                        id="ride-date"
                        name="rideDate"
                        className="form-control date-picker"
                        placeholder="Select Date"
                        value={formData.rideDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <i className="las la-clock"></i>
                    <input
                        type="text"
                        id="ride-time"
                        name="rideTime"
                        className="form-control time-picker"
                        placeholder="Select Time"
                        value={formData.rideTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <button id="submit" className="default-btn" type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Book Your Taxi'}
                    </button>
                </div>
            </div>
            {/* <div id="form-messages" className="alert" role="alert"></div> */}
        </form>
    );
};

export default BookARide;
