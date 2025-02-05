'use client'
import { useState, useEffect } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GetAllProduct } from "services/operations/Product";
import Select from "react-select";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Addorder } from "services/operations/Order";
import { GetOrderById } from "services/operations/Order";
// MUI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { useParams } from "next/navigation";
// GLOBAL CUSTOM COMPONENTS
import { FormProvider, TextField } from "components/form-hook";

// FORM VALIDATION SCHEMA
const validationSchema = yup.object().shape({
  orderNote: yup.string().required("Order Note is required"),
  totalPrice: yup.number().required("Total Price is required"),
  products: yup.array().of(
    yup.object().shape({
      selectedProduct: yup.object().required("Product selection is required"),
      selectedVariant: yup.object().nullable(),
      quantity: yup.number().required("Quantity is required").min(1, "Must be at least 1"),
      price: yup.number().required("Price is required"),
    })
  ),
});

export default function OrderEditForm() {
  const { slug } = useParams();
  const [orders, setOrders] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch products
  const fetchAllProduct = async () => {
    try {
      const response = await GetAllProduct();
      setProducts(response?.products);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch order data
  const fetchOrders = async () => {
    try {
      const response = await GetOrderById(slug);
      // Assuming response.order is your order object:
      setOrders(response?.order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
    fetchOrders();
  }, [slug]);

  // Initialize useForm with basic default values.
  const methods = useForm({
    defaultValues: {
      orderNote: "",
      totalPrice: 0,
      products: [
        {
          selectedProduct: null,
          selectedVariant: null,
          quantity: 1,
          price: 0,
        },
      ],
    },
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    control,
    watch,
    formState,
    setValue,
    getValues,
    reset, // added reset from useForm
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  // When order data is fetched, transform it and reset the form values.
  useEffect(() => {
    if (orders) {
      // Transform the fetched order data into the shape expected by your form.
      const preloadedValues = {
        orderNote: orders.orderNote || "",
        totalPrice: orders.totalPrice || 0,
        products: orders.products.map((item) => ({
          selectedProduct: {
            value: item.product._id,
            label: item.product.name,
            productData: item.product,
          },
          // For variant, you may need additional logic. Here we assume if a variant exists,
          // we set a simple object; adjust as needed.
          selectedVariant: item.variant
            ? {
                value: item.variant,
                label: item.variant, // You might want to map this to a more descriptive label.
                // You can also include the price per unit if available.
              }
            : null,
          quantity: item.quantity,
          price: item.price,
        })),
      };
      reset(preloadedValues);
    }
  }, [orders, reset]);

  const handleRemoveProduct = (index) => {
    remove(index); // Remove product from the list
    setTimeout(() => {
      calculateTotalPrice(); // Update total price after removal
    }, 0);
  };

  // Function to calculate total price dynamically
  const calculateTotalPrice = () => {
    const productList = getValues("products");
    const total = productList.reduce((acc, product) => acc + (product.price || 0), 0);
    setValue("totalPrice", total);
  };

  const handleProductChange = (index, selectedOption) => {
    const basePrice = selectedOption?.productData?.isVariant
      ? selectedOption?.productData?.variants[0]?.options[0]?.price || 0
      : selectedOption?.productData?.price || 0;

    setValue(`products.${index}.selectedProduct`, selectedOption);
    setValue(`products.${index}.selectedVariant`, null);
    setValue(`products.${index}.quantity`, 1);
    setValue(`products.${index}.price`, basePrice);

    calculateTotalPrice(); // Recalculate total price
  };

  const handleVariantChange = (index, selectedVariant) => {
    setValue(`products.${index}.selectedVariant`, selectedVariant);
    setValue(`products.${index}.price`, selectedVariant?.price || 0);

    calculateTotalPrice(); // Recalculate total price
  };

  const handleQuantityChange = (index, quantity) => {
    const selectedProduct = getValues(`products.${index}.selectedProduct`);
    const selectedVariant = getValues(`products.${index}.selectedVariant`);
    const basePrice = selectedVariant
      ? selectedVariant.price
      : selectedProduct?.productData?.price || 0;

    setValue(`products.${index}.quantity`, quantity);
    setValue(`products.${index}.price`, quantity * basePrice);

    calculateTotalPrice(); // Recalculate total price
  };

  const handleSubmitForm = handleSubmit(async (values) => {
    const transformedData = {
      orderNote: values.orderNote,
      totalPrice: values.totalPrice,
      products: values.products.map((product) => ({
        product: product.selectedProduct?.value || "", // Extract Product ID
        variant: product.selectedVariant?.value || "", // Extract Variant ID (or empty if none)
        quantity: product.quantity,
        price: product.price,
      })),
    };
    // await Addorder(transformedData);
  });

  return (
    <Card className="p-3">
      <FormProvider methods={methods} onSubmit={handleSubmitForm}>
        <Grid container spacing={3}>
          {/* Order Note */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              name="orderNote"
              label="Order Note"
              color="info"
              size="medium"
              placeholder="Enter Order Note"
            />
          </Grid>

          {/* Total Price */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              name="totalPrice"
              label="Total Price"
              color="info"
              size="medium"
              placeholder="Total Price"
            />
          </Grid>

          {/* Add Products Heading */}
          <Grid size={12}>
            <h3>ADD PRODUCTS</h3>
          </Grid>

          {/* Product Selection List */}
          {fields.map((item, index) => {
            const selectedProduct = watch(`products.${index}.selectedProduct`);
            return (
              <Grid key={item.id} container spacing={3} alignItems="center">
                {/* Product Dropdown */}
                <Grid size={{ sm: selectedProduct?.productData?.isVariant ? 6 : 12, xs: 12 }}>
                  <Controller
                    name={`products.${index}.selectedProduct`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        instanceId={`product-select-${index}`}
                        options={products.map((product) => ({
                          value: product._id,
                          label: product.name,
                          productData: product,
                        }))}
                        onChange={(selectedOption) => handleProductChange(index, selectedOption)}
                        placeholder="Select Product"
                        isClearable
                      />
                    )}
                  />
                </Grid>

                {/* Variant Dropdown (Only if the product has variants) */}
                {selectedProduct?.productData?.isVariant && (
                  <Grid size={{ sm: 6, xs: 12 }}>
                    <Controller
                      name={`products.${index}.selectedVariant`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          instanceId={`variant-select-${index}`}
                          options={selectedProduct?.productData?.variants[0]?.options.map((option) => ({
                            value: option._id,
                            label: `${option.quantity} ${selectedProduct?.productData?.variants[0]?.type} - ₹${option.price}`,
                            price: option.price,
                          }))}
                          onChange={(selectedVariant) => handleVariantChange(index, selectedVariant)}
                          placeholder="Select Variant"
                          isClearable
                        />
                      )}
                    />
                  </Grid>
                )}

                {/* Quantity Input */}
                <Grid size={{ sm: 6, xs: 12 }}>
                  <Controller
                    name={`products.${index}.quantity`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type="number"
                        label="Quantity"
                        size="medium"
                        onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                      />
                    )}
                  />
                </Grid>

                {/* Price Input (Auto-updated) */}
                <Grid size={{ sm: 5, xs: 12 }}>
                  <Controller
                    name={`products.${index}.price`}
                    control={control}
                    render={({ field }) => (
                      <TextField {...field} fullWidth type="text" label="Price" size="medium" />
                    )}
                  />
                </Grid>

                {/* Remove Button */}
                <Grid size={{ sm: 1, xs: 12 }} display="flex" justifyContent="flex-end">
                  {fields.length > 1 && (
                    <IconButton onClick={() => handleRemoveProduct(index)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            );
          })}

          {/* Add Button */}
          <Grid size={12} display="flex" justifyContent="flex-start" mt={2}>
            <Button
              onClick={() =>
                append({ selectedProduct: null, selectedVariant: null, quantity: 1, price: 0 })
              }
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
            >
              ADD PRODUCT
            </Button>
          </Grid>

          {/* Submit Button */}
          {/* <Grid mt={2} size={12}>
            <LoadingButton loading={formState.isSubmitting} variant="contained" color="info" type="submit">
              Create Order
            </LoadingButton>
          </Grid> */}
        </Grid>
      </FormProvider>
    </Card>
  );
}
