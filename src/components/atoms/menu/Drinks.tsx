import beer from "../../../images/beer.jpeg";
import alchohole from "../../../images/alchohole.jpeg";
import softDrinks from "../../../images/softDrinks.jpeg";

export const Drinks = [
  {
    title: "ビール",
    image: beer,
    menus: [
      {
        name: "瓶ビール",
        price: "650円",
      },
      {
        name: "生ビール（大)",
        price: "750円",
      },
      {
        name: "生ビール（中）",
        price: "550円",
      },
    ],
  },
  {
    title: "その他お酒",
    image: alchohole,
    menus: [
      {
        name: "焼酎（ボトル）",
        price: "",
      },
      {
        name: "JINRO 眞露・宝",
        price: "2500円",
      },
      {
        name: "JINRO 眞露ハーフ",
        price: "1500円",
      },
      {
        name: "八重丸・亀八・いいちこ",
        price: "3000円",
      },
      {
        name: "宝焼酎（大）",
        price: "5000円",
      },
      {
        name: "焼酎、焼酎（梅割り）",
        price: "400円",
      },
      {
        name: "ウィスキー(ハイボール)",
        price: "500円",
      },
      {
        name: "サワー(レモン・梅)",
        price: "450円",
      },
      {
        name: "生酒",
        price: "700円",
      },
      {
        name: "清酒佳撰（大）",
        price: "700円",
      },
      {
        name: "清酒佳撰（小）",
        price: "400円",
      },
      {
        name: "ワイン（赤・白）",
        price: "700円",
      },
      {
        name: "ノンアルコールビール",
        price: "350円",
      },
      {
        name: "サワー（瓶）",
        price: "250円",
      },
    ],
  },
  {
    title: "ソフトドリンク",
    image: softDrinks,
    menus: [
      {
        name: "ウーロン茶・緑茶",
        price: "250円",
      },
      {
        name: "ジュース・サイダー・コーラ",
        price: "250円",
      },
      {
        name: "ミネラルウォーター",
        price: "250円",
      },
      {
        name: "コーラ（ホームサイズ）",
        price: "400円",
      },
    ],
  },
];
