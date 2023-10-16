const ScrollToTop = () => {

    const scroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return(
        <div>
        <button className="scrollbutton" onClick={scroll}><i className="arrow up"></i></button>
        </div>
    );

};

export default ScrollToTop;