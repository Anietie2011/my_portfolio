"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GetInTouchPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [faliure, setFaliure] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!/^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(form.name.trim())) {
      newErrors.name = "Enter full name (first & last name)";
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    // fake delay (replace later with backend/email API)
    // await new Promise((res) => setTimeout(res, 1500));
    try {
      setLoading(true);
    
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setLoading(false);
      setFaliure(false);
      setSuccess(true);
    
      setForm({
        name: "",
        email: "",
        message: "",
      });
    
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
      setFaliure(true);

      setTimeout(() => {
        setFaliure(false);
      }, 3000);
    }

    

    // setForm({ name: "", email: "", message: "" });

    // setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 relative">
      <button
        onClick={() => router.back()}
        className="mb-10 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
      ><span className="text-xl">←</span>  Back</button>
      <div className="max-w-3xl mx-auto">
        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Get In Touch
        </h1>

        <p className="text-gray-400 mb-12 text-lg">
          Hire me or collaborate on a project.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 border border-white/10 p-10 rounded-3xl"
        >
          {/* NAME */}
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-4 rounded-2xl bg-black border border-white/10 focus:border-cyan-400 outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="w-full p-4 rounded-2xl bg-black border border-white/10 focus:border-cyan-400 outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Create a modern looking web site for me."
              rows={6}
              className="w-full p-4 rounded-2xl bg-black border border-white/10 focus:border-cyan-400 outline-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2">{errors.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      {/* SUCCESS TOAST */}
      {success && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-lg animate-bounce">
          <span className="text-xl">✔</span>
          Message Sent Successfully!
        </div>
      )}
      {/* Error TOAST */}
      {faliure && (
        <div className="fixed bottom-10 right-10 bg-red-500 text-white px-6 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-lg animate-bounce">
          <span className="text-xl">✗</span>
           Fail to send try again!
        </div>
      )}

{/* CONTACT INFO */}
  <div className="mt-12 grid gap-6 text-center">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <p className="text-gray-400 text-sm mb-2">Name</p>
      <h3 className="text-xl font-bold">Anietienteabasi Etim</h3>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <p className="text-gray-400 text-sm mb-2">Email</p>
      <h3 className="text-xl font-bold"><a href="mailto:anietienteabasietim@gmail.com" className="underline">anietienteabasietim@gmail.com</a></h3>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <p className="text-gray-400 text-sm mb-2">Phone</p>
      <h3 className="text-xl font-bold">+234 810 709 2013</h3>
    </div>
  </div>
    </main>
  );
}