import About from '../About/About';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MarqueeBanner from '../MarqueeBanner/MarqueeBanner';

const AnimatedBanner = () => (
  <section className="p-4 flex justify-center items-center">
    <h2 className="text-white text-xl animate-pulse">Новые Плейлисты Каждый Месяц!</h2>
  </section>
);


const App = () => {
  const playlists = [1006, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1017, 1022];

  return (
    <>
      <Header />
      <MarqueeBanner />
      <Collection playlists={playlists} />
      <AnimatedBanner />
      <About />
      <Footer />
    </>
  )
}

export default App
