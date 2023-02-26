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
    cardType
}) => {

    let design;
    const logos = [<Logo1 />, <Logo2 />, <Logo3 />, <Logo4 />, <Logo5 />];
    let rand = Math.floor(Math.random()*5);

    if (cardType != 'pile') {
        design = <div>
            <div className='card-word'>Word</div>
            <br/>
            <div>
                <SvgIcon
                    className='symbol'
                    sx={{
                        borderColor: 'black'
                    }}>
                    {logos[rand]}
                </SvgIcon>
            </div>
        </div>
        console.log('rand created: ' + rand);
    }
    else {
        design = <div className='card-back'>
            Amonkaly
        </div>
    }

    const card = <Container
        sx={{
            p: 1.2,
            border: 2,
            width: 120,
            height: 150,
            borderRadius: 2.5,
            direction: 'column',
            borderColor: 'black',
            backgroundColor: 'white',
            justify: 'center'
        }}>
        {design}
    </Container>

    return (
        card
    );
}

export {GameCard};