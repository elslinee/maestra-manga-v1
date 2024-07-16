import Image from "next/image";
import Slider from "./_components/Slider";
import MangaList from "./_components/MangaList";

export default function Home() {
  return (
    <main>
      <Slider />
      <MangaList />
    </main>
  );
}
