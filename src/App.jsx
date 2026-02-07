import { useState } from 'react'
import { HeartRain } from './HeartRain';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 5 + 16;
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });

  const url = "https://discord.com/api/webhooks/1469716509088682138/f_OKeA8UasI1gxc5V0OueVI1AJ_8Qk0SMMCO_8VOeXfaN5v3ulVsPgxbnjUY0soouPwQ"

  const sendDiscordWebhook = async () => {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
      embeds: [
        {
          title: "💖 Valentine Accepted!",
          description: "Gianna clicked **YES** 🥹",
          color: 0xff69b4,
          timestamp: new Date().toISOString(),
        },
      ],
    }),
    });
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);

    const buttonWidth = 120;
    const buttonHeight = 50;

    const maxX = 300 - buttonWidth; // card width approx
    const maxY = -400 - buttonHeight; // card height approx

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoPosition({
      left: randomX,
      top: randomY,
    });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure? 🤔",
      "What if I asked really nicely? ",
      "No Seafood boil :(",
      "Pretty please",
      "PurpleTurtle37 🐢",
      "PLEASE GIANNA",
      "You want flowers right? 💐",
      "But :*(",
      "Curious about your sci-fi book collection. 🐲",
      "I am going to die",
      "Yep im dead 😵",
      "ok ur talking to Jackson's ghost 👻",
      "Jackson wanted to try Wood Burning btw 🔥",
      "C'Mon Gianna",
      "I'm not going to stop asking",
      "*sigh*",
      "please!!",
      ":(",
      "😔",
      "PRETTY PLEASE",
      "Wtf 😠",
      "Seriously though",
      "Is there another option?",
      "Think about it...",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className={`flex min-h-screen items-center justify-center transition-colors duration-700 ${
    yesPressed
      ? "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400"
      : "bg-gradient-to-br from-rose-300 via-amber-200 to-fuchsia-300"
  }`}>
    <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl text-center">
    {yesPressed ? (
      <>
        <HeartRain />
        <img
          className="mx-auto"
          src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          alt="Celebration"
        />
        <div className="my-4 text-3xl font-bold">
          See you on February 14th Gianna!!!
        </div>
      </>
    ) : (
      <>
        <img
          className="mx-auto h-[200px]"
          src="https://gifdb.com/images/high/turtle-love-gif-pyqgkug3bqaxjqqg.webp"
          alt="Cute turtle"
        />

        <h1 className="my-6 text-4xl font-bold">
          Will you be my Valentine?
        </h1>

        <div className="flex items-center justify-center gap-4">
          <button
            className="rounded bg-pink-300 px-6 py-3 font-bold text-white transition hover:bg-pink-600"
            style={{ fontSize: noCount > 0 ? yesButtonSize : 16 }}
            onClick={() =>{ setYesPressed(true) ; sendDiscordWebhook(); }}
          >
            Yes 💖
          </button>

          <button
            onClick={handleNoClick}
            style={{
            position: "relative",
            left: noPosition.left,
            top: noPosition.top,
            }}
            className="rounded bg-gray-400 px-6 py-3 font-bold text-white transition hover:bg-gray-600"
          >
            {noCount === 0 ? "No 💔" : getNoButtonText()}
          </button>
        </div>
      </>
    )}
  </div>
</div>
  )
}

export default App
