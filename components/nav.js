import Link from 'next/link';
import styled from 'styled-components'
import { motion,AnimatePresence  } from "framer-motion"


const links = [
  { href: '//github.com/create-next-app/create-next-app', label: 'Github' },
    { href: '/socialList', label: 'Social' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

// Animation  Styling //////////////////////////////////////////////////////////
const easing = [.9, -.09, .01, .99]
const fadeInRight = {
    initial: {
        x:-200,
        opacity:0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
            ease: easing
        }
    }
}
// End of Animation  Styling //////////////////////////////////////////////////////////



const Nav = () => (
    <motion.div animate={'animate'} initial={'initial'}>
            <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>YOUNG CREATOR</a>
                </Link>
              </li>
                <motion.div  initial={{x:-200 , opacity:0 }} transition={{duration:4 ,ease:easing}}  animate={{x:0 , opacity:1 }}>
                      <ul>
                        {links.map(
                          ({ key, href, label }) => (
                              <motion.div   key={key} initial={{x:-200 , opacity:0 }} transition={{duration:3 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                                    <li>
                                      <Link href={href}>
                                        <a>{label}</a>
                                      </Link>
                                    </li>
                              </motion.div>
                          )
                        )}
                      </ul>
                </motion.div>
            </ul>

            <style jsx>{`
              :global(body) {
                margin: 0;
                font-family: Raisonne DemiBold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
              }
              nav {
                text-align: center;
                 background-color:#5CBDD0;
              }
              ul {
                display: flex;
                justify-content: space-between;
              }
              nav > ul {
                padding: 4px 16px;
                 background-color:#5CBDD0;
              }
              li {
                display: flex;
                padding: 6px 8px;
              }
              a {
                color: #fff;
                text-decoration: none;
                font-size: 13px;
              }
            `}</style>
          </nav>
    </motion.div>
);

export default Nav;
