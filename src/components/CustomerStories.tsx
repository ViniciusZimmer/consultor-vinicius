import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import theme from "../theme";
import { useState } from "react";

const CustomerStories = () => {
  const videos = [
    "src/assets/videos/relato1.webm",
    "src/assets/videos/relato2.webm",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      style={{ backgroundColor: theme.colors.black }}
      className="min-h-screen flex flex-col items-center justify-center p-4 text-white"
    >
      <div className="text-center mb-8">
        <h4
          style={{ color: theme.colors.white }}
          className="w-full my-2 text-3xl font-bold leading-tight text-center"
        >
          Veja o que falam nossos clientes
        </h4>
        <div className="w-full mb-4">
          <div
            style={{ backgroundColor: theme.colors.primary }}
            className="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-0 max-w-md mx-auto">
        {/* Vídeo Carousel */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          emulateTouch
          centerMode
          centerSlidePercentage={85}
          selectedItem={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
          showIndicators={false}
          className="rounded-2xl overflow-hidden"
        >
          {videos.map((videoSrc, index) => (
            <div
              key={index}
              className="aspect-[9/16] rounded-2xl shadow-xl overflow-hidden bg-black"
            >
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                src={videoSrc}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          ))}
        </Carousel>

        {/* Indicadores abaixo do carrossel */}
        <div className="flex justify-center mt-4">
          {videos.map((_, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
                index === selectedIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-white/60 mt-3">
        Deslize para o lado para ver mais relatos →
      </p>
    </section>
  );
};

export default CustomerStories;
