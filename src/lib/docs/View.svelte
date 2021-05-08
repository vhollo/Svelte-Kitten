<script>
    export let displayGrid;
    // block | grid-2 | grid-3
</script>

<!-- TODO: https://www.w3schools.com/howto/howto_css_devices.asp -->

<div class="componentPreview {displayGrid}">
    <div class="previewWrap">
        <!-- Toolbar -->
        <div class="toolbar bgDark">
            <div class="view">
                <span on:click={() => displayGrid = 'grid-3'} class:selected="{displayGrid === 'grid-3'}" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></span>
                <span on:click={() => displayGrid = 'grid-2'} class:selected="{displayGrid === 'grid-2'}" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></span>
                <span on:click={() => displayGrid = 'block'} class:selected="{displayGrid === 'block'}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg></span>
            </div>
            <div class="sizes">
                <span class="phone"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></span>
                <span class="tablet"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tablet"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></span>
                <span class="laptop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>
            </div>
        </div>
        <!-- Display component -->
        <div class="componentWrap paperBG">
                <slot></slot>
        </div>
    </div>
</div>

<style>
    .componentPreview {
        width: 100%;
    }
    .componentPreview.block .componentWrap{
        display: block;
        padding: 3rem;
    }
    .componentPreview.grid-2 .componentWrap{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        justify-items: center;
        align-items: center;
    }
    .componentPreview.grid-3 .componentWrap{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
        justify-items: center;
        align-items: center;
    }
    .previewWrap {
        border: 1px solid white;
        /* border-radius: var(--borderRadius); */
        /* box-shadow: var(--shadowResting); */
        overflow-y: hidden;
    }
    .componentWrap {
        position: relative;
        padding: 2rem;
        min-height: 100px;
        width: 100%;
        position: relative;
        /* border-radius: 0 0 var(--borderRadius) var(--borderRadius); */
    }
    .toolbar {
        padding: 0.4rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        background-color: #000000;
        color: rgba(255,255,255,0.5);
    }
    .sizes, .view {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .toolbar span {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        margin: 0 0.8rem;
        cursor: pointer;
    }
    .toolbar span:hover {
        opacity: 0.5;
    }
    .toolbar span.selected {
        color: #ffffff;
    }
    .tablet {
        transform-origin: center;
        transform: rotate(90deg);
    }
</style>