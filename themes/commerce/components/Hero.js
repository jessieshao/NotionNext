// import Image from 'next/image'
import CONFIG from '../config'
import LazyImage from '@/components/LazyImage'

/**
 * 顶部全屏大图
 * @returns
 */
const Hero = props => {
  const { siteInfo } = props
  // 正则表达式，用于匹配 URL 中的 width 参数
  const widthRegex = /width=\d+/
  // 正则表达式，用于匹配 URL 中的 w 参数
  const wRegex = /w=\d+/

  siteInfo?.pageCover
    .replace(widthRegex, `width=2000`)
    .replace(wRegex, `w=2000`)
  return (
        <header id="header" className="w-full h-auto aspect-[5/2] relative bg-black" >

            <div className="text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full "></div>

            <LazyImage id='header-cover' src={siteInfo?.pageCover}
                className={`header-cover w-full h-auto aspect-[5/2] object-cover object-center ${CONFIG.HOME_NAV_BACKGROUND_IMG_FIXED ? 'fixed' : ''}`} />

        </header>
  )
}

export default Hero
