<script>

</script>

<div class="viewWrapper">
    <div class="toolbar"></div>
    <div class="componentWrapper">
        <slot />
    </div>
</div>

<style lang="scss">
    .viewWrapper {
        background: rgb(223, 222, 222);
        width: 100%;
        .toolbar {
            background: black;
            height: 30px;
            width: 100%;}
        .componentWrapper {
            padding: 2rem}
    }
</style>