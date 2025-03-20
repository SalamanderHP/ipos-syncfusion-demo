<template>
  <div>
    <h1>IPOS SYNCFUSION DEMO</h1>
    <div class="mb-4">
      <label class="main-label" for="">SpreadSheet</label>
      <div>
        <SpreadSheet />
      </div>
    </div>

    <div class="mb-4">
      <label class="main-label" for="">In-Place Editor</label>
      <div>
        <InPlaceEditor />
      </div>
    </div>

    <div class="mb-4">
      <label class="main-label" for="">Pdf Viewer</label>
      <div>
        <PdfViewer />
      </div>
    </div>

    <div class="mb-4">
      <label class="main-label" for="">Rich Text Editor</label>
      <div>
        <RichTextEditor />
      </div>
    </div>

    <div class="mb-4">
      <label class="main-label" for="">Markdown Editor</label>
      <div>
        <MarkdownEditor />
      </div>
    </div>

    <div class="mb-4">
      <label class="main-label" for="">Word Processor</label>
      <div>
        <WordProcessor />
      </div>
    </div>

    <div class="mb-4">
      <label class="main-label" for=""> Image Editor</label>
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
