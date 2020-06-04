
import { motion,AnimatePresence  } from "framer-motion"

const posts = [
    {
        name: 'FirstPost',
        title: 'How to create your first Post',
        content: [
            `Step 1 click post`
        ]
    },
    {
        name: 'SecondPost',
        title: 'How to create your Second Post',
        content: [
            `Step 2 click post`
        ]
    },
];



const SocialList = () => (
    <div>
        <h2> Posts </h2>
    </div>
);
export default SocialList;

