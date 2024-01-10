// * Modules * //
import React from 'react';

// * Exports * //


// * Components * //
interface IconCategoryLabelProps {
    iconName: string;
    hex: string;
}

export default function IconCategoryLabel({ iconName, hex }: IconCategoryLabelProps) {


    return (
        <div className="rounded-md border px-2 py-1 flex justify-center items-center" style={{ backgroundColor: hex }}>
            <i
                className={`ph ${iconName} text-2xl text-white transition-all`}
                style={{ height: '30px' }}
            ></i>
        </div>
    )

}