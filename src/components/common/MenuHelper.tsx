import React from "react";

const MenuHelper = () => {
    const cssText: string =
        "cursor-pointer hover:text-gray-300 transition-colors font-semibold text-xs";
    return (
        <>
            <p className={`${cssText}`}>HOW IT WORK</p>
            <p className={`${cssText} mr-4`}>SUPPORT</p>
        </>
    );
};

export default MenuHelper;
