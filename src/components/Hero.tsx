import theme from "../theme";
import Simulator from "./Simulator";
import { constants } from "../constants";
import openWhatsApp from "../hooks/openWhatsApp";

const Hero = () => {
  return (
    <section
      id="simulator"
      className="relative"
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12">
          <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
            <p
              className="uppercase tracking-wide text-xs sm:text-sm mb-3 sm:mb-4 font-medium"
              style={{ color: theme.colors.black }}
            >
              {constants.hero.subtitle}
            </p>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0"
              style={{ color: theme.colors.black }}
            >
              {constants.hero.title}
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0 max-w-2xl mx-auto lg:mx-0"
              style={{ color: theme.colors.black }}
            >
              {constants.hero.description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className="font-bold rounded-full py-3 px-6 sm:py-4 sm:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-sm sm:text-base w-auto min-w-[200px] sm:min-w-[220px]"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.white,
                }}
                onClick={() => openWhatsApp()}
              >
                {constants.hero.buttonText}
              </button>
            </div>
          </div>

          <div
            style={{
              paddingTop: "2rem",
            }}
            className="w-full lg:flex-1 lg:max-w-md xl:max-w-lg order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-full">
              <Simulator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
