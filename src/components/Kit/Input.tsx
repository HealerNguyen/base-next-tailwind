const KitInput = () => {
  return (
    <div className="mx-auto">
      <h4 className="text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
        Input
      </h4>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
          <i className="fas fa-lock"></i>
        </span>
        <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <i className="fas fa-lock"></i>
        </span>
        <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <span className="z-10 h-full leading-normal font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
          <i className="fas fa-lock"></i>
        </span>
        <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
      </div>
    </div>
  );
};

export default KitInput;
