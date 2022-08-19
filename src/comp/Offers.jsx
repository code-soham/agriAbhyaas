import { Typography, Box, Paper, List, Button } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import data from "../data/offers.json";
import { CheckCircleOutline, Star, StarHalf } from "@mui/icons-material";
export default function Offers() {
  return (
    <div
      style={{
        margin: "auto",
        padding: "0 5%",
        backgroundColor: "#fffff4",
      }}
    >
      <Typography variant="h5" align="left" color="#0B6E4F">
        Checkout other packages
      </Typography>
      <Box
        sx={{
          margin: "20px",
          width: "fit-content",
        }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        //   navigation
          loop={true}
          autoplay={{ delay: 2000 }}
          style={{
            width: "400px",
            borderRadius: "10px",
            padding: "40px 20px",
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {data.map((item) => (
            <SwiperSlide
              sx={{
                margin: "auto",
              }}
            >
              <Paper
                sx={{
                  width: "360px",
                  margin: "auto",
                  height: "180px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 10px #0B6E4F",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "0.5",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    height="80"
                    width="150"
                    style={{
                      margin: "0 auto",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="body2" align="center" color="#0B6E4F">
                    {item.enrolled}&nbsp;enrolled
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "11px",
                    }}
                  >
                    {item.rating}
                    {Array.from(Array(Math.floor(item.rating))).map((_, i) => (
                      <Star htmlColor="gold" fontSize="10px" key={i} />
                    ))}
                    {Math.floor(item.rating) < item.rating ? (
                      <StarHalf fontSize="10px" htmlColor="gold" />
                    ) : null}
                    ({item.reviews})
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    flex: "0.5",
                    marginRight: "10px",
                  }}
                >
                  <Typography variant="body2" align="center" color="#0B6E4F">
                    {item.title}
                  </Typography>
                  <List>
                    {item.keypoints.map((feature, i) => (
                      <Typography sx={{
                        fontSize: "11px",
                      }}
                        variant="body2"
                        align="left"
                        color="black"
                        key={i}
                      >
                        <CheckCircleOutline fontSize="10px" htmlColor="#0B6E4F" />
                        &nbsp;{feature}
                      </Typography>
                    ))}
                  </List>
                  <Button sx={{
                    width: "fit-content",
                    backgroundColor: "#13AE7E",
                    zoom:'0.8',
                  }} size="small" variant="contained">
                    View Package
                  </Button>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
}
