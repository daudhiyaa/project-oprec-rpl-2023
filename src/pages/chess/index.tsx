import React from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { QUERY_KEY, fetchChess } from "../api/chess";
import type { NextPage } from "next";
import Layout from "@/components/layout/Layout";

const Chess: NextPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(QUERY_KEY, () => fetchChess(), {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.players.length === 0 ? undefined : allPages.length + 1,
    });

  if (status === "loading") return <div>{status}</div>;
  if (status === "error") return <div>{status}</div>;

  return (
    <Layout pageTitle="Chess">
      <div className="min-h-screen font-poppins w-full flex flex-col p-14 items-center justify-between gap-10 bg-lightBG dark:bg-darkBG text-lightText pt-20">
        <h1 className="text-2xl dark:text-white">List of Chess Players</h1>
        <div className="flex flex-wrap gap-2 justify-around items-center">
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              <Link
                className="text-base px-3 py-1 rounded-md bg-lightComponent shadow-md"
                href={`chess/${page.players[index]}`}
              >
                <h2>{page.players[index]}</h2>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <button
          className={`py-2 px-4 animate-pulse hover:animate-none rounded-lg text-lg text-white shadow-lg bg-red-500 duration-300`}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading more..." : "Load more"}
        </button>
      </div>
    </Layout>
  );
};

export default Chess;
