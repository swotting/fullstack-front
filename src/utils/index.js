export const signup = async (username, email, password, setUser) => {
    const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            email: email,
            password: password // same data as the backend user schema
        }),
    });
    const data = await response.json();
    setUser(data.username)
}

export const login = async (email, password, setUser, user) => {
    const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password // same data as the backend user schema
        }),
    });
    const data = await response.json();
    setUser(data.username)
    console.log(user)
}

export const updateUser = async (username, email, password, setUser) => {
    const response = await fetch('http://localhost:5000/users', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            update: {
                username: username,
                email: email,
                password: password
            }
        }),
    });
    const data = await response.json();
    console.log(data)
    setUser(data)
    
}