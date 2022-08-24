<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-6">Members</h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        v-for="member in members"
        :key="member.name"
        cols="6"
        md="4"
        class="d-flex justify-center"
      >
        <MoleculesMemberCard
          :img-src="member.imgSrc"
          :name="member.name"
          :role="member.role"
          :link="member.link"
          img-size="10rem"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-6">Special Thanks</h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        v-for="member in supportMembers"
        :key="member.name"
        cols="4"
        md="3"
        class="d-flex justify-center"
      >
        <MoleculesMemberCard
          :img-src="member.imgSrc"
          :name="member.name"
          :role="member.role"
          img-size="5rem"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'LpTeamMemberList',
  data: () => ({
    members: config.members.core,
    supportMembers: config.members.support,
  }),
}
</script>

<style lang="scss" scoped></style>
