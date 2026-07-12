import Bannar from "@/components/Bannar";
import Categories from "@/components/extra-section/Categories";
import Features from "@/components/extra-section/Features";
import Highlights from "@/components/extra-section/Highlights";
import Services from "@/components/extra-section/Services";

export default function Home() {
  return (
    <div>
      <Bannar></Bannar>
      <Categories></Categories>
      <Features></Features>
      <Services></Services>
      <Highlights></Highlights>
    </div>
  );
}
