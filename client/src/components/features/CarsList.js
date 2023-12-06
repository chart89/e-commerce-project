const CarsList = ({mark, model, engine, HP, price, description}) => {

    return (
        <ul>
            <li>{mark}</li>
            <li>{model}</li>
            <li>{engine}</li>
            <li>{HP}</li>
            <li>{price}</li>
            <li>{description}</li>
        </ul>
    );
};

export default CarsList;