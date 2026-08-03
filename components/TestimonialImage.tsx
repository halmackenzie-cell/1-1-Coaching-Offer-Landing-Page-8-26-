"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialImage({
  src,
  alt,
  aspect = "aspect-square",
  objectPosition = "center",
  zoom = 1,
  className,
}: {
  src: string;
  alt: string;
  aspect?: string;
  objectPosition?: string;
  zoom?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-gray-100 ${className ?? ""}`}
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-gray-600">
          Photo coming soon
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition, transform: zoom !== 1 ? `scale(${zoom})` : undefined }}
          sizes="(min-width: 768px) 33vw, 100vw"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
