
import Icon from "./Icon";
const Contact = () => {
    return (
        <div id="contact" className="mt-12 mb-5 pb-4">
            <Icon></Icon>
            <section className="w-5/6 mx-auto  rounded-lg shadow-md p-5 pt-0">
                <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                        <p className="mb-2">
                            <strong>Address:</strong> 123 SpiceHub, Mazar Road, Mirpur 1, Dhaka, Bangladesh
                        </p>
                        <p className="mb-2">
                            <strong>Phone:</strong> (123) 456-7890
                        </p>
                        <p className="mb-2">
                            <strong>Email:</strong> contact@spicehub.com
                        </p>
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345097644!2d144.95592551531682!3d-37.8161789797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e6d6efc5a348!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615181604751!5m2!1sen!2sau"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                        <form id="contactForm" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;