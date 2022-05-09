import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import LinkCard from "./components/LinkCard";

const App = () => {
    return (
        <>
            <Header />
            <HeroBanner />
            <div className="link-cards">
                <LinkCard
                    title="Browse recipes"
                    description="Find all the recipes here"
                />
                <LinkCard
                    title="Add a recipe"
                    description="Click here to add your own recipe"
                />
            </div>
        </>
    );
};

export default App;
