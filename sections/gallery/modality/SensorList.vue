<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="items"
        disable-pagination
        hide-default-footer
      ></v-data-table>
    </v-col>
  </v-row>
</template>
<script scoped>
export default {
  data() {
    return {
      headers: [
        {
          text: '#',
          value: 'num',
        },
        {
          text: 'Category',
          value: 'category',
        },
        {
          text: 'Device',
          value: 'device',
        },
        {
          text: 'Sensor',
          value: 'sensor',
        },
        {
          text: 'Position',
          value: 'position',
        },
        {
          text: 'Product',
          value: 'product',
        },
      ],
      items: [
        {
          num: 1,
          category: 'Vision',
          device: 'kinect',
          sensor: 'Depth',
          position: 'Front View',
          product: 'Azure Kinect DK',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 2,
          category: 'Vision',
          device: 'kinect',
          sensor: 'Keypoints',
          position: 'Front View',
          product: 'Azure Kinect DK',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 3,
          category: 'Vision',
          device: 'rs02',
          sensor: 'Depth',
          position: 'Top View',
          product: 'Intel® RealSense™ Depth Camera D435i',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 4,
          category: 'Vision',
          device: 'LiDAR',
          sensor: 'Point Cloud',
          position: 'Front View',
          product: 'ULTRA PACK(VLP-32C)-Veloidne',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 5,
          category: 'Wearable',
          device: 'atr01',
          sensor: 'Acc',
          position: 'Right Wrist',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 6,
          category: 'Wearable',
          device: 'atr01',
          sensor: 'Gyro',
          position: 'Right Wrist',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 7,
          category: 'Wearable',
          device: 'atr01',
          sensor: 'Quaternion',
          position: 'Right Wrist',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 8,
          category: 'Wearable',
          device: 'atr02',
          sensor: 'Acc',
          position: 'Left Wrist',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 9,
          category: 'Wearable',
          device: 'atr02',
          sensor: 'Gyro',
          position: 'Left Wrist',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 10,
          category: 'Wearable',
          device: 'atr02',
          sensor: 'Quaternion',
          position: 'Left Wrist',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 11,
          category: 'Wearable',
          device: 'atr03',
          sensor: 'Acc',
          position: 'Right Upper Arm',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 12,
          category: 'Wearable',
          device: 'atr03',
          sensor: 'Gyro',
          position: 'Right Upper Arm',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 13,
          category: 'Wearable',
          device: 'atr03',
          sensor: 'Quaternion',
          position: 'Right Upper Arm',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 14,
          category: 'Wearable',
          device: 'atr04',
          sensor: 'Acc',
          position: 'Left Upper Arm',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 15,
          category: 'Wearable',
          device: 'atr04',
          sensor: 'Gyro',
          position: 'Left Upper Arm',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 16,
          category: 'Wearable',
          device: 'atr04',
          sensor: 'Quaternion',
          position: 'Left Upper Arm',
          product: 'ATR TSND151',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 17,
          category: 'Wearable',
          device: 'e4-1',
          sensor: 'Acc',
          position: 'Right Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 18,
          category: 'Wearable',
          device: 'e4-1',
          sensor: 'BVP',
          position: 'Right Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 19,
          category: 'Wearable',
          device: 'e4-1',
          sensor: 'EDA',
          position: 'Right Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 20,
          category: 'Wearable',
          device: 'e4-1',
          sensor: 'Temperature',
          position: 'Right Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 21,
          category: 'Wearable',
          device: 'e4-2',
          sensor: 'Acc',
          position: 'Left Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 22,
          category: 'Wearable',
          device: 'e4-2',
          sensor: 'BVP',
          position: 'Left Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 23,
          category: 'Wearable',
          device: 'e4-2',
          sensor: 'EDA',
          position: 'Left Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 24,
          category: 'Wearable',
          device: 'e4-2',
          sensor: 'Temperature',
          position: 'Left Wrist',
          product: 'E4 wristband',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 25,
          category: 'IoT Device',
          device: 'ht(handheld scanner)',
          sensor: 'log',
          position: '-',
          product: '8001-C Portable Terminal',

          version: 'v3.0.0',
          ignore: false,
        },
        {
          num: 26,
          category: 'IoT Device',
          device: 'label-printer',
          sensor: 'log',
          position: '-',
          product: 'pseudo log data',

          version: 'v3.0.0',
          ignore: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
