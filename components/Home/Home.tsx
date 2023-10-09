import HomeVideoSection from './HomeVideoSection/HomeVideoSection'
import { HomeWrapper, HomeContentWrapper } from './Home.styles'

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContentWrapper>
        <HomeVideoSection />
      </HomeContentWrapper>
    </HomeWrapper>
  )
}

export default Home
