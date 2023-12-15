import axios from "axios";

const LOCAL_HOST = "http://localhost:8080/api";

export const getStoneList = (filterCondition) => {
    return axios.get(`${LOCAL_HOST}/stone`, { params: filterCondition });
};

export const getDefaultStoneList = () => {
    return axios.get(`${LOCAL_HOST}/stones`);
};

export const getDetailedStoneInfo = (stoneId) => {
    return axios.get(`${LOCAL_HOST}/stone/${stoneId}`);
};
