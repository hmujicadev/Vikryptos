import { SocialNetwork } from './SocialNetworks.styles'
// Import SVG
import Discord from '../../../public/images/discord.svg'
import Telegram from '../../../public/images/telegram.svg'
import Youtube from '../../../public/images/youtube.svg'
import Instagram from '../../../public/images/instagram.svg'
import Facebook from '../../../public/images/facebook.svg'
import Twitter from '../../../public/images/twitter.svg'

const SocialNetworks = () => {
  return (
    <>
      <SocialNetwork>
        <Discord />
      </SocialNetwork>
      <SocialNetwork>
        <Telegram />
      </SocialNetwork>
      <SocialNetwork>
        <Youtube />
      </SocialNetwork>
      <SocialNetwork>
        <Twitter />
      </SocialNetwork>
      <SocialNetwork>
        <Facebook />
      </SocialNetwork>
      <SocialNetwork>
        <Instagram />
      </SocialNetwork>
    </>
  )
}

export default SocialNetworks
