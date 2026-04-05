---
url: /LCR/LCR002/index.md
---
## [题干](https://leetcode.cn/problems/JFETK5/description/?envType=problem-list-v2\&envId=G25w0aD1)

给定两个 01 字符串 `a` 和 `b` ，请计算它们的和，并以二进制字符串的形式输出。

输入为 **非空** 字符串且只包含数字 `1` 和 `0`。

示例 1：

```
输入: a = "11", b = "10"
输出: "101"
```

示例 2：

```
输入: a = "1010", b = "1011"
输出: "10101"
```

提示：

* 每个字符串仅由字符 `'0'` 或 `'1'` 组成。
* `1 <= a.length, b.length <= 10^4`
* 字符串如果不是 `"0"` ，就都不含前导零。

## 思路

做算式模拟，从低位开始对齐后计算。

## 代码

:::tabs
@tab C++

```cpp
class Solution {
public:
    string addBinary(string a, string b) {
        string res = "";

        int i1 = a.length() - 1, i2 = b.length() - 1;
        int carry = 0;
        while (i1 >= 0 || i2 >= 0) {
            int x = i1 >= 0 ? a[i1] - '0' : 0;
            int y = i2 >= 0 ? b[i2] - '0' : 0;

            int sum = x + y + carry;
            res.push_back('0' + sum % 2);
            carry = sum / 2;

            i1--;
            i2--;
        }
        if (carry != 0) res.push_back('0' + carry);
        reverse(res.begin(), res.end());
        return res;
    }
};
```

@tab Python3

```python
# 利用Python的高精度计算
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]
# 竖式模拟
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res = ''
        i1, i2, carry = len(a) - 1, len(b) - 1, 0
        while i1 >= 0 or i2 >= 0:
            x = ord(a[i1]) - ord('0') if i1 >= 0 else 0
            y = ord(b[i2]) - ord('0') if i2 >= 0 else 0

            sum = x + y + carry
            res += str(sum % 2)
            carry = sum // 2

            i1, i2 = i1 - 1, i2 - 1
        if carry != 0: res += str(carry)
        return res[::-1]
```

@tab JavaScript

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  let res = ''
  let i1 = a.length - 1
  let i2 = b.length - 1
  let carry = 0
  while (i1 >= 0 || i2 >= 0) {
    const x = i1 >= 0 ? a[i1] - '0' : 0
    const y = i2 >= 0 ? b[i2] - '0' : 0

    const sum = x + y + carry
    res += (sum % 2)
    carry = Math.floor(sum / 2)

    i1--
    i2--
  }
  if (carry)
    res += carry
  return res.split('').reverse().join('')
}
```

@tab Go

```go
func addBinary(a string, b string) string {
	i1 := len(a) - 1
	i2 := len(b) - 1
	carry := 0
	res := make([]byte, 0)
	for i1 >= 0 || i2 >= 0 {
		x := 0
		if i1 >= 0 {
			x = int(a[i1] - '0')
		}
		y := 0
		if i2 >= 0 {
			y = int(b[i2] - '0')
		}

		sum := x + y + carry
		res = append(res, byte(sum%2)+'0')
		carry = sum / 2

		i1--
		i2--
	}
	if carry > 0 {
		res = append(res, '1')
	}
	for i, j := 0, len(res)-1; i < j; i, j = i+1, j-1 {
		res[i], res[j] = res[j], res[i]
	}
	return string(res)
}
```

:::
