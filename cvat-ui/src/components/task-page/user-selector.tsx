// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Select from 'antd/lib/select';

interface Props {
    value: string | null;
    users: any[];
    style?: React.CSSProperties;
    className?: string;
    onChange: (user: string) => void;
}

export default function UserSelector(props: Props): JSX.Element {
    const {
        value, users, onChange, style, className,
    } = props;

    const combinedClassName = className ? `${className} cvat-user-selector` : 'cvat-user-selector';
    return (
        <Select
            style={style}
            defaultValue={value || '—'}
            size='small'
            showSearch
            className={combinedClassName}
            onChange={onChange}
        >
            <Select.Option key='-1' value='—'>
                —
            </Select.Option>
            {users.map(
                (user): JSX.Element => (
                    <Select.Option key={user.id} value={user.username}>
                        {user.username}
                    </Select.Option>
                ),
            )}
        </Select>
    );
}
