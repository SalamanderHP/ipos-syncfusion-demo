<template>
  <ejs-spreadsheet>
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="data"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup lang="ts">
import {
  SpreadsheetComponent as EjsSpreadsheet,
  RangesDirective as ERanges,
  RangeDirective as ERange,
  SheetsDirective as ESheets,
  SheetDirective as ESheet,
} from '@syncfusion/ej2-vue-spreadsheet'

const data = [
  {
    OrderID: 10248,
    Name: 'VINET',
    Country: 'France',
  },
  {
    OrderID: 10249,
    Name: 'TOMSP',
    Country: 'Germany',
  },
]
</script>
