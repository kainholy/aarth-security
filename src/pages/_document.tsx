import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://use.typekit.net/nii5fcl.js" async></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var config = {
                kitId: 'nii5fcl',
                scriptTimeout: 3000,
                async: true
              };
              var h=document.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=document.createElement("script"),f=false,s=document.getElementsByTagName("script")[0],a;
              h.className+=" wf-loading";
              tk.src='https://use.typekit.net/'+config.kitId+'.js';
              tk.async=true;
              tk.onload=tk.onreadystatechange=function(){
                var a=this.readyState;
                if(f||a&&a!="complete"&&a!="loaded")return;
                f=true;
                clearTimeout(t);
                try{Typekit.load(config)}catch(e){}
              };
              s.parentNode.insertBefore(tk,s)
            })();
          `
        }} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:image" content="/ogp.png"/>
        <meta property="og:image:secure_url" content="/ogp.png"/>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="/favicon.png"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
