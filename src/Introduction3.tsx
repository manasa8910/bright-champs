import { Link } from "react-router-dom";

function Introduction3() {
  return (
    <>
      <img src="/msg.png" className="absolute left-[50%] top-[20%] w-[25vw]" />
      <p className="absolute left-[53%] top-[25%] w-[20vw] text-4xl font-extrabold text-[#2fb8cd]">
        Can you help me get some ! &#129300;
      </p>

      <Link
        to="/Introduction2"
        className="w-28 absolute top-4 left-4  hover:brightness-90"
      >
        <img src="/prevButton.png" alt="Prev Button" />
      </Link>

      <div className="h-[70%] absolute bottom-0 w-full flex justify-center">
        <img src="Monkey.png" alt="" className="h-full" />
        <Link
          to="/Instructions"
          className="absolute bottom-[5%] right-[5%] w-[18%] hover:brightness-90"
        >
          <img src="/nextButton.png" alt="Start Button" />
        </Link>
      </div>
    </>
  );
}

export default Introduction3;
