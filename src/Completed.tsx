import { useNavigate } from "react-router-dom";

interface CompletedProps {
  bananas: number; // Define the type for the 'bananas' prop
}
const Completed: React.FC<CompletedProps> = ({ bananas }) => {
  const nav = useNavigate();

  return (
    <div
      className="w-full h-full flex justify-center border border-black bg-black bg-opacity-50 "
      style={
        {
          // backdropFilter: 'blur(8px)'
        }
      }
    >
      <div className="w-[30%] relative ">
        <img src="/result.png" />

        <img
          className="absolute w-[50%] top-[40%] left-[26%]"
          src="/Monkey.png"
        />
        <div className="absolute text-center text-[white] w-[10%] h-[10%] bg-[#fd9c3b] top-[25%] left-[15%] rounded-[15px] flex flex-col justify-center">
          <h2
            className="text-5xl"
            style={{
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: "800",
            }}
          >
            {bananas}
          </h2>
        </div>
        <button className="pointer h-[10%] absolute w-[70%] top-[74%] left-[15%]"></button>
        <img
          src="/yellowBanana.png"
          className="absolute top-[80%] left-[120%] w-[20%]"
        />
        <img
          src="/yellowBanana.png"
          className="absolute top-[60%] left-[-20%] w-[20%]"
        />
        <img
          src="/yellowBanana.png"
          className="absolute top-[20%] left-[-60%] w-[20%]"
        />
        <img
          src="/yellowBanana.png"
          className="absolute top-[40%] left-[90%] w-[20%]"
        />
        <img
          src="/completeBtn.png"
          className="absolute cursor-pointer top-[70%] translate-x-[11%]"
          onClick={() => {
            nav("/instructions");
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Completed;
