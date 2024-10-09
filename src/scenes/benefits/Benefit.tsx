import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

type BenefitProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({
  title,
  description,
  icon,
  setSelectedPage,
}: BenefitProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>{t('common.learnMore')}</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
