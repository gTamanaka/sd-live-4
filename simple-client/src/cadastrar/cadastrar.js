import React, { useState } from "react";
import axios from "axios";

const Cadastrar = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    try {
      
      console.log(user, pwd, email);
      event.preventDefault();
      let resp = await axios.post(`http://${window.location.hostname}/user/cadastrar`, {
        user: user,
        pwd: pwd,
        email: email,
      });
      alert(resp.data)
    } catch (error) {
      console.log(error.data)
    alert(error.response.data)  
    }
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={user}
            placeholder="João Silva"
            onChange={(event) => setUser(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            placeholder="joao@gamil.com.br"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={pwd}
            placeholder="******"
            onChange={(event) => setPwd(event.target.value)}
          ></input>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </article>
  );
};

export default Cadastrar;
