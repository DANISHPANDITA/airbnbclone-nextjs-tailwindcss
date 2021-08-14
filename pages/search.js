/** @format */
import { parseISO, secondsToHours } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hotel from "../components/Hotel";
import Map from "../components/Map";

function search({ hotels }) {
  const router = useRouter();

  const difference = (a, b) => {
    var firstDate = new Date(a),
      secondDate = new Date(b),
      firstDateInSeconds = firstDate.getTime() / 1000,
      secondDateInSeconds = secondDate.getTime() / 1000,
      difference = Math.abs(firstDateInSeconds - secondDateInSeconds);
    const result = secondsToHours(difference);
    return result / 24;
  };
  const date1 = (parseISO(router.query.DateofStart) + "").slice(4, 10);
  const date2 = (parseISO(router.query.DateofEnd) + "").slice(4, 10);
  const totalGuests = router.query.Guests;
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <Header
        placeholder={`${router.query.location} | ${date1}-${date2} | ${totalGuests} guests`}
      />
      <div className="flex flex-row">
        <div className="mt-12 ml-10 w-6/12 xs:w-full  sm:w-full lg:w-full md:w-full">
          <p className="text-sm">
            {difference(router.query.DateofStart, router.query.DateofEnd)} stays
            · {date1} - {date2} · {totalGuests} guests
          </p>
          <p className="text-3xl font-bold mt-2 text-gray-800">
            Stays in Jammu
          </p>
          <div className="mt-6 text-gray-800 text-sm flex flex-row items-center space-x-2">
            <p className="border border-gray-400 rounded-3xl px-5 py-2 hover:cursor-pointer hover:border-black">
              Cancellation flexibility
            </p>
            <p className="border border-gray-400 rounded-3xl px-5 py-2 hover:cursor-pointer hover:border-black">
              Type of Place
            </p>
            <p className="border border-gray-400 rounded-3xl px-5 py-2 hover:cursor-pointer hover:border-black">
              Price
            </p>
            <p className="border border-gray-400 rounded-3xl px-5 py-2 hover:cursor-pointer hover:border-black">
              Instant Book
            </p>
            <p className="border border-gray-400 rounded-3xl px-5 py-2 hover:cursor-pointer hover:border-black ">
              More Filters
            </p>
          </div>
          <p className="text-sm mt-6 ">
            Review COVID-19 travel restrictions before you book{"  "}
            <a
              className="underline"
              href="https://boi.gov.in/content/advisory-travel-and-visa-restrictions-related-covid-19-1">
              Learn More
            </a>
          </p>
          <div className="mt-8 border-t border-gray-300"></div>
          {hotels?.map((hotel) => {
            return (
              <Hotel
                stays={difference(
                  router.query.DateofStart,
                  router.query.DateofEnd
                )}
                img={hotel.img}
                type={hotel.type}
                name={hotel.name}
                rating={hotel.rating}
                totalReviews={hotel.totalReviews}
                roomsAvailable={hotel.roomsAvailable}
                perNight={hotel.perNight}
                servicePrice={hotel.servicePrice}
                lat={hotel.lat}
                lng={hotel.lng}
              />
            );
          })}
        </div>
        <div className="flex-1 ml-12 mr-4 lg:hidden md:hidden sm:hidden xs:hidden">
          <Map hotels={hotels} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default search;
export async function getServerSideProps() {
  let hotels = await fetch(
    "https://run.mocky.io/v3/fc22cb84-46f6-4220-91c4-f3ad06f73373"
  ).then((res) => res.json());
  return {
    props: {
      hotels: hotels,
    },
  };
}
