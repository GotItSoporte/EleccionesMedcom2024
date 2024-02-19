import { Ip } from './Ip';

async function sendInfoFollower(selectGraph, postData) {
  try {
    const response = await fetch(`http://${Ip}:5000/SendInfoFollower/${selectGraph}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    console.log('Respuesta del servidor:', data.message);
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error, selectGraph);
    return [];
  }
}

export default sendInfoFollower;
