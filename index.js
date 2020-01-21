const robots = {
    input: require('./Robots/input'),
    text: require('./Robots/text'),
    state: require('./Robots/state'),
    // image: require('./Robots/images'),
    // video: require('./Robots/video'),
}

async function start() {
    
    robots.input();
    await robots.text();

    const content = robots.state.load();
    console.dir(content, {depth: null});
}

start();