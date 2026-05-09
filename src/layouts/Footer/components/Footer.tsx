import { useEffect, useRef, useState } from "react";
import { FooterTitles } from "./FooterTitles";
import { FooterContact } from "./FooterContact";
import { FooterSocials } from "./FooterSocials";
import { FooterToast } from "./FooterToast";
import { animateFooter } from "../animations/footer.animations";
import { isMobile } from "../utils/isMobile";
import { CONTACT } from "../data/footer.data";

export default function Footer() {
  const footerRef = useRef(null);
  const titleRefs = useRef<HTMLDivElement[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState(false);

  const registerTitle = (el: HTMLDivElement | null) => {
    if (el && !titleRefs.current.includes(el)) titleRefs.current.push(el);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(CONTACT.phoneDisplay);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  useEffect(() => {
    const cleanup = animateFooter(footerRef, titleRefs, contactRef, socialsRef);
    return cleanup;
  }, []);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-white text-neutral-900 px-8 py-16 mt-40 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <FooterTitles registerTitle={registerTitle} />
        <FooterContact
          contactRef={contactRef}
          isMobile={isMobile}
          copyPhone={copyPhone}
        />
        <FooterSocials socialsRef={socialsRef} />

        <div className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Jameh shooran — Frontend Developer
        </div>
      </div>

      <FooterToast toast={toast} />
    </footer>
  );
}
