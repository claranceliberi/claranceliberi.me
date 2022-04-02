<template>
    <div class="h-full flex justify-center">
        <Html lang="en-US">
      <Head>
        <Title> Ntwari Clarance Liberiste </Title>
        <Meta name="description" content="Ntwari Clarance Liberiste's personal website" />
      </Head>
    </Html>
        <div class="h-full w-9/12 flex flex-col justify-between">
            <header>
                <molecules-navbar />
            </header>
            <section>
                <slot />
            </section>
            <footer class="flex py-2 justify-center">
                <atoms-footer class="w-4/6" />
            </footer>
        </div>
    </div>
</template>