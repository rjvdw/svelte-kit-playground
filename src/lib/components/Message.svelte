<script lang="ts">
  export let variant: 'success' | 'error'
</script>

<div class="message message--{ variant }">
  <slot></slot>
</div>

<style lang="sass">
  .message
    border: thin solid #666
    border-radius: .5rem
    margin: 1rem
    padding: 1rem

    &--error
      border-color: #a33
      background-color: #fee
      color: #422

    &--success
      border-color: #3a3
      background-color: #efe
      color: #242
</style>
