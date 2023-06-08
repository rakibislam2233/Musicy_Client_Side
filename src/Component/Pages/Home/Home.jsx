
import Container from "../Shared/Container";
import About from "./About/About";
import Banner from "./Banner/Banner";
import OurService from "./OurService/OurService";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Container><About></About></Container>
            <Container><OurService></OurService></Container>
            <Container><PopularClasses></PopularClasses></Container>
            <Container><PopularInstructor></PopularInstructor></Container>
           
        </>
    );
};

export default Home;