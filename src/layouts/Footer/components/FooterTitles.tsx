export function FooterTitles({
  registerTitle
}: {
  registerTitle: (el: HTMLDivElement | null) => void;
}) {
  return (
    <h2 className="text-6xl md:text-7xl font-bold leading-tight">
      <div ref={registerTitle}>Let's create</div>
      <div ref={registerTitle}>something</div>
      <div ref={registerTitle}>amazing.</div>
    </h2>
  );
}
