import "../public/style/global.css";
import Navbar from "../components/Navbar"
const MyApp = ({ Component, pageProps }) => {
  return (
    <div class="bg-[url('https://cdnb.artstation.com/p/assets/images/images/019/146/383/large/cartoonik-animation-cs-kitchen-bg.jpg?1562206094')] min-w-screen min-h-screen overflow-hidden bg-fixed bg-center bg-clip-content">
      <Navbar/>
      <Component {...pageProps}/>
    </div>
  );
};
export default MyApp;
