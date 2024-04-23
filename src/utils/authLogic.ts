export const loginUser = async (credentials: any) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      // failed to login
      return 404;
    }
  } catch (err) {
    // failed to make a request
    return 400;
  }
};
export const registerUser = async (data: any) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      return true;
    } else if (res.status === 400) {
      const errors = await res.json();
      return errors;
    }
  } catch (err) {
    return null;
  }
};
