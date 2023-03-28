<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-task-section-overview">Results</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            Thank you to everyone who participated, we had
            <span class="font-weight-bold">33 teams</span> and
            <span class="font-weight-bold">106 registered users</span>on colab.
            We received a total of
            <span class="font-weight-bold">817 submissions</span> during the
            period. (As of January 19, 2023)
          </p>
          <p>
            The top five teams in the competition are listed below.
            Congratulations! Please see
            <a :href="googleSheetUrl" target="_blank"
              >this table (Google Sheet)</a
            >
            here for detailed scores.
          </p>
        </v-col>
        <v-col v-for="(item, index) in top5Teams" :key="index" cols="12">
          <v-card class="op-brown lighten-2" width="100%">
            <v-card-subtitle
              class="pt-1 pb-0 font-weight-bold text-subtitle-1 op-brown--text text--darken-2"
            >
              {{ item.rank }}
            </v-card-subtitle>
            <v-card-text class="pb-1">
              <h4 class="text-h5 black--text font-weight-bold">
                {{ item.team }}
                <span class="text-h6 op-brown--text"
                  >(F1={{ item.score }})</span
                >
              </h4>
              <p class="mb-0">
                {{ item.member }}
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-end white pt-0 pb-1">
              <v-spacer></v-spacer>

              <a
                v-for="(link, index2) in item.links"
                :key="index2"
                :href="link.url"
                target="_blank"
                class="text-decoration-none"
              >
                <v-btn color="op-brown" text small>
                  {{ link.title }}
                  <v-icon class="mx-1">mdi-open-in-new</v-icon>
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <h3>All Results</h3>
          <v-simple-table dense>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">Rank</th>
                  <th class="text-left">Team</th>
                  <th class="text-left">F1-measure</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in results" :key="item.rank">
                  <td>{{ item.rank }}</td>
                  <td>{{ item.team }}</td>
                  <td>{{ item.score }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Awards Ceremony @Percom2023 WS BiRD</h3>
          <p>
            The awards ceremony was held on March 13, 2023 at Percom2023 WS
            BiRD. The top 5 winners gathered to discuss their solutions in a
            poster session. Congratulations again!
          </p>
          <v-card class="mx-auto">
            <v-img :src="photo.awardsCeremony" width="100%"> </v-img>
            <v-card-subtitle class="py-1 text-center">
              Picture with Top-5 Winners @Percom2023 WS BiRD
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeResultSection',
  data: () => ({
    top5Teams: [
      {
        rank: '1st Place',
        team: 'tomoon',
        score: 0.9633,
        member: 'Tomoki Uchiyama. (Tsukuba Univ., JA)',
        links: [
          {
            title: 'Poster',
            url: 'data/2023-03-13-openpack-challenge-poster/1st-tomoon.pdf',
          },
          {
            title: 'Solution (GitHub)',
            url: 'https://github.com/uchiyama33/OpenPack-Challenge-1st',
          },
        ],
      },
      {
        rank: '2nd Place',
        team: 'vbu211',
        score: 0.9592,
        member:
          'Yuto Namba(a,b), Yuichi Nakatani(a), Kenta Ishihara(a), Sachio Iwasaki(a), Kosuke Moriwaki(a), Xian-Hua Han(b), Tetsuo Inoshita(a). (a=NEC Corporation, JP; b=Yamaguchi Univ., JP)',
        links: [
          {
            title: 'Poster',
            url: 'data/2023-03-13-openpack-challenge-poster/2nd-vbu211.pdf',
          },
        ],
      },
      {
        rank: '3rd Place',
        team: 'Ritsumei',
        score: 0.9241,
        member:
          'Shurong Chai(a), Jiaqing Liu(a), Rahul Kumar Jain(a), Yinhao Li(a), Tomoko Tateyama(b), Yen-Wei Chen. (a=Ritsumeikan Univ, JP; b=Fujita Health Univ., JP)',
        links: [
          {
            title: 'Poster',
            url: 'data/2023-03-13-openpack-challenge-poster/3rd-ritsumei.pdf',
          },
          {
            title: 'Solution (GitHub)',
            url: 'https://github.com/11yxk/openpack_challenge',
          },
        ],
      },
      {
        rank: '4th Place',
        team: 'Malton',
        score: 0.9171,
        member: 'Yusuke Matsubayashi. (Osaka Univ., JP)',
        links: [
          {
            title: 'Poster',
            url: 'data/2023-03-13-openpack-challenge-poster/4th-malton.pdf',
          },
        ],
      },
      {
        rank: '5th Place',
        team: 'Shubham Wagh',
        score: 0.9112,
        member: 'Shubham Maroti Wagh. (Veridium in Oxford, UK)',
        links: [
          {
            title: 'Poster',
            url: 'data/2023-03-13-openpack-challenge-poster/5th-shubham.pdf',
          },
        ],
      },
    ],
    results: [
      {
        rank: 1,
        team: 'tomoon',
        score: 0.9633,
        member: 'Tomoki UCHIYAMA (Univ. Tsukuba, JA)',
      },
      {
        rank: 2,
        team: 'vbu211',
        score: 0.9592,
        member:
          'Yuto Namba (a,b), Yuichi Nakatani(a), Kenta Ishihara(a), Sachio Iwasaki(a), Kosuke Moriwaki(a), Xian-Hua Han(b), Tetsuo Inoshit(a), (a=NEC Corporation, b= Yamaguchi University)',
      },
      {
        rank: 3,
        team: 'Ritsumei',
        score: 0.9241,
      },
      {
        rank: 4,
        team: 'Malton',
        score: 0.9171,
      },
      {
        rank: 5,
        team: 'Shubham Wagh',
        score: 0.9112,
      },
      {
        rank: 6,
        team: 'UCLab',
        score: 0.9057,
      },
      {
        rank: 7,
        team: 'liuqijd',
        score: 0.8987,
      },
      {
        rank: 8,
        team: 'Potros',
        score: 0.8822,
      },
      {
        rank: 9,
        team: 'Dialga',
        score: 0.8752,
      },
      {
        rank: 10,
        team: 'SotaroFushimi',
        score: 0.8466,
      },
      {
        rank: 11,
        team: 'Tetsu_roo',
        score: 0.8118,
      },
      {
        rank: 12,
        team: 'syoka4156',
        score: 0.8114,
      },
    ],
    googleSheetUrl:
      'https://docs.google.com/spreadsheets/d/1AwZqu9ccUQ81zfICLo8qtU_Bg_KbOv1P3jhWpIb1Fis?usp=sharing',
    photo: {
      awardsCeremony: require('@/assets/img/snapshot/2023-03-13-Percom2023BiRD-AwardsCeremony.jpg'),
    },
  }),
}
</script>
<style lang="scss" scoped></style>
