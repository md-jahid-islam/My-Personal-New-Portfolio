import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
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
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Message sent successfully! 📩");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        toast.error("Message sent successfully! ❌");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center mt-20">
      <h2 className="text-3xl font-bold text-[#FF0080]">Contact Me</h2>
      <p className="mt-2 text-blue-500">Feel free to get in touch with me.</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8 space-y-5">
        <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange}
          className="w-full sm:w-3/4 lg:w-1/2 p-4 border-2 border-gray-300 rounded-lg" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange}
          className="w-full sm:w-3/4 lg:w-1/2 p-4 border-2 border-gray-300 rounded-lg" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange}
          className="w-full sm:w-3/4 lg:w-1/2 p-4 border-2 border-gray-300 rounded-lg h-32" />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button type="submit"
          className="w-36 h-12 bg-gradient-to-r from-[#FF0075] to-[#FC4100] text-white font-bold rounded-lg flex justify-center items-center gap-2 hover:scale-110 transition">
          {loading ? <ClipLoader size={20} color="#fff" /> : <FaPaperPlane />} Send Message
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
