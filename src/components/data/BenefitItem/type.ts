import React from "react";

export interface IBenefitItem {
    id?: number | string;
    icon: React.ElementType;
    name: string;
    detail: string;
}
