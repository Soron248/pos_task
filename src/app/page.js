import Container from "@/components/container/Container";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-full h-screen bg-side flex">
      <Sidebar />
      <Container />
    </main>
  );
}
