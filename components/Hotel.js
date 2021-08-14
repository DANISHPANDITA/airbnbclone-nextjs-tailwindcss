/** @format */

/** @format */
function Hotel({
  img,
  type,
  name,
  rating,
  totalReviews,
  roomsAvailable,
  perNight,
  servicePrice,
  lng,
  lat,
  stays,
}) {
  return (
    <div className="flex flex-row py-6 border-b border-gray-300 hover:cursor-pointer hover:opacity-90">
      <img
        lazyload
        className="h-48 w-64 rounded-2xl transition-all duration-300 hover:cursor-pointer hover:scale-105"
        src={img}
        alt="Hotel Image"
      />
      <div className="flex flex-col ml-10 w-full">
        <div>
          <div className="flex flex-row items-center justify-between pr-2">
            <div>
              <p className="text-base text-gray-500">{type} in Jammu</p>
              <p className="-mt-1 font-normal text-lg">{name}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <hr className="w-12 mt-3" />
          <p className="text-sm text-gray-500 mt-1">{roomsAvailable}</p>
        </div>
        <div className="flex flex-row items-center justify-between mt-16">
          <div className="flex flex-row items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-pink-700"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="font-bold text-sm">{rating}</p>
            <p className="text-sm text-gray-600">({totalReviews} reviews)</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-xl text-black">
              <b>₹{perNight.toLocaleString("en-IN")}</b> / night
            </p>
            <p className="text-sm text-gray-600 underline hover:cursor-pointer">
              ₹
              {(
                parseInt(stays * perNight) + parseInt(servicePrice)
              ).toLocaleString("en-IN")}{" "}
              total (Service : ₹{servicePrice} inc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
