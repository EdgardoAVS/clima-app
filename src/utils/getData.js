const API = process.env.API;
const KEY = process.env.KEY;

const getData = async (city) => {

  const apiURL = `${API}q=${city}&appid=${KEY}`

  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }


}

export { getData };