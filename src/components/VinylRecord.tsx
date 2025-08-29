export function VinylRecord() {
  return (
    <div className="relative">
      {/* Vinyl Record */}
      <div className="vinyl-record w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-black relative shadow-2xl overflow-hidden">
        {/* AI Pattern Background */}
        <div className="absolute inset-0 ai-pattern opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 384 384"
            className="absolute inset-0"
          >
            <defs>
              <pattern
                id="aiLines"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <g
                  stroke="url(#aiGradient)"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.6"
                >
                  <line x1="10" y1="10" x2="30" y2="30" />
                  <line x1="30" y1="10" x2="10" y2="30" />
                  <line x1="20" y1="0" x2="20" y2="40" />
                  <line x1="0" y1="20" x2="40" y2="20" />
                  <circle
                    cx="10"
                    cy="10"
                    r="1"
                    fill="url(#aiGradient)"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="1"
                    fill="url(#aiGradient)"
                  />
                  <circle
                    cx="30"
                    cy="10"
                    r="1"
                    fill="url(#aiGradient)"
                  />
                  <circle
                    cx="10"
                    cy="30"
                    r="1"
                    fill="url(#aiGradient)"
                  />
                </g>
              </pattern>
              <linearGradient
                id="aiGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff6b9d" />
                <stop offset="33%" stopColor="#c471ed" />
                <stop offset="66%" stopColor="#12c2e9" />
                <stop offset="100%" stopColor="#ff6b9d" />
              </linearGradient>
            </defs>
            <circle
              cx="192"
              cy="192"
              r="180"
              fill="url(#aiLines)"
            />

            {/* Additional connecting lines for AI network effect */}
            <g
              stroke="url(#aiGradient)"
              strokeWidth="0.3"
              fill="none"
              opacity="0.4"
            >
              <path d="M50,100 Q150,50 250,100 T350,150" />
              <path d="M100,50 Q200,150 300,100 T50,200" />
              <path d="M150,300 Q250,200 350,250 T100,350" />
              <path d="M300,350 Q200,250 100,300 T350,200" />
              <circle
                cx="80"
                cy="80"
                r="2"
                fill="url(#aiGradient)"
                opacity="0.8"
              />
              <circle
                cx="304"
                cy="120"
                r="2"
                fill="url(#aiGradient)"
                opacity="0.8"
              />
              <circle
                cx="150"
                cy="280"
                r="2"
                fill="url(#aiGradient)"
                opacity="0.8"
              />
              <circle
                cx="280"
                cy="300"
                r="2"
                fill="url(#aiGradient)"
                opacity="0.8"
              />
            </g>
          </svg>
        </div>

        {/* Outer ring */}
        <div className="absolute inset-2 rounded-full border border-gray-800"></div>

        {/* Middle rings */}
        <div className="absolute inset-4 rounded-full border border-gray-700"></div>
        <div className="absolute inset-6 rounded-full border border-gray-600"></div>
        <div className="absolute inset-8 rounded-full border border-gray-700"></div>
        <div className="absolute inset-10 rounded-full border border-gray-800"></div>

        {/* Record label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-red-600 flex items-center justify-center shadow-inner">
          <div className="text-white text-xs md:text-sm lg:text-base font-medium text-center">
            <div>STEREO</div>
            <div className="text-xs">35 RPM</div>
          </div>
        </div>

        {/* Center hole */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black shadow-inner border-2 border-gray-900"></div>

        {/* Reflection/shine effect */}
        <div className="absolute top-4 left-8 w-16 h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transform rotate-45"></div>
      </div>

      <style jsx>{`
        .vinyl-record {
          animation: spin 1.714s linear infinite;
        }

        .ai-pattern {
          animation: patternPulse 4s ease-in-out infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes patternPulse {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
}