import { FiMail, FiPhone } from "react-icons/fi";
import { CONTACT } from "../data/footer.data";

export function FooterContact({
  contactRef,
  isMobile,
  copyPhone
}: {
  contactRef: React.RefObject<HTMLDivElement | null>;
  isMobile: () => boolean;
  copyPhone: () => void;
}) {
  return (
    <div
      ref={contactRef}
      className="flex flex-col sm:flex-row sm:justify-between gap-6"
    >
      <a
        href={`mailto:${CONTACT.email}`}
        className="flex items-center gap-2 text-neutral-500 hover:text-black transition group"
      >
        <FiMail className="group-hover:text-blue-500 transition" />
        {CONTACT.email}
      </a>

      {isMobile() ? (
        <a
          href={`tel:${CONTACT.phoneLink}`}
          className="flex items-center gap-2 text-neutral-500 hover:text-black transition group"
        >
          <FiPhone className="group-hover:text-green-500 transition" />
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <button
          onClick={copyPhone}
          className="flex items-center gap-2 text-neutral-500 hover:text-black transition group"
        >
          <FiPhone className="group-hover:text-green-500 transition" />
          {CONTACT.phoneDisplay}
        </button>
      )}
    </div>
  );
}
