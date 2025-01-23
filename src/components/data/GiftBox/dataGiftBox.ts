import { box1, box2, box3 } from "@/app/data/Box/box";
import { IGiftBox } from "./type";

export const dataGiftBox: IGiftBox[] = [
    {
        id: 1,
        srcImage: box1,
        nameBox: "GiftBox.TetGiftBox.Name",
        detailBox: "GiftBox.TetGiftBox.Detail",
        price: 500000,
        TransportationMethod: [1, 2],
    },
    {
        id: 2,
        srcImage: box2,
        nameBox: "GiftBox.LunarNewYearDeluxe.Name",
        detailBox: "GiftBox.LunarNewYearDeluxe.Detail",
        price: 750000,
        TransportationMethod: [1],
    },
    {
        id: 3,
        srcImage: box3,
        nameBox: "GiftBox.SpringFestivalGourmet.Name",
        detailBox: "GiftBox.SpringFestivalGourmet.Detail",
        price: 850000,
        TransportationMethod: [2],
    },
];
