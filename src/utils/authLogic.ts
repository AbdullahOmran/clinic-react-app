

export const loginUser = async (e:any)=>{
        const res = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': e.username,
                'password': e.password,
            }),
        });
    console.log('fun invoked');
    const data = await res.json();
    return data

}

// export const {loginUser};