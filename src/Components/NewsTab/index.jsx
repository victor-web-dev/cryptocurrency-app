import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import './style.css';
import context from '../../Context/CurrencyContext';

export default function NewsTab() {
  const { news } = useContext(context);
  const loadedNews = news.status === 'ok' ? true : false;

  const renderNews = ({ articles }) => {
    const slides = articles.map((e,i) => {
      const { title, urlToImage, url } = e;
      return (<SwiperSlide key={`slide-${i}`}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={urlToImage} alt={title} />
          <h3>{title}</h3>
        </a>
      </SwiperSlide>);
    });
    return slides;
  }

  const swiper = () => {
    return (
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay
      >
        { renderNews(news) }
      </Swiper>
      );
  };

  return (
    <section>
      {
        !loadedNews ? 'loading...' : swiper()
      }
    </section>
  );
}
