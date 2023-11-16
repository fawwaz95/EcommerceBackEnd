const db = require("./conn.js");

const data = async () => {
    const collection = db.collection("shop");
    const records = [
      {
        _id: "greenYankeesStrapback",
        item: "Yankees Strapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_HATS_0005_SS23AH053_HIGHLIGHTERGREEN1_3200x.jpg?v=1684258909",
        desc: "Green Yankees Strapback. Embroidered Yankees logo at center front. Adjustable strap back with antique brass adjuster. 100% Cotton.",
      },
      {
        _id: "whiteYankeesStrapback",
        item: "Yankees Strapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_HATS_0007_SS23AH053_BRIGHTWHITE1_3200x.jpg?v=1684258924",
        desc: "White Yankees Strapback. Embroidered Yankees logo at center front. Adjustable strap back with antique brass adjuster. 100% Cotton.",
      },
      {
        _id: "greenPoloShirt",
        item: "Polo T-Shirt",
        price: "CAD $170",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_TEES-JACKETS_0009_SS23WT010_GREEN_3200x.jpg?v=1677515375",
        desc: "Green polo. Made with Worsted Merino Wool. All over jacquard stitch.  Full needle rib placket with mother of pearl buttons. Full milano collar stand. 100% Wool.",
      },
      {
        _id: "bluePoloShirt",
        item: "Polo T-Shirt",
        price: "CAD $170",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_TEES-JACKETS_0010_SS23WT010_BLUE_3200x.jpg?v=1677515356",
        desc: "Blue polo. Made with Worsted Merino Wool. All over jacquard stitch.  Full needle rib placket with mother of pearl buttons. Full milano collar stand. 100% Wool.",
      },
      {
        _id: "whiteLinenPants",
        item: "Linen Pants",
        price: "CAD $200",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_PANTS_0001_SS23WP017_WHITE1_3200x.jpg?v=1684260774",
        desc: "White linen trouser. Relax fit, 100% linen. Air dry only, wash inside out."
      },
      {
        _id: "blackPatekPhilippe",
        item: "Patek Philippe",
        price: "CAD $20 000",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_ACCESORIES__0024_Aime_FW22_Vintage_Accesories_07copy_3200x.jpg?v=1674836072",
        desc: "Rare 1977 Patek Philippe. Multi-color watch. Reference 3582. Pre-owned; Good condition. 18k gold watch & buckle.",
      },
      {
        _id: "whiteAimeSnapback",
        item: "Aime Leon Dore Snapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/products/HATS__0007_Aime_SS22_Drop1_Accesories_R2_035copy_3200x.jpg?v=1677183069",
        desc: "White Aime Leon Dore Snapback. Embroidered Aime Leon Dore logo at center front. Classic grass green brim. Adjustable strap back with antique brass adjuster.",
      },
      {
        _id: "navyBrownAimeSnapback",
        item: "Aime Leon Dore Snapback",
        price: "CAD $70",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_HATS_0036_Aime_SS23_Drop1_Accessories_Flats33_800x.jpg?v=1677103438",
        desc: "Navy and Brown Aime Leon Dore Snapback. Aime Leon Dore logo at center front. Navy top and brown brim. Adjustable strap back with antique brass adjuster.",
      },
      {
        _id: "blackAimeBucketHat",
        item: "Aime Leon Dore Bucket Hat",
        price: "CAD $90",
        src: "https://www.aimeleondore.com/cdn/shop/products/4x5_HATS__0002_Aime_FW22_Drop1_Flats3_015copy_800x.jpg?v=1677184518",
        desc: "Black bucket hat. Flower stitching at top center front. 100% cotton. Air Dry only, cold wash inside out.",
      },
      {
        _id: "knicksAirJordan10",
        item: "Air Jordan 10 NY Knicks",
        price: "CAD $895",
        src: "https://www.aimeleondore.com/cdn/shop/files/4x5_SHOES_0005_VTG1094_2_800x.jpg?v=1690996355",
        desc: "OG 1995 Nike Air Jordan 10 'New York Knicks'. White/black Jordan 10. Designed by Nike. Original box. Pristine condition.",
      },
      {
        _id: "vntgeDblBreastJacket",
        item: "Vintage Palm Beach Double Breasted Suit",
        price: "CAD $1500",
        src: "https://www.aimeleondore.com/cdn/shop/files/SQUARE_TEES-JACKETS_0005_VTG955_1_800x.jpg?v=1690837002",
        desc: "Rare 1940s White suit. Designed by Palm Beach. 2 pieces. Pre-owened, Pristine Condition. Cold wash delicate, air dry only."
      },
      {
        _id: "daxChair",
        item: "Dax Armchair by Charles & Ray Eames",
        price: "CAD $2150",
        src: "https://www.aimeleondore.com/cdn/shop/files/SQUARE_ACCESSORIES_0037_VTG1064_1_800x.jpg?v=1690922588",
        desc: "Rare 1960s Dax Armchair. Designed by Charles & Ray Eames for Herman Miller. 2 pieces. Pre-owned; Good condition. Leather, fiberglass, & Aluminum. Made in USA."
      },
    ];

    const delRecord = {};

    const del = await collection.deleteMany(delRecord);
    console.log(`${del.deletedCount} documents deleted`);
    const result = await collection.insertMany(records);
    console.log(`${result.insertedCount} documents inserted`);
}

module.exports = data;
