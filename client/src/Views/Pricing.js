import React, { useContext } from 'react';
import { Theme } from '../Context/Theme';

/*Components*/
import Card from '../Components/Card/Card';
import BtnSwitch from '../Components/Button/SwitchMode';
import BasicI from '../Components/Illustrations/Basic';
import AdvancedI from '../Components/Illustrations/Advanced';
import PremiunI from '../Components/Illustrations/Premiun';
/*Components*/

import './scss/pricing.scss';

const Pricing = () => {
    const theme = useContext(Theme);
    const cards = [
        { 
            title: 'Basic', 
            img:  <BasicI/>, 
            price: '15',
            amountServices: [1,30, 512, '', '']
        },
        { 
            title: 'Advanced', 
            img: <AdvancedI/>, 
            price: '25',
            amountServices: [1,30, 1, 'yes', 'yes']
        },
        { 
            title: 'Premiun', 
            img: <PremiunI/>,
            price: '35',
            amountServices: [1,30, 'Unlimit', 'yes', 'yes']
        }
    ]; 
    return (
        <div className={`pricing-page`}  style={theme.themeMode}>
            <div className="header">
                <p>Our Prices</p>
                <BtnSwitch/>
            </div>
            <div className="cards">
                {
                    cards.map((item, i) => {
                        return (
                            <Card 
                            title={item.title} 
                            price={item.price} 
                            amountServices={item.amountServices} 
                            key={i}>
                                {item.img}
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pricing;
