export function FooterToast({ toast }: { toast: boolean }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white px-6 py-3 rounded-lg shadow-lg transition-all ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      Phone number copied
    </div>
  );
}
