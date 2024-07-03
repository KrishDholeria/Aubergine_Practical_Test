import React from 'react';
import styles from './CustomDropdownStyles.module.css';
import FunnelIcon from '@rsuite/icons/Funnel';

function CustomDropdown({states}) {
    return (
        <>
            <div className={styles.container}>
                <FunnelIcon className={styles.icon} />
                <select className={styles.dropdown} name="States" id="States" >
                    <option value="0" disabled selected>States</option>
                    {states.map((state, index) => {
                        return <option value={state} key={index+1}>{state}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default CustomDropdown
