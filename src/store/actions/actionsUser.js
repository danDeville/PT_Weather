import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore'
import { DB } from '../../firebase/firebaseConfig'
import { typesUser } from "../types/typesUser"

// Eliminar Película
export const deleteUsuarioSync = (id) => {
  return {
    type: typesUser.delete,
    payload: id
  }
}

export const deleteUsuarioAsync = (id) => {
  return async (dispatch) => {
    const colectionList = collection(DB, 'user-list')
    const q = query(colectionList, where('id', '==', id))
    const datosQ = await getDocs(q)

    datosQ.forEach(e => {
      deleteDoc(doc(DB, 'user-list', e.id))
    })

    dispatch(deleteUsuarioSync(id))
  }
}

// Editar Usuario
export const editUsuarioSync = (user) => {
  return {
    type: typesUser.edit,
    payload: user
  }
}

export const editUsuarioAsync = (id, user) => {
  return async (dispatch) => {
    const colectionList = collection(DB, 'user-list')
    const q = query(colectionList, where('id', '===', id))
    const datosQ = await getDocs(q)
    let id_user

    datosQ.forEach(async(doc) => {
      id_user = doc.id
    })

    const reference = doc(DB, 'user-list', id_user)
    await updateDoc(reference, user)
    try {
      dispatch(editUsuarioSync(user))
    }
    catch(error) {
      console.error(error)
    }
    dispatch(listUsuariosAsync())
  }
}

// Listar Usuario
export const listUsuariosSync = (user) => {
  return {
    type: typesUser.list,
    payload: user
  }
}

export const listUsuariosAsync = () => {
  return async (dispatch) => {
    const colectionList = await getDocs(collection(DB, 'user-list'))
    const users = []
    console.log(colectionList)
    colectionList.forEach(list => {
      users.push({
        ...list.data()
      })
    })

    dispatch(listUsuariosSync(users))
  }
}

// Agregar Usuario
export const addUsuarioSync = (user) => {
  return {
    type: typesUser.add,
    payload: user
  }
}

export const addUsuarioAsync = (user) => {
  return (dispatch) => {
    addDoc(collection(DB, 'user-list'), user)
    .then(resp => {
      user = {...user, created_at: serverTimestamp()}
      dispatch(addUsuarioSync(user))
      dispatch(listUsuariosSync())
    })
    .catch(err => {
      console.log('Error al cargar el Usuario', err)
    })
  }
}