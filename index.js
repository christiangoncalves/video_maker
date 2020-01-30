const robots = {
    input: require('./Robots/input'),
    state: require('./Robots/state'),
    text: require('./Robots/text'),
    image: require('./Robots/images'),
    // video: require('./Robots/video'),
}

async function start() {
    
    // robots.input();
    // await robots.text();
    await robots.image();

    // const content = robots.state.load();
    // console.dir(content, {depth: null});
}

start();