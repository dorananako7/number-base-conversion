import {useState} from 'react';

function BaseConverter() {
    const [sourceBase, setSourceBase] = useState('');
    const [targetBase, setTargetBase] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleSourceBaseChange = (e) => {
        setSourceBase(e.target.value);
        setInputValue('');
        setResult('');
        setError('');
    };

    const handleTargetBaseChange = (e) => {
        setTargetBase(e.target.value);
        setInputValue('');
        setResult('');
        setError('');
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if(value === '') {
            setResult('');
            setError('');
            return ;
        }

        const decimalNumber = parseInt(value, parseInt(sourceBase));

        if(isNaN(decimalNumber)) {
            setError('エラー：変換できない文字が含まれています');
            setResult('');
            return ;
        }

        setError('');
        const resultString = decimalNumber.toString(parseInt(targetBase));
        setResult(resultString);
    };

    return(
        <>
        <h2>基数変換web.com</h2>
        {/* 変換元の基数 */}
        <input
            type="number"
            value={sourceBase}
            onChange={handleSourceBaseChange}
            min="2"
            max="36"
            placeholder="変換元の基数"
        />
        {/* 変換先の基数 */}
        <input
            type="number"
            value={targetBase}
            onChange={handleTargetBaseChange}
            min="2"
            max="36"
            placeholder="変換先の基数"
        />
        {/* 変換元の値 */}
        <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="変換元の値"
        />
        {/* 結果表示 */}
        <input
            type="text"
            value={result}
            readOnly
            placeholder="結果"
        />
        {error != '' ? <p>{error}</p> : null}
        </>
    );
}
export default BaseConverter;