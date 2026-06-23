import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to let the page load before sliding in the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // In a real app, initialize tracking/analytics here
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
    // In a real app, ensure non-essential cookies are blocked
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center md:justify-start">
      <div className="bg-white border border-border shadow-2xl rounded-2xl p-6 max-w-sm sm:max-w-md w-full pointer-events-auto animate-fade-in-up flex flex-col gap-4 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-ink transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-display font-bold text-lg text-ink">We value your privacy</h3>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button
            onClick={handleReject}
            className="flex-1 px-4 py-2.5 rounded-xl border border-border text-ink font-semibold text-sm hover:bg-surface transition-colors"
          >
            Reject All
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
