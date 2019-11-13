require('./src/assets/global.css')

exports.onRouteUpdate = () => {
    // const pagePath = location
    // ? location.pathname + location.search + location.hash
    // : undefined
    // console.log(pagePath)
    //  window.gtag(`event`, `page_view`, { page_path: pagePath })
    console.log('hello darkness my old friend')
    setTimeout(() => window.dataLayer.push({'event': 'optimize.activate'}), 1500)
}

