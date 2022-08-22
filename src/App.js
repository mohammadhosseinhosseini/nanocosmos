import { useState, useEffect } from 'react'

import './App.css'

function App() {
    const [config, setConfig] = useState({
        source: {
            defaults: {
                service: 'bintu',
            },
            entries: [
                {
                    h5live: {
                        rtmp: {
                            streamname: '9yj0J-PKZRQ',
                        },
                    },
                },
            ],
        },
        playback: {
            autoplay: true,
            automute: true,
            muted: false,
        },
        style: {
            // width: '100%',
            // height: '56%',
            // aspectratio: '16/9',
            controls: true,
            backgroundColor: 'gray',
            symbolColor: 'red',
            controlBarColor: 'blue',
            buttonCursor: 'pointer',
            // poster: 'https://www.nanocosmos.de/images/BroadcastH5Live-Schema4.png',
        },
        events: {
            // onReady: () => {
            //     alert('ready!')
            // },
            // onPlay: () => {
            //     alert('onPlay')
            // },
        },
    })

    function setupNanoplayer(config) {
        var nanoPlayer = new window.NanoPlayer('playerDiv')

        nanoPlayer.setup(config).then(
            function (config) {
                console.log('setup success')
                console.log('config: ' + JSON.stringify(config, undefined, 4))
            },
            function (error) {
                alert(error.message)
            }
        )
    }

    useEffect(() => {
        setupNanoplayer(config)
    }, [])

    return (
        <div className='App'>
            <h1>Hossein's Stream</h1>
            <div id='playerDiv' />
        </div>
    )
}

export default App
