import Container from "@/components/container/Container";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-side flex">
      <Sidebar />
      <Container />
    </main>
  );
}
