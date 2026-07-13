import Bannar from "@/components/Bannar";
import Categories from "@/components/extra-section/Categories";
import Features from "@/components/extra-section/Features";
import Highlights from "@/components/extra-section/Highlights";
import Newsletter from "@/components/extra-section/Newsletter";
import Services from "@/components/extra-section/Services";
import Testimonials from "@/components/extra-section/Testimonials";

export default function Home() {
  return (
    <div>
      <Bannar></Bannar>
      <Categories></Categories>
      <Features></Features>
      <Highlights></Highlights>
      <Services></Services>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}
