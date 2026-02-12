import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-3 font-sans bg-brand-primary text-white">
      <h1 className="font-black text-4xl">Sayfa Bulunamadı</h1>
      <Link
        className="text-xl bg-brand-secondary text-white rounded-lg px-6 py-3 hover:bg-brand-secondary/90 transition-colors"
        href="/"
      >
        Ana Sayfa
      </Link>
    </div>
  );
}
