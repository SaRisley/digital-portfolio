import { useState, useEffect } from "react";
import Box from '@mui/joy/Box';
import BeatLoader from "react-spinners/BeatLoader";

const Joke = () => {
    const [setUp, setSetUp] = useState("");
    const [punchline, setPunchline] = useState("");
    const [showPunchline, setShowPunchline] = useState(false);
    const [loading, setLoading] = useState(false);


    const getNewJoke = () => {
        setSetUp("")
        setPunchline("")
        const URL = "https://official-joke-api.appspot.com/random_joke";
        fetch(URL)
            .then((response) => response.json())
            .then((jokejson) => {
            setSetUp(jokejson.setup);
            setPunchline(jokejson.punchline);
            setShowPunchline(false);
        });
    };

    useEffect(() => {
        getNewJoke();
    }, []);

    const getPunchline = () => {
        setShowPunchline(true)
    }

    useEffect(() => {
        if (setUp === "") {
        setLoading(true);
        } else {
        setLoading(false);
        }
    }, [setUp]);
    

    return(
        <Box
        sx={{alignContent: 'center', alignItems: 'center', gap: 2, p: 0, m: 0 }}
        >
        <div>
        <h2 className="joke-intro">If you have made it this far down, here is something I made for a bit of fun using a random joke API! Enjoy!</h2>
        </div>
        {loading ? (
            <BeatLoader
                color="#000000"
                loading={loading}
                size={50}
                speedMultiplier={2}
                alignitems="center"
                justifycontent="center"
                className="loader"
            />
        ) : (
        <div>
        <h2 className="joke">{setUp}</h2>
        <h2 className="joke">{showPunchline && punchline}</h2>
        <button onClick={getPunchline}>Get the punchline</button>
        <button onClick={getNewJoke}>Get a new joke</button>
        </div>)}
        </Box>
    );

};

export default Joke;