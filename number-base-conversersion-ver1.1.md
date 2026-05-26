# ver1.1
* 10進数から2進数に変換する機能の追加。

# 10進数から2進数に変換する部分について
```
const decimalNumber = parseInt(value, 10).toString(2);
        setDecimal(decimalNumber.toString());
```
parseInt(value, 10)で、文字列として送られる数字を、10進数のint型へ変換している。その後のtoString(2)で、文字列として2進数に変換している。