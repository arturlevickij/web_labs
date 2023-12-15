import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataCard from "../catalog/ProductData";
import StoneDisplay from "../../components/StonePage/StonePage";

const ItemPage = () => {
    const { id } = useParams();
    const [stone, setStone] = useState(null);

    useEffect(() => {
        const foundStone = dataCard.find((item) => item.id === Number(id));

        if (foundStone) {
            setStone(foundStone);
        }
    }, [id]);

    if (!stone) {
        return <div>Not Found</div>;
    }

    return (
        <div>
            <StoneDisplay stone={stone} />
        </div>
    );
};

export default ItemPage;
