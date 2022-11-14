const KitProgressbar = () => {
  return (
    <div className="mx-auto">
      <h4 className="text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
        Progressbar
      </h4>
      <button className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        <i className="fas fa-home"></i> Small
      </button>
      <button className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        <i className="fas fa-home"></i> Regular
      </button>
      <button className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        <i className="fas fa-home"></i> Large
      </button>
    </div>
  );
};

export default KitProgressbar;
