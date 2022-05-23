// Base
import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import {
  loginAsync,
  loginGoogle,
  loginFacebook
} from '../store/actions/actiosLogin'

// Hook
import useForm from '../hooks/useForm'

// Material Icons
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

const Login = (props) => {
  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    user: '',
    pass: ''
  })

  const { user, pass } = formValue

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValue)
    dispatch(loginAsync(user, pass))
    reset()
  }

  return (
    <div
      className="
        w-screen h-screen
        bg-[url('https://res.cloudinary.com/dz8on44po/image/upload/v1653269510/Personal/aju5zmpauohgpfkqm1ch.jpg')]
        bg-cover bg-no-repeat bg-right-top
      "
    >
      <section
        className="
          relative
          flex items-center justify-center
          w-full h-full px-4
          bg-black/30
        "
      >
        <div
          className="
            w-full max-w-xl h-auto
            space-y-8 px-6 py-8
            backdrop-blur-sm bg-white/30
            shadow-lg shadow-black/40
          "
        >
          <div>
            <h2
              className="
                mt-6 text-start text-3xl
                font-extrabold text-white
              "
            >
              Iniciar sesión
            </h2>

            <p className="mt-2 text-start text-md text-white">
              Inicie sesión con su cuenta para continuar
            </p>
          </div>

          <div>
            <p className='mb-3 font-medium text-white'>
              Inicia sesión con
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(loginFacebook())}
                className="
                  flex items-center justify-center
                  w-1/2 h-11
                  text-3xl text-white
                  border rounded
                  transition ease-in-out delay-150
                  hover:shadow-slate-200 hover:shadow-md
                "
              >
                <FacebookIcon sx={{ fontSize: 36 }}/>
              </button>

              <button
                onClick={() => dispatch(loginGoogle())}
                className="
                  flex items-center justify-center
                  w-1/2 h-11
                  text-3xl text-white
                  border rounded
                  transition ease-in-out delay-150
                  hover:shadow-slate-200 hover:shadow-md
                "
              >
                <GoogleIcon sx={{ fontSize: 36 }}/>
              </button>
            </div>
          </div>

          <hr className="text-white"/>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  name="user"
                  type="email"
                  value ={user}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  className="
                    appearance-none rounded-none relative block
                    w-full px-3 py-3 border border-white
                    bg-transparent
                    placeholder-white text-white rounded-t-md
                    focus:outline-none focus:ring-secondary
                    focus:border-secondary focus:z-10 sm:text-sm
                  "
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  name="pass"
                  type="password"
                  value ={pass}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  className="
                    appearance-none rounded-none relative block
                    w-full px-3 py-3 border border-white
                    bg-transparent
                    placeholder-white text-white rounded-b-md
                    focus:outline-none focus:ring-secondary
                    focus:border-secondary focus:z-10 sm:text-sm
                  "
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="
                  group relative flex justify-center w-full
                  py-2 px-4 border border-transparent text-sm font-medium
                  rounded-md text-background bg-primary focus:outline-none
                  focus:ring-2 focus:ring-offset-2 uppercase
                "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Entrar
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-4">
            <p className="mr-2 text-white">
              ¿No tienes una cuenta?
            </p>
            <Link
              to="/register"
              className="text-primary font-medium"
            >
              Crear Cuenta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
