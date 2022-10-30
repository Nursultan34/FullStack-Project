import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import HeroImg from '.././assets/images/hero-img.png';
import products from '../assets/data/products';
import CounterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';
import ProductList from '../components/UI/ProductList';
import Need from '../Need/Need';
import Services from '../services/Services';
import '../styles/home.css';

function Home() {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [BestSales, setBestSales] = useState([]);
  const [Mobile,setMobile] = useState([])
  const [Wireless,setWireless] = useState([])
  const [Popular,setPopular] = useState([])

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair');
    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa');
    const filteredMobileProducts = products.filter((item) => item.category === 'mobile');
    const filteredWirelessProducts = products.filter((item) => item.category === 'wireles');
    const filteredPopularProducts = products.filter((item) => item.category === 'watch');


    setTrendingProducts(filteredTrendingProducts);
    setBestSales(filteredBestSalesProducts);
    setMobile(filteredMobileProducts)
    setWireless(filteredWirelessProducts)
    setPopular(filteredPopularProducts)
  }, []);
  return (
    <Need title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_container">
                <p className="subtitle">Trending product in {year}</p>
                <h2>Make your Interior More Minimalistic & Modern</h2>
                <p>Price and other details may vary based on product size and color.</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={HeroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={BestSales} />
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6 ">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                <Link to="/shop">Visit store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={CounterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
            <ProductList data={Mobile}/>
            <ProductList data={Wireless}/>

          </Row>
        </Container>
      </section>
      <section className="popular_category">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
            <ProductList data={Popular}/>
            

          </Row>
        </Container>
      </section>
    </Need>
  );
}

export default Home;
