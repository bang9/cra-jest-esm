import { render, screen } from '@testing-library/react';
import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';

test('renders learn react link', () => {
   render(<Swiper><SwiperSlide>Slide 1</SwiperSlide></Swiper>);
   const slide = screen.getByText('Slide 1')
   expect(slide).toBeInTheDocument();
});
