import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('Your message has been sent!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        toast.error('Error submitting form. Please try again!');
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl font-bold text-[#FF0080] hover:text-[#4f4f4f] text-center pt-10">Get In Touch</h2>
      <h2 className="w-[250px] h-[3px] bg-slate-400 mt-4 mx-auto"></h2>
      <h3 className="mt-10 text-center text-lg">Take a Coffee & Chat With Me</h3>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#4f4f4f] p-6 hover:scale-105 transition-transform">
          <img className="w-12 h-12 mb-4 transition" src="/images/email.png" alt="Email" />
          <h2 className="text-lg font-bold text-white">Email</h2>
          <a href="mailto:jahidulislamwebbd@gmail.com" className="text-white hover:text-green-500">
            jahidulislamwebbd@gmail.com
          </a>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#4f4f4f] p-6 hover:scale-105 transition-transform">
          <img className="w-12 h-12 mb-4 transition" src="/images/contact.png" alt="Phone" />
          <h2 className="text-lg font-bold text-white">Phone</h2>
          <a href="tel:+8801540587085" className="text-white hover:text-green-500">+880 1540587085</a>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10 pb-3">
        <a className="w-[200px] h-[50px] bg-gradient-to-r from-[#FF0075] to-[#FC4100] hover:from-[#FC4100] hover:to-[#FF0075] rounded-lg flex justify-center items-center text-white font-bold transition-all hover:scale-110 hover:shadow-lg"
           href="/images/Jahid-Resume.pdf" download="Jahid-Resume.pdf">
          CV Download
        </a>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
        <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="w-full sm:w-3/4 lg:w-1/2 p-4 border-2 border-gray-300" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} className="w-full sm:w-3/4 lg:w-1/2 p-4 border-2 border-gray-300 mt-5" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} className="w-full sm:w-3/4 lg:w-1/2 p-4 border-2 border-gray-300 mt-5 h-32" />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button type="submit" className="w-36 h-12 bg-gradient-to-r from-[#FF0075] to-[#FC4100] text-white hover:scale-110 transition">
          {loading ? <ClipLoader size={20} color="#fff" /> : 'Send Message'}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
