import React, {useState} from "react";
import {
    PriceSection,
    SectionWrapper,
    StyledButtons,
    StyledImage,
    StyledRightSection,
    StyledText,
    VerticalLine
} from "./StonePage.styled";
import {Button, InputNumber, Modal, Space} from "antd";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import dataCard from "../../page/catalog/ProductData";

const StoneDisplay = (props) => {
    const [value, setValue] = useState('1');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {stone} = props;
    const dispatch = useDispatch();
    const addStone = () => {
        dispatch({
            type: "ADD_STONE",
            payLoad: {
                id:stone.id,
                img: dataCard[stone.id].image,
                name: stone.name,
                price: stone.price,
                count: parseInt(value),
            },
        });
        showConfirmModal();
    };

    const showConfirmModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
    <div>
        <VerticalLine />
            <SectionWrapper>
                <StyledImage>
                    <img src={dataCard[stone.id].image} alt="#" />
                </StyledImage>
                <StyledRightSection>
                    <h1>{stone.title}</h1>

                    <StyledText>
                        {stone.text}
                    </StyledText>
                    <Space>
                        <h3>
                            Count of Stones to buy:
                        </h3>
                        <InputNumber min={1} max={10} value={value} onChange={setValue}/>
                        <Button style={{borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000"}}
                            type="primary"
                            onClick={() => {
                                setValue(1);
                            }}
                        >
                            Reset
                        </Button>
                    </Space>
                    <PriceSection>
                        <h5 style={{marginRight: "20px"}}>
                            Price:
                        </h5>
                        ${stone.price}
                        <Button onClick={addStone} style={{ marginLeft: "50px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000" }}> Buy </Button>
                    </PriceSection>
                    <StyledButtons>
                        <NavLink exact to="/catalog" activeClassName="selected">
                            <Button style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", width: "200px"}}>GO TO CATALOG</Button>
                        </NavLink>
                    </StyledButtons>
                </StyledRightSection>
                <Modal
                    title="Stone Added to Cart"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <NavLink key="back" to="/cart">
                            <Button style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000"}} onClick={handleOk}>Buy</Button>
                        </NavLink>,
                        <Button  key="continue" type="primary" onClick={handleCancel} style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", marginLeft: "20px"}}>
                            Cancel
                        </Button>
                    ]}
                >
                    <p>{stone.name} You can buy or check more stones.</p>
                </Modal>
            </SectionWrapper>
    </div>
    )
}

export default StoneDisplay;