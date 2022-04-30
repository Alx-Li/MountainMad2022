import "../public/style/global.css";
import Navbar from "../components/Navbar";
import { AppWrapper } from "../state";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div class="bg-[url('https://cdnb.artstation.com/p/assets/images/images/019/146/383/large/cartoonik-animation-cs-kitchen-bg.jpg?1562206094')] min-w-screen min-h-screen bg-fixed bg-center bg-clip-content">
      <Navbar className="sticky top-0 z-[200]" />
      <AppWrapper>
        <Component className="z-0" {...pageProps} />
      </AppWrapper>
    </div>
  );
};
export default MyApp;
