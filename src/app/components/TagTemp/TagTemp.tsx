import React from 'react';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { Select, Tag } from 'antd';
import styles from './TagTemp.module.css'

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

const tagRender = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ color: "red" }}
        >
        </Tag>
    );
};

const App: React.FC = () => (

    <Tag
        className={styles.tag}
        style={{ color: "white" }}
    >
        <a className={styles.anter}>Dunno</a>
    </Tag>
);

export default App;