import { box1, box2, box3 } from "@/app/data/Box/box";
import { IGiftBox } from "./type";

export const dataGiftBox: IGiftBox[] = [
    {
        id: 1,
        srcImage: box1,
        nameBox: "Tet Gift Box",
        detailBox: `Tet Nguyen Dan is not only the moment of transition
                            between the old year and the new year, but also an
                            occasion for people to strengthen family ties,
                            express gratitude and love. A Tet gift box not only
                            has material meaning but also symbolizes sincerity,
                            wishes for health and prosperity for loved ones.`,
        price: 500000,
        TransportationMethod: [1, 2],
    },
    {
        id: 2,
        srcImage: box2,
        nameBox: "Lunar New Year Deluxe",
        detailBox: `Celebrate the Lunar New Year with our Deluxe Gift Box, 
                            filled with premium goodies, symbolic red envelopes, 
                            and a selection of traditional treats. This box is the 
                            perfect way to wish loved ones good fortune and happiness 
                            in the year to come.`,
        price: 750000,
        TransportationMethod: [1],
    },
    {
        id: 3,
        srcImage: box3,
        nameBox: "Spring Festival Gourmet",
        detailBox: `Experience the taste of spring with our Gourmet Box, 
                            a luxurious selection of fine wines, handcrafted sweets, 
                            and savory delights. This carefully curated box brings 
                            the festive spirit to your table, perfect for sharing 
                            with family and friends.`,
        price: 850000,
        TransportationMethod: [2],
    },
];
