import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface BenefitCarouselProps {
  benefits: Benefit[];
}

const BenefitCarousel: React.FC<BenefitCarouselProps> = ({ benefits }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {benefits.map((benefit, index) => (
        <div key={index} className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            {benefit.icon && <div className="text-brand-primary">{benefit.icon}</div>}
            <div>
              <h3 className="text-xl font-semibold text-brand-dark">{benefit.title}</h3>
              <p className="text-brand-gray">{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BenefitCarousel;
