const StarshipCard = ({starship}) => {
    return (
        <>
            <li>
                <div>{starship.name}</div>
                <div>{starship.starship_class}</div>
                <div>{starship.manufacturer}</div>
                <div>{starship.model}</div>
            </li>
        </>
    )
}

export default StarshipCard