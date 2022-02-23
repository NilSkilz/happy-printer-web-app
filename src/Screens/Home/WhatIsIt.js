import { Image } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container'>
            <div className='row' style={{ marginTop: '30px' }}>
                <div className='col-md-6'>
                    <Image
                        style={{ height: '400px', width: '100%', objectFit: 'cover', marginBottom: '40px' }}
                        src='/paperang.jpg'
                        fluid
                    />
                </div>
                <div className='col-md-6 align-self-center'>
                    <div className='col-md-12 hero '>
                        <h3>What is it?</h3>
                        <p>
                            In 2012, a company called BERG launched their Little Printer. It was a small, network attached thermal printer that
                            would print a snippet of curated information.
                        </p><p>
                            A few years later the company disapeared and it's servers were taken down, leaving little printers across the land stranded and un-usable. The
                            Happy Printer project seeks to recreate the fun and excitment of printing your own newsfeed, on
                            demand.
                        </p>
                        <p>
                            The objective is to use readily available hardware, and simple setup steps to guide people into building their own printer.
                            We've created an online service to gather together your favourite
                            news, puzzles and gossip from friends. Subscribe to the services you want, and each day (or whenever
                            you wish) we'll produce your own, customised mini-newspaper.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home