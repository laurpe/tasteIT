const LinkCard = ({ title, description }) => {
    return (
        <div className="link-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="/">Link</a>
        </div>
    );
};

export default LinkCard;
