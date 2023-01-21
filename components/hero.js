import Image from "next/image";
import Container from "./container";
import heroImg from "../public/Retrato low.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap bg-color-gray-200">
        <div className="flex items-center w-full lg:w-2/3">
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl font-bold text-gray-600 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-gray-200">
              Hi, I'm
            </h1>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-600 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-gray-200">
              Francisco Alvarez Raineri
            </h1>
            <p className="py-5 text-4xl leading-normal text-gray-400 xl:text-4xl">
              Full Stack Developer
            </p>
            <h1 className="text-2xl font-bold text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-gray-200">
              Welcome to my portfolio!
            </h1>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-6">
              <a
                href="https://github.com/FranciscoAlvarezRaineri"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> Check out my Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/3">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center content-center gap-5 mt-10 md:justify-around">
            <img
              align="left"
              alt="JavaScript"
              width="48px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />
            <img
              align="left"
              alt="NodeJS"
              width="48px"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            />
            <img
              className="dark:invert"
              align="left"
              alt="NextJS"
              width="48px"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            />
            <img
              align="left"
              alt="React"
              width="48px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              align="left"
              alt="Redux"
              width="48px"
              src="https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"
            />
            <img
              align="left"
              alt="Git"
              width="48px"
              src="https://avatars.githubusercontent.com/u/18133?s=200&v=4"
            />
            <img
              align="left"
              alt="GitHub"
              width="48px"
              src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png"
            />
            <img
              align="left"
              alt="Linux"
              width="48px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
