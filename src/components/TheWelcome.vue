<template>
  <div>
    <div>
      <label for="">SpreadSheet</label>
      <div>
        <SpreadSheet />
      </div>
    </div>

    <div>
      <label for="">In-Place Editor</label>
      <div>
        <InPlaceEditor />
      </div>
    </div>

    <div>
      <label for="">Pdf Viewer</label>
      <div>
        <PdfViewer />
      </div>
    </div>

    <div>
      <label for="">Rich Text Editor</label>
      <div>
        <RichTextEditor />
      </div>
    </div>

    <div>
      <label for="">Markdown Editor</label>
      <div>
        <MarkdownEditor />
      </div>
    </div>

    <div>
      <label for="">Word Processor</label>
      <div>
        <WordProcessor />
      </div>
    </div>

    <div>
      <label for=""> Image Editor</label>
      <div>
        <ImageEditor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpreadSheet from './SpreadSheet.vue'
import InPlaceEditor from './InPlaceEditor.vue'
import PdfViewer from './PdfViewer.vue'
import RichTextEditor from './RichTextEditor.vue'
import MarkdownEditor from './MarkdownEditor.vue'
import WordProcessor from './WordProcessor.vue'
import ImageEditor from './ImageEditor.vue'
</script>
