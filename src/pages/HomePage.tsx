import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white lg-white shadow-md py-8 flex flex-col gap-5 text-center -mt16">
        <h1 className="text-5xl font-bold tracking-tight text-yellow-600">
          Indulge in Delivery Delights Today!
        </h1>
        <span> Food is just a click away! </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter ">
            Order Takeaway even faster!
          </span>
          <span>Download our Feastify for better experience </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
