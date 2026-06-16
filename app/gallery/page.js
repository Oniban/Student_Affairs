import InteractiveGallery from "../../components/InteractiveGallery";

export const metadata = {
  title: "Photo Gallery | Student Affairs Office",
  description: "Browse photos from campus events, sports meets, welfare programs, and campus life at our university.",
};

export default function GalleryPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 dark:border-slate-800 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-amber-500">Visual Stories</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Photo Gallery</h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            A curated collection of moments from campus events, sports achievements, student welfare programs, and daily life on campus. Filter by category and click any photo to view it full-size.
          </p>
        </div>

        <InteractiveGallery />
      </div>
    </div>
  );
}
