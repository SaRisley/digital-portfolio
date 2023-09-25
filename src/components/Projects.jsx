import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

const Projects = () => {
    return (
        <div>
            <h2 className='projectstitle'>My Projects</h2>
        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
        <Box
            component="ul"
            sx={{ display: 'flex', alignContent: 'center', gap: 2, flexWrap: 'nowrap', p: 0, m: 0 }}
        >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
                <img
                    src="src/images/infinityT.png"
                    loading="lazy"
                    alt=""
                />
            </CardCover>
        <CardContent>
            <Link
                overlay
                underline="none"
                href="https://github.com/claudiaacchurch/choose-your-adventure"
                sx={{ color: '#fff' }}
            >
            </Link>
        </CardContent>
        </Card>
        <Box
            component="ul"
            sx={{ display: 'flex', alignContent: 'center', gap: 2, flexWrap: 'nowrap', p: 1, m: 1 }}
        >
        <p><strong className='projectheader'>INFINTY TRAILS</strong><br></br> Final project at Makers Academy. Using Open AI to create a ‘Choose your own adventure’ game with different playable genres and characters each with their own specific requests to Open AI API.</p>
        <p><strong>Tech Stack:</strong> Javascript, React, Node.js, Express. 
            Open AI API.
            Deployed via Vercel. 
            Material UI and CSS styling.</p>
        </Box>
        </Box>
        <Box
            component="ul"
            sx={{ display: 'flex', alignContent: 'center', gap: 2, flexWrap: 'nowrap', p: 0, m: 0 }}
        >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
                <img
                    src="src/images/rockPaperScissors.png"
                    loading="lazy"
                    alt=""
                />
            </CardCover>
        <CardContent>
            <Link
                overlay
                underline="none"
                href="https://github.com/SaRisley/rock-paper-scissors"
                sx={{ color: '#fff' }}
            >
            </Link>
        </CardContent>
        </Card>
        <Box
            component="ul"
            sx={{ display: 'flex', alignContent: 'center', gap: 2, flexWrap: 'nowrap', p: 1, m: 1 }}
        >
        <p><strong className='projectheader'>ROCK, PAPER, SCISSORS</strong><br></br>A simple Rock, Paper, Scissors react web app which was used to experiment with React and sharing state/props amongst components. 
            This was also a useful project for experimenting with creating a more engaging UI.
            Finally, this gave me more exposure to using AWS.</p>
        <p><strong>Tech Stack:</strong> Javascript, React, Vite, Vitest/React Testing Library, ESLint.
            CSS styling.
            Deployed on AWS-Amplify.</p>
        </Box>
        </Box>
        <Box
            component="ul"
            sx={{ display: 'flex', alignContent: 'center', gap: 2, flexWrap: 'nowrap', p: 0, m: 0 }}
        >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
                <img
                    src="src/images/aceBook.png"
                    loading="lazy"
                    alt=""
                />
            </CardCover>
        <CardContent>
            <Link
                overlay
                underline="none"
                href="https://github.com/FahimIslam2410/acebook-mern-water"
                sx={{ color: '#fff' }}
            >
            </Link>
        </CardContent>
        </Card>
        <Box
            component="ul"
            sx={{ display: 'flex', alignContent: 'center', gap: 2, flexWrap: 'nowrap', p: 1, m: 1 }}
        >
        <p><strong className='projectheader'>ACEBOOK</strong><br></br>A Facebook replica done as part of a two week project at Makers Academy.
            Users were able to sign up, sign in, create, edit, like and delete posts.</p>
        <p><strong>Tech Stack:</strong> MERN - MongoDB, Express, React, Node.js.
            CSS styling.</p>
        </Box>
        </Box>
        </Box>
        <div className='github-link'>
        <a href='https://github.com/SaRisley'><img src='src/images/github-mark.png' className='github-img'></img></a>
        </div>
        </div>
    );
}

export default Projects;