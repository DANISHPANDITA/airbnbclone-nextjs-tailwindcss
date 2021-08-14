/** @format */
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header({ placeholder }) {
  const router = useRouter();
  const [headerState, setHeaderState] = useState(false);
  const [DateState, setDateState] = useState(false);
  const [guestState, setGuestState] = useState(false);
  const [guests, setGuests] = useState("");
  const [Location, setLocation] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleSearch = () => {
    if (Location.length > 0 && guests.length > 0) {
      router.push({
        pathname: "/search",
        query: {
          location: Location,
          DateofStart: date[0].startDate.toISOString(),
          DateofEnd: date[0].endDate.toISOString(),
          Guests: guests,
        },
      });
    } else {
      alert("Please fill all the entries.");
    }
  };
  return (
    <div className="flex flex-col sticky top-0 bg-white z-50 xs:px-8">
      <div
        className={`flex flex-row items-center justify-between py-4 px-16 xs:${
          headerState && "px-1"
        }`}>
        <img
          onClick={() => router.push("/")}
          className="w-auto h-8 sm:hidden xs:hidden hover:cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
        {!headerState ? (
          <div
            className="flex flex-row items-center hover:cursor-pointer justify-between  border-2 py-2 px-6  border-gray-400 rounded-3xl outline-none w-1/3 xs:w-full xs:px-1 xs:py-1 sm:w-full sm:mr-1 md:w-full md:ml-1 xxl:w-3/12 xxl:py-1 xxl:px-4 lg:w-1/2"
            onClick={() => {
              setHeaderState(true);
            }}>
            <input
              className="outline-none w-3/4 text-sm hover:cursor-pointer cursor-none font-bold px-4 xs:w-3/4"
              placeholder={placeholder || "Start your Search"}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 text-white  bg-pink-600 rounded-full p-2  "
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </div>
        ) : (
          <div className="flex flex-row items-center space-x-8 text-lg text-gray-800 font-normal py-4 px-16 md:text-sm xl:text-base sm:text-sm xs:text-sm xs:px-1">
            <p className="hover:cursor-pointer hover:text-gray-500 underline">
              Places to stay
            </p>
            <p className="hover:cursor-pointer hover:text-gray-500">
              Experiences
            </p>
            <p className="hover:cursor-pointer hover:text-gray-500">
              Online Hostings
            </p>
          </div>
        )}

        <div className="flex flex-row items-center xs:hidden">
          <p
            className={`text-gray-600 font-semibold  sm:hidden md:${
              headerState ? "hidden" : "mx-1"
            }`}>
            Become a host
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-6 text-gray-500 sm:hidden md:hidden"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
            />
          </svg>
          <div className="flex flex-row items-center border-2 hover:cursor-pointer border-gray-300 rounded-3xl p-1 xs:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              />
            </svg>
          </div>
        </div>
      </div>
      {headerState && (
        <div className="flex flex-row space-x-2 items-center mx-auto py-1 px-16 md:space-x-1 sm:flex-wrap xs:hidden">
          <div className="py-4 px-4 font-sans cursor-pointer shadow-xl rounded-3xl transition duration-200 hover:cursor-pointer hover:bg-gray-200 md:py-2 md:px-2 sm:mb-2">
            <p className="text-sm font-semibold font-sans ml-3">Location</p>
            <input
              className="text-gray-400 text-base outline-none bg-transparent px-3 py-1 lg:w-40"
              placeholder="Where are you going?"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div
            className="py-4 px-10 font-sans shadow-xl rounded-3xl transition duration-200 hover:cursor-pointer hover:bg-gray-200  md:px-3 sm:mb-2"
            onClick={() => {
              if (!DateState) {
                setDateState(true);
                setGuestState(false);
              }
            }}>
            <p className="text-sm font-semibold">Check in</p>
            <input
              placeholder="Add date"
              className="text-gray-400 text-base outline-none bg-transparent w-28 md:w-20 lg:w-20"
              value={date[0].startDate.toDateString()}
            />
          </div>
          <div
            className="py-4 px-10 font-sans shadow-xl rounded-3xl transition duration-200 hover:cursor-pointer hover:bg-gray-200  md:px-3 sm:mb-2"
            onClick={() => {
              if (!DateState) {
                setDateState(true);
                setGuestState(false);
              }
            }}>
            <p className="text-sm font-semibold ">Check out</p>
            <input
              placeholder="Add date"
              className="text-gray-400 text-base outline-none bg-transparent w-28 md:w-20 lg:w-20"
              value={date[0].endDate.toDateString()}
            />
          </div>
          <div
            className="py-4 px-8 font-sans shadow-xl rounded-3xl transition duration-200 hover:cursor-pointer hover:bg-gray-200  md:px-3 "
            onClick={() => {
              if (!guestState) {
                setDateState(false);
                setGuestState(true);
              }
            }}>
            <p className="text-sm font-semibold">Guests</p>
            <input
              placeholder="Add Guests"
              className="text-gray-400 text-base outline-none bg-transparent w-28 md:w-20 lg:w-20"
              value={guests}
            />
          </div>
          <div
            onClick={handleSearch}
            className="flex flex-row items-center bg-pink-600 py-2 px-2 rounded-3xl transition duration-200 hover:cursor-pointer hover:bg-pink-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 text-white   rounded-full p-2 md:h-8 md:p-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <button className="text-white font-bold text-lg md:text-sm">
              Search
            </button>
          </div>
        </div>
      )}
      {DateState && (
        <DateRangePicker
          className="mx-auto bg-gray-300 border-2 border-gray-200 px-2 py-1 rounded-xl shadow-2xl text-red-500 font-serif text-lg font-semibold"
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date}
          rangeColors={["#FF8165"]}
          direction="horizontal"
        />
      )}
      {guestState && (
        <div className="mx-auto flex flex-row items-center font-serif font-semibold text-base space-x-8 my-2 border border-gray-300 px-4 py-3 rounded-3xl bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <p className="text-red-500">Add Guests</p>
          <input
            type="number"
            onChange={(e) => {
              setGuests(e.target.value);
            }}
            className="bg-gray-300 px-3 py-1 w-24 outline-none text-red-700 "></input>
        </div>
      )}
    </div>
  );
}
export default Header;
