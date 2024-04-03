import { Link } from "react-router-dom";
function Instructions() {
  return (
    <div className="absolute top-0">
      <Link
        to="/Introduction3"
        className="w-28 absolute top-4 left-4  hover:brightness-90"
      >
        <img src="/prevButton.png" alt="Prev Button" />
      </Link>

      <Link
        to="/game"
        className="absolute bottom-[3.5%] right-[5%] w-[18%] hover:brightness-90"
      >
        <img src="/playButton.png" alt="Play Button" />
      </Link>
      <div className="flex w-screen h-screen items-center justify-center">
        <img src="/3Cards.png" className="w-[80vw] z-10 brightness-95" alt="" />
        <img src="/Vector.png" className=" absolute w-[75vw]" alt="" />
      </div>
    </div>
  );
}

export default Instructions;
