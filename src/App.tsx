import { VinylRecord } from "./components/VinylRecord";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white text-[64px] font-[IBM_Plex_Sans] font-bold not-italic font-normal">
            Hello, my name is Grant.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white font-[IBM_Plex_Mono] text-[20px] text-center">
            experimenting remixing{" "}
            <span className="font-bold">music</span> and
            remixing{" "}
            <span className="sparkly-ai font-normal font-bold">
              intelligence
            </span>
          </h2>
        </div>

        {/* Spinning Vinyl */}
        <div className="flex justify-center mt-[66px] mr-[0px] mb-[28px] ml-[0px]">
          <VinylRecord />
        </div>

        {/* Subtitle */}
        <div className="space-y-2">
          <p className="text-purple-300 text-base md:text-lg text-[16px] font-[IBM_Plex_Sans]">
            I am spinning up something
            <span className="loading-dots">
              <span className="dot-1">.</span>
              <span className="dot-2">.</span>
              <span className="dot-3">.</span>
            </span>
          </p>
          <div className="flex justify-center space-x-2 text-sm text-[rgba(253,229,194,1)]">
            <span>●</span>
            <span>A lot of RPM</span>
            <span>●</span>
            <span>Stereo</span>
            <span>●</span>
            <span>Reduced sleep</span>
          </div>
        </div>
      </div>

      {/* Ambient particles/dots for atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <style jsx>{`
        .loading-dots .dot-1,
        .loading-dots .dot-2,
        .loading-dots .dot-3 {
          animation: loading 1.5s infinite;
          opacity: 0;
        }

        .loading-dots .dot-1 {
          animation-delay: 0s;
        }

        .loading-dots .dot-2 {
          animation-delay: 0.5s;
        }

        .loading-dots .dot-3 {
          animation-delay: 1s;
        }

        @keyframes loading {
          0%,
          20% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .sparkly-ai {
          background: linear-gradient(
            45deg,
            #ff6b9d,
            #c471ed,
            #12c2e9,
            #c471ed,
            #ff6b9d
          );
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation:
            sparkleGradient 3s ease-in-out infinite,
            sparkleGlow 2s ease-in-out infinite;
          position: relative;
          display: inline-block;
        }

        .sparkly-ai::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 107, 157, 0.3),
            transparent,
            rgba(196, 113, 237, 0.3),
            transparent,
            rgba(18, 194, 233, 0.3),
            transparent
          );
          background-size: 400% 400%;
          animation: sparkleGradient 3s ease-in-out infinite;
          border-radius: 8px;
          filter: blur(8px);
          z-index: -1;
        }

        .sparkly-ai::after {
          content: "✨";
          position: absolute;
          top: -10px;
          right: -10px;
          font-size: 0.7em;
          animation: sparkle 2s ease-in-out infinite;
          opacity: 0;
        }

        @keyframes sparkleGradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes sparkleGlow {
          0%,
          100% {
            filter: brightness(1) saturate(1);
          }
          50% {
            filter: brightness(1.2) saturate(1.3);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
}