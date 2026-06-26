import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <div className="fixed bottom-48 right-6 z-40 flex flex-col items-end gap-2 group">
    {/* Tooltip on hover */}
    <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
      Chat on WhatsApp
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45" />
    </div>
    
    <a
      href="https://wa.me/919504007442"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with PrepX Infotech on WhatsApp"
      className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[#20b858] hover:shadow-xl transition-all duration-300"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
  </div>
);

export default WhatsAppButton;
