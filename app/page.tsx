// import Image from "next/image";
import NavBar from "./components/NavBarr";
import LearnEverthing from "./components/LearnEverthing";
import Hero from "./components/Hero";
import JoinMentors from "./components/JoinMentors";
import WhyLearn from "./components/WhyLearn";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" bg-black">
      <NavBar />
      <Hero />

      <LearnEverthing />
      <JoinMentors />
      <WhyLearn />
      <Footer />
    </div>
  );
}
