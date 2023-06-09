export default function Code() {
  return (
    <div className="font-ia flex flex-col w-full">
      <div className="flex flex-col sm:mt-44 mt-10">
        <p className="text-left font-black text-2xl sm:text-xl pb-4">
          Side projects
        </p>
        <ul className="text-left">
          <li className="py-2">
            <a
              href="https://github.com/elia-orsini/BlenderWebViewer"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                BlenderWebViewer
              </h1>
            </a>
            <p className="text-sm text-gray-200">A web viewer for blender.</p>
            <p className="text-xs font-light text-gray-400">PYTHON - REACT</p>
          </li>
          <li className="py-2">
            <a
              href="https://hor-map.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                HoR Map
              </h1>
            </a>
            <p className="text-sm text-gray-200">3D interactive map.</p>
            <p className="text-xs font-light text-gray-400">
              THREE.JS - BLENDER
            </p>
          </li>
          <li className="py-2">
            <a href="https://lazyllm.xyz/" target="_blank" rel="noreferrer">
              <h1 className="font-black underline underline-offset-1 decoration-2">
                lazyLLM
              </h1>
            </a>
            <p className="text-sm text-gray-200">
              Tooling kit to create, test and analyse prompts on LLMs.
            </p>
            <p className="text-xs font-light text-gray-400">
              TYPESCRIPT - NEXT.JS - TAILWIND CSS
            </p>
          </li>
          <li className="py-2">
            <a
              href="https://github.com/elia-orsini/mars-imagery-classification"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                Mars Neural Net
              </h1>
            </a>
            <p className="text-sm  text-gray-200">
              Neural Network that classifies images taken on Mars.
            </p>
            <p className="text-xs font-light text-gray-400">
              PYTHON - TENSORFLOW
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col mt-20">
        <p className="text-left font-black text-2xl sm:text-xl pb-4 block">
          Websites I built
        </p>
        <ul className="text-left block">
          <li className="py-2">
            <a
              href="https://rhomcguire.uk"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                rho mcguire
              </h1>
            </a>
            <p className="text-sm text-gray-200">
              professional website for rho mcguire.
            </p>
            <p className="text-xs font-light text-gray-400">
              NEXT - NOTION - TAILWIND CSS 
            </p>
          </li>
          <li className="py-2">
            <a
              href="https://www.insomniaevents.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                Insomnia
              </h1>
            </a>
            <p className="text-sm text-gray-200">
              website for Insomnia Events.
            </p>
            <p className="text-xs font-light text-gray-400">
              REACT - TAILWIND CSS
            </p>
          </li>
          <li className="py-2">
            <a
              href="https://lamacinasonora.com"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                La Macina Sonora
              </h1>
            </a>
            <p className="text-sm text-gray-200">
              website for the recording studio La Macina Sonora.
            </p>
            <p className="text-xs font-light text-gray-400">
              REACT - TAILWIND CSS
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col mt-20">
        <p className="text-left font-black text-2xl sm:text-xl pb-4 block">
          Projects I am part of
        </p>
        <ul className="text-left sm:pb-44 pb-10 block">
          <li className="py-2">
            <a
              href="https://www.archivepdf.net/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="font-black underline underline-offset-1 decoration-2">
                ARCHIVE.pdf
              </h1>
            </a>
            <p className="text-sm text-gray-200">
              Archive Fashion Scans, Articles & Content for the World.
            </p>
            <p className="text-xs font-light text-gray-400">
              TYPESCRIPT - NEXT.JS - STRAPI
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
