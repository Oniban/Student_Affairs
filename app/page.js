import ScrollExpandMedia from "../components/ScrollExpandMedia";
import ScrollPath from "../components/ScrollPath";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Scroll-Triggered Expanding Hero which unlocks content below on complete expansion */}
      <ScrollExpandMedia>
        {/* Scroll-Triggered Path Feature (About Section) */}
        <ScrollPath />
      </ScrollExpandMedia>
    </div>
  );
}
