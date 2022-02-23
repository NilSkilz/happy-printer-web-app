import { Image } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container'>

            <div className='row px-5' style={{ width: '100%' }}>
                <div className='col-md-12 mt-3' style={{ textAlign: 'center' }}>
                    <h3>What do you need?</h3>
                    <p>
                        You'll need two things to get started. Firstly you'll need a supported thermal printer (see list of
                        supported printers). Secondly you'll need a raspberry pi, or similar, running our custom version of
                        Linux Debian. The image for your SD card can be downloaded here: Or alternatively you can buy all you
                        need (including pre-flashed SD cards) at our online shop.
                    </p>
                    <h4 className='mt-5' style={{ textAlign: 'left' }}>
                        We currently support the following printers:
                    </h4>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Paperang P1</li>
                        <li>Paperang P2</li>
                        <li>Paperang P2S</li>
                    </ul>

                    <p></p>
                </div>
            </div>
            <div className='row px-5' style={{ width: '100%' }}>
                <div className='col-md-12 mt-3' style={{ textAlign: 'center' }}>
                    <h3>What's it cost?</h3>
                    <p>
                        You can download our bridge image for free, this will allow you to connect to your printer and print
                        messages and use the instant messaging feature.
                    </p>
                    <p>
                        If you wish to subscribe to our publications we ask that you support this project via Patreon. This
                        allows us to pay for the upkeep of our servers and develop new and exciting publications. Registering
                        for Patreon costs $4 per month.
                    </p>
                    <p>
                        Explore our publications{' '}
                        <a style={{ color: 'blue' }} href='/publications'>
                            here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home