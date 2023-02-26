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
    cardType, symbol, word
}) => {

    console.log('here:' + word);

    let design;
    const logos = [<Logo1 />, <Logo2 />, <Logo3 />, <Logo4 />, <Logo5 />];

    if (cardType != 'pile') {
        design = <div>
            <div className='card-word'>{word}</div>
            <br/><br/>
            <div>
                <SvgIcon
                    className='symbol'
                    sx={{
                        borderColor: 'black'
                    }}>
                    {logos[symbol]}
                </SvgIcon>
            </div>
        </div>
        //console.log('rand created: ' + rand);
    }
    else {
        design = <div className='card-back'>
            Amonkaly
        </div>
    }

    const card = <Container
        sx={{
            p: 1.5,
            border: 2,
            width: '12vw',
            height: '16vw',
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