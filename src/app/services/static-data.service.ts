import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StaticDataService {
  categories;
  countries;
  tags;
  brands;
  nationalTels;

  constructor() {
    this.categories = [
      {
        id: 1,
        name: "Skin Care",
        children: [
          {
            id: 2,
            name: "Cleansers",
            children: [
              { id: 3, name: "Face Wash & Cleansers" },
              { id: 4, name: "Cleansing Oils" },
              { id: 5, name: "Cleansing Wipes" },
              { id: 6, name: "Exfoliators& Scrubs" },
              { id: 7, name: "Toners " },
              { id: 8, name: "Makeup Removers" }
            ]
          },
          {
            id: 9,
            name: "Moisturizers",
            children: [
              { id: 10, name: "Face Moisturizer" },
              { id: 11, name: "Face Oil" },
              { id: 12, name: "Essences & Serums & Ampoules" },
              { id: 13, name: "Face Mist" },
              { id: 14, name: "Eye Cream" }
            ]
          },
          {
            id: 15,
            name: "Face Masks",
            children: [
              { id: 16, name: "Sheet Mask" },
              { id: 17, name: "Wash Off Mask" },
              { id: 18, name: "Peel Off Mask" },
              { id: 19, name: "Sleeping Masks And Others" }
            ]
          },
          {
            id: 20,
            name: "Sun Care",
            children: [{ id: 21, name: "Sun Care" }]
          },
          {
            id: 22,
            name: "Face",
            children: [
              { id: 23, name: "Foundation" },
              { id: 24, name: "Cushion" },
              { id: 25, name: "BB&CC Cream" },
              { id: 26, name: "Concealer" },
              { id: 27, name: "Face Primer" },
              { id: 28, name: "Highlighter & Contouring" },
              { id: 29, name: "Setting Powder & Spray" },
              { id: 30, name: "Blush" }
            ]
          }
        ]
      },
      {
        id: 31,
        name: "Make Up",
        children: [
          {
            id: 32,
            name: "Eye",
            children: [
              { id: 33, name: "Eyebrow" },
              { id: 34, name: "Eyeshadow" },
              { id: 35, name: "Eye Liner" },
              { id: 36, name: "Mascara & Eyelash Treatment" }
            ]
          },
          {
            id: 37,
            name: "Lip",
            children: [
              { id: 38, name: "Lipstick" },
              { id: 39, name: "Lip Tint" },
              { id: 40, name: "Lip Gloss" },
              { id: 41, name: "Lip Balm & Treatment" }
            ]
          }
        ]
      },
      {
        id: 42,
        name: "Others",
        children: [
          { id: 43, name: "Body", children: [{ id: 44, name: "Body" }] },
          {
            id: 45,
            name: "Hand & Foot Care",
            children: [{ id: 46, name: "Hand & Foot Care" }]
          },
          {
            id: 47,
            name: "Hair",
            children: [
              { id: 48, name: "Shampoo" },
              { id: 49, name: "Conditioner & Treatment" },
              { id: 50, name: "Others" }
            ]
          },
          { id: 51, name: "Nail", children: [{ id: 52, name: "Nail" }] },
          {
            id: 53,
            name: "Fragrances",
            children: [{ id: 54, name: "Fragrances" }]
          },
          {
            id: 55,
            name: "Others",
            children: [{ id: 56, name: "Others" }]
          }
        ]
      }
    ];

    this.countries = [
      "USA",
      "China",
      "UK",
      "Republic of  Korea",
      "Japan",
      "Spain",
      "Brazil",
      "Russia",
      "Tailand",
      "Vietnam",
      "Singapole",
      "Phillipine"
    ];

    this.tags = [
      "Sweat",
      "Warm",
      "Cool",
      "Lovely",
      "Girl Crush",
      "Dandy",
      "Gentle",
      "Sexy",
      "Cuty",
      "Pink",
      "Black",
      "White Blue",
      "Black Pink",
      "Kyo Kyo KyoHo",
      "Sweat1",
      "Warm1",
      "Cool1",
      "Lovel1y",
      "Girl C1rush",
      "Dand1y",
      "Gent1le",
      "Sex1y",
      "Cut1y",
      "Pin1k",
      "Bla1ck",
      "Whi1te Blue",
      "Blac1k Pink",
      "Kyo K1yo KyoHo",
      "Swea2t",
      "Kyo K2yo KyoHo",
      "Swea3t",
      "Warm3",
      "Cool3",
      "Love3ly",
      "Girl3 Crush",
      "Dand3y",
      "Gent3le",
      "Sexy3",
      "Cut3y",
      "Pin3k",
      "Bla3ck",
      "Whit3e Blue",
      "Blac3k Pink",
      "Kyo K3yo KyoHo",
      "Swea4t"
    ];

    this.brands = [
      "L'Oreal",
      "AMORE PACIFIC",
      "MAC",
      "MISSHA",
      "THE FACE SHOP",
      "Lsdff",
      "asdfwe",
      "csdcsdac",
      "qwrqwer"
    ];

    this.nationalTels = [
      "+82",
      "+01",
      "+931",
      "+773",
      "+182",
      "+201",
      "+331",
      "+473",
      "+842",
      "+021",
      "+113",
      "+273"
    ];
  }
}
