import React from "react";

const ContactSection = () => {
    return (
        <div>
            {/* Hero section */}
            <section
                className="relative h-[80vh] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat px-6 mt-9"
                style={{ backgroundImage: `url('/Vertical garden/(6).jpg')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

                <div className="relative z-10 text-white max-w-2xl space-y-6">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="text-xl sm:text-1xl leading-relaxed drop-shadow">
                        Transform Your Garden into a Personal Paradise!
                    </p>
                    <button className="bg-[#3B6029] hover:bg-[#2E4E1E] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                        OUR SERVICES
                    </button>
                </div>
            </section>


            <div className="bg-[#f6f9f3] px-4 py-12 md:px-12">
                {/* Heading and description */}
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                        Send Your Message
                    </h2>
                    <p className="text-gray-700">
                        Whether you have a question, a suggestion, or just want to say hello,
                        this is the place to do it.
                    </p>
                    <p className="text-gray-700 mb-10">
                        Please fill out the form below with your details and message, and
                        we'll get back to you as soon as possible.
                    </p>

                    {/* Main section */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left side: image + contact info */}
                        <div className="w-full lg:w-1/2 bg-[#e4efe2] rounded-md">
                            <div className="flex flex-col md:flex-row h-full lg:min-h-[460px]">
                                {/* Image */}
                                <div className="w-full md:w-1/2 h-full">
                                    <img
                                        src="Vertical garden/Kanpur.jpg"
                                        alt="Woman holding plant"
                                        className="w-full h-full object-cover rounded-t-md md:rounded-t-none md:rounded-l-md"
                                    />
                                </div>

                                {/* Text */}
                                <div className="w-full md:w-1/2 p-6 space-y-6 text-gray-800 text-base flex flex-col justify-center">
                                    <div>
                                        <p className="font-semibold flex items-center gap-2">
                                            <span>🕒</span>Mon-Sat 09.00 - 18.00
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold flex items-center gap-2">
                                            <span>📍</span>Santragachi, Howrah, West Bengal, India
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold flex items-center gap-2">
                                            <span>📞</span>+91 9903243299
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold flex items-center gap-2">
                                            <span>📧</span>ticinaturelab@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Right side: Form */}
                        <div className="w-full lg:w-1/2 space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone"
                                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <textarea
                                rows={6}
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                            ></textarea>
                            <button className="bg-[#2f4a2e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#274028]">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
