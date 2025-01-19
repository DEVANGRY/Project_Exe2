import { Box, Gem, Heart } from "lucide-react";
import { ISponsor } from "./type";

export const sponsorData: ISponsor[] = [
    {
        id: 1,
        icon: Box,
        detail: "Exclusive Loot",
    },
    {
        id: 2,
        icon: Gem,
        detail: "A surprise every month",
    },
    {
        id: 3,
        icon: Heart,
        detail: "Delivered to your door",
    },
];
