'use client'
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
import { useEffect, useState } from "react";
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const imgArr = [
  img,
  img,
  img,

]
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const query = `
       query GetHomepage { pages(where: {name: \"Homepage\"}) 
       { nodes { homepage { banners { bannerImage { node { sourceUrl } } 
        bannersTitle bannerDescription bannerButton { title url target } } 
        homeAboutTitle homeAboutSubtitle homeAboutButton { target title url } 
        homeAboutVideoImage { node { sourceUrl } } 
        homeAboutVideoUrl homeAboutDescription homeCategoryTitle 
        homeCategorySubtitle homeServicesTitle homeServicesSubtitle 
        homeColoursTitle homeColoursSubtitle homeColoursButton 
        { target title url } homeJoinBackgroundImage { node { sourceUrl } } 
         homeJoinTitle homeJoinSubtitle homeJoinButton { target title url } 
         homeJoinDescription blogTitle blogSubtitle 
         categories { link title image { node { sourceUrl } } } } 
         seo { canonical metaKeywords metaDesc title opengraphType opengraphSiteName opengraphTitle opengraphDescription opengraphUrl schema { raw } 
         opengraphImage { mediaItemUrl } } } } }" }
    `;

    fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          setError(result.errors);
        } else {
          setData(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  console.log(data, 'data');
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
