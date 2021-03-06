import Header from "./Header";
import HeroBanner from "./HeroBanner";
import LinkCard from "./LinkCard";

const Home = () => {
    return (
        <>
            <Header />
            <HeroBanner />
            <div className="link-cards">
                <LinkCard
                    title="Browse recipes"
                    description="Find all the recipes here!"
                    page="/recipes"
                    linkText="Recipes"
                />
                <LinkCard
                    title="Add a recipe"
                    description="Got a recipe you want to save?"
                    page="/add_recipe"
                    linkText="Add recipe"
                />
            </div>
        </>
    );
};

export default Home;
