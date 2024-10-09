import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SelectedPage, BenefitType } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import HeaderText from '@/shared/HeaderText';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: BenefitsProps) => {
  const { t } = useTranslation();

  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: t('benefits.heading1'),
      description: t('common.filler'),
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: t('benefits.heading2'),
      description: t('common.filler'),
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: t('benefits.heading3'),
      description: t('common.filler'),
    },
  ];

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>{t('benefits.title')}</HeaderText>
          <p className="my-5 text-sm">{t('benefits.description')}</p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics/Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            alt="benefits-page-graphics"
            src={BenefitsPageGraphic}
          />
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeaderText>
                    {t('benefits.subtitle')}
                    <span className="text-primary-500">
                      {t('benefits.subtitleStrong')}
                    </span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">{t('common.filler')}</p>
              <p className="mb-5">{t('common.filler')}</p>
            </motion.div>
            {/* Description */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  {t('common.cta')}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
