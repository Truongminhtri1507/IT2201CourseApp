import axios from "axios";

const BASE_URL = 'https://thanhduong.pythonanywhere.com/';

export const endpoints = {
    'categories': '/categories/',
    'course': '/course/'
}

export default axios.create({
    baseURL: BASE_URL
})