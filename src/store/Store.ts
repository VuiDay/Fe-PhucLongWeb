import { create } from "zustand";
import {
    getFirestore, collection, onSnapshot
  } from 'firebase/firestore'
import app from "../firebase/firebase";

export interface StoreState {
  dataFb: any[];
  error: string | null;
  dataChild: any[];
  quantity: number;
  fetchDataFirebase: () => void;
  addData: ()=> void;
}
const useStore = create<StoreState>((set)=>{
  return {
    dataFb: [],
    error: null,
    dataChild: [],
    quantity: 1,
    fetchDataFirebase: ()=> {
      const db = getFirestore(app)
      const colRef = collection(db, 'menu')
      try {
        onSnapshot(colRef, (snapshot)=>{
          let data: { id: string; }[] = []
          snapshot.docs.forEach((doc)=>{
            data.push({...doc.data(), id: doc.id})
          })
          set({dataFb: data})
        })
      } catch(err: any) {
        set({error: err.message})
      }
    },
    addData: (id: any)=> {
      let quantity: number = useStore.getState().quantity
      const updateDataChild = [...useStore.getState().dataChild]
      const product = useStore.getState().dataFb.find((item)=> item.id === id)
      if(product) {
        const exitData = updateDataChild.find((item)=>item.id === product.id)
        if(exitData) {
          exitData.quantity += 1
        } else {
          updateDataChild.unshift({...product, quantity: quantity})
        }
        set({dataChild: updateDataChild})
      }
    }
  }
})

export default useStore