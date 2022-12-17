export async function deletePost(url, post) {
  try {
    const getData = {
      method: "DELETE",
    };
    const response = await fetch(url, getData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
