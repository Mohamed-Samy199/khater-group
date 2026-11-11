import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
// 201001204191
/* ✏️ غيّر الرقم هنا (بالصيغة الدولية بدون + أو 00) */
const WHATSAPP_NUMBER = "201288439737";

const topics = [
  "Sports",
  "Aquatics",
  "Tech",
  "Scapes",
  "Play",
  "General inquiry",
];

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.23-6.15-3.4-8.43zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.9-9.87 9.9zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.03 9.03 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[topics.length - 1]);
  const [message, setMessage] = useState("");
  const panelRef = useRef(null);

  // اقفل بزرار Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSend = (e) => {
    e.preventDefault();

    const lines = [
      "Hello Khater Group \u00AE",
      name.trim() && `Name: ${name.trim()}`,
      `Interested in: ${topic}`,
      message.trim() && `Message: ${message.trim()}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Chat panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Chat with Khater Group"
        aria-hidden={!open}
        className={`w-[calc(100vw-2.5rem)] max-w-[22rem] origin-bottom-right overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] transition duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#101010] px-5 py-4 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={22} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-tight">Khater Group</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              Typically replies within minutes
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="space-y-4 bg-[#f5f5f4] p-5">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-neutral-700 shadow-sm">
            Hi there 👋 How can we help you today? Pick a service and send us a
            message, and we’ll continue the conversation on WhatsApp.
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              I’m interested in
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    topic === t
                      ? "border-[#101010] bg-[#101010] text-white"
                      : "border-black/10 bg-white text-neutral-600 hover:border-black/30"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-black/40"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={3}
            className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-black/40"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fb957] active:scale-[0.99]"
          >
            <Send size={16} />
            Continue on WhatsApp
          </button>
        </form>
      </div>

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#101010] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] ring-4 ring-white/70 transition duration-200 hover:scale-105"
      >
        <span
          className={`absolute transition duration-200 ${open ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100"}`}
        >
          <MessageCircle size={24} />
        </span>
        <span
          className={`absolute transition duration-200 ${open ? "scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
        >
          <X size={24} />
        </span>
      </button>
    </div>
  );
}
