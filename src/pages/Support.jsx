import { useState } from "react";
import {
  LifeBuoy,
  Mail,
  Phone,
  MessageSquare,
  Send,
} from "lucide-react";

function Support() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Support request submitted!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Support Center
        </h1>

        <p className="text-gray-500 mt-2">
          Need help? Send us a message or use one of the contact options below.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-sm border p-6">

          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">

            <Mail />

          </div>

          <h2 className="font-semibold text-xl mt-5">
            Email
          </h2>

          <p className="text-gray-500 mt-2">
            support@ledgerly.com
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-6">

          <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center">

            <Phone />

          </div>

          <h2 className="font-semibold text-xl mt-5">
            Phone
          </h2>

          <p className="text-gray-500 mt-2">
            +91 98765 43210
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-6">

          <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-700 flex items-center justify-center">

            <LifeBuoy />

          </div>

          <h2 className="font-semibold text-xl mt-5">
            Live Support
          </h2>

          <p className="text-gray-500 mt-2">
            Available 24 × 7
          </p>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-sm border p-8">

        <div className="flex items-center gap-3 mb-6">

          <MessageSquare className="text-emerald-600" />

          <h2 className="text-2xl font-semibold">
            Contact Support
          </h2>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />

          <textarea
            rows={6}
            name="message"
            placeholder="Describe your issue..."
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-emerald-500"
            required
          />

          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >

            <Send size={18} />

            Send Message

          </button>

        </form>

      </div>

    </div>
  );
}

export default Support;