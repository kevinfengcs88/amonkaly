import React from 'react';
import {
    Container,
    SvgIcon
} from '@mui/material';
import { ReactComponent as Logo1 } from "../../assets/brown-asterisk.svg";
import { ReactComponent as Logo2 } from "../../assets/green-plus.svg";
import { ReactComponent as Logo3 } from "../../assets/orange-circle.svg";
import { ReactComponent as Logo4 } from "../../assets/red-dots.svg";
import { ReactComponent as Logo5 } from "../../assets/yellow-square.svg";

const GameCard = ({

}) => {
    return (
        <Container
            sx={{
                p: 1.5,
                border: 2,
                width: 120,
                direction: 'column',
                borderColor: 'black',
                backgroundColor: 'white'
            }}
        >
            <div className='card-word'>Word</div>
            <br/>
            <div>
                <SvgIcon>
                    <Logo1 />
                </SvgIcon>
            </div>
            
        </Container>
    );
}

export {GameCard};