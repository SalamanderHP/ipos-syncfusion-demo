<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor
            ref="richEditor"
            :value="content"
            @change="handleInput"
            @actionComplete="handleInput"
          >
            <p>
              The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor
              that provides the best user experience to create and update the content. Users can
              format their content using standard toolbar commands.
            </p>
            <p><b>Key features:</b></p>
            <ul>
              <li><p>Provides IFRAME and DIV modes</p></li>
              <li><p>Capable of handling markdown editing.</p></li>
              <li>
                <p>Contains a modular library to load the necessary functionality on demand.</p>
              </li>
              <li><p>Provides a fully customizable toolbar.</p></li>
              <li><p>Provides HTML view to edit the source directly for developers.</p></li>
              <li><p>Supports third-party library integration.</p></li>
              <li><p>Allows a preview of modified content before saving it.</p></li>
              <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
              <li><p>Contains undo/redo manager.</p></li>
              <li><p>Creates bulleted and numbered lists.</p></li>
            </ul></ejs-richtexteditor
          >
          <div class="controls">
            <label class="switch">
              <input
                type="checkbox"
                v-model="autosaveEnabled"
                @change="toggleAutosave"
              />
              <span class="slider round"></span>
            </label>
            <span>{{ autosaveEnabled ? 'Auto Save: On' : 'Auto Save: Off' }}</span>
            <p v-if="saving" class="saving-indicator">Saving...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  QuickToolbar,
  HtmlEditor,
  Table,
  Video,
  Audio,
  PasteCleanup,
} from '@syncfusion/ej2-vue-richtexteditor'

export default {
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
  },
  provide: {
    richtexteditor: [
      Toolbar,
      Link,
      Image,
      QuickToolbar,
      HtmlEditor,
      Table,
      Video,
      Audio,
      PasteCleanup,
    ],
  },
  data() {
    return {
      content: '',
      lastSavedContent: '',
      saving: false,
      saveTimeout: null as ReturnType<typeof setTimeout> | null,
      intervalId: null as ReturnType<typeof setInterval> | null,
    }
  },
  mounted() {
    this.startAutosave()
  },
  beforeDestroy() {
    this.stopAutosave()
  },
  methods: {
    handleInput() {
      this.content = this.$refs.richEditor.getText();

      clearTimeout(this.saveTimeout);
      this.saving = true;

      this.saveTimeout = setTimeout(() => {
        this.saveContent();
      }, 2000);
    },

    toggleAutosave() {
      if (this.autosaveEnabled) {
        this.startAutosave()
      } else {
        this.stopAutosave()
      }
    },

    startAutosave() {
      if (!this.intervalId) {
        this.intervalId = setInterval(this.autoSave, 3000)
      }
    },

    stopAutosave() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },

    async autoSave() {
      if (this.content !== this.lastSavedContent) {
        await this.saveContent()
      }
    },

    async saveContent() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.lastSavedContent = this.content;
        console.log('Content saved:', this.content);
      } catch (error) {
        console.error('Failed to save content:', error);
      } finally {
        this.saving = false;
      }
    },
  },
}
</script>
<style scoped>
.saving-indicator {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.controls {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
}

/* Slider Toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(22px);
}
</style>
