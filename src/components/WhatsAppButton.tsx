import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919504007442"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with PrepX Infotech on WhatsApp"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-hover flex items-center justify-center hover:scale-105 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
