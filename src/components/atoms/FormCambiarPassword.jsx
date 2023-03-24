import React, { useState } from "react";

function FormCambiarPassword() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch("https://localhost:3000/users",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            });
            const data = await response.json();
            setSuccessMessage(data.message);
            setErrorMessage("");
        }catch(error){
            setSuccessMessage("");
            setErrorMessage(error.message);
        }
    };
    return ( 
        <main>
            <h2>Cambio de Contraseña</h2>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type="texte" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Nueva contraseña
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit">Aceptar</button>
            </form>
        </main>
     );
}

export default FormCambiarPassword;