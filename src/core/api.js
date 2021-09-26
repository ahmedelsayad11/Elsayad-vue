import axios from 'axios';

export default async function apiCall(userId) {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const data = await response.data;
    console.log('hi there', data);

    return data;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error); // catches both errors
    return false;
  }
}
