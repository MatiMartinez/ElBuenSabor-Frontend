import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://localhost:3033/api',
});
