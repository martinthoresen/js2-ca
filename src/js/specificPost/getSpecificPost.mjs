export async function getSpecificPost(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.log(response);
    }
    return await response.json();
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}
