import React from "react";
import Banner from "../components/banner"
import Divider from "../components/divider"
import CharacterList from "../components/characterList"

export default function MainPage({setCharData}){
    return(
        <div>
            <Banner/>
            <Divider/>
            <CharacterList setCharData={setCharData}/>
        </div>
    )
}