const BASE_URL = "https://api.musement.com/api/v3/activities";

export const GET = async (id = "") => {
  const resp = await fetch(`${BASE_URL}/${id}`);
  const data = await resp.json();

  return data;
};
