// Base
import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { registroAsync } from '../store/actions/actiosLogin'

// Formik
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const SingUpSchema = Yup.object().shape({
  nombre: Yup.string()
  .min(2, 'Valor muy corto!')
  .max(30, 'Valor muy largo!')
  .required('Required'),
  email: Yup.string().email('Correo Invalido').required('Required'),
  contraseña: Yup.string()
  .min(6, 'Clave muy corta!')
  .max(30, 'Valor de clave muy largo!')
  .required('Required')
})

const Register = (props) => {
  const dispatch = useDispatch()

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
              Crea tu cuenta
            </h2>

            <p className="mt-2 text-start text-md text-white">
              Regístrate para continuar
            </p>
          </div>

          <Formik
            initialValues={{
              nombre: '',
              email: '',
              contraseña: ''
            }}
            validationSchema={SingUpSchema}
            onSubmit={values => {
              dispatch(registroAsync(values.nombre, values.email, values.contraseña))
            }}
          >
            {({ errors, touched, handleReset, handleSubmit }) => (
              <Form className="mt-8" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm">
                  <Field
                    name="nombre"
                    type="text"
                    placeholder="Nombre de usuario"
                    className="
                      appearance-none relative block
                      w-full px-3 py-3  border border-white
                      bg-transparent
                      placeholder-white text-white rounded-md
                      focus:outline-none focus:secondary
                      focus:border-secondary focus:z-10 sm:text-sm
                    "
                  />
                  {errors.nombre && touched.nombre
                    ? (<div className="text-white">
                        {errors.nombre}
                      </div>)
                    : null
                  }

                  <Field
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    className="
                      appearance-none relative block
                      w-full px-3 py-3 my-4 border border-white
                      bg-transparent
                      placeholder-white text-white rounded-md
                      focus:outline-none focus:secondary
                      focus:border-secondary focus:z-10 sm:text-sm
                    "
                  />
                  {errors.email && touched.email
                    ? (<div className="text-white">
                        {errors.email}
                        </div>)
                    : null
                  }

                  <Field
                    name="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    className="
                      appearance-none relative block
                      w-full px-3 py-3 border border-white
                      bg-transparent
                      placeholder-white text-white rounded-md
                      focus:outline-none focus:secondary
                      focus:border-secondary focus:z-10 sm:text-sm
                    "
                  />

                  {errors.contraseña && touched.contraseña
                    ? (<div className="text-white">
                        {errors.contraseña}
                        </div>
                      )
                    : null
                  }

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="
                      group relative flex justify-center w-full
                      py-2 px-4 border border-transparent text-sm font-medium
                      rounded-md text-background bg-primary focus:outline-none
                      focus:ring-2 focus:ring-offset-2 uppercase
                    "
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <div className="flex items-center justify-center mt-4">
            <p className="mr-2 text-white">
              ¿Ya tienes una cuenta?
            </p>
            <Link
              to="/login"
              className="text-primary font-medium"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register