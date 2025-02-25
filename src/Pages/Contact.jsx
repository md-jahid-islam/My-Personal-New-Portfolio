import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { FaPaperPlane, FaComments, FaTimes, FaGithub, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () =>{
 //=============== useState ============//
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showChatList, setShowChatList] = useState(false);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");

 //========== validateForm part start =========//
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      toast.error("Name is required! ⚠️");
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      toast.error("Email is required! ⚠️");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      toast.error("Invalid email format! ⚠️");
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      toast.error("Message is required! ⚠️");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //============== validateForm part end ============//
  
 //============== handleSubmit part start ===========//
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        setTimeout(() => {
          const newMessage = {
            id: Date.now(),
            name: formData.name,
            message: formData.message,
          };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
          toast.success("Message sent successfully! 📩");
          setFormData({ name: "", email: "", message: "" });
        }, 1000);
      } catch (error) {
        toast.error("Failed to send message");
      } finally {
        setLoading(false);
      }
    }
  };
 //================ handleReply part start ==============//
  const handleReply = (id) => {
    if (!reply.trim()) {
      toast.error("Reply cannot be empty! ⚠️");
      return;
    }
 //============ prevMessages part start ==============//
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, reply: reply } : msg
      )
    );
    toast.success("Reply sent! ✅");
    setReply("");
  };
 //============ toggleChatList part start =============//
  const toggleChatList = () => {
    setShowChatList(!showChatList);
  };
 //============ design part start ==============//
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center mt-20 relative">
      <h2 className="text-3xl font-bold text-blue-500 underline ">Contact Me</h2>
      <p className="mt-2 text-blue-500 text-5xl">Let’s Start A New Project</p>
      
       {/* form handleSubmit part start */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 mt-8">
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
      
       {/* form handleSubmit part end */}

       {/* Present Address Permanent Address Phone part start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
        <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#008DDA] flex items-center gap-2"><FaMapMarkerAlt /> Present Address</h3>
          <p className="text-[#008DDA] font-bold ">Dhaka Uttara Azampur</p>
        </div>

        <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#008DDA] flex items-center gap-2"><FaMapMarkerAlt /> Permanent Address</h3>
          <p className="text-[#008DDA] font-bold ">Baniachong Habiganj Sylhet</p>
        </div>

        <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#008DDA] flex items-center gap-2"><FaPhoneAlt /> Phone</h3>
          <p className="text-[#008DDA] font-bold">+8801540587085</p>
        </div>

        <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#008DDA] flex items-center gap-2"><FaEnvelope /> Email</h3>
          <p className=" text-[#008DDA] font-bold ">jahidulislamweb2003@gmail.com</p>
        </div>
      </div>
    {/* Present Address Permanent Address Phone part end */}

       {/* social media links part start */}
      <div className="flex justify-center gap-5 mt-8">
        <a href="https://github.com/md-jahid-islam" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF0075] text-3xl">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/jahidul.islam.98621" target="_blank" rel="noopener noreferrer" className="text-[#0866ff] hover:text-[#FF0075] text-3xl">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" rel="noopener noreferrer" className="text-[#0866ff] hover:text-[#FF0075] text-3xl">
          <FaLinkedin />
        </a>
       {/* social media links part end */}

       {/*Download Cv part start */}
        <div className="">
            <a className="w-[115px] h-[30px] bg-gradient-to-r from-[#FF0075] to-[#FC4100] hover:from-[#FC4100] hover:to-[#FF0075] rounded-lg flex justify-center items-center text-white font-bold transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3 hover:border-2 hover:border-[#FC4100] hover:text-[#FC4100]" href="/public/images/Jahid-Resume.pdf" download="CV">
              Download Cv
            </a>
          </div>
         {/*Download Cv part end */}

      </div>
      {/*google map part start */}
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7882750495895!2d90.366667914982!3d23.791788684570996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41a8323b3a1%3A0xb37e8efb77a5b5b2!2sUttara%20Azimpur!5e0!3m2!1sen!2sbd!4v1708365826925!5m2!1sen!2sbd"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/*google map part end */}

      {/*toggleChatList button part start */}
      <button
        className="fixed bottom-5 right-5 bg-[#FF0075] text-white rounded-full p-4 shadow-lg hover:bg-[#FC4100] transition"
        onClick={toggleChatList}
      >
        {showChatList ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>
    {/*toggleChatList button part end */}

      {/*showChatList part start */}
      {showChatList && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 overflow-y-auto">
          <h3 className="text-xl font-bold text-[#FF0075] mb-3">Client Messages</h3>

          {messages.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="border-b border-gray-200 mb-3 pb-2">
                <p><strong>{msg.name}:</strong> {msg.message}</p>
                {msg.reply && <p className="text-green-500"><strong>Your Reply:</strong> {msg.reply}</p>}
                <input
                  type="text"
                  placeholder="Type your reply..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="w-full p-2 border rounded-lg mt-2"
                />
                {/*showChatList part end */}

              {/*handleReply button part start */}
                <button
                  onClick={() => handleReply(msg.id)}
                  className="w-full mt-2 p-2 bg-[#FF0075] text-white rounded-lg hover:bg-[#FC4100] transition"
                >
                  Reply
                </button>
               {/*handleReply button part end */}

              </div>
            ))
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
 };
 //============ design part end ==============//

 export default Contact;
