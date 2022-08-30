<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Timeline</h2>
          </v-col>
          <v-col cols="12">
            <v-timeline align-top dense>
              <v-timeline-item
                v-for="(item, index) in tlItems"
                :key="index"
                :color="item.color"
                small
              >
                <v-row class="pt-0">
                  <v-col class="d-block d-md-none">
                    <div class="op-brown--text text-subtitle-1">
                      {{ item.datetime }}
                    </div>
                    <h5 class="text-h6">{{ item.title }}</h5>
                    <div class="text-caption">{{ item.caption }}</div>
                  </v-col>
                  <v-col class="d-none d-md-block">
                    <v-row>
                      <v-col cols="2">
                        <div class="op-brown--text text-subtitle-1">
                          {{ item.datetime }}
                        </div>
                      </v-col>
                      <v-col>
                        <h5 class="text-h6">{{ item.title }}</h5>
                        <div class="text-caption">{{ item.caption }}</div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTimelineSection',
  data: () => ({
    tlItems: [
      {
        datetime: '2022-10-01',
        title: 'Registration Open',
        caption: 'Google form and competition page on codalab will be public.',
        color: 'op-brown darken-1',
      },
      {
        datetime: '2022-10-15',
        title: 'Launch',
        caption: 'You can submit your estimates to the competition site.',
        color: 'op-brown',
      },
      {
        datetime: '2023-01-10',
        title: 'Entry and Team Merger Deadline',
        caption:
          'If you want to join this competition or change team members, you must register until this date.',
        color: 'op-brown lighten-1',
      },
      {
        datetime: '2023-01-15',
        title: 'Final Submission Deadline',
        caption: 'You must submit your best results until the end of this day.',
        color: 'op-brown lighten-1',
      },
      {
        datetime: '2023-01-31',
        title: 'Report Submission Deadline',
        caption:
          'Top 3 winners must submit a report of your solution to get the prize! Deadlines are subject to change.',
        color: 'op-brown lighten-1',
      },
      {
        datetime: '2023-03-TBA',
        title: 'Workshop Day @Percom2023',
        caption:
          'Award Ceremony will be held. Top 3 winners are requested to participate offline.',
        color: 'op-brown lighten-1',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
