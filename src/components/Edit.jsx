import { useState } from "react";

export default function Edit(info) {
    const [editObject, setEditObject] = useState({});
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState();
    const [input4, setInput4] = useState("");
    const [input5, setInput5] = useState("");
    const [input6, setInput6] = useState();
    const [input7, setInput7] = useState("");
    const [input8, setInput8] = useState();
    const [input9, setInput9] = useState();
    const [input10, setInput10] = useState();
    const [input11, setInput11] = useState();
    async function postData() {
        const jsonObj = new Object();
        jsonObj.input1 = input1;
        jsonObj.input2 = input2;
        jsonObj.input3 = input3;
        jsonObj.input4 = input4; 
        jsonObj.input5 = input5;
        jsonObj.input6 = input6;
        jsonObj.input7 = input7;
        jsonObj.input8 = input8;
        jsonObj.input9 = input9;
        jsonObj.input10 = input10;
        jsonObj.input11 = input11;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Origin', '*');

        var raw = JSON.stringify({
            "input1": input1,
            "input2": input2,
            "input3": input3,
            "input4": input4,
            "input5": input5,
            "input6": input6,
            "input7": input7,
            "input8": input8,
            "input9": input9,
            "input10": input10,
            "input11": input11
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://blo-backend.onrender.com/blo/", requestOptions)
            .then(response => response.json())
            .then(result => alert(result))
            .catch(error => console.log('error', error));
    }
    console.log(editObject);
    return (
        <div className="edit-section">
            <h3 className="edit-heading">{info.heading}</h3>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">वी0एल0ओ0 का नाम</div>
                    <input type="text" className="edit-info-input" onChange={(e)=>{setInput1(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">पदनाम</div>
                    <input type="text" className="edit-info-input" onChange={(e)=>{setInput2(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">मतदेय स्थल की संख्या</div>
                    <input type="tel" className="edit-info-input" onChange={(e)=>{setInput3(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">मतदेय स्थल का नाम</div>
                    <input type="text" className="edit-info-input" onChange={(e)=>{setInput4(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">मतदेय स्थल में सम्मिलित अनुभाग का नाम</div>
                    <input type="text" className="edit-info-input" onChange={(e)=>{setInput5(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">मतदेय स्थल में सम्मिलित अनुभाग का संख्या</div>
                    <input type="tel" className="edit-info-input" onChange={(e)=>{setInput6(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">दिनांक</div>
                    <input type="date" className="edit-info-input" onChange={(e)=>{setInput7(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">मतदेय स्थल में सम्मिलित मकानो (परिवारों) की संख्या</div>
                    <input type="tel" className="edit-info-input" onChange={(e)=>{setInput8(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">वी0एल0ओ0 द्वारा सत्यापित मतदेय स्थल मैं सम्मिलित मकानो (परिवारों) की संख्या</div>
                    <input type="tel" className="edit-info-input" onChange={(e)=>{setInput9(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">मतदेय स्थल में मतदाताओं की कुल संख्या</div>
                    <input type="tel" className="edit-info-input" onChange={(e)=>{setInput10(e.target.value)}} />
                </div>
            </div>
            <div className="edit-info-section">
                <div className="edit-info">
                    <div className="edit-info-head">वी0एल0ओ0 द्वारा सत्यापित मतदाताओं की संख्या</div>
                    <input type="tel" className="edit-info-input" onChange={(e)=>{setInput11(e.target.value)}} />
                </div>
            </div>
            <button className="edit-upload-button" onClick={()=>{postData()}}>UPLOAD</button>
        </div>
    )
}