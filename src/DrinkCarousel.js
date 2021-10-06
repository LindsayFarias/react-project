import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import Drink from './Drink'

function DrinkCarousel({ drinks }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let drinksArray = drinks.map(drink => {
        return (
            <Carousel.Item>
                <Drink name={drink.name} ingredients={drink.ingredients} instructions={drink.instructions} image={drink.image} />
            </Carousel.Item>
        )
    })
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {drinksArray}
        </Carousel>
    );
}

// render(<DrinkCarousel />);


export default DrinkCarousel