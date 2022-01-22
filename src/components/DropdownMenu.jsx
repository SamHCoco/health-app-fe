import React from 'react';
import { Dropdown } from "semantic-ui-react";

function DropdownMenu({text}, {options}) {
    return (<>
            {text}
            <Dropdown
                selectOnBlur={false}
                placeholder={"Sort By"} 
                selection
                options={options}
            />
            </>
    );
}

export default DropdownMenu;