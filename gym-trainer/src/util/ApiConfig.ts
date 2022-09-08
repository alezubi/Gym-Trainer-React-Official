import axios from "axios";

export const WORKOUT_API = axios.create({
    baseURL: 'https://wger.de/api/v2/'
});

export const WORKOUT_PLAN_API = axios.create({
    baseURL:'localhost:8080/'
});


