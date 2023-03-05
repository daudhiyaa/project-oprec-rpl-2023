import { useRouter } from "next/router";
import { useQuery } from "react-query";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ChessPlayer {
  url: string; // the chess.com user's profile page (the username is displayed with the original letter case)
  username: string; // the username of this player
  player_id: number; // the non-changing Chess.com ID of this player
  title: string; // (optional) abbreviation of chess title, if any
  status: string; // account status: closed, closed:fair_play_violations, basic, premium, mod, staff
  name: string; // (optional) the personal first and last name
  avatar: string; // (optional) URL of a 200x200 image
  location: string; // (optional) the city or location
  country: string; // API location of this player's country's profile
  joined: number; // timestamp of registration on Chess.com
  last_online: number; // timestamp of the most recent login
  followers: number; // the number of players tracking this player's activity
  is_streamer: boolean; //if the member is a Chess.com streamer
  twitch_url: string;
  fide: number; // FIDE rating
}

interface QueryError {
  message: string;
}

const Player: NextPage = () => {
  const router = useRouter();
  const { player } = router.query;

  const [country, setCountry] = useState("");
  const [isPrem, setIsPrem] = useState(false);

  const API_LINK = `https://api.chess.com/pub/player/${player}`;

  const { isLoading, error, data } = useQuery<ChessPlayer>(
    API_LINK,
    async () => {
      const response = await fetch(API_LINK);
      return response.json();
    }
  );

  useEffect(() => {
    if (data?.country !== undefined) {
      fetch(data?.country)
        .then((response) => response.json())
        .then((countryData) => setCountry(countryData.name));
    }
  }, [data?.country]);

  useEffect(() => {
    if (data?.status === "premium") setIsPrem(true);
  }, [data?.status]);

  if (isLoading)
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-3xl">
        Loading...
      </div>
    );

  if (error) {
    console.log(error);
    const queryError = error as QueryError;
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-3xl">
        {queryError.message}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data?.name} Page | FE RPL</title>
        <meta name="description" content="Website Penugasan FE RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-title.png" />
      </Head>
      <section
        className="min-h-screen p-24 w-full flex flex-col items-start justify-center dark:text-white dark:bg-darkBG bg-lightBG text-lightText font-poppins"
        key={data?.player_id}
      >
        <h4 className="text-sm">{data?.url}</h4>
        <span className="text-[3rem] flex gap-3">
          <h2 className="font-thin text-gray-400">#{data?.title}</h2>
          <h2 className="font-bold">{data?.name}</h2>
        </span>
        <span className="flex items-center gap-2 mt-2">
          <h2
            className={`py-2 px-4 flex ${
              isPrem ? "bg-lightComponent" : "bg-cyan-400"
            } rounded-md`}
          >
            {data?.status.toUpperCase()}
          </h2>
          <h2 className="py-2 px-4 flex border-slate-300 border-2 rounded-md">
            Followers : {data?.followers}
          </h2>
          <h2
            className={`${
              country === ""
                ? ""
                : "py-2 px-4 flex border-slate-300 border-2 rounded-md"
            }`}
          >
            {country}
          </h2>
          <Link
            href={`/chess`}
            className="py-2 px-4 ml-4 flex animate-pulse hover:animate-none border-slate-300 border-2 rounded-md"
          >
            Back
          </Link>
        </span>
      </section>
    </>
  );
};

export default Player;
