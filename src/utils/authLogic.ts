

export const loginUser = async (e: any) => {
  try {
    
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
    const data = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export const registerUser = async(data: any)=>{
  try {
  const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if (res.status === 201) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

  

  