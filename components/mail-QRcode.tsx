import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld11: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [mail, setMail] = useState('');

    const changeMail = (event: any) => {
        setMail(event.target.value);
    }



    const [Topic, setTopic] = useState('');

    const changeTopic = (event: any) => {
        setTopic(event.target.value);
    }


    const [body, setBody] = useState('');

    const changeBody = (event: any) => {
        setBody(event.target.value);
    }

    // setting phone will fill empty string according to what is typed 
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
                <p className="title">Mail myQRcode</p>
                <p className="subtitle">Explore!!</p>
                <div className="content">
                    <div>
                        <div className="field">
                            <label className="label">Mail To:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Enter Receipient" onInput={changeMail} />
                            </div>
                        </div>

                        <div>
                            <div className="field">
                                <label className="label">Topic: </label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Enter Subject" onInput={changeTopic} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="field">
                                <label className="label"> Body: </label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Enter Mail" onInput={changeBody} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <br></br>
                        </div>

                        <div>
                            {<QRCode value={`mailto: ${mail}?subject=${Topic}&body=${body}`} size={256} fgColor="maroon" />}
                        </div>

                    </div>

                </div>
            </article>
        </div>

    )
}
export default HelloWorld11;

