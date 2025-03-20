<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="default-section">
        <div ref="de_titlebar" id="documenteditor_titlebar" class="e-de-ctn-title">
          <div
            v-on:keydown="titleBarKeydownEvent"
            v-on:click="titleBarClickEvent"
            class="single-line"
            id="documenteditor_title_contentEditor"
            title="Document Name. Click or tap to rename this document."
            contenteditable="false"
          >
            <label
              v-on:blur="titleBarBlurEvent"
              id="documenteditor_title_name"
              :style="titileStyle"
              >{{ documentName }}</label
            >
          </div>
          <ejs-button
            id="de-print"
            :style="iconStyle"
            :iconCss="printIconCss"
            v-on:click="printBtnClick"
            title="Print this document (Ctrl+P)."
            >Print</ejs-button
          >
          <ejs-dropdownbutton
            ref="de-export"
            :style="iconStyle"
            :items="exportItems"
            :iconCss="exportIconCss"
            cssClass="e-caret-hide"
            content="Download"
            v-bind:select="onExport"
            :open="openExportDropDown"
            title="Download this document."
          ></ejs-dropdownbutton>
        </div>
        <ejs-documenteditorcontainer
          ref="doceditcontainer"
          :serviceUrl="hostUrl"
          :documentEditorSettings="settings"
          :enableToolbar="true"
          height="600px"
        ></ejs-documenteditorcontainer>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <div class="content-wrapper">
        <div class="heading-section de-heading">
          <h5><b>User Permission</b></h5>
        </div>

        <div class="control-label lable-padding"><b>Current User</b></div>
        <div class="control-label lable-padding">
          <ejs-dropdownlist
            id="ddlelement"
            :dataSource="userDetails"
            :value="currentUser"
            :change="onUserChange"
          ></ejs-dropdownlist>
        </div>
        <div class="control-label lable-padding"><b>User Color</b></div>
        <ejs-colorpicker
          ref="usercolorpicker"
          id="color-picker"
          :change="onUserColorChange"
        ></ejs-colorpicker>
      </div>
    </div>
  </div>
</template>
<style>
#documenteditor_titlebar {
  height: 36px;
  line-height: 26px;
  width: 100%;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 10px;
  font-family: inherit;
}

#documenteditor_title_contentEditor {
  height: 26px;
  max-width: 85%;
  width: auto;
  overflow: hidden;
  display: inline-block;
  padding-left: 4px;
  padding-right: 4px;
  margin: 5px;
}

.heading-section.de-heading {
  padding-bottom: 20px;
  padding-top: 20px;
}

.control-label.lable-padding {
  padding-bottom: 15px;
}

[contenteditable='true'].single-line {
  white-space: nowrap;
  border-color: #e4e4e4 !important;
}

/** Document editor sample level font icons*/

[class^='e-de-icon-'],
[class*=' e-de-icon-'] {
  font-family: 'Sample brower icons' !important;
}

.e-de-icon-Print:before {
  content: '\e723';
}

.e-de-icon-Download:before {
  content: '\e728';
}
</style>
<script lang="ts">
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor'
import { DropDownButtonComponent } from '@syncfusion/ej2-vue-splitbuttons'
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns'
import { ColorPickerComponent } from '@syncfusion/ej2-vue-inputs'
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons'

