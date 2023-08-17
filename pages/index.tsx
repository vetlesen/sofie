// Packages
import groq from 'groq'
import client from '../client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState, useRef, useDeferredValue } from 'react'

// video
import ReactPlayer from 'react-player/lazy'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Keyboard, Zoom } from 'swiper/modules'

const CustomVideoPlayer = ({ url, lazyLoadCallback }) => {
  // video play mode
  const [playing, setPlaying] = useState(() => false)

  const deferredPlaying = useDeferredValue(() => playing)

  useEffect(() => {
    if (deferredPlaying) {
    } else {
    }
  }, [deferredPlaying])

  const handlePlay = () => {
    setPlaying(!playing)
  }

  // fixing the problem with hydration
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className="m relative h-full  max-w-[80vw] md:max-w-[75vw] lg:max-w-[70vw] xl:max-w-[50vw]">
      <p
        onClick={handlePlay}
        className="absolute inset-0 z-50 cursor-pointer p-4 text-white mix-blend-exclusion"
      >
        {playing ? 'PAUSE' : 'PLAY'}
      </p>
      {hasWindow && (
        <ReactPlayer
          width="100%"
          height="100%"
          playing={playing}
          loop={false}
          volume={1}
          url={url}
          onReady={lazyLoadCallback}
          playsinline={true}
        />
      )}
    </div>
  )
}

