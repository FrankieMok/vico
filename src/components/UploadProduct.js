import React, { useState } from "react";

import firebase from "../config/fbConfig";
import { v4 as uuidv4 } from "uuid";

const UploadProduct = () => {
  const [progress, setProgress] = useState(0);
  const [product, setProduct] = useState({
    content: "",
    isMember: false,
    pdType: "",
    price: "",
    isPromote: false,
    title: "",
    imageFile: null,
    imageAlt: "",
    isUploaded: false,
  });

  const productOptions = [
    { key: "Please selete", value: "" },
    { key: "Normal", value: "all" },
    { key: "Membership", value: "member" },
    { key: "Promotion", value: "promote" },
  ];

  // console.log(image);
  //const styleError = { color: "Red" };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`
    //   content: ${product.content},
    //   isMember: ${product.isMember},
    //   pdtype: ${product.pdType},
    //   isPromote: ${product.isPromote},
    //   price: ${product.price},
    //   title: ${product.title},
    //   id: ${uuidv4()},
    //   imageFile: ${product.imageFile.name},
    //   imageAlt: ${product.imageAlt},
    //   imageUrl: ${product.imageUrl}`);

    const uploadImage = firebase
      .storage()
      .ref(`${product.imageFile.name}`)
      .put(product.imageFile);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref()
          .child(product.imageFile.name)
          .getDownloadURL()
          .then((url) => {
            handleFiredatabase(url);
          });
      }
    );
  };

  const handleFiredatabase = (imageUrl) => {
    //    console.log(imgUrl);
    firebase
      .firestore()
      .collection("products")
      .doc()
      .set({
        content: product.content,
        id: uuidv4(),
        imgalt: product.imageAlt,
        imgurl: imageUrl,
        member: product.isMember,
        pdtype: product.pdType,
        price: product.price,
        promote: product.isPromote,
        title: product.title,
      })
      .then(() => {
        setProduct({
          content: "",
          isMember: false,
          pdType: "",
          price: "",
          isPromote: false,
          title: "",
          imageFile: null,
          imageAlt: "",
          isUploaded: true,
        });
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <dir style={{ width: "400px", textAlign: "left", marginLeft: "20px" }}>
      <br />
      <div>Upload Products to stores</div>
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="imageFile">1. Product Image: </label>
        <input
          type="file"
          id="imageFile"
          accept="image/gif, image/jpeg, image/png"
          required="Required!"
          pattern="{1,}"
          onChange={(e) => {
            setProduct({
              ...product,
              imageFile: e.target.files[0],
              imageAlt: e.target.files[0].name.split(".", 1),
            });
          }}
        />

        <br />

        <label htmlFor="title"> 2. Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          required="required"
          value={product.title}
          onChange={(e) => {
            setProduct({ ...product, title: e.target.value });
          }}
          style={{ marginTop: "20px" }}
        />
        <p style={{ fontSize: "0.8em", fontWeight: "normal", color: "grey" }}>
          Required minimum 6 words.
        </p>

        <br />

        <label htmlFor="content"> 3. Content: </label>
        <input
          type="text"
          id="content"
          value={product.content}
          onChange={(e) => {
            setProduct({ ...product, content: e.target.value });
          }}
          style={{ marginTop: "20px" }}
        />

        <br />
        <label htmlFor="isMember">4. Member: </label>
        <input
          type="checkbox"
          id="isMember"
          onClick={(e) =>
            setProduct({ ...product, isMember: !product.isMember })
          }
          style={{ marginTop: "20px" }}
        />

        <br />
        <label htmlFor="isPromote">5. Promotion: </label>
        <input
          type="checkbox"
          id="isPromote"
          onClick={(e) =>
            setProduct({ ...product, isPromote: !product.isPromote })
          }
          style={{ marginTop: "20px" }}
        />

        <br />
        <p style={{ marginTop: "20px" }}>6. Product Types: </p>
        <select
          required="Required"
          onChangeCapture={(e) =>
            setProduct({ ...product, pdType: e.target.value })
          }
        >
          {productOptions.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </select>

        <br />
        <label htmlFor="price">7. Price: </label>
        <input
          type="number"
          id="price"
          required="required"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          style={{ marginTop: "20px" }}
        />

        <br />

        <input
          type="submit"
          value="Submit"
          className="contact-btn"
          style={{ marginTop: "20px" }}
        />
      </form>

      <br />
      <p>{progress ? `Product is loading ${progress} %` : null}</p>
      <p style={{ color: "green" }}>
        {product.isUploaded ? "Product upload successful!" : null}
      </p>
      <br />
    </dir>
  );
};

export default UploadProduct;
