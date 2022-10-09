<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="items"
        :mobile-breakpoint="0"
        disable-pagination
        hide-default-footer
      >
        <template #[`item.image`]="{ item }">
          <v-img 
            :src="item.image"
            :aspect-ratop="4/3" 
            height="6vw" 
            min-height="60px"
            width="8vw" 
            min-width="80px"
          ></v-img>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>
<script scoped>
export default {
  name: 'GalleryActivityOpenPackOperationList',
  data() {
    return {
      items:[
        {
          "id": 100,
          "name": "Picking",
          "description": "Check the order-sheet and go to the back table to pick up the items.",
          "version": "v3.0.0",
          "ignore": false,
          "image": require("@/assets/img/operation/100.jpg")
        },
        {
          "id": 200,
          "name": "Relocate Item Label",
          "description": "Peel off the label from the items and place it on the bottom margin of the order sheet. Check the item names and quantity on the list and label with a ballpoint pen. (When picking is done in one round trip, this action is set as the beginning of the box.)",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/204.jpg")
        },
        {
          "id": 300,
          "name": "Assemble Box",
          "description": "Assemble cardboard boxes that match the size of the items.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/303.jpg")
        },
        {
          "id": 400,
          "name": "Insert Items",
          "description": "Put the goods into the box. Fill the box with air cushion.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/401.jpg")
        },
        {
          "id": 500,
          "name": "Close Box",
          "description": "Close the box with craft tape.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/501.jpg")
        },
        {
          "id": 600,
          "name": "Attach Box Label",
          "description": "Attach the box number label to the side of the box.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/601.jpg")
        },
        {
          "id": 700,
          "name": "Scan Label",
          "description": "Scan barcodes with the handy scanner in the following order: (1) order sheet, (2) box number sticker, (3) item label. Then press the \"ESC\" button on the handy scanner twice. Next, scan barcodes with the scanner of the label printer in the following order: (1) order sheet, (2) code on the label printer.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/704.jpg")
        },
        {
          "id": 800,
          "name": "Attach Shipping Label",
          "description": "Attach the shipping label printed out from the label printer to the box.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/802.jpg")
        },
        {
          "id": 900,
          "name": "Put on Back Table",
          "description": "Move the completed packing box under the back table.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/902.jpg")
        },
        {
          "id": 1000,
          "name": "Fill out Order",
          "description": "Write their signatures in the confirmation column of the order sheet and insert it into the tray for completed order sheets.",
          "version": "v3.2.2",
          "ignore": false,
          "image": require("@/assets/img/operation/1002.jpg")
        },
        {
          "id": 8100,
          "name": "Null",
          "description": "",
          "version": "v3.2.2",
          "ignore": true,
          "image": ""
        }
      ]
    }
  },
  computed: {
    headers(){
      return [
        {
          "text": "Image",
          "align": "start",
          "sortable": false,
          "value": "image",
        },
        {
          "text": "ID",
          "value": "id",
          "sortable": false
        },
        {
          "text": "Operation",
          "value": "name",
          "sortable": false
        },
        {
          "text": "Description", 
          "value": "description",
          "sortable": false
        }
      ].filter(item => this.$vuetify.breakpoint.smAndUp || item.value === 'id' || item.value === 'name'  || item.value === 'image')
    }
  }
}
</script>
<style lang="scss" scoped></style>
