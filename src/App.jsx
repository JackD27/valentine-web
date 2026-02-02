import { useState } from 'react'
import { HeartRain } from './HeartRain';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "No Seafood boil :(",
      "Pretty please",
      "PurpleTurtle37",
      "PLEASE GIANNA",
      "You want flowers right?",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Jackson's ghost",
      "Jackson wanted to try Wood Burning btw",
      "C'Mon Gianna",
      "I'm not going to stop asking",
      "*sigh*",
      "please!!",
      ":((((",
      "PRETTY PLEASE",
      "Seriously though",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <HeartRain />
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold"> WOOOOOO!!! Thank you! See you on February 14th Gianna! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/turtle-love-gif-pyqgkug3bqaxjqqg.webp"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Gianna?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
