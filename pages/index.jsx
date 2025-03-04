/* eslint-disable @next/next/no-img-element */
import GithubStar from '@/components/utils/github-star';
import { GithubIcon, GlobeIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

export const metadata = {
  title: 'Leiwand.bio',
  description:
    'Leiwand.bio is a link in bio tool that helps you easily manage your links, transforming your online presence.',
};

const Home = () => {
  const session = useSession();
  const isAuthenticated = session.status === 'authenticated' ? true : false;

  return (
    <>
      <Head>
        <title>Leiwand.bio | A free link in bio tool</title>
        {/* <!-- Open Graph (OG) meta tags --> */}
        <meta property="og:url" content="https://Leiwand.bio.vercel.app/" />
        <meta property="og:url" content="https://Leiwand.bio.me/" />
        <meta property="og:url" content="https://www.Leiwand.bio.me/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Leiwand.bio - The free & opensource link in bio tool"
        />
        <meta property="og:title" content="Leiwand.bio" />
        <meta
          property="og:description"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://Leiwand.bio.vercel.app/og.png"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://Leiwand.bio.me/og.png"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://www.Leiwand.bio.me/og.png"
        />

        {/* <!-- Twitter Card meta tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@urdadx" />
        <meta name="twitter:creator" content="@urdadx" />
        <meta
          property="twitter:domain"
          content="https://Leiwand.bio.vercel.app/"
        />
        <meta property="twitter:domain" content="https://Leiwand.bio.me/" />
        <meta property="twitter:domain" content="https://www.Leiwand.bio.me/" />
        <meta property="twitter:url" content="https://Leiwand.bio.vercel.app/" />
        <meta name="twitter:title" content="Leiwand.bio" />
        <meta
          name="twitter:description"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />
        <meta
          name="twitter:image"
          content="https://Leiwand.bio.vercel.app/og.png"
        />
        <meta name="twitter:image" content="https://Leiwand.bio.me/og.png" />
        <meta name="twitter:image" content="https://www.Leiwand.bio.me/og.png" />
        <meta
          data-rh="true"
          name="twitter:image:alt"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />

        {/* <!-- LinkedIn meta tags --> */}
        <meta
          property="og:linkedin:image"
          content="https://Leiwand.bio.vercel.app/og.png"
        />
        <meta
          property="og:linkedin:image"
          content="https://Leiwand.bio.me/og.png"
        />
        <meta
          property="og:linkedin:image"
          content="https://www.Leiwand.bio.me/og.png"
        />
        <meta property="og:linkedin:title" content="Leiwand.bio" />
        <meta
          property="og:linkedin:description"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />

        {/* <!-- Facebook meta tags --> */}
        <meta
          property="og:facebook:image"
          content="https://Leiwand.bio.vercel.app/og.png"
        />
        <meta
          property="og:facebook:image"
          content="https://Leiwand.bio.me/og.png"
        />
        <meta
          property="og:facebook:image"
          content="https://www.Leiwand.bio.me/og.png"
        />
        <meta property="og:facebook:title" content="Leiwand.bio" />
        <meta
          property="og:facebook:description"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />

        {/* <!-- Instagram meta tags --> */}
        <meta
          property="og:instagram:image"
          content="https://Leiwand.bio.vercel.app/og.png"
        />
        <meta
          property="og:instagram:image"
          content="https://Leiwand.bio.me/og.png"
        />
        <meta
          property="og:instagram:image"
          content="https://www.Leiwand.bio.me/og.png"
        />
        <meta property="og:instagram:title" content="Leiwand.bio" />
        <meta
          property="og:instagram:description"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />

        {/* <!-- Pinterest meta tags --> */}
        <meta
          property="og:pinterest:image"
          content="https://Leiwand.bio.vercel.app/og.png"
        />
        <meta
          property="og:pinterest:image"
          content="https://Leiwand.bio.me/og.png"
        />
        <meta
          property="og:pinterest:image"
          content="https://www.Leiwand.bio.me/og.png"
        />
        <meta property="og:pinterest:title" content="Leiwand.bio" />
        <meta
          property="og:pinterest:description"
          content="Leiwand.bio is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        />
      </Head>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-y-0 w-full h-full"
            aria-hidden="true"
          ></div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <nav
                className="relative flex items-center justify-between md:justify-start"
                aria-label="Global"
              >
                <Link
                  className="flex items-center gap-2 font-bold text-xl"
                  href="/"
                >
                  <h3 className="lg:block">Leiwand.bio</h3>
                </Link>

                <div className="relative items-center w-28 z-10 md:absolute md:inset-y-0 md:right-0">
                  <Link
                    className="group inline-flex items-center gap-2 px-4 text-sm  bg-slate-900 border rounded-3xl text-white w-[116px] h-[35px] justify-center font-semibold transition-colors hover:bg-slate-700"
                    rel="noopener noreferrer"
                    href="/admin"
                  >
                    {isAuthenticated ? 'Admin' : 'Login'}
                  </Link>
                </div>
              </nav>
            </div>
            <div className="px-4 mx-auto mt-24 max-w-7xl sm:mt-16 sm:px-6">
              <div className="flex justify-center items-center mb-6">
                <a
                  className="group inline-flex items-center gap-2 px-4 py-4 text-sm bg-gray-50 border rounded-3xl text-gray-500 w-[180px] h-[35px] justify-center transition-colors hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/urdadx/Leiwand.bio"
                >
                  <div className="">
                    <GithubStar />
                  </div>{' '}
                  Star us on Github
                </a>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">The free & opensource</span>
                  <span className="hero-title block ">link in bio tool</span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Leiwand.bio is an opensource link in bio tool that helps you
                  easily manage your links, transforming your online presence.
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex flex-col items-center">
                  <span className="inline-flex rounded-xl shadow">
                    <Link legacyBehavior href="/register">
                      <a className="inline-flex items-center px-4 py-2 font-medium text-lg gradient-btn border border-transparent rounded-xl text-white w-[190px] h-[50px] justify-center hover:shadow-lg">
                        Get started
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-slate-900 " />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <Image
                className="relative rounded-lg shadow-lg"
                src="/assets/new_shot.png"
                alt="App screenshot"
                height={700}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-900">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold tracking-wide text-center text-gray-400">
              Made by{' '}
              <a
                className="hover:text-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/songverwandt"
              >
                @songverwandt
              </a>
            </h2>
            <div className="flex items-center gap-4 justify-center mt-4">
              <a
                href="https://x.com/NerdyProgramme2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter logo"
              >
                <TwitterIcon color="white" />
              </a>
              <a
                href="https://github.com/urdadx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github logo"
              >
                <GithubIcon color="white" />
              </a>
              <a
                href="https://urdadx.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="insta logo"
              >
                <GlobeIcon color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
