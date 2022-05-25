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
    const q = query(colectionList, where('id', '==', id))
    const datosQ = await getDocs(q)
    let id

    datosQ.forEach(async(doc) => {
      id = doc.id
    })

    const docRef = doc(DB, 'user-list', id)
    await updateDoc(docRef, user)
    .then(response => {
      dispatch(editUsuarioSync(user))
    })
    .catch(error => {
      console.log(error)
    })

    dispatch(listUsuariosAsync(user))
  }
}

// Detalle Usuario
export const detailUsuarioSync = (user) => {
  return {
    type: typesUser.detail,
    payload: user
  }
}

export const detailUsuarioAsync = (id) => {
  return async (dispatch) => {
    const colectionList = collection(DB, 'user-list')
    const q = query(colectionList, where('id', '==', id))
    const datosQ = await getDocs(q)

    const users = datosQ.docs.forEach(e => {
      e.data()
    })

    dispatch(listUsuariosAsync(users))
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