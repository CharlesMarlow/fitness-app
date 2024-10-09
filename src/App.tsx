import { useEffect, useState } from 'react';
import i18n from './i18n';
import { SelectedPage } from './shared/types';
import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';
import Classes from '@/scenes/classes';
import Contact from '@/scenes/contact';
import Footer from '@/scenes/footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // Change app language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        changeLanguage={changeLanguage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
