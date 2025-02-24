import { box1, box2, box3 , boxDetail1, boxDetail2 } from "@/app/data/Box/box";
import { IGiftBox } from "./type";

export const dataGiftBox: IGiftBox[] = [
    {
        id: 1,
        srcImage: box1,
        srcImagedetail: boxDetail1,
        nameBox: "GiftBox.TetGiftBox.Name",
        detailBox: "GiftBox.TetGiftBox.Detail",
        buttonDetail: "GiftBox.TetGiftBox.Detail Product",
        price: 350000,
        TransportationMethod: [1, 2],
    },
    {
        id: 2,
        srcImage: boxDetail2,
        srcImagedetail: boxDetail2,
        nameBox: "GiftBox.LunarNewYearDeluxe.Name",
        detailBox: "GiftBox.LunarNewYearDeluxe.Detail",
        buttonDetail: "GiftBox.TetGiftBox.Detail Product",
        price: 800000,
        TransportationMethod: [1],
    },
    {
        id: 3,
        srcImage: box3,
        srcImagedetail: box3,
        nameBox: "GiftBox.SpringFestivalGourmet.Name",
        detailBox: "GiftBox.SpringFestivalGourmet.Detail",
        buttonDetail: "GiftBox.TetGiftBox.Detail Product",
        price: 400000,
        TransportationMethod: [2],
    },
];
