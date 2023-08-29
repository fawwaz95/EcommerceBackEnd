import db from "./conn.mjs";

const  data = async () => {
    console.log("Inside data.js");
    const collection = db.collection("shop");

    const records = [
      {
        _id: "greenYankeesStrapback",
        item: "Yankees Strapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_HATS_0005_SS23AH053_HIGHLIGHTERGREEN1_3200x.jpg?v=1684258909"
      },
      {
        _id: "whiteYankeesStrapback",
        item: "Yankees Strapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_HATS_0007_SS23AH053_BRIGHTWHITE1_3200x.jpg?v=1684258924"
      },
      {
        _id: "greenPoloShirt",
        item: "Polo T-Shirt",
        price: "CAD $170",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_TEES-JACKETS_0009_SS23WT010_GREEN_3200x.jpg?v=1677515375"
      },
      {
        _id: "bluePoloShirt",
        item: "Polo T-Shirt",
        price: "CAD $170",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_TEES-JACKETS_0010_SS23WT010_BLUE_3200x.jpg?v=1677515356"
      },
      {
        _id: "whiteLinenPants",
        item: "Linen Pants",
        price: "CAD $200",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_PANTS_0001_SS23WP017_WHITE1_3200x.jpg?v=1684260774"
      },
      {
        _id: "blackPatekPhilippe",
        item: "Patek Philippe",
        price: "CAD $20 000",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_ACCESORIES__0024_Aime_FW22_Vintage_Accesories_07copy_3200x.jpg?v=1674836072"
      },
      {
        _id: "whiteAimeSnapback",
        item: "Aime Leon Dore Snapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/products/HATS__0007_Aime_SS22_Drop1_Accesories_R2_035copy_3200x.jpg?v=1677183069"
      },
      {
        _id: "navyBrownAimeSnapback",
        item: "Aime Leon Dore Snapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_HATS_0036_Aime_SS23_Drop1_Accessories_Flats33_800x.jpg?v=1677103438"
      },
      {
        _id: "blackAimeBucketHat",
        item: "Aime Leon Dore Bucket Hat",
        price: "CAD $90",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_HATS__0002_Aime_FW22_Drop1_Flats3_015copy_800x.jpg?v=1677184518"
      },
      {
        _id: "knicksAirJordan10",
        item: "Air Jordan 10 NY Knicks",
        price: "CAD $895",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_SHOES_0005_VTG1094_2_800x.jpg?v=1690996355"
      },
      {
        _id: "vntgeDblBreastJacket",
        item: "Vintage Palm Beach Double Breasted Suit",
        price: "CAD $1500",
        src: "https://www.aimeleondore.com/cdn/shop/files/SQUARE_TEES-JACKETS_0005_VTG955_1_800x.jpg?v=1690837002"
      },
      {
        _id: "daxChair",
        item: "Dax Armchair by Charles & Ray Eames",
        price: "CAD $2150",
        src: "https://www.aimeleondore.com/cdn/shop/files/SQUARE_ACCESSORIES_0037_VTG1064_1_800x.jpg?v=1690922588"
      },
    ];

    const delRecord = {};

    const del = await collection.deleteMany(delRecord);
    console.log(`${del.deletedCount} documents deleted`);
    const result = await collection.insertMany(records);
    console.log(`${result.insertedCount} documents inserted`);

}

export default data;