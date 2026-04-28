// Tracks which section is currently visible in the viewport and returns its ID.

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  sectionIds: string[];
  rootMargin?: string;
}

export const useScrollSpy = ({
  sectionIds,
  rootMargin = "-50% 0px -50% 0px",
}: UseScrollSpyOptions) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Get only the entries that are visible inside the viewport
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // If multiple sections are visible, pick the one closest to the top
          const topMost = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr,
          );

          setActiveSection(topMost.target.id);
        } else {
          // If no section is visible → clear active section
          setActiveSection("");
        }
      },
      { rootMargin },
    );

    // Observe all target sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
};
