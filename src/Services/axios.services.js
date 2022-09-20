import axios from "axios";

import {baseURL} from "./urls";

const axiosServices = axios.create({baseURL});

export {axiosServices}