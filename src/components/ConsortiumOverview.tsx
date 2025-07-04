import theme from "../theme";
import { constants } from "../constants";

const ConsortiumOverview = () => {
  return (
    <section
      style={{ backgroundColor: theme.colors.background }}
      className="py-12"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-8">
          <h2
            style={{ color: theme.colors.black }}
            className="w-full my-2 text-5xl font-bold leading-tight text-center"
          >
            {constants.consortiumOverview.title}
          </h2>
          <div className="w-full mb-4">
            <div
              style={{ backgroundColor: theme.colors.primary }}
              className="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {constants.consortiumOverview.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={step.imageSrc}
                alt={step.imageAlt}
                className="w-full h-49 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: theme.colors.black }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: theme.colors.text }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsortiumOverview;
