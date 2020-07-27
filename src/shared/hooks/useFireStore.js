import { krlFirestore } from "../../firebase/firebase.utils";

const useFirestore = (collection) => {
  // Add item to Firestore
  const addToFirestore = (values) => {
    const collectionRef = krlFirestore.collection(`${collection}`);

    collection === "Pedidos" &&
      collectionRef
        .add({
          nombre: values.nombre.trim(),
          direccion: values.address.trim(),
          telefono: values.numero.trim(),
          pedidos: values.data,
          total: values.total,
          date: new Date(),
        })
        .then(() => {
          console.log("Pedido successfully added");
        })
        .catch((error) => {
          console.error("Error adding review: ", error);
        });
  };

  return {
    addToFirestore,
  };
};

export default useFirestore;
