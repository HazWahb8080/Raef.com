import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/sections/Hero";
import Offer from "../components/sections/Offer";
import ProjectsMain from "../components/sections/ProjectsMain";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Reaef Alaa - your graphic designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[url('/pattern.svg')] h-full w-full">
        <NavBar />
        <Hero />
        <ProjectsMain />
        <Offer />
      </main>
    </div>
  );
};

export default Home;
