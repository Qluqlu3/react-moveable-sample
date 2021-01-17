import React from 'react';
import Styled from 'styled-components';

import Moveable from './Moveable';

const Wrapper = Styled.div`
	/* .moveable {
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
		} */
}`;

const App = () => {
  return (
    <Wrapper>
      <Moveable />
    </Wrapper>
  );
};

export default App;
