import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-black/5 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:px-6">
        <Image
          src="/logo.png"
          alt="Health Coaching with Hal"
          width={112}
          height={112}
          priority
          className="h-[144px] w-auto sm:h-[168px]"
        />
      </div>
    </header>
  );
}
