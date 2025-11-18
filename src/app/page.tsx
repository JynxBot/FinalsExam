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
    },
    {
      title: "Case Study 01",
      description: "Exploring jazz and R&B vibes.",
      image: "/images/casestudy.jpg",
    },
    {
      title: "Never Enough",
      description: "Smooth, emotional tracks to vibe to.",
      image: "/images/neverenough.png",
    },
    {
      title: "Son of Spergy",
      description: "Experimental and soulful modern sounds.",
      image: "/images/sonofspergy.png",
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Tall Feature Card - Left */}
          <Card className="rounded-xl lg:row-span-2 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[0].title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src={albums[0].image}
                alt={albums[0].title}
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-md"
              />
            </CardContent>
          </Card>

          {/* Regular Feature Card - Top Right */}
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
              <Image
                src={albums[1]?.image ?? "/images/fallback.jpg"}
                alt={albums[1]?.title ?? "Album"}
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3] rounded-md"
              />
            </CardContent>
          </Card>

          {/* Regular Feature Card - Bottom Right */}
          <Card className="rounded-xl lg:col-start-2 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[2]?.title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[2]?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src={albums[2]?.image ?? "/images/fallback.jpg"}
                alt={albums[2]?.title ?? "Album"}
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3] rounded-md"
              />
            </CardContent>
          </Card>

          {/* Tall Feature Card - Right */}
          <Card className="rounded-xl lg:col-start-3 lg:row-span-2 lg:row-start-1 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {albums[3]?.title}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {albums[3]?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src={albums[3]?.image ?? "/images/fallback.jpg"}
                alt={albums[3]?.title ?? "Album"}
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
