
export default function Code() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-col sm:flex-row sm:mt-44 mt-10'>
        <div>
          <p className="text-left font-black text-2xl sm:text-xl pb-4">
            Side projects
          </p>
          <p className="text-left font-black text-2xl sm:text-xl pb-4 hidden sm:block mt-[21em]">
            Websites I built
          </p>
        </div>
        <ul className="text-left sm:ml-20">
          <li className="py-2">
          <a href="https://github.com/elia-orsini/BlenderWebViewer" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">BlenderWebViewer</h1></a>
            <p className="text-sm text-gray-200">A web viewer for blender.</p>
            <p className="text-sm font-light text-gray-400">PYTHON - REACT - REACT THREE FIBER</p>
          </li>
          <li className="py-2">
          <a href="https://github.com/elia-orsini/mars-imagery-classification" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">mars-imagery-classification</h1></a>
            <p className="text-sm  text-gray-200">Neural Network that classifies images taken by the Curiosity rover on the surface of Mars.</p>
            <p className="text-xs font-light text-gray-400">PYTHON - TENSORFLOW</p>
          </li>
          <li className="py-2">
          <a href="https://r124.vercel.app" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">HousesOfRome map</h1></a>
            <p className="text-sm text-gray-200">3D interactive map optimised for the browser.</p>
            <p className="text-xs font-light text-gray-400">JAVASCRIPT - THREE.JS</p>
          </li>
          <li className="py-2">
            <a href="https://github.com/sebastian-axell/munchpal" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2 block inline">munchpal</h1></a>
            <a href="https://munchpal.herokuapp.com" target="_blank" rel="noreferrer"><h1 className="block inline pl-6 text-sm font-base underline underline-offset-1 decoration-1">demo</h1></a>
            <p className="text-sm text-gray-200">peer-to-peer food sharing.</p>
            <p className="text-xs font-light text-gray-400">DJANGO - REACT - REDUX - TAILWIND CSS</p>
          </li>
          <li className="py-2">
            <a href="https://github.com/elia-orsini/plantie" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2 block inline">plantie</h1></a>
            <a href="https://plantie.fly.dev" target="_blank" rel="noreferrer"><h1 className="block inline pl-6 text-sm font-base underline underline-offset-1 decoration-1">demo</h1></a>
            <p className="text-sm text-gray-200">peer-to-peer plant-sitting.</p>
            <p className="text-xs font-light text-gray-400">REMIX - REACT - TAILWIND CSS</p>
          </li>
          {/* <li className="py-2">
          <a href="https://r124.vercel.app" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">3d Immersive Scenes</h1></a>
            <p className="text-sm text-gray-200">3D interactive map optimised for the browser.</p>
            <p className="text-xs font-light text-gray-400">REACT - REACT-THREE-FIBER - RAPIER</p>
          </li> */}
          <ul className="text-left pb-20 hidden sm:block mt-20">
            <li className="py-2">
              <a href="https://insomniaevents.xyz" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">Insomnia</h1></a>
              <p className="text-sm text-gray-200">website for Insomnia.</p>
              <p className="text-xs font-light text-gray-400">REACT - TAILWIND CSS</p>
            </li>
            <li className="py-2">
              <a href="https://lamacinasonora.com" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">La Macina Sonora</h1></a>
              <p className="text-sm text-gray-200">website for the recording studio La Macina Sonora.</p>
              <p className="text-xs font-light text-gray-400">REACT - TAILWIND CSS</p>
            </li>
          </ul>
        </ul>
      </div>

      <div className='flex flex-col sm:flex-row sm:mt-20 mt-20'>
        <p className="text-left font-black text-2xl sm:text-xl pb-4 block sm:hidden">
          Websites I built
        </p>
        <ul className="text-left pb-20 block sm:hidden">
          <li className="py-2">
            <a href="https://insomniaevents.xyz" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">Insomnia</h1></a>
            <p className="text-sm text-gray-200">website for Insomnia.</p>
            <p className="text-xs font-light text-gray-400">REACT - TAILWIND CSS</p>
          </li>
          <li className="py-2">
            <a href="https://lamacinasonora.com" target="_blank" rel="noreferrer"><h1 className="font-black underline underline-offset-1 decoration-2">La Macina Sonora</h1></a>
            <p className="text-sm text-gray-200">website for the recording studio La Macina Sonora.</p>
            <p className="text-xs font-light text-gray-400">REACT - TAILWIND CSS</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
