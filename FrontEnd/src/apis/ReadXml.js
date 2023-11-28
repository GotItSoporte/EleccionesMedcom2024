async function fectchApiData (SelectTable) {
    try {
        const response = await fetch(`http://localhost:5000/ReadDataSql/${SelectTable}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error feteching API data:",error);
        return []; 
    }
}

export default fectchApiData;