import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

//=========== useState name email message ========//
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false); 

 //============ validateForm =========//
const validateForm = () => {
  const newErrors = {};

  // Check if the name is empty
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
    toast.error("Name is required! ⚠️"); // Toast message for name error
  }

  // Check if the email is empty or invalid
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
    toast.error("Email is required! ⚠️"); // Toast message for email error
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
    toast.error("Invalid email format! ⚠️"); // Toast message for invalid email
  }

  // Check if the message is empty
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
    toast.error("Message is required! ⚠️"); // Toast message for message error
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // If no errors, return true
};

//========== handleChange event =========//
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

//======== handleSubmit event with toast notifications and loading =========//
const handleSubmit = async (e) => {
  e.preventDefault();

  // Only submit if the form is valid
  if (validateForm()) {
    try {
      setLoading(true);

      // Send form data to the API
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        toast.success("Message sent successfully! 📩");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error(`Error: ${error.message} ❌`);
    } finally {
      setLoading(false);
    }
  }
};


  // Toggle the map visibility
  const handleToggleMap = () => {
    setShowMap(!showMap);
  };

  //========== all Contact from design part start =========//
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center mt-20">
      <h2 className="text-3xl font-bold text-[#FF0080] pt-10 ">Contact Me</h2>
      <p className="mt-2 text-blue-500 text-5xl">Let’s Start A New Project</p>

      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-10">
        
        {/* Left Side - Contact Information */}
        <div className="lg:w-1/3 text-left space-y-6 p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
          <h3 className="text-2xl font-semibold text-[#FF0075]">My Contact Informations:</h3>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#FC4100] text-xl" />
            <p><strong>Present Address:</strong> Uttara, Azampur, Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#FC4100] text-xl" />
            <p><strong>Permanent Address:</strong> Habiganj, Sylhet, Bangladesh</p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#FC4100] text-xl" />
            <p><strong>Contact:</strong> +8801540587085</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#FC4100] text-xl" />
            <p><strong>Email:</strong> jahidulislamwebbd@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-5 mt-4">
            <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#1877F2] text-3xl hover:scale-110 transition" />
            </a>
            <a href="https://github.com/md-jahid-islam" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 text-3xl hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0077B5] text-3xl hover:scale-110 transition" />
            </a>
             {/*Download Resume part start*/}
             <div className="absolute ml-[160px]">
             <a className="w-[109px] h-[36px] bg-gradient-to-r from-[#FF0075] to-[#FC4100] hover:from-[#FC4100] hover:to-[#FF0075] rounded-lg flex justify-center items-center text-white font-bold transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3 hover:border-2 hover:border-[#FC4100] hover:text-[#FC4100]" href="/public/images/Jahid-Resume.pdf" download="CV">
               Download CV
            </a>
           </div>
        {/*Download Resume part end*/}
          </div>
          
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5">
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

          {/* Button to toggle Google Map */}
          <button
            onClick={handleToggleMap}
            className="mt-4 p-3 bg-[#FF0075] text-white rounded-lg hover:bg-[#FC4100] transition-all duration-300">
            {showMap ? "Hide Map" : "Show My Location"}
          </button>

          {/* Google Map part */}
          {showMap && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#FF0080]">My Location</h3>
              <iframe
                className="w-full sm:w-3/4 lg:w-1/2 h-64 mt-4 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9025201496566!2d90.39844331536222!3d23.750867784588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1a742f9f5%3A0xa4b8dd128f2c0b3!2sUttara%20Azampur%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1638599323535"
                allowFullScreen="" loading="lazy"></iframe>
            </div>
          )}
        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
