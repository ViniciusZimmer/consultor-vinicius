import theme from "../theme";
import nagua from "../assets/images/nagua.png";
import backgroundImage from "../assets/images/background.png";
import LogoCanopus from "../assets/icons/logo_canopus";
import LogoNax from "../assets/icons/logo_nax";
import { constants } from "../constants";

const ProfileCard = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: theme.colors.white,
          color: theme.colors.primary,
        }}
        className="border-b py-12"
      >
        {/* Wave Design */}
        <div
          style={{
            backgroundColor: theme.colors.background,
            paddingTop: "3rem",
          }}
          className="-mt-12 lg:-mt-24"
        >
          <svg viewBox="0 0 1428 174" version="1.1" width="100%" height="100%">
            <defs>
              <linearGradient
                id="profileCardWaveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={theme.colors.primary} />
                <stop offset="100%" stopColor={theme.colors.secondary} />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="url(#profileCardWaveGradient)"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.15"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.18"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.25"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill={theme.colors.primary}
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>

        {/* Container Principal */}
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mt-8 mb-8">
            <h2
              style={{ color: theme.colors.black }}
              className="w-full my-2 text-5xl font-bold leading-tight text-center"
            >
              {constants.profileCard.sellerName}
            </h2>

            <div className="w-full mb-4">
              <div
                style={{ backgroundColor: theme.colors.primary }}
                className="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"
              ></div>
            </div>

            <p className="text-lg text-gray-600 mt-2">
              {constants.profileCard.sellerDescription}
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex flex-wrap items-center">
            {/* Foto de Perfil */}
            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
              <div
                style={{
                  borderColor: theme.colors.primary,
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
                className="w-40 h-40 rounded-full border-4 overflow-hidden mx-auto flex items-center justify-center"
              >
                <img
                  src={nagua}
                  alt="Foto do vendedor"
                  className="w-full h-full object-contain"
                  style={{ background: "transparent" }}
                />
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="w-full md:w-2/3">
              <div className="space-y-4">
                <p>
                  <a
                    href={constants.profileCard.emailLink}
                    className="inline-flex items-center hover:underline"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill={theme.colors.primary}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 5-8-5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {constants.profileCard.email}
                  </a>
                </p>
                <p>
                  <a
                    href={constants.profileCard.phoneLink}
                    className="inline-flex items-center hover:underline"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill={theme.colors.primary}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 0H6v10h8V5z" />
                    </svg>
                    {constants.profileCard.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={constants.profileCard.mapsLink}
                    className="inline-flex items-center hover:underline"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill={theme.colors.primary}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      <path d="M10 6a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    {constants.profileCard.address}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <a
              href={constants.profileCard.consorcioCanopusLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LogoCanopus
                fill={theme.colors.black}
                style={{ width: 120, height: "auto" }}
              />
            </a>
            <a
              href={constants.profileCard.naxOpenFinanceLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LogoNax
                color={theme.colors.black}
                style={{ width: 120, height: "auto" }}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
