import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        fontFamily: "sans-serif",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 style={{ fontWeight: 900, fontSize: 40 }}>Sayfa Bulunamadı</h1>
      <Link
        style={{
          fontSize: 20,
          textDecoration: "none",
        }}
        href="/"
      >
        Ana Sayfa
      </Link>
    </div>
  );
}
