<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-task-section-overview">Overview</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Background</h3>
          <p>
            Human Activity Recognition is beginning to be applied in industrial
            domains, targeting the improvement of manual labor efficiency. We
            know processes such as assembly and packaging inside factories or
            logistic centers still mainly depend on manual workers. To ensure a
            rapid response to changing demands, this trend is expected to
            continue. Therefore, quantifying manual labor is a crucial
            requirement to streamlining existing processes.
          </p>
          <p>
            Workers inside logistic centers perform a series of sequential tasks
            to pack items. These working periods consist of actions like reading
            item labels or assembling the packaging boxes. Understanding details
            from each of these operations, i.e. its temporal duration or
            potential abnormalities, is crucial for optimizing the packaging
            process. However, period uniqueness related to item size or number
            of items included, make identifying such operation details a
            challenging task.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Challenge</h3>
          <p>
            You’ll develop a model to recognize the operations that conform
            packaging work with data from 4 IMU streams, keypoint data, etc. The
            packaging work consists of 10 operations (i.e., activity classes)
            described below. To quantify the operations as precisely as
            possible, dense labeling is required. You must predict activity
            classes for each 1second-long time slot. You can use data from 11
            subjects to develop your model. The test data consists of 6 subjects
            (4 distinct subjects).
          </p>
          <p>
            If successful, your work will help the ubiquitous research community
            improve current smart factories and better integrate human factors
            into the smart factory optimization process.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTaskOverview',
  data: () => ({}),
}
</script>
<style lang="scss" scoped></style>
