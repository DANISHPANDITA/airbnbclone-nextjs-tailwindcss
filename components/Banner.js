/** @format */
function Banner({ src, title, buttonText, dets }) {
  return (
    <div className="px-16 mt-10">
      <img
        src={src}
        alt=""
        className="mx-auto rounded-3xl hover:cursor-pointer xs:rounded-2xl  xs:h-56 xs:w-11/12 md:h-64 md:w-11/12"
      />
      <h1 className="-mt-64 font-bold text-4xl w-96 ml-36 xs:text-sm xs:-mt-52 xs:ml-6 xs:w-28 sm:text-xl sm:-mt-44">
        {title}
      </h1>
      {dets && (
        <h3 className="font-normal text-xl w-96 ml-36 xs:ml-6 xs:text-sm  xs:w-28">
          {dets}
        </h3>
      )}
      <button className="p-2 font-bold text-xl w-40 ml-36 bg-gray-600 text-white mt-4 rounded-xl xs:text-sm xs:p-1 xs:ml-6 xs:w-24">
        {" "}
        {buttonText}
      </button>
    </div>
  );
}

export default Banner;
