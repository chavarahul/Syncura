import { poppin } from '@/app/constants';
import React from 'react';

const About = () => {
    const data = [
        {
            title: 'Patient-Doctor Mediator',
            description: 'Our platform bridges the gap between patients in rural and slum areas and the best medical services available, ensuring they receive timely and appropriate care.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        {
            title: 'Medical Equipment Rental',
            description: 'We provide a service to rent out medical equipment such as oxygen cylinders and BiPAP machines, crucial for emergencies, with immediate action through voice prompts.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4zm0 2c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2z" />
                </svg>
            )
        },
        {
            title: 'AI-Driven Appointments',
            description: 'Utilizing machine learning, our application schedules appointments efficiently, ensuring patients get timely consultations and follow-ups without unnecessary delays.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-white text-black py-20 min-h-screen relative" id="about">
            <div className="container mx-auto px-6 sm:px-10 lg:px-20">
                <div className="text-left mb-16 max-w-full sm:max-w-[75%] md:max-w-[50%] lg:max-w-[45%] mt-20">
                    <span className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-sm font-semibold">WHY CHOOSE US</span>
                    <h2 className={`${poppin.className} text-3xl sm:text-4xl font-bold mt-4`}>Connecting Patients with Essential Healthcare</h2>
                    <p className={`${poppin.className} text-gray-500 mt-4`}>Our platform bridges the gap between patients in rural and slum areas and the best medical services available. We ensure timely and appropriate care through innovative solutions and dedicated support.</p>
                    <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-8 rounded-full mt-8">Contact Us</button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((item, index) => (
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" key={index}>
                            <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-3 rounded-full mb-4 w-12 h-12 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${poppin.className}`}>{item.title}</h3>
                            <p className={`text-gray-500 ${poppin.className}`}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
