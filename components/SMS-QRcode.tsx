import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld11: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [phone, setPhone] = useState(0);

    const changePhone = (event: any) => {
        setPhone(event.target.value);
    }

    const [mymessage, setmymessage] = useState('');

    const changemymessage = (event: any) => {
        setmymessage(event.target.value);
    }
    // setphone fills empty string according to what is typed  
    return (

        <div className="tile is-parent">
      <article className="tile is-child notification is-primary">
        <p className="title">SMS myQRcode</p>
        <p className="subtitle">Explore!!</p>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">Phone Number:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Phone number" onInput={changePhone} />
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label">Message: </label>
                    <div className="control">
                        <textarea className="textarea"  placeholder="Enter Message here" onInput={changemymessage} />
                    </div>
                </div>
            </div>
            <div>
                <br>
                </br>
            </div>
            <div>
                <QRCode value={`SMS: ${phone}:${mymessage}`} size={256} />
            </div>
                
                

        </div>
        </div>
      </article>
    </div>

        
    )
}
export default HelloWorld11;