const CustomSlider = ({ item, isMobile }) => {
  const swiperRef = useRef<any>()

  const handleLoaded = () => {
    console.log('swiperRef', swiperRef)
    if (swiperRef.current) {
      swiperRef.current.swiper.update()
      swiperRef.current.swiper.slideTo(0)
    }
  }

  return (
    <div className="carouselrelative col-span-12 pt-40 first:pt-0 md:gap-x-4 xl:pt-80">
      <div className="relative relative mt-6 grid grid-cols-12 first:mt-0 md:mt-0 md:gap-x-4">
        <h1 className="image--title sticky top-4 z-50 col-span-6 col-start-4 mb-48 px-3 text-left md:col-start-3 md:col-start-4 md:gap-x-4">
          {item.title} ({item.images?.length})
        </h1>

        <div className="col-span-12">
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={'auto'}
            navigation
            modules={[Navigation, Keyboard, Zoom]}
            centeredSlides={true}
            shortSwipes={true}
            zoom={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            keyboard={{
              enabled: true,
            }}
          >
            {item.images?.map((content, index) => {
              console.log(content)
              return (
                <SwiperSlide key={index}>
                  {content.images?._type === 'image' ? (
                    <figure className="group cursor-pointer cursor-ew-resize">
                      {content?.images?.asset?.metadata?.dimensions
                        .aspectRatio < 1 && !isMobile ? (
                        //DESKTOP PORTRAIT
                        <Image
                          src={content.images.asset.url}
                          placeholder="blur"
                          blurDataURL={content?.images?.asset?.metadata?.lqip}
                          alt=""
                          width={1000}
                          height={0}
                          sizes="98vw"
                          loading="eager"
                          style={{
                            maxWidth: '50vh',
                            maxHeight: '80vh',
                            marginRight: '10px',
                            marginLeft: '10px',
                          }}
                        />
                      ) : content?.images?.asset?.metadata.dimensions
                          .aspectRatio > 1 && isMobile ? (
                        // MOBILE LANDSCAPE
                        <Image
                          src={content?.images?.asset?.url}
                          placeholder="blur"
                          blurDataURL={content?.images?.asset?.metadata?.lqip}
                          alt=""
                          width={1000}
                          height={0}
                          sizes="98vw"
                          loading="eager"
                          style={{
                            maxWidth: '40vh',
                            maxHeight: '50vh',
                            marginRight: '10px',
                            marginLeft: '10px',
                          }}
                        />
                      ) : content?.images?.asset?.metadata.dimensions
                          .aspectRatio < 1 && isMobile ? (
                        // MOBILE PORTRAIT
                        <Image
                          src={content?.images?.asset?.url}
                          placeholder="blur"
                          blurDataURL={content?.images?.asset?.metadata?.lqip}
                          alt=""
                          width={1000}
                          height={0}
                          sizes="98vw"
                          loading="eager"
                          style={{
                            maxWidth: '40vh',
                            maxHeight: '70vh',
                            marginRight: '10px',
                            marginLeft: '10px',
                          }}
                        />
                      ) : (
                        // DESKTOP LANDSCAPE
                        <Image
                          src={content?.images?.asset?.url}
                          placeholder="blur"
                          blurDataURL={content?.images?.asset?.metadata?.lqip}
                          alt=""
                          width={1000}
                          height={0}
                          sizes="98vw"
                          loading="eager"
                          style={{
                            maxWidth: '90vh',
                            maxHeight: '80vh',
                            marginRight: '10px',
                            marginLeft: '10px',
                          }}
                        />
                      )}
                      <figcaption>
                        <h1 className=" mx-[10px] pt-2 opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                          {content?.images?.asset?.description}
                        </h1>
                      </figcaption>
                    </figure>
                  ) : (
                    <CustomVideoPlayer
                      lazyLoadCallback={handleLoaded}
                      url={content?.videoUrl}
                    />
                  )}
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default function IndexPage({ home, images }) {
  // video player

  // logo animation. First it fades out when scrolling down, then the P and P moves over to the left from right.
  useEffect(() => {
    const handleScroll = () => {
      const fadeOutElements = document.querySelectorAll<HTMLElement>('.fadeOut')
      const move1Elements = document.querySelectorAll<HTMLElement>('.move1')
      const move2Elements = document.querySelectorAll<HTMLElement>('.move2')
      const move3Elements =
        document.querySelectorAll<HTMLElement>('.fixedContact')
      const move4Elements = document.querySelectorAll<HTMLElement>('.hideThis')
      fadeOutElements.forEach((element) => {
        const scrollPosition = window.scrollY
        const fadeOutPoint = 58 // Number of pixels to scroll down before starting to fade out
        const newOpacity = Math.max(
          1 - (scrollPosition - fadeOutPoint) / fadeOutPoint,
          0
        )
        element.style.opacity = newOpacity.toString()
      })
      move1Elements.forEach((element) => {
        const scrollPosition = window.scrollY
        const moveDistance = 22 // Number of pixels to move to the left for move1
        const fadeOutPoint = 180 // Number of pixels to scroll down before starting to fade out

        if (scrollPosition > fadeOutPoint) {
          element.style.transform = `translateX(-${moveDistance}px)`
        } else {
          element.style.transform = 'translateX(0)'
        }
      })
      move2Elements.forEach((element) => {
        const scrollPosition = window.scrollY
        const moveDistance = 54 // Number of pixels to move to the left for move2
        const fadeOutPoint = 180 // Number of pixels to scroll down before starting to fade out

        if (scrollPosition > fadeOutPoint) {
          element.style.transform = `translateX(-${moveDistance}px)`
        } else {
          element.style.transform = 'translateX(0)'
        }
      })
      move3Elements.forEach((element) => {
        const scrollPosition = window.scrollY
        const fadeOutPoint = 180 // Number of pixels to scroll down before starting to fade out
        if (scrollPosition > fadeOutPoint) {
          element.classList.add('fixed', 'pr-6', 'right-0')
          element.classList.remove('sticky')
        } else {
          element.classList.remove('fixed', 'pr-6', 'right-0')
          element.classList.add('sticky')
        }
      })
      move4Elements.forEach((element) => {
        const scrollPosition = window.scrollY
        const fadeOutPoint = 100 // Number of pixels to scroll down before starting to fade out
        if (scrollPosition > fadeOutPoint) {
          element.classList.add('fadeOutContact')
          element.classList.remove('fadeInContact')
        } else {
          element.classList.remove('fadeOutContact')
          element.classList.add('fadeInContact')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // toggle about
  const [isToggled, setIsToggled] = useState(false)

  const toggleClass = () => {
    setIsToggled((prevState) => !prevState)
    setIsExpanded((prevState) => !prevState)
  }

  // get hight of div with more information on mobile
  const divRef = useRef(null)
  const [divHeight, setDivHeight] = useState(0)

  useEffect(() => {
    if (divRef.current) {
      const observer = new ResizeObserver((entries) => {
        // The entries array contains information about observed elements
        for (const entry of entries) {
          if (entry.target === divRef.current) {
            setDivHeight(entry.contentRect.height)
          }
        }
      })

      observer.observe(divRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  // is expanded, change from read more to read less
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div className="relative grid grid-cols-12 gap-y-4 p-4 md:gap-x-4 xl:gap-y-2">
        <h1 className="fixed z-[100] col-span-3 col-start-1 xl:col-span-2">
          {home.title}
        </h1>

        <h1 className="top-4 col-span-12 col-start-1 pt-7 md:sticky md:top-4 md:col-span-3 md:col-start-4 md:pt-0 xl:col-start-3">
          {home.body}
          <span onClick={toggleClass} className="border-b-[1px] md:hidden">
            {isExpanded ? 'Read less' : 'Read more'}
          </span>
        </h1>

        <h1 className="col-span-12 col-start-1 hidden pb-4 md:col-span-4 md:col-start-8 md:block xl:col-span-3 xl:col-start-10">
          {home.info}
        </h1>

        {/* hehe denne her er juks og må ha denne! */}
        <div className="pointer-events-none invisible top-4 z-50 col-span-5 col-start-1 flex-col gap-2 text-black md:col-span-8 md:col-start-1 md:flex md:hidden md:flex-row">
          <h1 className="">Contact</h1>
          {/* <ul>
            {home.contact.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <li>{item.contact}</li>
              </Link>
            ))}
          </ul> */}
        </div>
        {/* Avslutter her  */}

        {/* Contact mobil */}
        <div className="fixedContact sticky top-4 z-50 col-span-6 col-start-7 flex flex-col gap-2 md:col-span-3 md:col-start-10 md:hidden md:flex-row md:gap-6 xl:col-start-10">
          <h1
            className="h-fit cursor-pointer hover:underline	"
            onClick={handleScrollToTop}
          >
            Contact
          </h1>
          <ul className="hideThis">
            {home.contact.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <li>{item.contact}</li>
              </Link>
            ))}
          </ul>
        </div>
        {/* contact */}

        {/* hehe denne her er juks og må ha denne! */}
        <div className="pointer-events-none invisible top-4 z-50 col-span-5 col-start-1 flex-col gap-2 text-black md:col-span-8 md:col-start-1 md:flex md:flex-row">
          <h1 className="">Contact</h1>
          <ul className="hidden md:flex">
            {home.contact.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <li>{item.contact}</li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Avslutter her  */}

        {/* Contact  desktop */}
        <div className="fixedContact sticky top-4 z-50 col-span-6 col-start-7 flex hidden flex-col gap-2 md:col-span-3 md:col-start-10 md:flex md:flex-row md:gap-6 xl:col-start-10">
          <h1
            className="h-fit cursor-pointer hover:underline	"
            onClick={handleScrollToTop}
          >
            Contact
          </h1>
          <ul className="hideThis">
            {home.contact.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <li>{item.contact}</li>
              </Link>
            ))}
          </ul>
        </div>
        {/* contact */}

        {/* hide on desktop */}
        <div
          className={
            isToggled
              ? `move--from--top opacity-1 col-span-12 col-start-1 grid h-[300px] transition-all duration-300 ease-in`
              : 'move--from--top col-span-12 col-start-1 grid h-[1px] opacity-0 transition-all duration-300 ease-in'
          }
        >
          <h1 className="col-span-12 col-start-1 pb-4 md:col-span-4 md:col-start-8 md:hidden xl:col-span-3 xl:col-start-10">
            {home.info}
          </h1>
          <h1 className="top-4 col-span-6 col-start-1 md:col-span-2 md:col-start-8 md:block md:hidden xl:col-start-6">
            Selected clients
          </h1>
          <ul className="top-4 col-span-6 col-start-7  md:col-span-3 md:col-start-8 md:block md:hidden xl:col-span-2">
            {home.clients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Selected clients hidden on phone */}
        <h1 className="top-4 col-span-6 col-start-1 hidden md:col-span-2 md:col-start-8 md:block xl:col-start-6">
          Selected clients
        </h1>
        <ul className="top-4 col-span-12 col-start-7 hidden md:col-span-3 md:col-start-8 md:block xl:col-span-2">
          {home.clients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* SWIPER!!! */}

      <div className="relative col-span-12 grid pb-60">
        {images.map((item, index) => (
          <CustomSlider
            item={item}
            isMobile={isMobile}
            key={'video-' + index}
          />
        ))}
      </div>
      {/* Hide this to calculate height:-) */}
      <div
        ref={divRef}
        className={
          'move--from--top invisible col-span-12 col-start-1 grid duration-300 ease-in'
        }
      >
        <h1 className="col-span-12 col-start-1 pb-4 md:col-span-4 md:col-start-8 md:hidden xl:col-span-3 xl:col-start-10">
          {home.info}
          <p>{divHeight}</p>
        </h1>
        <h1 className="top-4 col-span-6 col-start-1 md:col-span-2 md:col-start-8 md:block md:hidden xl:col-start-6">
          Selected clients
        </h1>
        <ul className="top-4 col-span-6 col-start-7  md:col-span-3 md:col-start-8 md:block md:hidden xl:col-span-2">
          {home.clients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Hide this to calculate height:-) */}
    </>
  )
}

export async function getStaticProps() {
  const home = await client.fetch(groq`
    *[_type == "globals"][0]
    {
      ...,
      "images": *[_type=='images']{ images },
        asset->
      }
  `)

  const images = await client.fetch(groq`
    *[_type == "images"] | order(orderRank)
    {
      ...,
      images[]{
        ...,
        images{
          ...,
          title,
          description,
          alt,
          asset->
          },
          video{
          ...,
        },
        thumbnail{
            asset->
          }
        },
        seoimage[]{
          ...,
          asset->
        },
     }
  `)

  return {
    props: {
      home: home,
      images: images,
    },
  }
}
