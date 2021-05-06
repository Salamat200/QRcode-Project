import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld10: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [mylink, setmyLink] = useState('');

    const changemyLink = (event: any) => {
        setmyLink(event.target.value);
    }
    // setmylink changes the empty string based on what we set it to
    return (

        <div className="tile is-parent">
      <article className="tile is-child notification is-primary">
        <p className="title">Url myQRcode</p>
        <p className="subtitle">Explore!!</p>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">URL:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Url" onInput= {changemyLink} />
                </div>
            </div>
            


                {/* Besides size, you can set more properties for QRCode, including logo image overlay. See  https://www.npmjs.com/package/qrcode.react*/}
                <QRCode value={mylink} size={256} fgColor="maroon" />

                {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

            </div>
        </div>
      </article>
    </div>
  

        
       
    )
}
export default HelloWorld10;

