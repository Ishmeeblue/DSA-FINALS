import logo from "./logo.png";
import logoname from "./logoname.png";
import girlglossfront from "./girlglossfront.jpeg";
import girlmattefront from "./girlmattefront.jpeg";
import girlglossinfo from "./girlglossinfo.jpeg";
import girlmatteinfo from "./girlmatteinfo.jpeg";
import girlglossswatch from "./girlglossswatch.jpeg";
import girlmatteswatch from "./girlmatteswatch.jpg";
import exchangeicon from "./exchangeicon.png";
import qualityicon from "./qualityicon.png";
import supporting from "./supporting.png";
import staricon from "./staricon.png";
import binicon from "./binicon.png";
import gcash from "./gcash.png";
import maya from "./maya.png";

export const assets = {
    logo,
    logoname,
    girlglossfront,
    girlmattefront,
    girlglossinfo,
    girlmatteinfo,
    girlglossswatch,
    girlmatteswatch,
    exchangeicon,
    supporting,
    qualityicon,
    staricon,
    binicon,
    gcash,
    maya,
}

export const products = [
    {
            _id:"aaaa",
            name:"Love Bline Girl Gloss",
            description:"Love Bline's Girl Gloss contains 8ml that can help moisturize,hydrate, and heal chapped lips. It contains Vitamin E that can give you anti-aging benefits. Achieve a dazzling high-gloss effect in our wide range of shades! ",
            price:"169",
            image:[girlglossfront,girlglossinfo,girlglossswatch],
            shades:["Monix","Chassy","Lori","Fhia","Hannie"]
    },
    {
            _id:"aaab",
            name:"Love Bline Girl Matte",
            description:"Love Bline's Girl Matte contains 8ml that can help moisturize and soothe lips. It evens out lip texture while keeping your lip safe away from sun damage, as well as anti-oxidants and anti-aging benefits. You can surely find your beauty in 5 different shades!",
            price:"169",
            image:[girlmattefront,girlmatteinfo,girlmatteswatch],
            shades:["Ali","Nins","Sera","Gen","Nica"]
    },
    ];