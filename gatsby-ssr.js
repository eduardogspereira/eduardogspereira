// import React from "react"

// export function onRenderBody (
//   { setHeadComponents }
// ) {
//   // Lighthouse recommends pre-connecting to google analytics
//   setHeadComponents([
//     <link
//       rel="preconnect dns-prefetch"
//       key="preconnect-google-analytics"
//       href="https://www.google-analytics.com"
//     />,
//     <script
//       dangerouslySetInnerHTML={{
//         __html: 'window.dataLayer = window.dataLayer || [];'
//       }}
//     />,

//     <style dangerouslySetInnerHTML={{
//       __html: '.async-hide { opacity: 0 !important}'
//     }} />,

//     <script
//       dangerouslySetInnerHTML={{
//         __html: `
//         (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
//         h.end=i=function(){console.log('oi');s.className=s.className.replace(RegExp(' ?'+y),'')};
//         (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
//         })(window,document.documentElement,'async-hide','dataLayer',4000,
//         {'GTM-MTW5TQR':true});`
//       }}
//     />,

//     <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149773001-1"></script>,
//     <script
//       dangerouslySetInnerHTML={{
//         __html: `
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());

//         gtag('config', 'UA-149773001-1', { 'optimize_id': 'GTM-MTW5TQR', 'send_page_view': false });`
//       }}
//     />,
//   ])
// }