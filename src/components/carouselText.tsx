import React from 'react';
interface CarouselTextProps {
  // Define any props here if needed
  bannersTitle:string,
  bannerDescription:string
  bannerButton:any
}
const CarouselText = (props:CarouselTextProps) => {
  const {bannersTitle,bannerDescription,bannerButton} = props;
  return (
    <div className="absolute top-0 left-0  pl-14 pt-48">
      <h6 className='font-bold text-5xl text-white'>{bannersTitle.split(" ")[0]} <br /> {bannersTitle.split(" ")[1]}</h6>
      <p className='text-white font-normal mt-2'>{bannerDescription}</p>
      <button className='bg-white text-[#5E4D7A] font-semibold text-xs
         rounded-[20px] p-2 px-4 items-center justify-center mt-4'>
        Read More
      </button>
    </div>
  );
};

export default CarouselText;
