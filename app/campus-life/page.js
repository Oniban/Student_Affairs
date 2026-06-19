"use client";

const ROW1_PHOTOS = [
  "/college photos/admin 2.jpg",
  "/college photos/admin building.jpg",
  "/college photos/aryabhatta 2.jpg",
  "/college photos/aryabhatta+kalam.jpg",
  "/college photos/aryabhatta.jpg",
  "/college photos/bake o mocha.jpg",
  "/college photos/food court.jpg",
  "/college photos/front sign.jpg",
  "/college photos/frontgate night.jpg",
];

const ROW2_PHOTOS = [
  "/college photos/frontgate.jpg",
  "/college photos/gymkhana road.jpg",
  "/college photos/ib.jpg",
  "/college photos/kalaam.jpg",
  "/college photos/lib 2.jpg",
  "/college photos/lib far away.jpg",
  "/college photos/mocha.jpg",
  "/college photos/tut block.jpg",
];

function getLabel(photo) {
  return photo
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function PhotoCard({ photo }) {
  const label = getLabel(photo);
  return (
    <div className="relative h-48 w-72 md:h-56 md:w-80 rounded-2xl overflow-hidden shadow-md group transition-transform duration-300 hover:scale-102 bg-slate-200 dark:bg-slate-800">
      <img
        src={photo}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white text-xs font-bold">{label}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ photos, direction, rowKey }) {
  return (
    <div className="relative overflow-hidden w-full flex">
      <div className={`flex gap-6 w-max animate-marquee-${direction}`}>
        <div className="flex gap-6 shrink-0">
          {photos.map((photo, index) => (
            <PhotoCard key={`${rowKey}-${index}`} photo={photo} />
          ))}
        </div>
        <div className="flex gap-6 shrink-0" aria-hidden="true">
          {photos.map((photo, index) => (
            <PhotoCard key={`${rowKey}-dup-${index}`} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CampusLifePage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Campus Gallery */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Campus Gallery
          </h1>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-amber-400 dark:from-amber-300 dark:to-yellow-500" />
        </div>

        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden flex flex-col gap-6 py-4 bg-slate-50/50 dark:bg-slate-900/10">
          <MarqueeRow photos={ROW1_PHOTOS} direction="left" rowKey="r1" />
          <MarqueeRow photos={ROW2_PHOTOS} direction="right" rowKey="r2" />
        </div>

      </div>
    </div>
  );
}
