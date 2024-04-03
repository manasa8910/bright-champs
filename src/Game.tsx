import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Completed from "./Completed";
import "./App.css";

function Game() {
  const [timer, setTimer] = useState(60); // 60 seconds timer
  const [completedFruits, setCompletedFruits] = useState<string[]>([]);
  const [isMatched, setIsMatched] = useState<boolean>(false);
  const [redFruitData, setRedFruitData] = useState<
    { fruit: string; icon: string }[]
  >([]);
  const [blueFruitData, setBlueFruitData] = useState<
    { fruit: string; icon: string; letter: string }[]
  >([]);
  const [selectedRedFruit, setSelectedRedFruit] = useState<{
    fruit: string;
    icon: string;
  } | null>(null);
  const [selectedBlueFruit, setSelectedBlueFruit] = useState<{
    fruit: string;
    icon: string;
    letter: string;
  } | null>(null);

  const selectRedFruit = (data: { fruit: string; icon: string }) => {
    if (!selectedRedFruit) {
      setSelectedRedFruit(data);
    }
  };

  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const selectBlueFruit = async (data: {
    fruit: string;
    icon: string;
    letter: string;
  }) => {
    if (!selectedBlueFruit && selectedRedFruit) {
      setSelectedBlueFruit(data);

      setTimeout(() => {
        if (selectedRedFruit.fruit !== data.fruit) {
          setSelectedRedFruit(null);
          setSelectedBlueFruit(null);
        } else {
          if (completedFruits.length === 5) {
            setTimer(0);
            return;
          }
          setCompletedFruits([...completedFruits, data.fruit]);
          setIsMatched(true);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setTimer(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    setRedFruitData(
      shuffle([
        { fruit: "apple", icon: "🍎" },
        { fruit: "orange", icon: "🍊" },
        { fruit: "grape", icon: "🍇" },
        { fruit: "banana", icon: "🍌" },
        { fruit: "mango", icon: "🥭" },
        { fruit: "pineapple", icon: "🍍" },
      ])
    );
    setBlueFruitData(
      shuffle([
        { fruit: "orange", icon: "🍊", letter: "O" },
        { fruit: "apple", icon: "🍎", letter: "A" },
        { fruit: "mango", icon: "🥭", letter: "M" },
        { fruit: "grape", icon: "🍇", letter: "G" },
        { fruit: "banana", icon: "🍌", letter: "B" },
        { fruit: "pineapple", icon: "🍍", letter: "P" },
      ])
    );
    setTimer(60); // Set initial timer value to 60 seconds
  }, []);

  return (
    <div className="absolute top-0 w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center relative">
        <Link
          to="/instructions"
          className="w-28 absolute top-4 left-4  hover:brightness-90"
        >
          <img src="/prevButton.png" alt="Prev Button" />
        </Link>
        {/* progress */}
        <div className="absolute top-4 flex items-center">
          <div className="w-[36rem] h-8 bg-white  rounded-full flex px-1">
            <div
              style={{
                width: `${(completedFruits.length * 100) / 6}%`,
                height: "100%",
              }}
            >
              <img
                src="/fullLoader.png"
                alt=""
                className={`w-full h-full object-cover rounded-full`}
              />
            </div>
          </div>
          <img
            src="/Banana.png"
            alt=""
            className="w-20 -rotate-[60deg] -translate-x-16"
          />
        </div>

        {isMatched && (
          <div className="fixed inset-0  z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <button
              onClick={() => {
                setIsMatched(false);
                setSelectedRedFruit(null);
                setSelectedBlueFruit(null);
              }}
            >
              <img
                src="/nextButton.png"
                alt="start"
                className="absolute w-[250px] bottom-10 right-10 hover:brightness-90 transition"
              />
            </button>
            <div className=" z-30 flex gap-14 relative">
              <img
                className="absolute w-[300px] h-[200px] -top-40 translate-x-[25%]   transition ease-in-out duration-300"
                src="/match.svg"
                alt="match text"
              />

              <div className="bg-[#F4ADC5]  border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl -rotate-12">
                {selectedRedFruit?.icon}
              </div>
              <div className="bg-[#9DE6F5]  border-8 p-4 rounded-md text-green-600 w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl rotate-12  translate-y-[30%]">
                {selectedBlueFruit?.letter}
              </div>
            </div>
          </div>
        )}

        {/* Game  */}
        {timer > 0 && (
          <div className="flex gap-14">
            <div className="grid grid-cols-3 relative ">
              {!selectedBlueFruit &&
                !selectedRedFruit &&
                completedFruits.length == 0 && (
                  <div className="absolute -top-24 right-20 animate-bounce z-10"></div>
                )}

              {redFruitData.map((fruitData) => {
                const isSelected =
                  selectedRedFruit &&
                  selectedRedFruit.fruit === fruitData.fruit;
                const isCompleted = completedFruits.includes(fruitData.fruit);
                return (
                  <div className="container">
                    <div
                      key={fruitData.fruit}
                      onClick={() => selectRedFruit(fruitData)}
                      className={`transition transform duration-700 ease-in-out ${
                        isCompleted ? "invisible" : ""
                      } ${
                        !selectedRedFruit ? "hover:brightness-90" : ""
                      } card ${isSelected ? "flipped" : ""}`}
                    >
                      {selectedRedFruit &&
                      selectedRedFruit.fruit === fruitData.fruit ? (
                        <div className="bg-[#F4ADC5] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl">
                          {fruitData.icon}
                        </div>
                      ) : (
                        <img src="/pinkCard.png" alt="card" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 relative">
              {selectedRedFruit &&
                !selectedBlueFruit &&
                completedFruits.length == 0 && (
                  <div className="absolute -bottom-24 left-20"></div>
                )}
              {blueFruitData.map((fruitData) => {
                const selected =
                  selectedBlueFruit &&
                  fruitData.fruit === selectedBlueFruit.fruit;
                const isCompleted = completedFruits.includes(fruitData.fruit);
                return (
                  <div
                    key={fruitData.fruit}
                    onClick={() => selectBlueFruit(fruitData)}
                    className={`transition duration-200 ${
                      isCompleted ? "invisible" : ""
                    } ${
                      selectedRedFruit && !selectedBlueFruit
                        ? "hover:brightness-90"
                        : ""
                    } card ${selected ? "flipped" : ""}`}
                  >
                    {selected ? (
                      <div className="bg-[#9DE6F5] border-white border-8 p-4 rounded-md text-green-800 w-[190px] h-[240px] mt-2 flex items-center justify-center text-5xl ">
                        {fruitData.letter}
                      </div>
                    ) : (
                      <img src="/blueCard.png" alt="card" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Display game over message when timer is 0 */}
        {timer === 0 && <Completed bananas={completedFruits.length + 1} />}
        {/* timer */}
        <div className="p-3 bg-sky-700 opacity-85 absolute top-4 right-4 text-white rounded-3xl text-2xl font-bold border-white border-4">
          Time Left: {Math.floor(timer / 60)}:
          {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
        </div>
      </div>
    </div>
  );
}

export default Game;
