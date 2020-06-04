import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import ControlledCarousel from "../components/homeSlider";
import { motion,AnimatePresence  } from "framer-motion"


export default () => (
  <div>
    <Head title="YouthCreators" />
    <Nav />
      <div className={"Welcome"}>
          <motion.div
              animate={{scale: 1}}
              transition={{ duration: 2 }}
              initial={{scale: 0.4}}
          >  WELCOME
          </motion.div>
      </div>
      <ControlledCarousel/>
    <style jsx>{`
        .Welcome{
              color:#fff;
              padding 20px;
              font-size:180px;
              background-color:#5CBDD0;
              font-family: 'Raisonne DemiBold';
              text-shadow:2px 2px 2px rgba(0,0,0,0.3);
              text-align:center;      
              margin-top:-20px;   
        }
        
        @media (max-width: 768px) {
        
            .Welcome{
                font-size: 60px;
            }
        }
      
    `}</style>
  </div>
);
