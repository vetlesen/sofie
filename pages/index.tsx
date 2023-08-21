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

  const [isHoveredPrev, setIsHoveredPrev] = useState(false)
  const [positionPrev, setPositionPrev] = useState({ x: 0, y: 0 })

  const [isHoveredNext, setIsHoveredNext] = useState(false)
  const [positionNext, setPositionNext] = useState({ x: 0, y: 0 })

  const handleMouseEnterPrev = () => {
    setIsHoveredPrev(true)
  }
  const handleMouseLeavePrev = () => {
    setIsHoveredPrev(false)
  }
  const handleMouseMovePrev = (e) => {
    setPositionPrev({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnterNext = () => {
    setIsHoveredNext(true)
  }
  const handleMouseLeaveNext = () => {
    setIsHoveredNext(false)
  }
  const handleMouseMoveNext = (e) => {
    setPositionNext({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="pt-16 md:pt-32">
      <div className="relative grid w-full grid-cols-12 gap-x-4 p-4">
        <h1 className="col-span-12 col-start-1 gap-x-4 indent-16 md:col-span-12 md:indent-32">
          {item.title}
        </h1>
        <h1 className="col-span-12 col-span-12 col-start-1 gap-x-4 pb-4 pt-10">
          {item.year}
        </h1>
        <h1 className="col-span-12 col-start-1 gap-x-4 indent-16 md:col-span-6 md:indent-32">
          {item.body}
        </h1>
        <div className="col-span-12 col-start-1 gap-x-4 pt-4 md:col-span-4 md:col-start-9 md:pt-0">
          <ul>
            {item.infolist?.map((item, index) => (
              <li key={index} className="flex">
                <div className="w-[110px]">{item.info}</div>
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative col-span-12 mt-6">
        {!isMobile && (
          <div
            onMouseEnter={handleMouseEnterPrev}
            onMouseLeave={handleMouseLeavePrev}
            onMouseMove={handleMouseMovePrev}
          >
            <div className="slidePrev-btn absolute left-0 z-[100] h-full w-1/2"></div>

            {isHoveredPrev && (
              <div
                className="follower"
                style={{
                  left: positionPrev.x + 'px',
                  top: positionPrev.y + 'px',
                }}
              >
                Prev
              </div>
            )}
          </div>
        )}
        {!isMobile && (
          <div
            onMouseEnter={handleMouseEnterNext}
            onMouseLeave={handleMouseLeaveNext}
            onMouseMove={handleMouseMoveNext}
          >
            <div className="slideNext-btn absolute right-0 z-[100] h-full w-1/2"></div>

            {isHoveredNext && (
              <div
                className="follower"
                style={{
                  left: positionNext.x + 'px',
                  top: positionNext.y + 'px',
                }}
              >
                Next
              </div>
            )}
          </div>
        )}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Keyboard, Zoom]}
          spaceBetween={0}
          slidesPerView={isMobile ? 1 : 2}
          shortSwipes={true}
          zoom={true}
          centeredSlides={true}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          keyboard={{
            enabled: true,
          }}
          navigation={
            !isMobile && {
              prevEl: '.slidePrev-btn',
              nextEl: '.slideNext-btn',
            }
          }
        >
          {item.images?.map((content, index) => {
            return (
              <SwiperSlide key={index}>
                {content.images?._type === 'image' ? (
                  <figure className="group h-[80vh] cursor-ew-resize cursor-pointer">
                    <Image
                      src={content.images.asset.url}
                      placeholder="blur"
                      blurDataURL={content?.images?.asset?.metadata?.lqip}
                      alt=""
                      loading="eager"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      unoptimized={true}
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                      }}
                    />
                    <figcaption>
                      <h1 className="p-2">
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
  )
}

const InactiveAnimation = () => {
  const [isVisible, setIsVisible] = useState([])
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let timeout
    let interval

    const inactivityDuration = 30000
    const showInterval = 500
    const amountOfText = 1000

    const handleInactive = () => {
      // If the website has been inactive for 1 second,
      // start showing 'a's one by one at a 50ms interval.
      timeout = setTimeout(() => {
        setIsActive(false)
        interval = setInterval(() => {
          setIsVisible((prevVisibility) => {
            const newVisibility = [...prevVisibility]
            const randomIndex = Math.floor(Math.random() * newVisibility.length)
            newVisibility[randomIndex] = true
            return newVisibility
          })
        }, showInterval)
      }, inactivityDuration)
    }

    const handleMouseOrKeyboardActivity = () => {
      // When mouse or keyboard activity is detected,
      // reset the visibility to hidden and clear the timeout and interval.
      setIsVisible(Array(amountOfText).fill(false))
      clearTimeout(timeout)
      clearInterval(interval)
      // Start the process over again
      handleInactive()
    }

    const handleWheel = (event) => {
      // Detect scroll activity (e.g., two-finger scroll on trackpads)
      // and reset the inactivity timer.
      if (event.deltaY !== 0) {
        clearTimeout(timeout)
        clearInterval(interval)
        handleInactive()
      }
    }

    // Add event listeners to track user activity
    document.addEventListener('mousemove', handleMouseOrKeyboardActivity)
    document.addEventListener('keydown', handleMouseOrKeyboardActivity)
    document.addEventListener('wheel', handleWheel)

    // Initial setup
    setIsVisible(Array(amountOfText).fill(false))
    handleInactive()

    // Clean up event listeners and timeouts/intervals when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseOrKeyboardActivity)
      document.removeEventListener('keydown', handleMouseOrKeyboardActivity)
      document.removeEventListener('wheel', handleWheel)
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="col-span-12 flex w-full flex-wrap">
      {isVisible.map((isVisible, index) => (
        <p
          key={index}
          style={{
            visibility: isActive ? 'hidden' : isVisible ? 'visible' : 'hidden',
          }}
        >
          ಠಿ ˑ̫ ಠಿ
        </p>
      ))}
    </div>
  )
}

export default function IndexPage({ home, images }) {
  // video player

  // logo animation. First it fades out when scrolling down, then the P and P moves over to the left from right.

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

  const [hovered, setHovered] = useState(false)
  console.log(home)
  return (
    <>
      {/* inactive section */}
      <div className="pointer-events-none fixed z-[100] grid h-full grid-cols-12 gap-y-4 p-4 md:gap-x-4 xl:gap-y-2">
        <InactiveAnimation />
      </div>
      {/* top section */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-4 p-4">
        <h1 className="fixed z-[100] col-span-12 col-start-1 md:col-span-3 xl:col-span-2">
          <div
            className={`word-container ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? 'ಠ ˑ̫ ಠಿ' : 'ಠಿ ˑ̫ಠಿ'}
          </div>
        </h1>
        <div className="relative col-span-6 col-start-6 h-52 md:col-span-3 md:col-start-10">
          <Image
            src={home?.seoimage?.asset?.url}
            alt=""
            sizes="98vw"
            loading="eager"
            fill
            style={{
              objectFit: 'contain',
            }}
          ></Image>
        </div>
        <h1 className="col-span-12 col-start-1 md:col-span-3">{home.body}</h1>
        <div className="col-span-12 col-start-1 md:col-span-4 md:col-start-4">
          <ul>
            {home.contact.map((item, index) => (
              <li className="flex" key={index}>
                <div className="w-[70px]">{item.contact}</div>
                <Link href={item.href} target="_blank">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="col-span-12 col-start-1 md:col-span-4 md:col-start-9">
          {home.info}
        </h1>
      </div>

      {/* swiper */}
      <div className="relative">
        {images.map((item, index) => (
          <CustomSlider
            item={item}
            isMobile={isMobile}
            key={'video-' + index}
          />
        ))}
      </div>

      {/* footer */}
      <div className="relative mt-32 grid grid-cols-12 flex-col gap-y-4 p-4">
        <div className="col-span-5 col-start-1 flex flex-col">
          <h1 onClick={handleScrollToTop} className="hover:underline">
            Back to top
          </h1>
          <h1 className="pt-4 opacity-50">Typeface Helvetica</h1>
          <h1 className="opacity-50">Design & develpment Jonas Vetlesen</h1>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const home = await client.fetch(groq`
    *[_type == "globals"][0]
    {
      ...,
      seoimage{
          ...,
          asset->
        },
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
     }
  `)

  return {
    props: {
      home: home,
      images: images,
    },
  }
}
