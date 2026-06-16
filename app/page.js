import HostelCarousel from "../components/HostelCarousel";
import ScrollPath from "../components/ScrollPath";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* 1. Hostel Pictures Carousel (Hero) */}
      <HostelCarousel />

      {/* 2. Scroll-Triggered Path Feature (About Section) */}
      <ScrollPath />
    </div>
  );
}
