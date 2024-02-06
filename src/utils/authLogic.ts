export const loginUser = async (e: any) => {
  const res = await fetch("http://127.0.0.1:8000/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: e.username,
      password: e.password,
    }),
  });
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    return null;
  }
};
