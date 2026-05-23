import {useState} from 'react';

function App() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setBinary(value);

        // 入力値が空の時はリセット
        if (value === '') {
            setDecimal('');
            setError('');
            return;
        }

        // 例外処理
        if(!/^[01]+$/.test(value)) {
            setError('エラー：0と1以外が入力されています。');
            setDecimal('');
            return;
        }
        
        // 変換処理
        setError('');
        const decimalNumber = parseInt(value, 2);
        setDecimal(decimalNumber.toString());
    };
    return (
        <>
        <h1>2進数→10進数</h1>
        <input
            type="text"
            value={binary}
            onChange={handleChange}
            placeholder="2進数を入力してください"
        />
        {error !== '' ? <p>{error}</p> : null}
        <input 
            type="text"
            value={decimal}
            readOnly
            placeholder="10進数が表示されます"
        />
        </>
    );
    }

    // このファイルを読み込んだら、デフォルトでAppコンポーネントを渡すという設定
    export default App;