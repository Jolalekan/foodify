import * as Yup from "yup";

export const createFoodSchema = Yup.object({
  name: Yup.string().required("Food name is required"),
  price: Yup.number().required("Food price is required"),
  image: Yup.string().required(),
});
