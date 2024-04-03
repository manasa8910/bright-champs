import { Link } from "react-router-dom";

function Introduction() {
  return (
    <>
      <img src="/msg.png" className="absolute left-[50%] top-[20%] w-[25vw]" />
      <p className="absolute left-[55%] top-[27%] w-[25vw] text-4xl font-extrabold text-[#2fb8cd]">
        Welcome Kiddo !
      </p>
      <div className="h-[70%] absolute bottom-0 w-full flex justify-center">
        <img src="Monkey.png" alt="" className="h-full" />
        <Link
          to="/Introduction2"
          className="absolute bottom-[5%] right-[5%] w-[18%] hover:brightness-90"
        >
          <img src="/StartButton.png" alt="Start Button" />
        </Link>
      </div>
    </>
  );
}

export default Introduction;
