export { fetchApi };
async function fetchApi(url) {
  try {
    const data = await fetch(url);
    const json = await data.json;
    return json;
  } catch (error) {
    console.log(error);
  }
}
