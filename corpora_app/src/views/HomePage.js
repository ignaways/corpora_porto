import Card from "../components/CardProduct";
import banner from "../asset/banner.png";

export default function Home() {
  return (
    <div>
      <img src={banner} alt="banner" className="mt-28 mb-10" />
      <div className="grid grid-cols-2 2xl:grid-cols-5 gap-4 xl:grid-cols-4 sm:grid-cols-2">
        <Card />
      </div>
    </div>
  );
}
