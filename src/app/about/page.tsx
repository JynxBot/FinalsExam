
import Image from "next/image";
import Link from "next/link";

export default function AboutArtistPage() {
  const heroImage = "/mnt/data/f5d552d5-8a1c-4172-85b6-72a9923ebae5.png";
  const gridImage = "/mnt/data/2907ddd2-550c-42a7-a317-b94268b7ebd6.png";

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <section className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Daniel Caesar</h1>
              <p className="text-gray-700 mb-4">
                Daniel Caesar (born Ashton Simmonds) is a Canadian singer-songwriter known for his smooth, intimate voice and soulful blend of R&amp;B, gospel, and alternative sounds. Rising to prominence with his critically acclaimed debut album <em>Freudian</em>, Caesar has become one of the most influential voices in modern R&amp;B.
              </p>

              <p className="text-gray-700 mb-4">
                His music focuses on vulnerability, love, and spirituality — often delivered over sparse but emotionally resonant arrangements. Caesar collaborates frequently with other artists and has earned multiple award nominations and a dedicated global fanbase.
              </p>

              <div className="flex gap-3 mt-4">
                <Link href="https://open.spotify.com/artist/1J2bGg1wYBev9F0xC1lD7r" target="_blank" className="inline-block">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow">Listen on Spotify</button>
                </Link>

                <Link href="https://www.instagram.com/danielcaesar/" target="_blank" className="inline-block">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg">Instagram</button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-56 md:h-48 lg:h-64 rounded-md overflow-hidden">
              <Image
                src={heroImage}
                alt="Daniel Caesar hero"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Biography</h2>
            <p className="text-gray-700 mb-4">
              Born in Toronto, Daniel Caesar began releasing music in the early 2010s. His 2014 EPs and the 2017 full-length <em>Freudian</em> earned wide praise for their honest lyricism and warm, analog production. Caesar&apos;s work often bridges traditional gospel textures with modern R&amp;B production, and his live performances are noted for their intimacy and emotional power.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Career highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Breakout album <em>Freudian</em> (2017) — critical acclaim and award nominations.</li>
              <li>Collaborations with artists like H.E.R., Chance the Rapper, and BADBADNOTGOOD.</li>
              <li>Multiple international tours and sold-out shows.</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Musical style</h3>
            <p className="text-gray-700 mb-2">
              Caesar&apos;s music blends R&amp;B, soul, gospel, and alternative production. His arrangements favor intimate instrumentation — guitar, warm keys, and sparse percussion — which places focus on vocal emotion and lyrical content.
            </p>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Quick facts</h3>
            <dl className="text-gray-700">
              <div className="mb-2"><dt className="font-medium">Birth name:</dt><dd> Ashton Simmonds</dd></div>
              <div className="mb-2"><dt className="font-medium">Origin:</dt><dd> Toronto, Canada</dd></div>
              <div className="mb-2"><dt className="font-medium">Genres:</dt><dd> R&amp;B, soul, gospel</dd></div>
              <div className="mb-2"><dt className="font-medium">Notable album:</dt><dd> Freudian</dd></div>
            </dl>
          </aside>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">Selected Discography</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image src="/images/freudian.jpg" alt="Freudian" width={400} height={400} className="object-cover rounded-md" />
              <p className="mt-2 text-sm font-medium">Freudian</p>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image src="/images/casestudy.jpg" alt="Case Study 01" width={400} height={400} className="object-cover rounded-md" />
              <p className="mt-2 text-sm font-medium">Case Study 01</p>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image src="/images/neverenough.png" alt="Never Enough" width={400} height={400} className="object-cover rounded-md" />
              <p className="mt-2 text-sm font-medium">Never Enough</p>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image src={gridImage} alt="Son of Spergy preview" width={400} height={400} className="object-cover rounded-md" />
              <p className="mt-2 text-sm font-medium">Son of Spergy</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-gray-600 mb-4">Want to hear more?</p>
          <Link href="https://open.spotify.com/artist/1J2bGg1wYBev9F0xC1lD7r" target="_blank">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow">Listen on Spotify</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
