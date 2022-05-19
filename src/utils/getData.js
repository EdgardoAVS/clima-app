const API = process.env.API;
const KEY = process.env.KEY;

const getData = async (city) => {

  try {
    const apiURL = `${API}q=${city}&appid=${KEY}`
    const res = await fetch(apiURL)
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error)
  }

}

export { getData };