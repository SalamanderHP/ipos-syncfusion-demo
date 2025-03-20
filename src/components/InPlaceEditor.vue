<template>
  <div class="control-sections" style="overflow: hidden">
    <div class="col-lg-8 control-section inplace-control-section default_layout">
      <div class="control_wrapper">
        <table>
          <tr>
            <td>
              <label
                class="control-label"
                style="text-align: left; font-size: 14px; font-weight: 400"
              >
                TextBox
              </label>
            </td>
            <td>
              <ejs-inplaceeditor
                ref="editObj"
                id="inplace_editor"
                mode="Inline"
                type="Text"
                value="Andrew"
                submitOnEnter="true"
                :model="textModel"
                :popupSettings="textPopupSettings"
              >
              </ejs-inplaceeditor>
            </td>
          </tr>
          <tr>
            <td>
              <label
                class="control-label"
                style="text-align: left; font-size: 14px; font-weight: 400"
              >
                NumericTextBox
              </label>
            </td>
            <td>
              <ejs-inplaceeditor
                ref="numericObj"
                id="numericTextBoxEle"
                mode="Inline"
                type="Numeric"
                value="$100.00"
                :model="numericTextBoxModel"
              >
              </ejs-inplaceeditor>
            </td>
          </tr>
          <tr>
            <td>
              <label
                class="control-label"
                style="text-align: left; font-size: 14px; font-weight: 400"
              >
                MaskedTextBox
              </label>
            </td>
            <td>
              <ejs-inplaceeditor
                ref="maskedObj"
                id="maskedTextBoxEle"
                mode="Inline"
                type="Mask"
                value="012-345-6789"
                :model="maskedTextBoxModel"
                :created="created"
              >
              </ejs-inplaceeditor>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-lg-4 property-section" id="defaultProperty">
      <table id="property" title="Properties">
        <tr>
          <td>
            <div>Mode</div>
          </td>
          <td>
            <div>
              <ejs-dropdownlist
                ref="editorMode"
                id="editorMode"
                class="form-control"
                width="90%"
                :dataSource="dataPlace"
                :change="changeEditorMode"
                :value="dataValue"
                :fields="placeFields"
              >
              </ejs-dropdownlist>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>Editable On</div>
          </td>
          <td>
            <div>
              <ejs-dropdownlist
                ref="editableOn"
                id="editableon"
                class="form-control"
                width="90%"
                :dataSource="editableData"
                :change="onEditableOn"
                :value="editableValue"
                :fields="editableFields"
              >
              </ejs-dropdownlist>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>Show Buttons</div>
          </td>
          <td>
            <div>
              <ejs-checkbox
                ref="checkObj1"
                id="showbuttons"
                checked="true"
                :change="onChange"
                :labelPosition="labelPosition"
              ></ejs-checkbox>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>Disable</div>
          </td>
          <td>
            <div>
              <ejs-checkbox
                ref="checkObj2"
                id="editorEnable"
                :change="onChangeEnable"
                :labelPosition="labelPosition"
              ></ejs-checkbox>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor'
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons'
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns'

export default {
  components: {
    'ejs-inplaceeditor': InPlaceEditorComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
  },
  data: () => {
    return {
      textModel: {
        placeholder: 'Enter employee name',
      },
      textPopupSettings: {
        title: 'Enter Employee Name',
      },
      numericTextBoxModel: {
        format: 'c2',
        value: 100,
        placeholder: 'Currency format',
      },
      maskedTextBoxModel: {
        mask: '000-000-0000',
      },
      placeFields: { text: 'mode', value: 'value' },
      dataPlace: [
        { value: 'inline', mode: 'Inline' },
        { value: 'popup', mode: 'Popup' },
      ],
      dataValue: 'inline',
      editableFields: { text: 'editable', value: 'id' },
      editableData: [
        { id: 'Click', editable: 'Click' },
        { id: 'DblClick', editable: 'Double Click' },
        { id: 'EditIconClick', editable: 'Edit Icon Click' },
      ],
      editableValue: 'Click',
      labelPosition: 'Before',
    }
  },
  mounted: function () {
    this.editObj = this.$refs.editObj.ej2Instances
    this.numericObj = this.$refs.numericObj.ej2Instances
    this.maskedObj = this.$refs.maskedObj.ej2Instances
    this.editorMode = this.$refs.editorMode.ej2Instances
  },
  methods: {
    changeEditorMode: function () {
      const editMode = this.$refs.editorMode.ej2Instances.text
      this.editObj.mode = this.numericObj.mode = this.maskedObj.mode = editMode
    },
    onEditableOn: function () {
      const editableOn = this.$refs.editableOn.ej2Instances.value
      this.editObj.editableOn = this.numericObj.editableOn = this.maskedObj.editableOn = editableOn
    },
    onChange: function () {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.$refs.checkObj1.ej2Instances.checked
        ? (this.editObj.showButtons =
            this.numericObj.showButtons =
            this.maskedObj.showButtons =
              true)
        : (this.editObj.showButtons =
            this.numericObj.showButtons =
            this.maskedObj.showButtons =
              false)
    },
    onChangeEnable: function () {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.$refs.checkObj2.ej2Instances.checked
        ? (this.editObj.disabled = this.numericObj.disabled = this.maskedObj.disabled = true)
        : (this.editObj.disabled = this.numericObj.disabled = this.maskedObj.disabled = false)
    },
    created: function () {
      if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', this.onScroll)
      }
    },
    onScroll: function () {
      if (this.editorMode.text === 'Inline') {
        return
      }
      if (
        this.$refs.editObj &&
        this.$refs.editObj.$el.querySelectorAll('.e-editable-open').length > 0
      ) {
        this.editObj.enableEditMode = false
      }
      if (
        this.$refs.numericObj &&
        this.$refs.numericObj.$el.querySelectorAll('.e-editable-open').length > 0
      ) {
        this.numericObj.enableEditMode = false
      }
      if (
        this.$refs.maskedObj &&
        this.$refs.maskedObj.$el.querySelectorAll('.e-editable-open').length > 0
      ) {
        this.maskedObj.enableEditMode = false
      }
    },
  },
}
</script>
<style scoped>
.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide,
.inplace-control-section.default_layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide {
  display: block;
  visibility: hidden;
}

.inplace-control-section.default_layout .control_wrapper .control-center {
  text-align: center;
}

.inplace-control-section.default_layout .control_wrapper table {
  margin: auto;
}

.inplace-control-section.default_layout .e-inplaceeditor {
  height: auto;
}

#defaultProperty table td {
  width: 50%;
}

@media (max-width: 1200px) {
  .inplace-control-section.default_layout {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .inplace-control-section .control_wrapper table tr td:nth-child(1) {
    width: 130px;
  }

  .inplace-control-section .control_wrapper table tr td:nth-child(2) {
    width: 200px;
  }
}

#defaultProperty .property-panel-table div {
  padding-left: 10px;
  padding-top: 10px;
}
</style>
