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
      spotifyUrl: "https://open.spotify.com/album/4E1XUBMTpLO7GpBzUo65Jp",
    },
    {
      title: "Case Study 01",
      description: "Exploring jazz and R&B vibes.",
      image: "/images/casestudy.jpg",
      spotifyUrl: "https://open.spotify.com/album/7lb4ck9tn2ZaJRrYjhyP9A",
    },
    {
      title: "Never Enough",
      description: "Smooth, emotional tracks to vibe to.",
      image: "/images/neverenough.png",
      spotifyUrl: "https://open.spotify.com/album/7ivbFszr1TbVadj89BIy1y",
    },
    {
      title: "Son of Spergy",
      description: "Experimental and soulful modern sounds.",
      image: "/images/sonofspergy.png",
      spotifyUrl: "https://open.spotify.com/album/2LKW0m9cC63QzEI9tJH3ql",
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
            sounds.
          </p>
        </div>

        {/* Desktop: 3 columns
            Left: tall card (row-span-2)
            Middle: two stacked small cards (row 1 & row 2)
            Right: tall card (row-span-2)
            Mobile/Sm: collapses to single column
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">

          {/* LEFT - tall card (spans 2 rows on lg) */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{albums[0].title}</CardTitle>
              <CardDescription className="text-gray-700">
                {albums[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[0].spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${albums[0].title} on Spotify`}
                className="relative block w-full min-h-[360px] lg:min-h-0 lg:h-full rounded-md overflow-hidden"
              >
                <Image
                  src={albums[0].image}
                  alt={albums[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>

          {/* MIDDLE TOP - small card */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{albums[1].title}</CardTitle>
              <CardDescription className="text-gray-700">
                {albums[1].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[1].spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${albums[1].title} on Spotify`}
                className="relative block w-full h-48 sm:h-56 rounded-md overflow-hidden"
              >
                <Image
                  src={albums[1].image}
                  alt={albums[1].title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>

          {/* RIGHT - tall card (spans 2 rows on lg) */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{albums[3].title}</CardTitle>
              <CardDescription className="text-gray-700">
                {albums[3].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[3].spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${albums[3].title} on Spotify`}
                className="relative block w-full min-h-[360px] lg:min-h-0 lg:h-full rounded-md overflow-hidden"
              >
                <Image
                  src={albums[3].image}
                  alt={albums[3].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
            </CardContent>
          </Card>

          {/* MIDDLE BOTTOM - small card (appears below middle-top on lg) */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{albums[2].title}</CardTitle>
              <CardDescription className="text-gray-700">
                {albums[2].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <a
                href={albums[2].spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${albums[2].title} on Spotify`}
                className="relative block w-full h-48 sm:h-56 rounded-md overflow-hidden"
              >
                <Image
                  src={albums[2].image}
                  alt={albums[2].title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
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
