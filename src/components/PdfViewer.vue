<template>
  <div>
    <div class="control-section">
      <div class="flex-container">
        <label class="switchLabel" for="checked">Standalone PDF Viewer</label>
        <div class="e-message render-mode-info">
          <span
            class="e-msg-icon render-mode-info-icon"
            title="Turn OFF to render the PDF Viewer as server-backed"
          ></span>
        </div>
        <div>
          <ejs-switch
            cssClass="buttonSwitch"
            id="checked"
            :change="change"
            :checked="true"
          ></ejs-switch>
        </div>
      </div>

      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
      >
      </ejs-pdfviewer>
    </div>
  </div>
</template>
<style scoped>
#pdfviewer {
  height: 640px;
}

.flex-container {
  display: flex;
  justify-content: flex-end;
}

.render-mode-info {
  background: none;
  border: none;
  padding-left: 0px;
}

.render-mode-info .render-mode-info-icon {
  height: 16px;
  width: 16px;
}

.switchLabel {
  font-family: 'Segoe UI', 'GeezaPro', 'DejaVu Serif', sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.24px;
  text-align: right;
  font-size: 14px;
}

.render-mode-info .render-mode-info-icon::before {
  line-height: 0.5rem;
}

.buttonSwitch {
  width: 40px;
  height: 24px;
}
</style>
<script lang="ts">
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer'
import { SwitchComponent } from '@syncfusion/ej2-vue-buttons'

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
    'ejs-switch': SwitchComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    }
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    // Initialize switchObj within the mounted hook
    change: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances
      if (args.checked) {
        viewer.serviceUrl = ''
      } else {
        viewer.serviceUrl = 'https://services.syncfusion.com/vue/production/api/pdfviewer'
      }
      viewer.dataBind()
      viewer.load(viewer.documentPath, null)
    },
  },
}
</script>
