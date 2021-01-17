import React, { FC, useState, useEffect, useCallback, useMemo } from 'react';
import Styled from 'styled-components';

import MoveableBox from 'react-moveable';

import { useInputText } from './useInputText';

const Wrapper = Styled.div<{ color: string }>`
	height: 100%;
	display: flex;
	justify-content: start;
	.moveable {
		cursor: move;
		background-color: ${(props) => '#' + props.color}
	}
	.moveable-control-box {
		--moveable-color: #F00;
		.moveable-n, .moveable-s {
			width: 26px;
			height: 8px;
			border-radius: 0;
			margin-top: -4px;
			margin-left: -13px;
			background-color: #FFF;
			border: solid 1px #F00;
		}
		.moveable-w, .moveable-e {
			width: 8px;
			height: 26px;
			border-radius: 0;
			margin-top: -13px;
			margin-left: -4px;
			background-color: #FFF;
			border: solid 1px #F00;
		}
		.moveable-rotation-control {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			margin-left: -5px;
		}
		.moveable-nw, .moveable-sw, .moveable-ne, .moveable-se {
			border: none;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			margin-top: -5px;
			margin-left: -5px;
		}
}`;

const Box = Styled.div`
	width: 100px;
	height: 100px;
	font-size: 13px;
	font-weight: bold;
	}
`;

const FormBox = Styled.div`
	margin: 10px;
	background-color: #DDD;
`;

const Label = Styled.label`
	font-size: 15px;
`;

const TextInput = Styled.input`
	width: 100px;
	border: solid 1px #AAA;
	border-radius: 5px;
`;

const MoveableArea = Styled.div`
	width: 100%;
	height: 1000px;
	border: solid 2px #333;
`;

const Moveable: FC = () => {
  const [target, setTarget] = useState(document.querySelector('.moveable'));
  const { text, onChange } = useInputText('');
  const { text: color, onChange: onChangeColor } = useInputText('');

  useEffect(() => {
    setTarget(document.querySelector('.moveable'));
  }, []);

  return (
    <Wrapper color={color}>
      <FormBox>
        <FormBox>
          <Label>テキスト：</Label>
          <TextInput type='text' onChange={useMemo(() => onChange, [text])} />
        </FormBox>
        <FormBox>
          <Label>背景色：#</Label>
          <TextInput type='text' onChange={useMemo(() => onChangeColor, [color])} />
        </FormBox>
      </FormBox>
      <MoveableArea>
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
      </MoveableArea>
    </Wrapper>
  );
};

export default React.memo(Moveable);
