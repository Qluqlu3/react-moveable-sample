import React, { FC, useState, useEffect, useCallback, useMemo } from 'react';
import Styled from 'styled-components';

import MoveableBox from 'react-moveable';

import { useInputText } from './useInputText';

const Wrapper = Styled.div`
	.moveable {
		cursor: move;
	}
	.moveable-control-box {
		--moveable-color: #F00;
		.moveable-n, .moveable-s {
			width: 26px;
			height: 10px;
			border-radius: 0;
			margin-top: -5px;
			margin-left: -13px;
			background-color: #FFF;
			border: solid 1px #F00;
		}
		.moveable-w, .moveable-e {
			width: 10px;
			height: 26px;
			border-radius: 0;
			margin-top: -13px;
			margin-left: -5px;
			background-color: #FFF;
			border: solid 1px #F00;
		}
		.moveable-rotation-control {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			margin-left: -5px;
		}
}`;

const Box = Styled.div`
	width: 100px;
	height: 100px;
	}
`;

const TextInput = Styled.input`

`;

const Moveable: FC = () => {
  const [target, setTarget] = useState(document.querySelector('.moveable'));
  const { text, onChange } = useInputText('');

  useEffect(() => {
    setTarget(document.querySelector('.moveable'));
  }, []);

  return (
    <Wrapper>
      <TextInput type='text' onChange={useMemo(() => onChange, [text])} />
      <Box className={'moveable'}>{text}</Box>
      <MoveableBox
        //@ts-ignore
        target={target}
        draggable={true}
        scalable={true}
        rotatable={true}
        origin={false}
        throttleRotate={0}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onScale={(e) => {
          e.target.style.transform = e.transform;
        }}
        onRotate={(e) => {
          e.target.style.transform = e.transform;
        }}
      />
    </Wrapper>
  );
};

export default React.memo(Moveable);
