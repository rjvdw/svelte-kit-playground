<div class="input-grid">
  <slot></slot>
</div>

<style lang="sass">
  .input-grid
    display: grid
    grid-template-columns: max-content auto
    gap: .5rem

    :global(.controls)
      display: flex
      flex-direction: row
      justify-content: flex-end
      grid-column-start: 2
</style>
