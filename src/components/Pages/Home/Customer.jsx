import takeorderpic from "../../../assets/showroom (1).png";

const Customer = () => {
  return (
    <div data-aos="fade-down-right" className="hero min-h-screen bg-base-200 my-container mb-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={takeorderpic} className="max-w-sm rounded-lg shadow-4xl" />
        <div className="w-2/3 me-14">
          <h1 className="text-5xl font-bold">
            Take online orders from B2B customers 
          </h1>
          <p className="py-6">
            Sometimes you just want to show your products online without
            managing a full-fledged ecommerce site and extra fees. Or maybe
            you’re just tired of sending a big spreadsheet for your B2B
            customers to order from. inFlow’s <br /> Online Showroom helps you
            create your own B2B Portal in just a few clicks. All of the product
            pictures, details, and descriptions you’ve put into inFlow will be
            available online for <br /> your customers to browse. And Special
            Showrooms will even help you take online orders (and payments, if
            you’re in the US or Canada).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
