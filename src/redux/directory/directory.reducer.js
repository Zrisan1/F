const INITIAL_STATE = {
  sections: [
    {
      title: "DAMAS",
      size: "large",
      imageUrl: "https://i.ibb.co/hXjsR1L/IMG-0603.jpg",
      id: 1,
      linkUrl: "shop/damas",
    },
    {
      title: "CABALLEROS",
      size: "large",
      imageUrl: "https://i.ibb.co/q53HYXR/IMG-0608.jpg",
      id: 2,
      linkUrl: "shop/caballeros",
    },
    {
      title: "NIÑOS",
      size: "large",
      imageUrl: "https://i.ibb.co/2MBBz4Q/IMG-1074.jpg",
      id: 3,
      linkUrl: "shop/niños",
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
