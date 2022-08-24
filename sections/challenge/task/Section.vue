<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Challnge Overview</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Background</h3>
            <p>
              In order to improve the efficiency of manual labor, apart from
              daily life settings, Human Activity Recognition has been applied
              in industrial domains as well. Work processes, such as production
              line systems inside factories or packaging tasks at logistics
              centers, still depend mainly on human workers. To deal with the
              rapidly changing demands of customers and suppliers, tasks by
              human workers are expected to continue to play an important role
              in the future. Therefore, quantifying such manual work is crucial
              for streamlining the existing processes, finding bottlenecks,
              assessing a worker’s performance, and detecting outliers.
            </p>
            <p>
              In many of these manual jobs, such as performing packaging tasks
              in the logistic domain, human workers repetitively perform a
              typical series of sequential operations, and with each iteration
              (i.e., work period) comprising a sequence of operations such as
              assembling a shipping box and filling up the box with items.
              Getting meaningful information about each operation such as its
              temporal location, average duration, and its abnormalities is
              crucial for optimizing the work process. However, because the
              varying size and number of items to pack, and the size of shipping
              boxes depend on individual shipping orders, sensor data collected
              in different work periods, as well as the duration of the same
              operation in different work periods, can vary. These
              characteristics of packaging work make its recognition a
              challenging task.
            </p>
            <p>
              In this competition, you'll develop a model to recognize the 10
              work operations in the packaging work. If successful, your work
              will help the ubiquitous research community improve current smart
              factories and better integrate human factors into the smart
              factory optimization process.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Task</h3>
            <p>
              In this competition, you’ll develop a model to recognize the
              operations that conform packaging work from 4 IMU streams,
              keypoint data, etc. The packaging work consists of 10 operations
              (i.e., activity classes) described below. To quantify the
              operations as precisely as possible, dense labeling is required.
              You must predict activity classes for each 1 second-long time
              slot. You can use data from TBA subjects to develop your model.
              The test data is TBA sessions from TBA, TBA periods in total.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Evaluation</h3>
            <p>
              The problem to be solved is the multiclass classification problem
              of time-series data. You must predict the operation class for each
              time slot. The time slot is set to 1 second in this challenge.
            </p>
            <p>
              The F1 measure (macro-average) is used as the evaluation metric.
              F1-measure is calculated for each class and the average of them is
              used as the score. Segments corresponding to the "Null" class are
              excluded before evaluation. The winner will be selected based on
              this metric evaluated on the test data.
            </p>
            <p>
              Data to be evaluated are the data within the session described in
              the
              <a
                href="https://github.com/open-pack/openpack-toolkit/blob/main/docs/USER.md"
                target="_blank"
                >USER.md</a
              >, i.e., the range of [Stat, End) (Note: the End time is not
              included). The time slot starts from the Session Start time. For
              example, on U0102-S0500, Start and End timestamp is Start =
              2021-10-22 15:56:26+09:00 (unixtime=1634885786000) , End =
              2021-10-22 16:26:48+09:00 (unixtime = 1634887608000) respectively.
              Therefore, the timeslot to be evaluated is [1634885786000 (=
              Start), 1634885787000, 1634885788000, ..., 1634887607000 (= End -
              1s)].
            </p>
            <p>
              Script to calculate your score is available here (<a
                href="https://github.com/open-pack/openpack-toolkit-dev/blob/main/openpack_toolkit/codalab/operation_segmentation/eval.py"
                target="_blank"
                >eval_operation_segmentation()</a
              >)!
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Data</h3>
          </v-col>
          <v-col cols="12"> TBA </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTaskSection',
  data: () => ({}),
}
</script>
<style lang="scss" scoped></style>
