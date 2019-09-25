import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";	
import { Container, Button, Form, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { sendTextAction } from '../../redux/actions/send';
import { textResults } from '../../redux/selectors'

const StyledForm = styled(Form)`
	width: 100%;
	position: absolute;
	bottom: 0;
`;

export default () => {
	const [sendText, setSendText] = useState('');
	const dispatch = useDispatch();
	const textResultRef = useRef();
	textResultRef.current = useSelector( state => textResults(state));

	if((textResultRef.current) &&  (textResultRef.current !== sendText)){
		textResultRef.current = undefined;
	}

	useEffect ( () => {
		if(sendText && !textResultRef.current) {
			dispatch(sendTextAction({ sendText }))
		}
		else {
			if(textResultRef.current){
				var ul = document.getElementById("texts");
				var li = document.createElement("li");		
				li.appendChild(document.createTextNode(textResultRef.current));
				ul.appendChild(li);
				textResultRef.current = undefined;
			}
		}

	});

	const handleSendTextClick = event => {
		event.preventDefault();
		setSendText(document.getElementById('t').value);
		document.getElementById('t').value='';
		return false;
	};

	return(
		<Container>
			<ul id="texts"></ul>
			<StyledForm>
				<Form.Row>
					<Col xs={10}>
						<Form.Control
							id="t" 
							type="text" 
							placeholder="Ingrese texto y haga click en enviar..."
							required
						/>
					</Col>
					<Col>
						<Button 
							variant="primary" 
							onClick={handleSendTextClick}
						>Enviar</Button>
					</Col>
				</Form.Row>
			</StyledForm>
		</Container>
	)
};
