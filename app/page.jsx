import { Navigation } from "./components/navigation";
import { Banner } from "./components/home-page/banner";
import { Categories } from "./components/home-page/categories";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Banner />
      <Categories />
    </main>
  );
}
