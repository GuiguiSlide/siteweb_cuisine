<script>
</script>

<header
    class="flex justify-start items-center flex-col bg-amber-400 min-w-screen"
>
    <section class="flex flex-row items-center justify-start p-5 gap-[10rem]">
        <a href="/page_insertionstock">
            <button class="buttonheader">your stocks</button></a
        >
        <a href="/page_compte">
            <button class="buttonheader">your account</button></a
        >
        <a href="/page_recettes_enregistrees">
            <button class="buttonheader">your recipes</button></a
        >
        <a href="/page_recettes_enligne">
            <button class="buttonheader">the recipes</button></a
        >
        <a href="/page_feedback">
            <button class="buttonheader">feedback</button></a
        >
    </section>
</header>

<h1 class="pt-25">Welcome to the recipes</h1>
<p>
    here you can find all the recipes that we have in our database, and you can
    add your own recipes to the database.<br /> you can also compare your stocks with
    the recipes to see if you have the ingredients to make them.
    <br />
    you can order the recipes by name, time, and difficulty and most importantly by if you can make them.
</p>

<footer class="flex justify-end items-center pt-20 flex-col">
    <a href="/"><button class="bg-red-200 rounded-4xl p-5 hover:bg-red-400 w-70">back</button></a>
</footer>

<style>
    .buttonheader {
        background-color: lightcoral;
        border-radius: 2rem;
        padding: 1rem;
        margin: 2%;
        width: 10rem;
        text-align: center;
        border: 1px solid;
    }
    .buttonheader:hover {
        background-color: fuchsia;
    }
</style>
