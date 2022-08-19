import { Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import SubjectCard from "./SubjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
export default function Carousel() {
  function checkWidth() {
    let width = window.innerWidth;
    if (width > 1300) {
      return 5;
    } else if (width > 1000) {
      return 4;
    } else if (width > 800) {
      return 3;
    } else if (width > 500) {
      return 2;
    } else return 1;
  }
  const [num, setNum] = React.useState(checkWidth());
  useEffect(() => {
    window.addEventListener("resize", () => {
      setNum(checkWidth());
    });
  }, []);
  const data = [
    {
      img: "https://picsum.photos/200/300",
      title: "Mathematics",
      id: "mathematics",
    },
    {
      img: "https://picsum.photos/200/400",
      title: "English",
      id: "english",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "Mathematics",
      id: "mathematics",
    },
    {
      img: "https://picsum.photos/200/400",
      title: "English",
      id: "english",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "Mathematics",
      id: "mathematics",
    },
    {
      img: "https://picsum.photos/200/400",
      title: "English",
      id: "english",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "Mathematics",
      id: "mathematics",
    },
    {
      img: "https://picsum.photos/200/400",
      title: "English",
      id: "english",
    },
  ];
  return (
    <React.Fragment>
      <Box
        sx={{
          margin: "0 auto",
          padding: "10px",
          backgroundColor: "#fffff4",
        }}
      >
        <Swiper
          style={{
            margin: "30px",
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={-60}
          slidesPerView={num}
          navigation
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SubjectCard img={item.img} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Divider />
      </Box>
    </React.Fragment>
  );
}
