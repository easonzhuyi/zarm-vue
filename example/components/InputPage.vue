<template lang="html">
  <Container>
    <PageHeader title="文本框 Input" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/input.md';
export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>
