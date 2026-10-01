import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLinkProps } from "@/lib/site-config";

// Site-wide floating WhatsApp button. The footer has extra bottom padding so
// this never sits on top of the last row of links.
export default function FloatingWhatsApp() {
  return (
    <a
      {...whatsappLinkProps}
      aria-label="Chat with GoEasyAI on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
