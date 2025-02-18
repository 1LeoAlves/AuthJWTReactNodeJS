import { useEffect, useState } from 'react';
import { RequestLogin } from '../services/loginRequest';

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [erroLogin, setErroLogin] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault(); // Evita que a página recarregue
        try {
            const response = await RequestLogin(email, pwd);
            console.log("Login bem-sucedido:", response);

            

        } catch (error) {
            if(error.response.status == 401){
                console.error("Falha no login:", error.response.status);
                setErroLogin(true);
            }
            else{
                console.error("Erro na requisição:", error);
            }
        }
    };

    useEffect(() => {
        if (erroLogin) {
          const timer = setTimeout(() => {
            setErroLogin(false);
          }, 10000); 
    
          return () => clearTimeout(timer);
        }
      }, [erroLogin]);

    return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form required>
                <div className="mb-4">
                    <label
                    typeof='email'
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="email">
                    Email
                    </label>
                    <input
                    autoComplete='on'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="email"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Senha
                    </label>
                    <input
                    autoComplete='on'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(event) => setPwd(event.target.value)}
                    />
                </div>
                {erroLogin && ( <p className='text-red-500 text-[.9rem]'> Email ou senha incorretos! Tente novamente. </p> ) }
                <p className='text-gray-500 pb-6 text-[.9rem]' > Ainda não possuí um cadastro? clique aqui para <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"> registrar-se.</a></p>
                <div className="flex items-center justify-between">
                    <button
                    onClick={(e) => handleLogin(e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    >
                    Entrar
                    </button>
                    
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Esqueceu a senha?
                    </a>
                </div>
            </form>
        </div>
    </div>
    );
}