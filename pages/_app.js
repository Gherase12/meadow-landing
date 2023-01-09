import { useRouter } from "next/router";
import "../styles/globals.css";
import Image  from 'next/image';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPagePath = router.pathname;
  if (currentPagePath != "/") {
    return <Component {...pageProps} />;
  } else {
    return <div  className="w-full h-screen   ">
       <Image src="/coming-soon.webp" fill className="object-contain" alt="coming soon" />
    </div>;
  }
}
