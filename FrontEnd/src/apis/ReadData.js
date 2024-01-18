async function fetchReadData(selectTable) {
  try {
    const response = await fetch(`http://192.168.0.19:5000/ReadData/${selectTable}`);
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error, selectTable);
    return [];
  }
}

export default fetchReadData;
