import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home = () =>{
    return(
        <div>
        <Header/>
        <h1>Welcome to the Home Page!</h1>
        <Card title="Sample Title" content="Sample content goes here." />
        </div>
    )
}

export default Home;