# 今回実装した機能
* 任意の基数変換をできるようにした

# コードの説明
## useStateの定義
```
    const [sourceBase, setSourceBase] = useState('');
    const [targetBase, setTargetBase] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
```
ここで、動的に画面に表示する箇所を定義している。Reactは、setHogehogeで表示する値を決めることができる。画面に表示するのは、その関数が終了シてからである。

## e.target.valueの挙動
e.target.valueは、htmlのinputタグに入力された値をJavaScriptに持ってくるときに使用する。今回は入力欄が3つあり、それぞれに対してonChange関数を定義している。

## isNaNメソッドについて
isNaN関数(Not a numver, Notに注意!)は、引数に与えられた値が数字であるかどうかチェックする関数である。

## htmlのtype属性について
以前までは、すべてのinputタグに対してtype="number"としていた。しかし、今回は、任意の基数に変換できるようにしているため、純粋な数字(1から9)までの値のみでなく、アルファベットも表示刷る必要がある。よって、変換元の値、変換された値を表示するinputタグ内のtype属性についてはtextを指定してある。こうすることで、値表示を正常に行うことができる。