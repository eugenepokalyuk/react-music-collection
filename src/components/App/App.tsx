import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import About from '../About/About';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MarqueeBanner from '../MarqueeBanner/MarqueeBanner';
import ShapeWidget from '../ShapeWidget/ShapeWidget';

const AnimatedBanner = () => (
  <section className="p-4 flex justify-center items-center">
    <h2 className="text-white text-xl animate-pulse">Новые Плейлисты Каждый Месяц!</h2>
  </section>
);

const App = () => {
  const playlists = [1006, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1017, 1022, 1024, 1026, 1027, 1028];

  const [bannerVisible, setBannerVisible] = useState<boolean>(true);
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      setBannerVisible(false)
    } else {
      setBannerVisible(true)
    }
  }, [inView]);

  return (
    <>
      <Header />
      <MarqueeBanner />
      <Collection playlists={playlists} />
      <AnimatedBanner />
      <ShapeWidget visible={bannerVisible} />
      <div ref={ref}><About /></div>
      <Footer />
    </>
  )
}

export default App
