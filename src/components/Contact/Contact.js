import React, { useState } from "react";
import Title from "../layauts/Title";
import ContactLe from "./ContactLe";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    const { username, phoneNumber, email, subject, message } = formData;

    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg("Все поля обязательны!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Введите корректный email!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg("Сообщение успешно отправлено!");
        setFormData({
          username: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrMsg(data.error || "Ошибка при отправке");
      }
    } catch (error) {
      setErrMsg("Ошибка соединения с сервером");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-10">
        {/* Левая часть */}
        <ContactLe />

        {/* Правая часть (Форма) */}
        <div className="w-full md:w-[60%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 md:p-8 rounded-lg shadow-lg">
          <form className="flex flex-col gap-6" onSubmit={handleSend}>
            {errMsg && <p className="text-orange-500 text-center">{errMsg}</p>}
            {successMsg && (
              <p className="text-green-500 text-center">{successMsg}</p>
            )}

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <p className="text-sm text-gray-400 uppercase">Your Name</p>
                <input
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  className="w-full p-2 rounded bg-[#141518] text-white"
                  type="text"
                />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-400 uppercase">Phone Number</p>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  className="w-full p-2 rounded bg-[#141518] text-white"
                  type="text"
                />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 uppercase">Email</p>
              <input
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full p-2 rounded bg-[#141518] text-white"
                type="email"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400 uppercase">Subject</p>
              <input
                name="subject"
                onChange={handleChange}
                value={formData.subject}
                className="w-full p-2 rounded bg-[#141518] text-white"
                type="text"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400 uppercase">Message</p>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                className="w-full p-2 rounded bg-[#141518] text-white"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-[#141518] text-white rounded-lg hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
