// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import CameraIcon from '@ant-design/icons/CameraOutlined';

import CVATTooltip from 'components/common/cvat-tooltip';
import { Canvas3d as Canvas } from 'cvat-canvas3d-wrapper';
import { ActiveControl } from 'reducers/interfaces';

interface Props {
    canvasInstance: Canvas;
    activeControl: ActiveControl;
    hideShowContextImage: (hidden: boolean) => void;
    contextImageHide: boolean;
}

function PhotoContextControl(props: Props): JSX.Element {
    const { activeControl, contextImageHide, hideShowContextImage } = props;

    return (
        <CVATTooltip title='Photo context show/hide' placement='right'>
            <CameraIcon
                className={`cvat-move-control
    cvat-control-side-bar-icon-size ${
        activeControl === ActiveControl.PHOTO_CONTEXT ? 'cvat-active-canvas-control' : ''
        }`}
                onClick={(): void => {
                    hideShowContextImage(!contextImageHide);
                }}
            />
        </CVATTooltip>
    );
}

export default React.memo(PhotoContextControl);
