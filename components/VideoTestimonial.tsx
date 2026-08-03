export default function VideoTestimonial({
  name,
  youtubeId,
  aspect = "aspect-video",
  title,
  description,
}: {
  name: string;
  youtubeId: string;
  aspect?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 p-6">
      <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-gray-100`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={`${name} testimonial video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <h3 className="mt-4 text-center text-base font-bold text-black">{name}</h3>
      {title && (
        <p className="mt-1 text-center text-sm text-gray-500">{title}</p>
      )}
      {description && (
        <p className="mt-3 text-center text-base italic text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
