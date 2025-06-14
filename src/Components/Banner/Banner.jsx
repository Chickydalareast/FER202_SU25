import React, { useState, useEffect } from 'react';
import './BannerStyle.css';


const slidesData = [
  {
    image: '/images/2493.jpg',
    title: 'Nền Tảng Lập Trình Vững Chắc',
    subtitle: 'Bắt đầu hành trình của bạn với các khóa học nền tảng cho người mới.',
  },
  {
    image: '/images/FER2022.png',
    title: 'Trở Thành Fullstack Developer',
    subtitle: 'Lộ trình học tập toàn diện từ Frontend đến Backend.',
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="banner-container" aria-label="Banner Gallery">
      {slidesData.map((slide, slideIndex) => (
        <div
          className={slideIndex === currentIndex ? 'banner-slide active' : 'banner-slide'}
          key={slideIndex}
        >
          {slideIndex === currentIndex && (
            <>
              <img src={slide.image} alt={slide.title} className="banner-slide-image" />
              <div className="banner-slide-overlay">
                <h1 className="banner-slide-title">{slide.title}</h1>
                <p className="banner-slide-subtitle">{slide.subtitle}</p>
                <button className="btn-lg banner-button">
                  Xem khóa học
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      <div className="banner-dots-container">
        {slidesData.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={slideIndex === currentIndex ? 'banner-dot active' : 'banner-dot'}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;