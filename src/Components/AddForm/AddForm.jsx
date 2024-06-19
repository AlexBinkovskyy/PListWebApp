/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./AddForm.module.css";
import { useDispatch } from "react-redux";
import { setBuyedProducts } from "../../Redux/productSlice";

const validationSchema = Yup.object().shape({
  count: Yup.number()
    .positive("Must be positive")
    .integer("Must be an integer")
    .required("Required"),
  size: Yup.object().shape({
    width: Yup.number().positive("Must be positive").required("Required"),
    height: Yup.number().positive("Must be positive").required("Required"),
  }),
  weight: Yup.number().positive("Must be positive").required("Required"),
});

export const AddForm = ({ product, closeModal }) => {
  const dispatch = useDispatch();

  function onSubmit(values) {
    const updatedProduct = {
      ...product,
      ...values,
      size: {
        ...product.size,
        ...values.size,
      },
    };
    dispatch(setBuyedProducts(updatedProduct));
  }

  return (
    <Formik
      initialValues={{
        count: "",
        size: {
          width: "",
          height: "",
        },
        weight: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
        closeModal();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={style.inputWrapper}>
            <label htmlFor="count" className={style.label}>
              Product count
            </label>
            <Field
              type="number"
              name="count"
              placeholder={`${product.count} items`}
              className={style.input}
            />
            <ErrorMessage
              name="count"
              component="div"
              className={style.errorMsg}
            />
          </div>

          <div className={style.inputWrapper}>
            <label htmlFor="size.width" className={style.label}>
              Width
            </label>
            <Field
              type="number"
              name="size.width"
              placeholder={`${product.size.width}mm`}
              className={style.input}
            />
            <ErrorMessage
              name="size.width"
              component="div"
              className={style.errorMsg}
            />
          </div>

          <div className={style.inputWrapper}>
            <label htmlFor="size.height" className={style.label}>
              Height
            </label>
            <Field
              type="number"
              name="size.height"
              placeholder={`${product.size.height}mm`}
              className={style.input}
            />
            <ErrorMessage
              name="size.height"
              component="div"
              className={style.errorMsg}
            />
          </div>

          <div className={style.inputWrapper}>
            <label htmlFor="weight" className={style.label}>
              Weight
            </label>
            <Field
              type="number"
              name="weight"
              placeholder={product.weight}
              className={style.input}
            />
            <ErrorMessage
              name="weight"
              component="div"
              className={style.errorMsg}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={style.submitButton}
            >
              Add to cart
            </button>
            <button
              type="button"
              className={style.submitButton}
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
