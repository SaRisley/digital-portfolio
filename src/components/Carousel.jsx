import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div key="item-1">
        <img src="src/images/infinityT.png" alt="infinity-trails-project" width="700px" height="500px" onDragStart={handleDragStart} role="presentation" />
        <p>
        <strong>INFINTY TRAILS</strong><br/>
        Final project at Makers Academy. Using Open AI to create a ‘Choose your own adventure’ game with different playable genres and characters each with their own specific requests to Open AI API.
        </p>
        <p><strong>Tech Stack:</strong> Javascript, React, Node.js, Express.<br/>
        Open AI API.<br/>
        Deployed via Vercel.<br/>
        Material UI and CSS styling.</p>
        <a href="https://github.com/claudiaacchurch/choose-your-adventure">GitHub code</a><br/>
        <a href="https://frontend-phi-lyart.vercel.app/">Deployed via Vercel</a>
    </div>,
    <div key="item-2">
        <img src="src/images/rockPaperScissors.png" alt="rock-paper-scissors-project" width="700px" height="500px" onDragStart={handleDragStart} role="presentation" />
        <p>
        <strong>ROCK, PAPER, SCISSORS</strong><br/>
        A simple Rock, Paper, Scissors react web app which was used to experiment with React and sharing state/props amongst components. 
        This was also a useful project for experimenting with creating a more engaging UI.
        Finally, this gave me more exposure to using AWS.
        </p>
        <p><strong>Tech Stack:</strong> Javascript, React, Vite, Vitest/React Testing Library, ESLint.<br/>
            CSS styling.<br/>
            Deployed on AWS-Amplify.</p>
        <a href="https://github.com/SaRisley/rock-paper-scissors">GitHub code</a><br/>
        <a href="https://main.d1vu96kenrpefg.amplifyapp.com/">Deployed via AWS Amplify</a>
    </div>,
        <div key="item-3">
        <img src="src/images/aceBook.png" alt="aceBook-project" width="700px" height="500px" onDragStart={handleDragStart} role="presentation" />
        <p>
        <strong>AceBook</strong><br/>
        A Facebook replica done as part of a two week project at Makers Academy.
        Users were able to sign up, sign in, create, edit, like and delete posts.
        </p>
        <p><strong>Tech Stack:</strong> MERN - MongoDB, Express, React, Node.js<br/>
            CSS styling.<br/></p>
        <a href="https://github.com/FahimIslam2410/acebook-mern-water">GitHub code</a>
    </div>
];

const Carousel = () => {
return (
    <div className='carousel'>
    <h2 className='projects-heading'>My Projects</h2>
    <p className='projects-p'>Please scroll to explore some of my personal projects in addition to some completed as part of my bootcamp with Makers Academy.</p>
    <AliceCarousel mouseTracking items={items} />
    </div>
);
}

export default Carousel;