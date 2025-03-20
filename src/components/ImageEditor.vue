<template>
  <div class="control-section">
    <div class="col-lg-12 e-img-editor-sample">
      <ejs-imageeditor
        :theme="themeValue"
        id="image-editor"
        ref="imageEditorObj"
        :created="created"
      >
      </ejs-imageeditor>
    </div>
  </div>
</template>

<script lang="ts">
import { ImageEditorComponent } from '@syncfusion/ej2-vue-image-editor'
import { Browser, getComponent, isNullOrUndefined } from '@syncfusion/ej2-base'

export default {
  components: {
    'ejs-imageeditor': ImageEditorComponent,
  },
  data: function () {
    return {
      theme: 'Bootstrap5',
    }
  },
  methods: {
    created: function () {
      if (Browser.isDevice) {
        this.$refs.imageEditorObj.open('src/image-editor/images/flower.png')
      } else {
        this.$refs.imageEditorObj.open('src/image-editor/images/default.png')
      }
      if (this.themeValue && window.location.href.split('#')[1]) {
        this.themeValue = window.location.href.split('#')[1].split('/')[1]
      }
    },
    onScroll: function () {
      if (document.getElementById('imageeditor_sliderWrapper')) {
        const slider = getComponent(document.getElementById('imageeditor_sliderWrapper'), 'slider')
        slider.refreshTooltip(slider.tooltipTarget)
      }
    },
  },
  mounted: function () {
    if (!isNullOrUndefined(document.getElementById('right-pane'))) {
      document.getElementById('right-pane').addEventListener('scroll', this.onScroll.bind(this))
    }
  },
  computed: {
    themeValue: {
      get: function () {
        return this.theme
      },
      set: function (theme) {
        this.theme = theme
      },
    },
  },
}
</script>
