import Footer from "@/components/layout/Footer";
import { Html, Head, Main, NextScript } from "next/document";
import { motion } from 'framer-motion'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Adobe Fonts (Typekit) を読み込む */}
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
