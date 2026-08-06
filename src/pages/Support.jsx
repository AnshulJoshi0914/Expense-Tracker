import { useState } from "react";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";
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
  const [openFAQ, setOpenFAQ] = useState(null);
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

    toast.success("Support request submitted successfully!");

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

  const faqs = [
    {
      question: "How do I add a new expense?",
      answer:
        "Go to the Transactions page and click 'Add Transaction'. Fill in the details and save.",
    },
    {
      question: "How can I create budgets?",
      answer:
        "Open the Budgets page, click 'Create Budget', choose a category and set your monthly limit.",
    },
    {
      question: "Can I export my reports?",
      answer:
        "Yes. Visit the Reports page and click the 'Export PDF' button to download your financial report.",
    },
    {
      question: "How do I change my currency?",
      answer:
        "Go to Settings and select your preferred currency from the dropdown menu.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Currently password reset is not available. It will be added in a future update.",
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

            <h1 className="mt-3 text-4xl font-bold">We're Here To Help 💬</h1>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Have a question, found a bug, or need assistance? Reach out to us
              anytime and our support team will get back to you quickly.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-md">
            <Clock3 size={34} className="text-emerald-300" />

            <p className="mt-3 text-sm text-slate-300">Average Response</p>

            <h3 className="text-2xl font-bold">Under 2 Hours</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
        {contacts.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          >
            <div
              className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${item.bg}`}
            />

            <div
              className={`relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
            >
              {item.icon}
            </div>

            <h2 className="relative mt-6 text-xl font-bold text-slate-800 dark:text-white">
              {item.title}
            </h2>

            <p className="relative mt-2 leading-6 text-slate-500 dark:text-slate-400">
              {item.title === "Email" ? (
                <a
                  href={`mailto:${item.value}`}
                  className="text-emerald-600 hover:underline"
                >
                  {item.value}
                </a>
              ) : item.title === "Phone" ? (
                <a
                  href={`tel:${item.value}`}
                  className="text-emerald-600 hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
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

          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Message
              </button>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  })
                }
                className="rounded-2xl border border-slate-300 px-7 py-4 font-semibold dark:border-slate-700 dark:text-white"
              >
                Reset
              </button>
            </div>
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
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="flex w-full items-center justify-between bg-slate-50 px-5 py-4 text-left font-medium text-slate-700 transition hover:bg-emerald-50 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {faq.question}

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="bg-white px-5 py-4 text-sm leading-7 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
