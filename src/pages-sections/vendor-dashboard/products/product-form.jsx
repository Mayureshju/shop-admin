"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UploadFileAWS } from "services/operations/Upload";
import BazaarSwitch from "components/BazaarSwitch";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { GetAllCategory } from "services/operations/Category";
// GLOBAL CUSTOM COMPONENTS
import DropZone from "components/DropZone";
import FlexBox from "components/flex-box/flex-box";
import { FormProvider, TextField } from "components/form-hook";

// STYLED COMPONENTS
import { UploadImageBox, StyledClear } from "../styles";
import { IconButton, Stack, Typography } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { AddProduct } from "services/operations/Product";

// CUSTOM DATA MODEL


// FORM FIELDS VALIDATION SCHEMA
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  category: yup.string(),
  description: yup.string().required("Description is required!"),
  stock: yup.string().required("Stock is required!"),
  price: yup.string().required("Price is required!"),
  sale_price: yup.string().optional(),

});


// ================================================================


// ================================================================

export default function ProductForm(props) {
  const [files, setFiles] = useState([]);
  const [fileLinks, setFileLinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bestSelling, setBestSelling] = useState(false);
  const [popular, setPopular] = useState(false);
  const [isVariant, setIsVariant] = useState(false);
  const [active, setActive] = useState(true);
  const [variants, setVariants] = useState([
    { type: "liter", quantity: "", price: "",makingPrice:"" }, // Default variant
  ]);
  const router = useRouter();
  const initialValues = {
    name: "",
    description: "",
    shortDescription: "",
    price: "",
    makingPrice: "",
    benefits: "",
    seoTitle: "",
    category: "",
    seoDescription: "",
    canonicalUrl: ""
  };
  const methods = useForm({
    defaultValues: initialValues,
    // resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await GetAllCategory();
      setCategories(response?.categories);
      console.log(response?.categories)
    } catch (error) {
      console.log(error)
    }
  }
  const handleVariantChange = (index, key, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][key] = value;
    setVariants(updatedVariants);
  };

  const handleAddVariant = () => {
    const lastVariant = variants[variants.length - 1];
    const newPrice = lastVariant.price * 1.5; // Set the new price as 98% of the last variant's price
    const newVariant = {
      type: "",
      quantity: "",
      price: newPrice,
      makingPrice:newPrice
    };
    setVariants([...variants, newVariant]);
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = [...variants];
    updatedVariants.splice(index, 1);
    setVariants(updatedVariants);
  };


  const handleChangeDropZone = async (files) => {
    console.log(files);
    try {
      files.forEach((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles((prevFiles) => [...prevFiles, ...files]);
      for (const file of files) {
        let parts = file.name.split(".");
        let timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        let key = `${parts[0]}_${timestamp}`;
        await postImg(key, file.type, file);
      }
    } catch (error) {
      console.error("Failed to handle drop zone change", error);
    }
  };

  async function postImg(key, type, file) {
    const toastId = toast.loading("Uploading Files...");
    try {
      const response = await UploadFileAWS(key, type);
      const newFileLink = response.data?.fileUrl;
      console.log(newFileLink)
      setFileLinks((prevLinks) => [...prevLinks, newFileLink]);
      await axios.put(response.data?.signedUrl, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.dismiss(toastId);
    } catch (error) {
      toast.dismiss(toastId);
      console.log(error)
    }
  }
  // HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = file => () => {
    setFiles(files => files.filter(item => item.name !== file.name));
  };
  const {
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;

  const formatVariants = (variants) => {
    // Create a map to group by type
    const groupedVariants = {};

    variants.forEach(({ type, quantity, price,makingPrice }) => {
      if (!groupedVariants[type]) {
        groupedVariants[type] = {
          type,
          options: []
        };
      }
      groupedVariants[type].options.push({ quantity: `${quantity}`, price: Number(price), makingPrice: Number(makingPrice) });
    });

    // Convert grouped object to array
    return Object.values(groupedVariants);
  };


  // FORM SUBMIT HANDLER
  const handleSubmitForm = handleSubmit(async (values) => {
    try {
      const formattedVariants = formatVariants(variants);
    
      await AddProduct({
        ...values,
        variants: formattedVariants,
        image: fileLinks,
        bestSelling: bestSelling,
        popular: popular,
        isVariant: isVariant,
        active: active
      }, router);

    } catch (error) {
      console.error("Error adding product:", error);
    }
  });

  return <Card className="p-3">
    <FormProvider methods={methods} onSubmit={handleSubmitForm}>
      <Grid container spacing={3}>
        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth name="name" label="Name" color="info" size="medium" placeholder="Name" />
        </Grid>

        <Grid size={{ sm: 6, xs: 12 }}>
          <Autocomplete
            options={categories} // Use dynamic categories
            getOptionLabel={(option) => option.name} // Display category name
            onChange={(event, newValue) => methods.setValue("category", newValue ? newValue._id : "")} // Set category ID
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Select Category"
                name="category"
                placeholder="Category"
                color="info"
                size="medium"
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <DropZone onChange={files => handleChangeDropZone(files)} />

          <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
            {files.map((file, index) => {
              return <UploadImageBox key={index}>
                <Box component="img" src={file.preview} width="100%" />
                <StyledClear onClick={handleFileDelete(file)} />
              </UploadImageBox>;
            })}
          </FlexBox>
        </Grid>

        <Grid size={12}>
          <TextField rows={6} multiline fullWidth color="info" size="medium" name="description" label="Description" placeholder="Description" />
        </Grid>
        <Grid size={12}>
          <TextField rows={6} multiline fullWidth color="info" size="medium" name="shortdescription" label="Short Description" placeholder="Short Description" />
        </Grid>

        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth color="info" size="medium" type="number" name="price" label="Price" placeholder="Price" />
        </Grid>
        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth color="info" size="medium" type="number" name="makingPrice" label="Making Price" placeholder="Making Price" />
        </Grid>

        
        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth name="benefits" label="Benefits" color="info" size="medium" placeholder="Benefits" />
        </Grid>

        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth name="seoTitle" label="Seo Title" color="info" size="medium" placeholder="Seo Title" />
        </Grid>
        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth name="seoDescription" label="Seo Description" color="info" size="medium" placeholder="Seo Description" />
        </Grid>
        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <TextField fullWidth name="canonicalUrl" label="canonical Url" color="info" size="medium" placeholder="canonical Url" />
        </Grid>

        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1">Best Selling</Typography>
            <BazaarSwitch color="info" checked={bestSelling} onChange={() => setBestSelling(state => !state)} />
          </Stack>
        </Grid>


        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1">Popular</Typography>
            <BazaarSwitch color="info" checked={popular} onChange={() => setPopular(state => !state)} />
          </Stack>
        </Grid>

        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1">isVariant</Typography>
            <BazaarSwitch color="info" checked={isVariant} onChange={() => setIsVariant(state => !state)} />
          </Stack>

          {isVariant &&
            variants.map((variant, index) => (
              <Grid item sm={6} xs={12} key={index}>
                <FormControl fullWidth style={{ marginTop: "10px" }}>
                  <InputLabel id={`type-label-${index}`}>Type</InputLabel>
                  <Select
                    labelId={`type-label-${index}`}
                    name={`type-${index}`}
                    value={variant.type}
                    onChange={(e) =>
                      handleVariantChange(index, "type", e.target.value)
                    }
                  >
                    <MenuItem value={'liter'}>Liter</MenuItem>
                    <MenuItem value={'kilo'}>Kilo</MenuItem>

                  </Select>
                </FormControl>
                <FormControl style={{ marginTop: "10px" }} fullWidth>
                  <InputLabel id={`quantity-label-${index}`}>Quantity</InputLabel>
                  <Select
                    labelId={`quantity-label-${index}`}
                    name={`quantity-${index}`}
                    value={variant.quantity}
                    onChange={(e) =>
                      handleVariantChange(index, "quantity", e.target.value)
                    }
                  >
                    <MenuItem value={500}>500</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={1.5}>1.5</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  name={`price-${index}`}
                  label="Price"
                  type="number"
                  value={variant.price}
                  onChange={(e) =>
                    handleVariantChange(index, "price", e.target.value)
                  }
                  style={{ marginTop: "10px" }}
                />
                  <TextField
                  fullWidth
                  name={`makingPrice-${index}`}
                  label="Making Price"
                  type="number"
                  value={variant.makingPrice}
                  onChange={(e) =>
                    handleVariantChange(index, "makingPrice", e.target.value)
                  }
                  style={{ marginTop: "10px" }}
                />
                {variants.length > 1 && (
                  <Button onClick={() => handleRemoveVariant(index)}>
                    Remove Variant
                  </Button>
                )}
              </Grid>
            ))}

          {isVariant && (
            <Button onClick={handleAddVariant}>Add Variant</Button>
          )}
        </Grid>




        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1">Active</Typography>
            <BazaarSwitch color="info" checked={active} onChange={() => setActive(state => !state)} />
          </Stack>
        </Grid>

        <Grid size={{
          sm: 6,
          xs: 12
        }}>
          <LoadingButton loading={isSubmitting} variant="contained" color="info" type="submit">
            Save product
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  </Card>;
}