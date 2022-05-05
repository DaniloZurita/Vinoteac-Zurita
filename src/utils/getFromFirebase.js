import {query, where, collection, getDocs} from '@firebase/firestore';
import {doc, getDoc} from 'firebase/firestore'
import db from './firebaseConfig';

export const goGetfromFb = async (idFiltrado) => {
    let cat;
    if(idFiltrado) {
        cat = query(collection(db, "Products"), where('categoryId', '==', idFiltrado));
    } else {
        cat = query(collection(db, "Products"));
    }
    
    const searchDb = await getDocs(cat);
    const getDb = searchDb.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return getDb;
}

export const goGetOnefromFb = async (idProducto) => {
    const idDoc = doc(db, "Products", idProducto);
    const grabedDoc = await getDoc(idDoc);
    console.log(idProducto)
    
    if (grabedDoc.exists()) {
        return {
            id: idProducto,
            ...grabedDoc.data()
        }
      } else {
        console.error("No existe el producto");
      }
  }