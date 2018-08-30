import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StaticDataService {
  countries;
  tags;
  nationalTels;

  constructor() {
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
      "+273",
    ]
  }
}
