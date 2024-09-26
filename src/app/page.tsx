import EmblaCarousel from "@/components/corousel/EmblaCarousel";
import Navbar from "@/components/navbar";
import { EmblaOptionsType } from 'embla-carousel'
import img from '../public/carouselImg1.png'
import CarouselText from "@/components/carouselText";
import Image from "next/image";
import About from "@/components/about";
import Category from "@/components/category";
import Services from "@/components/services";
import Footer from "@/components/footer";
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const imgArr = [
  img,
  img,
  img,

]
export default function Home() {
  return (
    <>
      <Navbar />
      <EmblaCarousel options={OPTIONS} slides={imgArr} />

      <div className="bg-white">
        <About />
        <Category/>
        {/* <Services/> */}
      </div>
      <Footer/>
    </>
  );
}
