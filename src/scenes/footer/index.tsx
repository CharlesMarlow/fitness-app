import { useTranslation } from 'react-i18next';
import Logo from '@/assets/Logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">{t('common.filler')}</p>
          <p>{t('footer.copyright')}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{t('footer.links')}</h4>
          <p className="my-5">{t('footer.team')}</p>
          <p className="my-5">{t('footer.solutions')}</p>
          <p className="my-5">{t('footer.fitness')}</p>
          <p>{t('footer.meet')}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{t('navbar.contact')}</h4>
          <p className="my-5">{t('footer.write')}</p>
          <p className="my-5">{t('footer.careers')}</p>
          <p className="my-5">{t('footer.legal')}</p>
          <p>{t('footer.supportNumber')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
