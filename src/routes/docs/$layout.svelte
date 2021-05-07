<script context="module">
    /**
    * @type {import('@sveltejs/kit').Load}
    */
    const files = import.meta.glob('./*.md');
    let body = [];
    for (const path in files) {
        body.push( files[path]().then(({metadata}) => metadata) )
    }
    export async function load({ page, fetch, session, context }) {
        try {
            const response = await Promise.all(body);
            let categories = response.reduce((curr, val) => {
                let group = curr.find(g => g.title === `${val.section}`)
                if (group) {
                    group.navItems.push(val)
                } else {
                    curr.push({ title: `${val.section}`, navItems: [ val ] })
                }
                return curr
            }, [])
            return {
                props: {categories}
            };
        }
        catch (err) {
            console.log('load failed', err);
        }
    };
</script>

<script>
    export let categories;
    export let sections = ['Welcome', 'Components'];
</script>

<nav>
    {#each sections as section}
    <div class="sectionWrap">
        <h4 class="sectionTitle">{section}</h4>
        <ul class="navItems">
            {#each categories as category}
                {#if category.title === section}
                    {#each category.navItems as navItem}
                        <li>
                            <a href="/docs/{navItem.slug}">{navItem.title}</a>
                        </li>
                    {/each}
                {/if}
            {/each}
        </ul>
    </div>
    {/each}
</nav>
<main>
    <slot />
</main>

<style lang="scss">
    nav {
        padding: 1rem;
        color: #ffffff;
        background-color: #000000;
        width: 200px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        a {
            color: #ffffff;
        }
    }
    main {
        margin-left: 200px;
    }
</style>