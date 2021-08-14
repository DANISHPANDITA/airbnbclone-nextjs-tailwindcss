/** @format */

import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
export default function Home({ data, dataone }) {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner
        title="Not sure where to go? Perfect"
        src="https://a0.muscache.com/im/pictures/258b129d-d1cd-48b5-86d4-86206c13ebf7.jpg?im_w=1440"
        buttonText="I'm flexible"
      />
      <div>
        <h1 className="mt-40 font-bold text-3xl ml-20 xs:text-xl">
          Explore Nearby
        </h1>
        <div className="flex flex-wrap px-24 mt-8">
          {data.map((i) => {
            return (
              <div
                className="flex flex-row w-3/12 py-2 md:w-4/12 sm:w-6/12 xs:w-8/12"
                key={i.img}>
                <img
                  className="w-20 h-20 rounded-xl hover:cursor-pointer transition-all duration-300  transform hover:scale-110 "
                  src={i.img}
                  alt=""
                />
                <div className="flex flex-col ml-4">
                  <p className="font-semibold">{i.location}</p>
                  <p className="font-light">{i.distance}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="mt-4 text-gray-800 font-bold text-3xl ml-20 xs:text-xl">
          Live anywhere
        </h1>
        <div className="ml-12 flex flex-row lg:mx-24 xl:px-24 mt-8 lg:w-9/12 lg:overflow-x-scroll md:overflow-x-scroll sm:w-10/12 sm:px-0 sm:mx-auto sm:overflow-x-scroll xs:w-10/12 xs:px-0 xs:mx-auto xs:overflow-x-scroll">
          {dataone[0].map((i) => {
            return <SmallCard key={i.title} img={i.img} title={i.title} />;
          })}
        </div>
        <h1 className="mt-4 text-gray-800 font-bold text-3xl ml-20 xs:text-xl">
          Discover Experiences
        </h1>
        <h1 className="mt-1 text-gray-900 font-normal text-2xl ml-20 xs:text-lg">
          Unique activities with local experts – in person or online.
        </h1>
        <div className="ml-10 flex flex-row lg:px-24 xl:px-24 mt-8  md:overflow-x-scroll sm:w-10/12 sm:px-0 sm:mx-auto sm:overflow-x-scroll xs:w-10/12 xs:px-0 xs:mx-auto xs:overflow-x-scroll">
          {dataone[1].map((i) => {
            return (
              <LargeCard
                key={i.title}
                img={i.img}
                title={i.title}
                dets={i.dets}
              />
            );
          })}
        </div>
        <Banner
          src="https://media.istockphoto.com/photos/home-party-full-length-of-cheerful-young-people-enjoying-home-party-picture-id1035703478"
          title="Try Hosting"
          dets="Earn extra income by inviting some friends"
          buttonText="Learn More"
        />
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  let data = await fetch(
    "https://run.mocky.io/v3/a30806b1-278c-4fad-9b7e-c5f5fde7e9fb"
  ).then((res) => res.json());
  let dataone = await fetch(
    "https://run.mocky.io/v3/3b777b7e-d8fb-428a-a1f5-894934e758e5"
  ).then((res) => res.json());
  return {
    props: {
      data: data,
      dataone: dataone,
    },
  };
}
