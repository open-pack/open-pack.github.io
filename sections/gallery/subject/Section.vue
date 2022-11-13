<template>
  <v-row>
    <v-col cols="12">
      <h3 id="gellery-subject-sessions">Sessions</h3>
      <v-data-table
        :headers="headers"
        :items="sessions"
        disable-pagination
        hide-default-footer
      ></v-data-table>
    </v-col>
  </v-row>
</template>
<script scoped>
import sessions from '@/assets/data/sessions'

export default {
  name: 'GallerySubjectSection',
  data() {
    return {
      headers: [
        {
          text: 'Subject',
          value: 'Subject',
        },
        {
          text: 'Session',
          value: 'Session',
        },
        {
          text: 'Scenario',
          value: 'Scenario',
        },
        {
          text: 'Duration',
          value: 'Duration',
        },
        {
          text: 'Periods',
          value: 'Periods',
        },
        {
          text: 'Start',
          value: 'Start',
        },
        {
          text: 'End',
          value: 'End',
        },
      ],
      sessions: sessions.sessions,
    }
  },
}
</script>
<style lang="scss" scoped></style>
