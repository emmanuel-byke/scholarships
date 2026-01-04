import { Hero } from "./Hero";
import { Nav } from "./nav/Nav";
import { Scholarships } from "./Scholarships";


export const Home = () => {

    return(
        <div>
            <Nav />
            <Hero />
            <Scholarships />
        </div>
    );
}