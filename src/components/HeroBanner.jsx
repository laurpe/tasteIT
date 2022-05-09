const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <video autoPlay muted loop id="hero-video">
                <source
                    src="pexels-vanessa-loring-5865600.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default HeroBanner;
