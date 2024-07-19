import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Slider from "./_components/Slider";
import MangaList from "./_components/MangaList";
import Ad from "./_components/Ad";

export default function Home() {
  return (
    <main>
      <Ad />
      <Slider />
      <MangaList />
    </main>
  );
}
