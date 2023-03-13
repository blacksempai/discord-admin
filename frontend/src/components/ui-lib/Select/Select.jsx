import classes from './Select.module.css';
import { useState, useEffect } from 'react';

function Select({list, selectedItemId, selectionChange, isOnlyIcon, isWithIcons}) {
    const [isOpened, setIsOpened] = useState(false);
    const selectedItem = list.find(i => i.id === selectedItemId);

    const closeDropdown = () => setIsOpened(false);

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    const onSelect = (item) => {
        setIsOpened(false);
        selectionChange(item.id);
    }

    return (
        <div className={classes.wrapper} onClick={event => event.stopPropagation()}>
            <div className={classes.dropdown_selected} onClick={() => setIsOpened(isOpened => !isOpened)}>
                {
                    selectedItem ? 
                        <div className={classes.dropdown_selected_item}>
                            {isWithIcons ? <selectedItem.icon/> : null}
                            {
                            isOnlyIcon && isWithIcons ? null : 
                            <div className={classes.dropdown_selected_name}>
                                {selectedItem.name}
                            </div>
                            }
                        </div>
                        :
                        'Loading...'
                }
                <span className={classes.icon + " material-symbols-outlined"} style={isOpened ? {transform: 'rotate(-180deg)'} : null}>
                    expand_more
                </span>
            </div>
            <ul className={classes.dropdown_list} style={isOpened ? {display: 'block'} : {display: 'none'}}>
                {
                list.map(i => 
                <li onClick={() => onSelect(i)}>
                    {isWithIcons ? <i.icon/> : null} {isOnlyIcon && isWithIcons ? '' : i.name}
                </li>
                )
                }
            </ul>
        </div>
    )
}

export default Select;