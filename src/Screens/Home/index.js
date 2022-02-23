import ReactPageScroller from 'react-page-scroller';
import Hero from './Hero'
import WhatIsIt from './WhatIsIt'
import WhatDoYouNeed from './WhatDoYouNeed'

function Home() {
    return (
        <div className="App">
            <ReactPageScroller>
                <Hero />
                <WhatIsIt />
                <WhatDoYouNeed />
            </ReactPageScroller >
        </div >
    );
}

export default Home;
