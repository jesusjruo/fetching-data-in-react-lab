import StarshipCard from "./StarshipCard";

const StarshipList = ({starships}) => {
    return (
        <>
            <ul>
                {starships.map((starship , index) => {
                    return <StarshipCard starship={starship} key={index}/>
                })}
            </ul>
        </>
    )
}

export default StarshipList