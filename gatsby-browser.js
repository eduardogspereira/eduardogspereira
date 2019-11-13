require('./src/assets/global.css')

exports.onRouteUpdate = () => {
    setTimeout(() => window.dataLayer.push({'event': 'optimize.activate'}), 1500)
}

