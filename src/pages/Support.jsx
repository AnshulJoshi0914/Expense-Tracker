import { useState } from "react";
import {
  LifeBuoy,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Clock3,
  MapPin,
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

    alert("Support request submitted successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  const contacts = [
    {
      title: "Email",
      value: "support@ledgerly.com",
      icon: <Mail size={28} />,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "Phone",
      value: "+91 98765 43210",
      icon: <Phone size={28} />,
      color: "from-sky-500 to-cyan-500",
      bg: "bg-sky-50 dark:bg-sky-900/20",
    },
    {
      title: "Live Chat",
      value: "Available 24 × 7",
      icon: <LifeBuoy size={28} />,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50 dark:bg-amber-900/20",
    },
    {
      title: "Office",
      value: "New Delhi, India",
      icon: <MapPin size={28} />,
      color: "from-violet-500 to-fuchsia-500",
      bg: "bg-violet-50 dark:bg-violet-900/20",
    },
  ];

  return (
    <div className="space-y-8">

      <div className="rounded-[10px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,.18)]">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">

              Support Center

            </p>

            <h1 className="mt-3 text-4xl font-bold">

              We're Here To Help 💬

            </h1>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">

              Have a question, found a bug, or need assistance? Reach out to us
              anytime and our support team will get back to you quickly.

            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-md">

            <Clock3
              size={34}
              className="text-emerald-300"
            />

            <p className="mt-3 text-sm text-slate-300">

              Average Response

            </p>

            <h3 className="text-2xl font-bold">

              Under 2 Hours

            </h3>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">

        {contacts.map((item) => (

          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          >

            <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${item.bg}`} />

            <div className={`relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>

              {item.icon}

            </div>

            <h2 className="relative mt-6 text-xl font-bold text-slate-800 dark:text-white">

              {item.title}

            </h2>

            <p className="relative mt-2 leading-6 text-slate-500 dark:text-slate-400">

              {item.value}

            </p>

          </div>

        ))}

      </div>

      <div className="grid gap-7 xl:grid-cols-3">

        <div className="rounded-[10px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none xl:col-span-2">

          <div className="mb-8 flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/20">

              <MessageSquare className="text-emerald-600 dark:text-emerald-400" />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

                Contact Support

              </h2>

              <p className="text-slate-500 dark:text-slate-400">

                Fill out the form below and we'll reach out shortly.

              </p>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
                required
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              required
            />

            <textarea
              rows={7}
              name="message"
              placeholder="Describe your issue..."
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              required
            />

            <button
              type="submit"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >

              <Send size={18} />

              Send Message

            </button>

          </form>

        </div>

        <div className="rounded-[10px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

            Quick Help

          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">

            Frequently asked topics.

          </p>

          <div className="mt-8 space-y-4">

            {[
              "How do I add a new expense?",
              "How can I create budgets?",
              "Can I export my reports?",
              "How do I change my currency?",
              "How do I reset my password?",
            ].map((item) => (

              <button
                key={item}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left font-medium text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:bg-emerald-900/20"
              >

                {item}

              </button>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Support;