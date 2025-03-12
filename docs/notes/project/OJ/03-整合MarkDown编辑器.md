---
title: 整合MarkDown编辑器
createTime: 2025/03/12 21:52:05
permalink: /project/OJ/MarkDownEditorDev/
---

为了方便进行文本编辑，计划封装整合一个MarkDown编辑器方便调用。 选用`ByteMD`框架。

## 安装

```shell
npm install @bytemd/vue-next
```

## 引入

```typescript
// main.ts
import 'bytemd/dist/index.css'
```

```vue
// @/components/MdEditor.vue
<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange"/>
</template>

<script lang="ts" setup>
  import gfm from "@bytemd/plugin-gfm";
  import highlight from "@bytemd/plugin-highlight";
  import math from "@bytemd/plugin-math";

  const plugins = [
    gfm(),
    highlight(),
    math(),
    // Add more plugins here
  ];

  const handleChange = (v: string) => {
    value.value = v;
  };
</script>
```

## 组件间传参

遇到了问题：父组件无法拿到子组件中的值。

解决方法：通过在父组件中定义取值方法，将更新值的方法传入子组件，并在子组件中绑定事件以达成实时更新当前的值。
:::tabs
@tab 父组件

```vue
<template>
  <MdEditor
      :handle-change="onContentChange"
      :value="question.content"
  />
</template>
<script lang="ts" setup>
  const onContentChange = (v: string) => {
    question.value.content = v;
  };
</script>
```

@tab 子组件

```vue
<template>
  <Editor
      :mode="mode"
      :plugins="plugins"
      :value="value"
      @change="handleChange"
  />
</template>
<script lang="ts" setup>
  import gfm from "@bytemd/plugin-gfm";
  import highlight from "@bytemd/plugin-highlight";
  import math from "@bytemd/plugin-math";
  import {defineProps, withDefaults} from "vue";

  /**
   定义组件属性类型
   */
  interface Props {
    value: string;
    mode?: string;
    handleChange: (v: string) => void;
  }

  /**
   给组件指定初始值
   */
  const props = withDefaults(defineProps<Props>(), {
    value: () => "",
    mode: () => "split",
    handleChange: (v: string) => {
      console.log(v);
    },
  });

  const plugins = [
    gfm(),
    highlight(),
    math(),
    // Add more plugins here
  ];
</script>
```

:::