const defaultDocument: string = `
{
  "sections": [
    {
      "blocks": [
        {
          "paragraphFormat": {
            "styleName": "Normal"
          },
          "inlines": [
            {
              "text": "Welcome to Syncfusion Document Editor!",
              "characterFormat": { "bold": true }
            }
          ]
        }
      ]
    }
  ]
}
`
export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
    'ejs-dropdownbutton': DropDownButtonComponent,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-colorpicker': ColorPickerComponent,
  },
  data: function () {
    return {
      hostUrl: 'https://services.syncfusion.com/vue/production/api/documenteditor/',
      settings: { showRuler: true },
      documentName: 'Document Protection',
      documentTitle: 'Untitled Document',
      userDetails: ['engineer@mycompany.com', 'manager@mycompany.com'],
      currentUser: 'engineer@mycompany.com',
      iconStyle:
        'float:right;background: transparent;box-shadow:none;border-color: transparent;border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400;font-family:inherit;',
      titileStyle:
        'text-transform:capitalize;font-weight:400;font-family:inherit;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text',
      openIconCss: 'e-de-icon-Open e-de-padding-right',
      printIconCss: 'e-de-icon-Print e-de-padding-right',
      exportIconCss: 'e-de-icon-Download e-de-padding-right',
      exportItems: [
        { text: 'Syncfusion® Document Text (*.sfdt)', id: 'sfdt' },
        { text: 'Word Document (*.docx)', id: 'word' },
        { text: 'Word Template (*.dotx)', id: 'dotx' },
        { text: 'Plain Text (*.txt)', id: 'txt' },
      ],
    }
  },
  provide: {
    DocumentEditorContainer: [Toolbar],
  },
  methods: {
    onExport: function (args) {
      switch (args.item.id) {
        case 'word':
          this.save('Docx')
          break
        case 'sfdt':
          this.save('Sfdt')
          break
        case 'txt':
          this.save('Txt')
          break
        case 'dotx':
          this.save('Dotx')
          break
      }
    },
    openExportDropDown: function () {
      // tslint:disable-next-line:max-line-length
      document
        .getElementById('word')
        .setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.')
      // tslint:disable-next-line:max-line-length
      document
        .getElementById('sfdt')
        .setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.')
      // tslint:disable-next-line:max-line-length
      document
        .getElementById('txt')
        .setAttribute('title', 'Download a copy of this document to your computer as a TXT file.')
      // tslint:disable-next-line:max-line-length
      document
        .getElementById('dotx')
        .setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.')
    },
    save: function (format) {
      // tslint:disable-next-line:max-line-length
      this.$refs.doceditcontainer.ej2Instances.documentEditor.save(
        this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName === ''
          ? 'sample'
          : this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName,
        format,
      )
    },
    openBtnClick: function () {
      this.$refs.uploadDocument.click()
    },
    printBtnClick: function () {
      this.$refs.doceditcontainer.ej2Instances.documentEditor.print()
    },
    titleBarKeydownEvent: function (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        document.getElementById('documenteditor_title_contentEditor').contentEditable = 'false'
        if (document.getElementById('documenteditor_title_contentEditor').textContent === '') {
          document.getElementById('documenteditor_title_contentEditor').textContent = 'Document1'
        }
      }
    },
    titleBarBlurEvent: function (args) {
      if (document.getElementById('documenteditor_title_contentEditor').textContent === '') {
        document.getElementById('documenteditor_title_contentEditor').textContent = 'Document1'
      }
      document.getElementById('documenteditor_title_contentEditor').contentEditable = 'false'
      this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName =
        document.getElementById('documenteditor_title_name').textContent
    },
    titleBarClickEvent: function () {
      this.updateDocumentEditorTitle()
    },
    updateDocumentEditorTitle: function () {
      document.getElementById('documenteditor_title_contentEditor').contentEditable = 'true'
      document.getElementById('documenteditor_title_contentEditor').focus()
      window
        .getSelection()
        .selectAllChildren(document.getElementById('documenteditor_title_contentEditor'))
    },
    documentChangedEvent: function () {
      const obj = this.$refs.doceditcontainer.ej2Instances.documentEditor
      this.documentTitle = obj.documentName === '' ? 'Untitled Document' : obj.documentName
      document.getElementById('documenteditor_title_name').textContent = obj.documentName
      setTimeout(() => {
        obj.scrollToPage(1)
      }, 10)
    },
    onUserChange: function (e) {
      this.$refs.doceditcontainer.ej2Instances.documentEditor.currentUser = e.value
    },
    onUserColorChange: function (e) {
      this.$refs.doceditcontainer.ej2Instances.documentEditor.userColor = e.currentValue.hex
    },
  },
  mounted() {
    this.$nextTick(function () {
      const editor = this.$refs.doceditcontainer.ej2Instances.documentEditor
      editor.currentUser = 'engineer@mycompany.com'
      this.$refs.doceditcontainer.ej2Instances.showPropertiesPane = false
      this.$refs.doceditcontainer.ej2Instances.documentEditorSettings.showRuler = true
      editor.open(JSON.stringify(defaultDocument))
      editor.documentName = 'Document Protection'
      this.$refs.doceditcontainer.ej2Instances.documentChange = () => {
        this.documentChangedEvent()
      }
      this.$refs.usercolorpicker.ej2Instances.value = editor.userColor
    })
  },
}
</script>
