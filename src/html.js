import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
      {/* <style dangerouslySetInnerHTML={{
      __html: '.async-hide { opacity: 0 !important}'
    }} />
    <script
      key={`gatsby-plugin-google-gtag`}
      async
      src={`https://www.googletagmanager.com/gtag/js?id=UA-149773001-1`}
    />

        <script 
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];

        (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){console.log('oi');s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'GTM-MTW5TQR':true});

        function gtag(){window.dataLayer && window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149773001-1', {"optimize_id":"GTM-MTW5TQR","send_page_view":false});
        `}} /> */}

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
