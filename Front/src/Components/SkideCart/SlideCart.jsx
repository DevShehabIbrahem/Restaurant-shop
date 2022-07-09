import { useSelector, useDispatch } from "react-redux";
import { TotalCartITems, totalInCart } from "../../Redux/Slice/AddTocart";
import { Bounce } from "react-reveal";

import "../../css/SkideCart/SlideCart.css";
const SlideCart = ({ setSlide }) => {
  const slide = useSelector(totalInCart);

  const dispatch = useDispatch();

  const localData = JSON.parse(localStorage.getItem("CartItems"));

  const DeleteItems = (item) => {
    const deleteItems = localData.filter((product) => product.id !== item.id);
    //update the new array
    localStorage.setItem("CartItems", JSON.stringify(deleteItems));

    //disaptch the action To update the State inside the redux
    dispatch(TotalCartITems(deleteItems));
  };
  return (
    <>
      <Bounce right>
        <div className="fixed top-0 w-[380px] bg-white right-0 h-screen border-l-2 text-[#000] z-[1001] overflow-auto">
          <span className="close-modal" onClick={() => setSlide(false)}>
            &times;
          </span>
          {slide.length ? (
            <>
              {slide.map((item) => (
                <div className="flex  items-center mb-10 ml-4 mt-10">
                  <div className="w-[28%]">
                    <img src={item.imageUrl} alt="" className="pr-2" />
                  </div>
                  <div className="max-w-[320px] flex flex-col ">
                    <h1 className="text-[18px] mb-2">
                      <span className="font-bold">Name: </span>
                      {item.title}
                    </h1>
                    <div className="font-bold flex flex-col items-start  space-y-2">
                      <div>
                        <b>Qty: </b>
                        <b>{item.qty}</b>
                      </div>
                      <button
                        className="bg-black text-white p-2 rounded-[15px]"
                        onClick={() => DeleteItems(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="h-full flex justify-center items-center font-bold text-[25px]">
              No Items In The Cart
            </p>
          )}
        </div>
      </Bounce>
    </>
  );
};

export default SlideCart;
