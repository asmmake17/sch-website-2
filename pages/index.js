import TopImage from "./homeComponents/topImage";
import MidContent from "./homeComponents/MidContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <TopImage />
      <MidContent />
      <Footer />
    </div>
  );
}
