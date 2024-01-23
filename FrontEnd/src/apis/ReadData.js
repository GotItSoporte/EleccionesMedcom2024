import { Ip } from './Ip';

async function fetchReadData(selectTable) {
  try {
    const response = await fetch(`http://${Ip}:5000/ReadData/${selectTable}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching API data:', error, selectTable);
    return [];
  }
}

export default fetchReadData;
