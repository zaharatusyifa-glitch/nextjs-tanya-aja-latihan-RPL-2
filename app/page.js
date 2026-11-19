import { Logo } from "@/components/Logo";



// Halaman awal starter. Isinya diganti pada Handbook Hari 03, Tahap 2.
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 text-center">
      <Logo />
      <h1 className="text-3xl font-bold">Starter ApaAja! berjalan</h1>
      <p className="mt-2 text-muted-foreground">
        Lanjutkan ke Handbook Hari 03, Tahap 2.
      </p>
    </main>
  );
}
