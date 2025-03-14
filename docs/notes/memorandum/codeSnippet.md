---
title: Code Snippet
icon: logos:visual-studio-code
createTime: 2025/03/13 10:37:53
permalink: /memorandum/CodeSnippet/
---
## JavaScript

### 防抖
```javascript
function debounce(func, duration = 500) {
    let timerId;
    return function (...args) {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, duration);
    }
}
```