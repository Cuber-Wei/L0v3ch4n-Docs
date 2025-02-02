<script setup>
import {loadPyodide} from "pyodide";
import {ref} from "vue";

const props = defineProps({
  code: {
    type: String,
    default: 'print("Hello, World!")'
  },
})

const output = ref("");

output.value = "正在初始化...\n";

// init Pyodide
async function initPyodide() {
  let pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.2/full",
    stdout: (text) => {
      output.value += text + '\n';
    },
    stderr: (text) => {
      output.value += text + '\n';
    }
  });
  output.value = "Python在线环境准备完毕，点击“运行”按钮运行代码！\n";
  return pyodide;
}

let pyodideReadyPromise = initPyodide();

async function evaluatePython() {
  output.value = "";
  let pyodide = await pyodideReadyPromise;
  pyodide.runPython(props.code);
}

const isCollpased = ref(false);

function collpase() {
  isCollpased.value = !isCollpased.value
}

</script>

<template>
  <p @click="collpase">这里是一个Python在线环境，你可以在这里运行Python代码。</p>
  <div id="python-playground" v-if="isCollpased">
    <div class="label-prompt">输入：
      <textarea class="code" rows="10" disabled>{{props.code}}</textarea>
    </div>
    <button @click="evaluatePython">运行</button>
    <br/>
    <div class="label-prompt">输出：
      <textarea class="code" rows="10" disabled>{{output}}</textarea>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: center;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border: 2px solid var(--vp-c-brand-1);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 2.5rem;
  margin-bottom: 0;
}

#python-playground {
  display: flex;
  padding: 1rem;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  border: 1px solid var(--vp-c-brand-soft);
}

.code {
  width: 80%;
  margin: 10px auto;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 1rem;
  padding: 1rem;
  color: var(--vp-c-text-1);
}

.label-prompt {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
}

button {
  border: 2px solid var(--vp-c-brand-soft);
  border-radius: 1rem;
  height: 3rem;
  width: 5rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
}

button:hover {
  background-color: var(--vp-c-brand-soft);
}
</style>