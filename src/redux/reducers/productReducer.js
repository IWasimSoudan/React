import { ActionsTypes } from "../contants/actions-types";

const initialSate = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "progreamer",
    },
  ],
};

export const productReducer = (state=initialSate, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
