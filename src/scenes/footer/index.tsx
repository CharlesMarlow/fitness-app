import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.',
          </p>
          <p>©Fitness All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Join the team</p>
          <p className="my-5">B2C Solutions</p>
          <p className="my-5">Why Fitness</p>
          <p>Meet yourself!</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Write to us</p>
          <p className="my-5">Careers</p>
          <p className="my-5">Legal</p>
          <p>(333)444-6565</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
