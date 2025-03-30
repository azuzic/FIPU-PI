<script setup>
import { ref, reactive } from "vue";
import MonacoEditor from 'monaco-editor-vue3';

const editorInstance = ref(null);

const wordWrap = ref(false);
const lineNumbers = ref(true);

defineProps({
    code: String,
})

const options = reactive({
    tabSize: 2,
    insertSpaces: true,
    autoIndent: 'full',
    minimap: { enabled: false },
    readOnly: true,
    fontSize: 16,
    automaticLayout: true,
})

function handleFontSizeChange(event) {
    if (event.ctrlKey) {
        event.preventDefault();
        const delta = event.deltaY > 0 ? -1 : 1;
        options.fontSize = Math.max(10, Math.min(40, options.fontSize + delta));
    }
}

function onEditorMount(editor) {    
    editorInstance.value = editor;
    
    const editorDomNode = editor.getDomNode();
    if (editorDomNode) editorDomNode.addEventListener('wheel', handleFontSizeChange);
}
</script>

<template>
    <div class="flex flex-col w-full h-full overflow-y-auto">
        <div class="flex gap-1 items-center">            
            <h2 class="text-lg my-2">Kôd:</h2>
            <span class="text-sm ml-4 flex gap-4 items-center">
                <span>Word Wrap: <input type="checkbox" v-model="wordWrap"/></span>
                <span>Line Numbers: <input type="checkbox" v-model="lineNumbers"/></span>
            </span>
        </div>
        
        <div class="grow overflow-y-auto">
            <MonacoEditor
                theme="vs"
                language="html"
                :options="{ ...options, wordWrap: wordWrap, lineNumbers: lineNumbers }"
                :value="code"
                @editorDidMount="onEditorMount"
                class="w-full h-full resize-y border border-zinc-700/25 rounded"
            />
        </div>
    </div>
</template>