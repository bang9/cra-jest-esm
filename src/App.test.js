import { render, screen } from '@testing-library/react';

// swiper/react 로 import 하고 싶다면
// 1. https://github.com/jestjs/jest/issues/9771 최신 버전의 제스트를 사용하거나
// 2. 그게 안되면, moduleNameMapper 를 사용
import { Swiper, SwiperSlide } from 'swiper/react';

test('renders swiper', () => {
   render(<Swiper><SwiperSlide>Slide 1</SwiperSlide></Swiper>);
   const slide = screen.getByText('Slide 1')
   expect(slide).toBeInTheDocument();
});


