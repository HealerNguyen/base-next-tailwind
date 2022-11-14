const KitGrid = () => {
  return (
    <div className="container px-4 mx-auto">
      <h4 className="text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
        Grid system
      </h4>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-8/12">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">12 and md 8</span>
          </div>
          <div className="w-1/2 px-4 md:w-4/12">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">6 and md 4</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 px-4 md:w-4/12">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">6 and md 4</span>
          </div>
          <div className="w-1/2 px-4 md:w-4/12">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">6 and md 4</span>
          </div>
          <div className="w-1/2 px-4 md:w-4/12">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">6 and md 4</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">column of 6</span>
          </div>
          <div className="w-1/2 px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">column of 6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitGrid;
