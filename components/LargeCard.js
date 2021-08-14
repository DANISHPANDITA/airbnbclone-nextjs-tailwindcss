/** @format */

function LargeCard({ img, title, dets }) {
  return (
    <div
      className="flex flex-col w-4/12  py-0.5 lg:w-5/12 lg:px-1 md:w-7/12 md:px-2  sm:w-11/12 sm:px-4 xs:w-11/12 xs:px-8"
      key={img}>
      <img
        className="w-72  h-72 rounded-xl hover:cursor-pointer transition-all duration-300  transform hover:scale-105 lg:min-w-[300px] md:min-w-[300px] sm:min-w-[250px] xs:min-w-[300px]"
        src={img}
        alt=""
      />
      <p className="font-serif font-medium pl-2  mt-3 text-xl ">{title}</p>
      <p className="font-serif font-medium pl-2  mt-3 text-md ">{dets}</p>
    </div>
  );
}

export default LargeCard;
