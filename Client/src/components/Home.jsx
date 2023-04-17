import React  from "react"; 
import Cards from "./Cards";
import Footer from "./footer/Footer";

export default function Home({ Onclose,characters}){
    return (
        <div>
            <h1>Cartas Rick And Morty</h1>
            <Cards Onclose={Onclose} characters={characters}  ></Cards>
            <hr></hr>
            <Footer></Footer>
        </div>
    )
}