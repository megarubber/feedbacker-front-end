<template>

</template>

<script>
  import useModal from '../../hooks/useModal';
export default {
  setup() {
    const modal = useModal();
    onMounted(() => {
      modal.listen(handleModalToggle);
    });

    onBeforeUmount(() => {
      modal.off(handleModalToggle);
    });

    function handleModalToggle(payload) {
      if(payload.status) {
        state.component = payload.component;
        state.props = payload.props;
        state.width = payload.width;
      }
    }
  }
}
</script>