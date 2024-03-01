import { Ip } from './Ip';

async function fetchReadData(selectTable) {
  try {
    const response = await fetch(`http://${Ip}:5000/ReadData/${selectTable}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error al obtener datos de API:', error, selectTable);
    alert('Error al obtener datos de API:', error, selectTable);
    return [];
  }
}

export default fetchReadData;
