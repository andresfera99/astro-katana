import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MySwiper() {
	const images = [
		"/02_DARLING_1.jpg",
		"/02_DARLING_2.jpg",
		"/02_DARLING_3.jpg",
	];
	return (
		<Swiper className="mySwiper">
			{images.map((e) => {
				return (
					<SwiperSlide key={e}>
						<img src={e} alt="image" />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
