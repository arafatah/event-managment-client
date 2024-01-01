import axios from "axios";

const Shops = ({ shops }) => {
    
  const { picture, productName, price } = shops;

  const handleBuyNow = async () => {
    try {
      // Make a POST request to the server
      await axios.post("http://localhost:5000/addBooking", {
        productName,
        price,
        // Add other fields as needed
      });
      alert("Booking successful!");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Booking failed. Please try again.");
    }
  };
  return (
    <div>
      <div className="card w- bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>
          <p>${price}</p>
          <div className="card-actions">
            <button onClick={handleBuyNow} className="btn btn-primary w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
