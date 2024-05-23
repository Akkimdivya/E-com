import FilterContainer from '../FilterContainer';
import CardContainer from '../cardcontainer';

import './index.css';

const Home = () => {

  return (
    <div className=''>
      <div className='banner-container'>
        <img src='https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg' alt='home-banner' className='banner' />
      </div>

      <div className='titile-bar'>
        <h1 className='title-bar-header'>Shop Products</h1>

        <div className='count'>
          <span className='c'>Products</span>
        </div>

      </div>

      <FilterContainer />
      <CardContainer className="cards-section" />
    </div>
  )
}

export default Home;
