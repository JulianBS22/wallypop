export async function createUser(email, password) {   
    const user = {
      username: email,
      password: password
    };
  
    // consumimos API de sparrest, utilizando un POST y enviando los datos que ha introducido el usuario
    const response = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    // gestion de respuesta
    if (!response.ok) {
      throw new Error('Error al crear el usuario')
    };
  
  };