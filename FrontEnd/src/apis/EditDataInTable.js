import { Ip } from './Ip';

async function editDataInTable(postData, graph) {
  try {
    const response = await fetch(`http://${Ip}:5000/EditDataInTable/${graph}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    //console.log('Respuesta del servidor:', data.message);
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    return [];
  }
}

export default editDataInTable;
