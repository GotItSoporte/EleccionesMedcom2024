async function sendInfoWall(selectGraph, postData) {
  try {
    const response = await fetch(`http://192.168.0.19:5000/SendInfoWall/${selectGraph}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
      },
      body: JSON.stringify({postData}),
    });
    const data = await response.json();
    console.log('Respuesta del servidor:',data.message );
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error, selectGraph);
    return [];
  }
}

export default sendInfoWall;
