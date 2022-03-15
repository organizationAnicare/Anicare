import FirstGreet from "../components/FirstGreet";
import Footer from "../components/Footer";
import SecondGreet from "../components/SecondGreet";
import ThirdGreet from "../components/ThirdGreet";

export default function Home() {
  return (
    <div>
      <FirstGreet />
      <SecondGreet />
      <ThirdGreet />
      <Footer />
    </div>
  );
}
