export default function VideoTestimonial({
  name,
  src,
  title,
  description,
}: {
  name: string;
  src: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 p-6">
      <video controls playsInline preload="metadata" className="w-full rounded-xl bg-gray-100">
        <source src={src} type="video/mp4" />
        Your browser doesn&apos;t support this video format.
      </video>
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
