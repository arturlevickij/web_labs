import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoneDisplay from "../../components/StonePage/StonePage";
import {getDetailedStoneInfo} from "../../fetching";

const ItemPage = () => {
    const { id } = useParams();
    const [stone, setStone] = useState(null);

    useEffect(() => {
        getDetailedStoneInfo(id)
            .then((response) => {
                setStone(response.data);
            })
            .catch((error) => {
                console.error('Помилка під час отримання даних:', error);
            });
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
