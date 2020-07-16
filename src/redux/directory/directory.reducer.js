const INITIAL_STATE = {
  sections: [
    {
      title: "RON",
      //size: "large",
      imageUrl: "https://i.ibb.co/BP6Sy2m/RON.jpg",
      id: 1,
      linkUrl: "shop/ron",
    },
    {
      title: "PISCO",
      imageUrl: "https://i.ibb.co/86vTzHC/PISCO.jpg",
      id: 2,
      linkUrl: "shop/pisco",
    },
    {
      title: "WISKY",
      imageUrl: "https://i.ibb.co/S3SWZFS/WHISKY.jpg",
      id: 3,
      linkUrl: "shop/wisky",
    },
    {
      title: "VODKA",
      imageUrl: "https://i.ibb.co/WsF9QNw/VODKA.jpg",
      id: 4,
      linkUrl: "shop/vodka",
    },
    {
      title: "COMBOS",
      imageUrl: "https://i.ibb.co/VqbZsYr/COMBOS.jpg",
      id: 5,
      linkUrl: "shop/combos",
    },
    {
      title: "OTROS",
      imageUrl: "https://i.ibb.co/CK8pF0V/OTROS.jpg",
      id: 6,
      linkUrl: "shop/otros",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
