const Footer = () => {
  return (
    <div className="bg-yellow-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tighter">
          Feastify
        </span>
        <span className="text-white font-bold tracking-tight flex gap-3">
          <span>Privacy Policy</span>
          <span>Terms of Policy</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
