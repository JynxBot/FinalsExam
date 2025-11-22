"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import Image from "next/image";
import { Tagline } from "~/components/pro-blocks/landing-page/tagline";

export default function BentoGrid1() {
  const albums = [
    {
      title: "Freudian",
      description: "Daniel Caesar's soulful breakthrough album.",
      image: "/images/freudian.jpg",
      // Spotify search for the album/artist — replace with exact album URL if you have one
      spotifyUrl:
        "https://open.spotify.com/search/Freudian%20Daniel%20Caesar",
    },
    {
      title: "Case Study 01",
      description: "Exploring jazz and R&B vibes.",
      image: "/images/casestudy.jpg",
      spotifyUrl:
        "https://open.spotify.com/search/Case%20Study%2001%20Daniel%20Caesar",
    },
    {
      title: "Never Enough",
      description: "Smooth, emotional tracks to vibe to.",
      image: "/images/neverenough.png",
      spotifyUrl:
        "https://open.spotify.com/search/Never%20Enough%20Daniel%20Caesar",
    },
    {
      title: "Son of Spergy",
      description: "Experimental and soulful modern sounds.",
      image: "/images/sonofspergy.png",
      spotifyUrl:
        "https://open.spotify.com/search/Son%20of%20Spergy",
    },
  ] as const;

  return (
    <section className="bg-gray-50 section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Daniel Caesar Discography</Tagline>
          <h2 className="heading-lg text-3xl md:text-4xl font-bold">
            Explore the Albums
          </h2>
          <p className="text-gray-600">
            Dive into Daniel Caesar&apos;s soulful R&amp;B and experimental
            sounds. Featuring <em>Freudian</em>, <em>Case Study 01</em>,{" "}
            <em>Never Enough</em>, and <em>Son of Spergy</em>.
          </p>
        </div>

        {/* Responsive bento grid:
            - single column on mobile
            - 2 columns on small/medium
            - 4 columns on large
            We use auto-rows so row-span controls card height for the 'tall' items.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[260px]">
          {/* Tall Feature Card - Left (spans 2 rows on lg) */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 row-span-1 lg:row-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[0].title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              {/* image wrapper with aspect + clickable link */}
              <a
                href={albums[0].spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full rounded-md overflow-hidden"
                aria-label={`Open ${albums[0].title} on Spotify`}
              >
                <Image
                  src={albums[0].image}
                  alt={albums[0].title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>

          {/* Regular Feature Card */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[1]?.title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[1]?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[1]?.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full rounded-md overflow-hidden"
                aria-label={`Open ${albums[1]?.title} on Spotify`}
              >
                <Image
                  src={albums[1]?.image ?? "/images/fallback.jpg"}
                  alt={albums[1]?.title ?? "Album"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>

          {/* Regular Feature Card */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[2]?.title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[2]?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[2]?.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full rounded-md overflow-hidden"
                aria-label={`Open ${albums[2]?.title} on Spotify`}
              >
                <Image
                  src={albums[2]?.image ?? "/images/fallback.jpg"}
                  alt={albums[2]?.title ?? "Album"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>

          {/* Tall Feature Card - Right (spans 2 rows on lg) */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 row-span-1 lg:row-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[3]?.title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[3]?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[3]?.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full rounded-md overflow-hidden"
                aria-label={`Open ${albums[3]?.title} on Spotify`}
              >
                <Image
                  src={albums[3]?.image ?? "/images/fallback.jpg"}
                  alt={albums[3]?.title ?? "Album"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
